import Papa from 'papaparse';
import { MenuData, MenuCategory, MenuItem } from '../types';
import { GoogleSheetCategory, GoogleSheetItem } from './types';

// These IDs should be in environment variables ideally, but for now we can put them here or load them.
// The user needs to publish the sheet and get the ID.
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const CATEGORIES_GID = import.meta.env.VITE_CATEGORIES_GID || '0'; // Default first sheet usually 0
const ITEMS_GID = import.meta.env.VITE_ITEMS_GID;

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

export const fetchMenuData = async (): Promise<MenuData | null> => {
    if (!SPREADSHEET_ID) {
        console.warn('Google Sheet ID not configured.');
        return null;
    }

    try {
        // 1. Fetch Categories first
        const categoriesData = await fetchSheetData<GoogleSheetCategory>(SPREADSHEET_ID, CATEGORIES_GID);

        // 2. Check if we have GIDs in the categories specific sheets
        // We look for a 'gid' property in the rows.
        const hasPerCategorySheets = categoriesData.some(cat => cat.gid && cat.gid.trim() !== '');

        if (hasPerCategorySheets) {
            // Fetch each category's sheet
            const categoriesWithItems = await Promise.all(categoriesData.map(async (cat) => {
                let items: GoogleSheetItem[] = [];
                if (cat.gid) {
                    try {
                        items = await fetchSheetData<GoogleSheetItem>(SPREADSHEET_ID, cat.gid);
                    } catch (e) {
                        console.error(`Failed to fetch items for category ${cat.nombre} (GID: ${cat.gid})`, e);
                    }
                }
                return { ...cat, items };
            }));

            return transformToMenuDataMultiSheet(categoriesWithItems);

        } else {
            // Fallback to original single sheet method
            if (!ITEMS_GID) {
                console.warn('Items GID not configured and no per-category GIDs found.');
                return null;
            }
            const itemsData = await fetchSheetData<GoogleSheetItem>(SPREADSHEET_ID, ITEMS_GID);
            return transformToMenuDataSingleSheet(categoriesData, itemsData);
        }

    } catch (error) {
        console.error('Error fetching menu data:', error);
        return null;
    }
};

const fetchSheetData = <T>(spreadsheetId: string, gid: string): Promise<T[]> => {
    const url = `https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pub?gid=${gid}&single=true&output=csv&t=${new Date().getTime()}`;

    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data as T[]);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

// Transform data when we have fetched items per category (Multi Sheet)
const transformToMenuDataMultiSheet = (
    categoriesWithItems: (GoogleSheetCategory & { items: GoogleSheetItem[] })[]
): MenuData => {

    // Sort categories
    const sortedCategories = [...categoriesWithItems].sort((a, b) =>
        parseInt(a.orden || '0') - parseInt(b.orden || '0')
    );

    const menu: MenuCategory[] = sortedCategories.map(cat => {
        // Sort items per category
        const sortedItems = cat.items.sort((a, b) =>
            parseInt(a.orden || '0') - parseInt(b.orden || '0')
        );

        return {
            categoria: cat.nombre,
            imagen: Object.entries(CATEGORY_IMAGES).find(([key]) => key.toLowerCase() === cat.nombre?.trim().toLowerCase())?.[1],
            items: sortedItems.map(item => ({
                nombre: item.nombre,
                descripcion: item.descripcion,
                precio: parseFloat(item.precio || '0'),
            })),
        };
    });

    return {
        restaurante: "Restaurante",
        menu
    };
};

// Transform data when we have one big items sheet (Single Sheet - Legacy/Fallback)
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

        const sortedItems = catItems.sort((a, b) =>
            parseInt(a.orden || '0') - parseInt(b.orden || '0')
        );

        return {
            categoria: cat.nombre,
            imagen: Object.entries(CATEGORY_IMAGES).find(([key]) => key.toLowerCase() === cat.nombre?.trim().toLowerCase())?.[1],
            items: sortedItems.map(item => ({
                nombre: item.nombre,
                descripcion: item.descripcion,
                precio: parseFloat(item.precio || '0'),
            })),
        };
    });

    return {
        restaurante: "Restaurante", // Can also be fetched if needed
        menu,
    };
};
