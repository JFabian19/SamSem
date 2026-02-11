export interface GoogleSheetCategory {
    nombre: string;
    orden: string; // CSV numbers come as strings unless parsed
    gid?: string; // Optional: Google Sheet GID for the category tab
}

export interface GoogleSheetItem {
    categoria: string;
    nombre: string;
    descripcion: string;
    precio: string; // CSV numbers come as strings
    orden: string;
}

export interface ParsedMenuData {
    categories: GoogleSheetCategory[];
    items: GoogleSheetItem[];
}
