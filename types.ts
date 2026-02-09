export interface MenuItem {
  nombre: string;
  descripcion?: string; // Optional because drinks might not have descriptions
  precio: number;
}

export interface MenuCategory {
  categoria: string;
  items: MenuItem[];
}

export interface MenuData {
  restaurante: string;
  menu: MenuCategory[];
}