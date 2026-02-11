import Papa from 'papaparse';
import { MenuData, MenuCategory, MenuItem } from '../types';
import { GoogleSheetCategory, GoogleSheetItem } from './types';

// These IDs should be in environment variables ideally, but for now we can put them here or load them.
// The user needs to publish the sheet and get the ID.
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const CATEGORIES_GID = import.meta.env.VITE_CATEGORIES_GID || '0'; // Default first sheet usually 0
const ITEMS_GID = import.meta.env.VITE_ITEMS_GID;

export const fetchMenuData = async (): Promise<MenuData | null> => {
    if (!SPREADSHEET_ID || !ITEMS_GID) {
        console.warn('Google Sheet ID or GIDs not configured.');
        return null;
    }

    try {
        const [categoriesData, itemsData] = await Promise.all([
            fetchSheetData<GoogleSheetCategory>(SPREADSHEET_ID, CATEGORIES_GID),
            fetchSheetData<GoogleSheetItem>(SPREADSHEET_ID, ITEMS_GID),
        ]);

        return transformToMenuData(categoriesData, itemsData);
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return null;
    }
};

const fetchSheetData = <T>(spreadsheetId: string, gid: string): Promise<T[]> => {
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${gid}`;

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

const transformToMenuData = (
    categories: GoogleSheetCategory[],
    items: GoogleSheetItem[]
): MenuData => {
    // Sort categories by 'orden'
    const sortedCategories = [...categories].sort((a, b) =>
        parseInt(a.orden || '0') - parseInt(b.orden || '0')
    );

    const menu: MenuCategory[] = sortedCategories.map(cat => {
        // Filter items for this category
        const catItems = items.filter(item =>
            item.categoria?.trim().toLowerCase() === cat.nombre?.trim().toLowerCase()
        );

        // Sort items by 'orden'
        const sortedItems = catItems.sort((a, b) =>
            parseInt(a.orden || '0') - parseInt(b.orden || '0')
        );

        return {
            categoria: cat.nombre,
            imagen: cat.imagen,
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
