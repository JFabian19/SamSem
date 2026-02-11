export interface GoogleSheetCategory {
    nombre: string;
    imagen: string;
    orden: string; // CSV numbers come as strings unless parsed
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
