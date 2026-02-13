/// <reference types="vite/client" />
import Papa from 'papaparse';
import { MenuData, MenuCategory, MenuItem } from '../types';
import { GoogleSheetCategory, GoogleSheetItem } from './types';

// Environment-only configuration — no hardcoded fallbacks
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || '';
const CATEGORIES_GID = import.meta.env.VITE_CATEGORIES_GID || '0';
const ITEMS_GID = import.meta.env.VITE_ITEMS_GID || '';

// Cache configuration
const CACHE_KEY = 'samsem_menu_cache';
const CACHE_TIMESTAMP_KEY = 'samsem_menu_cache_ts';
const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes

// Timeout for network requests (ms)
const FETCH_TIMEOUT_MS = 8000;

const CATEGORY_IMAGES: Record<string, string> = {
    "Sopas": "/Sopa.png",
    "Tallarines": "/tallarines.png",
    "Arroces (Chaufas y Aeropuertos)": "/aeropuerto.png",
    "Combinados": "/combinado.png",
    "Platos Dulces": "/tipakay.png",
    "Platos Salados": "/salados.png",
    "Chancho Asado": "/chancho.png",
    "Pato Asado": "/pato.png",
    "Alitas": "/alitas.png",
    "Piqueos": "/piqueos.png",
    "Guarniciones": "/guarniciones.png",
    "Bebidas Frias": "/bebidas_frias.png",
    "Refrescos": "/REFRESCOS.png",
    "Bebidas Calientes": "/bebidas_calientes.png"
};

/**
 * Retrieves cached menu data from localStorage.
 * Returns { data, isStale } where isStale indicates the cache has expired.
 */
const getCachedData = (): { data: MenuData | null; isStale: boolean } => {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        const ts = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        if (!raw || !ts) return { data: null, isStale: true };

        const data = JSON.parse(raw) as MenuData;
        const age = Date.now() - parseInt(ts, 10);
        return { data, isStale: age > CACHE_DURATION_MS };
    } catch {
        return { data: null, isStale: true };
    }
};

/**
 * Persists menu data in localStorage.
 */
const setCachedData = (data: MenuData): void => {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch {
        // Storage full or unavailable — silently ignore
    }
};

/**
 * Primary entry point.
 * Strategy: return cached data instantly (if available) so the page
 * renders immediately, then ALWAYS fetch fresh data from Google Sheets
 * in the background. When the fresh data arrives the UI updates seamlessly.
 *
 * This guarantees that any change made in the Sheet is visible within
 * seconds of opening the page, without any slow loading screen.
 */
export const fetchMenuData = async (
    onBackgroundUpdate?: (data: MenuData) => void
): Promise<MenuData | null> => {
    const { data: cached } = getCachedData();

    // Always fetch fresh data in the background
    fetchFromNetwork().then(fresh => {
        if (fresh) {
            setCachedData(fresh);
            if (onBackgroundUpdate) {
                onBackgroundUpdate(fresh);
            }
        }
    }).catch(() => { /* network failed — cached/static data stays */ });

    // Return cached data immediately (or null, App.tsx uses MENU_DATA as fallback)
    return cached;
};

/**
 * Fetches menu data from Google Sheets over the network.
 */
const fetchFromNetwork = async (): Promise<MenuData | null> => {
    if (!SPREADSHEET_ID) {
        console.warn('[SamSem] Google Sheet ID not configured.');
        return null;
    }

    try {
        // 1. Fetch Categories
        const categoriesData = await fetchSheetData<GoogleSheetCategory>(SPREADSHEET_ID, CATEGORIES_GID);

        // 2. Determine fetch mode
        const hasPerCategorySheets = categoriesData.some(cat => cat.gid && cat.gid.trim() !== '');

        if (hasPerCategorySheets) {
            // Fetch ALL category sheets concurrently
            const categoriesWithItems = await Promise.all(
                categoriesData.map(async (cat) => {
                    const gid = cat.gid ? cat.gid.trim() : '';
                    if (!gid) return { ...cat, items: [] as GoogleSheetItem[] };

                    try {
                        const items = await fetchSheetData<GoogleSheetItem>(SPREADSHEET_ID, gid);
                        return { ...cat, items };
                    } catch {
                        console.warn(`[SamSem] Failed to load items for "${cat.nombre}"`);
                        return { ...cat, items: [] as GoogleSheetItem[] };
                    }
                })
            );
            return transformToMenuDataMultiSheet(categoriesWithItems);
        } else {
            if (!ITEMS_GID) {
                console.warn('[SamSem] Items GID not configured and no per-category GIDs found.');
                return null;
            }
            const itemsData = await fetchSheetData<GoogleSheetItem>(SPREADSHEET_ID, ITEMS_GID);
            return transformToMenuDataSingleSheet(categoriesData, itemsData);
        }
    } catch (error) {
        console.error('[SamSem] Error fetching menu data:', error);
        return null;
    }
};

/**
 * Fetches and parses a single CSV sheet from Google Sheets.
 * Includes a timeout to avoid hanging on slow responses.
 */
const fetchSheetData = <T>(spreadsheetId: string, gid: string): Promise<T[]> => {
    const isPublishedId = spreadsheetId.startsWith('2PACX-');
    const baseUrlFragment = isPublishedId ? `d/e/${spreadsheetId}` : `d/${spreadsheetId}`;
    const url = `https://docs.google.com/spreadsheets/${baseUrlFragment}/pub?gid=${gid}&single=true&output=csv`;

    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error(`Timeout fetching sheet gid=${gid}`));
        }, FETCH_TIMEOUT_MS);

        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                clearTimeout(timer);
                resolve(results.data as T[]);
            },
            error: (error) => {
                clearTimeout(timer);
                reject(error);
            },
        });
    });
};

// ─── Data Transformers ───────────────────────────────────────────────

const transformToMenuDataMultiSheet = (
    categoriesWithItems: (GoogleSheetCategory & { items: GoogleSheetItem[] })[]
): MenuData => {
    const sortedCategories = [...categoriesWithItems].sort((a, b) =>
        parseInt(a.orden || '0') - parseInt(b.orden || '0')
    );

    const menu: MenuCategory[] = sortedCategories.map(cat => {
        const sortedItems = [...cat.items].sort((a, b) =>
            parseInt(a.orden || '0') - parseInt(b.orden || '0')
        );

        return {
            categoria: cat.nombre,
            imagen: Object.entries(CATEGORY_IMAGES).find(
                ([key]) => key.toLowerCase() === cat.nombre?.trim().toLowerCase()
            )?.[1],
            items: sortedItems.map(item => ({
                nombre: item.nombre,
                descripcion: item.descripcion,
                precio: parseFloat(item.precio || '0'),
            })),
        };
    });

    return { restaurante: "Restaurante", menu };
};

const transformToMenuDataSingleSheet = (
    categories: GoogleSheetCategory[],
    items: GoogleSheetItem[]
): MenuData => {
    const sortedCategories = [...categories].sort((a, b) =>
        parseInt(a.orden || '0') - parseInt(b.orden || '0')
    );

    const menu: MenuCategory[] = sortedCategories.map(cat => {
        const catItems = items.filter(item =>
            item.categoria?.trim().toLowerCase() === cat.nombre?.trim().toLowerCase()
        );
        const sortedItems = [...catItems].sort((a, b) =>
            parseInt(a.orden || '0') - parseInt(b.orden || '0')
        );

        return {
            categoria: cat.nombre,
            imagen: Object.entries(CATEGORY_IMAGES).find(
                ([key]) => key.toLowerCase() === cat.nombre?.trim().toLowerCase()
            )?.[1],
            items: sortedItems.map(item => ({
                nombre: item.nombre,
                descripcion: item.descripcion,
                precio: parseFloat(item.precio || '0'),
            })),
        };
    });

    return { restaurante: "Restaurante", menu };
};
