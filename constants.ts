import { MenuData } from './types';

export const COLORS = {
  primaryRed: '#8B0000',
  accentGold: '#FFD700',
  bgDark: '#5e0000', // Darker shade for contrast
  textBlack: '#000000',
  textWhite: '#FFFFFF',
};

export const MENU_DATA: MenuData = {
  "restaurante": "SAM SEM Chifa Rest.",
  "menu": [
    {
      "categoria": "Sopas",
      "items": [
        {
          "nombre": "Sopa Wantan",
          "descripcion": "Wantan + verduras + pollo en trozos + huevo de codorniz",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Woming",
          "descripcion": "Fideos chinos + pollo en trozos + verduras + huevo de codorniz",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Fuchifu",
          "descripcion": "Fideos de arroz + pollo en trozos + huevo batido + col china",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Wantan Especial",
          "descripcion": "Wantan + langostinos + pollo en trozos + chancho + huevo de codorniz + verduras",
          "precio": 14.00
        },
        {
          "nombre": "Sopa Woming Especial",
          "descripcion": "Fideos chinos + pollo en trozos + langostinos + verduras + chancho + huevo de codorniz",
          "precio": 12.00
        }
      ]
    },
    {
      "categoria": "Arroces (Chaufas y Aeropuertos)",
      "items": [
        {
          "nombre": "Chaufa de Pollo",
          "descripcion": "Arroz + pollo en trozos",
          "precio": 16.00
        },
        {
          "nombre": "Chaufa de Pato",
          "descripcion": "Arroz + pato en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa de Chancho",
          "descripcion": "Arroz + chancho en trozos",
          "precio": 22.00
        },
        {
          "nombre": "Chaufa Vegetariano",
          "descripcion": "Arroz + verduras",
          "precio": 22.00
        },
        {
          "nombre": "Chaufa de Mariscos",
          "descripcion": "Arroz + mariscos",
          "precio": 28.00
        },
        {
          "nombre": "Chaufa Sam Sem",
          "descripcion": "Arroz + chancho + pollo + champiñones + tortilla de huevo",
          "precio": 25.00
        },
        {
          "nombre": "Chaufa de Carne",
          "descripcion": "Arroz + carne en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa Mar y Tierra",
          "descripcion": "Arroz + mariscos + pollo + carne",
          "precio": 25.00
        },
        {
          "nombre": "Chaufa Tropical",
          "descripcion": "Arroz + pollo + piña + verduras + plátanos fritos",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa a la Cubana",
          "descripcion": "Arroz + pollo + plátanos + huevo frito",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa con Langostinos",
          "descripcion": "Arroz + langostinos",
          "precio": 30.00
        },
        {
          "nombre": "Aeropuerto cn Pollo",
          "descripcion": "Arroz + verduras + tallarines f/s + pollo en trozos",
          "precio": 18.00
        },
        {
          "nombre": "Aeropuerto cn Chancho",
          "descripcion": "Arroz + verduras + tallarines f/s + chancho en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Aeropuerto cn Carne",
          "descripcion": "Arroz + verduras + tallarines f/s + carne en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Aeropuerto Especial",
          "descripcion": "Arroz + verduras + tallarines f/s + pollo + carne + chancho + tortilla de huevo",
          "precio": 26.00
        },
        {
          "nombre": "Aeropuerto a la Cubana",
          "descripcion": "Arroz + verduras + tallarines f/s + pollo en trozos + plátanos + huevo frito",
          "precio": 23.00
        }
      ]
    },
    {
      "categoria": "Tallarines",
      "items": [
        {
          "nombre": "Tallarín Saltado c/n Pollo",
          "descripcion": "Tallarines + verduras + pollo en trozos",
          "precio": 18.00
        },
        {
          "nombre": "Tallarín Saltado c/n Chancho",
          "descripcion": "Tallarines + verduras + chancho en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Tallarín Saltado c/n Pato",
          "descripcion": "Tallarines + verduras + pato en trozos",
          "precio": 22.00
        },
        {
          "nombre": "Tallarín Saltado cn Carne",
          "descripcion": "Tallarines + verduras + carne en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Tallarín Saltado cn Langostino",
          "descripcion": "Tallarines + verduras + langostinos",
          "precio": 25.00
        },
        {
          "nombre": "40 x 40 Taipa",
          "descripcion": "Tallarines + verduras + pollo + carne + chancho + huevo de codorniz + langostinos",
          "precio": 35.00
        },
        {
          "nombre": "Saofan Saltado",
          "descripcion": "Saofan + verduras + pollo en trozos",
          "precio": 25.00
        },
        {
          "nombre": "Tallarín Saltado Sam Sem",
          "descripcion": "Tallarín + pollo + carne + chancho + tortilla de huevo + Fan sí Frito",
          "precio": 28.00
        }
      ]
    },
    {
      "categoria": "Combinados",
      "items": [
        {
          "nombre": "Combinado cn Pollo",
          "descripcion": "Arroz chaufa + fideos fritos o sancochado + verduras + pollo en trozos",
          "precio": 20.00
        },
        {
          "nombre": "Combinado cn Chancho",
          "descripcion": "Arroz chaufa + fideos fritos o sancochado + verduras + chancho",
          "precio": 23.00
        },
        {
          "nombre": "Combinado cn Carne",
          "descripcion": "Arroz chaufa + fideos fritos o sancochado + verduras + carne",
          "precio": 25.00
        },
        {
          "nombre": "Combinado cn Pato",
          "descripcion": "Arroz chaufa + fideos fritos o sancochado + verduras + pato",
          "precio": 25.00
        },
        {
          "nombre": "Combinado Especial",
          "descripcion": "Arroz chaufa + fideos fritos o sancochado + verduras + chancho + pollo + carne + langostinos",
          "precio": 28.00
        }
      ]
    },
    {
      "categoria": "Platos Salados (Pollo)",
      "items": [
        {
          "nombre": "Pollo cn Verduras",
          "descripcion": "Pollo en trozos + verduras + chaufa o arroz blanco",
          "precio": 18.00
        },
        {
          "nombre": "Pollo cn Champiñones",
          "descripcion": "Pollo en trozos + champiñones + chaufa o arroz blanco",
          "precio": 22.00
        },
        {
          "nombre": "Pollo en Salsa de Ostión",
          "descripcion": "Pollo en trozos bañado en salsa de ostión + verduras + chaufa o arroz blanco",
          "precio": 20.00
        },
        {
          "nombre": "Pollo cn Tausi",
          "descripcion": "Pollo en trozos + verduras + tausi + chaufa o arroz blanco",
          "precio": 19.00
        },
        {
          "nombre": "Pollo Enrollado en Salsa de Ostión",
          "descripcion": "Pollo enrollado bañado en salsa de ostión + verduras + chaufa o arroz blanco",
          "precio": 22.00
        }
      ]
    },
    {
      "categoria": "Platos Dulces (Pollo y Chancho)",
      "items": [
        {
          "nombre": "Chancho cn Tamarindo",
          "descripcion": "Chancho asado en salsa de tamarindo + verduras + chaufa o arroz blanco",
          "precio": 22.00
        },
        {
          "nombre": "Pollo cn Durazno",
          "descripcion": "Pollo empanizado en trozos + durazno + verduras + chaufa",
          "precio": 22.00
        },
        {
          "nombre": "Pollo cn Piña",
          "descripcion": "Pollo + piña en trozos + chaufa",
          "precio": 21.00
        },
        {
          "nombre": "Pollo Tipakay",
          "descripcion": "Chicharrón de pollo + wantan en trozos + piña + durazno + chaufa",
          "precio": 21.00
        },
        {
          "nombre": "Pollo cn Tamarindo",
          "descripcion": "Pollo en salsa de tamarindo + verduras + chaufa",
          "precio": 21.00
        },
        {
          "nombre": "Kamlu Wantan",
          "descripcion": "Wantan + pollo + chancho + carne + huevo de codorniz + chaufa",
          "precio": 25.00
        },
        {
          "nombre": "Pollo Enrollado cn Tamarindo",
          "descripcion": "Pollo enrollado + verduras + chaufa",
          "precio": 25.00
        },
        {
          "nombre": "Pollo cn Piña y Durazno",
          "descripcion": "Pollo + piña + durazno + chaufa",
          "precio": 23.00
        },
        {
          "nombre": "Pollo Limonkay",
          "descripcion": "Pollo empanizado en trozos en salsa de limón oriental + verduras + chaufa",
          "precio": 23.00
        }
      ]
    },
    {
      "categoria": "Platos de Chancho y Pato",
      "items": [
        {
          "nombre": "Chancho cn Verduras",
          "descripcion": "Chancho asado + verduras + chaufa o arroz blanco",
          "precio": 19.00
        },
        {
          "nombre": "Chancho cn Nabo",
          "descripcion": "Chancho asado + nabo + verduras + chaufa o arroz blanco",
          "precio": 20.00
        },
        {
          "nombre": "Chancho cn Tausí",
          "descripcion": "Chancho asado + verduras + tausi + chaufa o arroz blanco",
          "precio": 20.00
        },
        {
          "nombre": "Chancho Cruyok",
          "descripcion": "Chancho asado + verduras + chaufa o arroz blanco",
          "precio": 20.00
        },
        {
          "nombre": "Pato cn Verduras",
          "descripcion": "Pato asado + verduras + chaufa o arroz blanco",
          "precio": 22.00
        },
        {
          "nombre": "Pato cn Champiñones",
          "descripcion": "Pato asado + verduras + champiñones + chaufa o arroz blanco",
          "precio": 25.00
        },
        {
          "nombre": "Pato cn Orejas Chinas",
          "descripcion": "Pato asado + orejas chinas + verduras + chaufa o arroz blanco",
          "precio": 23.00
        },
        {
          "nombre": "Pato cn Tamarindo",
          "descripcion": "Pato asado en salsa de tamarindo + verduras + chaufa o arroz blanco",
          "precio": 25.00
        }
      ]
    },
    {
      "categoria": "Alitas y Piqueos",
      "items": [
        {
          "nombre": "Alitas cn Tausi",
          "descripcion": "8 Pz alitas fritas + tausi + verduras + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Alitas cn Tamarindo",
          "descripcion": "8 Pz alitas fritas en salsa de tamarindo + piña + durazno + verduras + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Alitas Limonkay",
          "descripcion": "8 Pz alitas fritas en salsa de limón oriental + verduras + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Alitas cn Ostión",
          "descripcion": "8 Pz alitas fritas en salsa de ostión + verduras + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Alitas Teriyaki",
          "descripcion": "8 Pz alitas fritas en salsa Teriyaki + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Alitas BBQ",
          "descripcion": "8 Pz alitas fritas en salsa BBQ + chaufa",
          "precio": 20.00
        },
        {
          "nombre": "Porción de Wantan",
          "descripcion": "12 wantanes con relleno + salsa de tamarindo",
          "precio": 15.00
        },
        {
          "nombre": "1/2 Porción de Wantan",
          "descripcion": "6 wantanes con relleno + salsa de tamarindo",
          "precio": 8.00
        },
        {
          "nombre": "Porción de Tequeños",
          "descripcion": "8 tequeños rellenos de jamón y queso + salsa de guacamole",
          "precio": 22.00
        }
      ]
    },
    {
      "categoria": "Bebidas y Guarniciones",
      "items": [
        {
          "nombre": "Gaseosa 1L",
          "precio": 8.00
        },
        {
          "nombre": "Gaseosa Gordita",
          "precio": 5.00
        },
        {
          "nombre": "Gaseosa 1/2 L",
          "precio": 4.00
        },
        {
          "nombre": "Gaseosa Personal",
          "precio": 3.00
        },
        {
          "nombre": "Gaseosa 1.5 L",
          "precio": 12.00
        },
        {
          "nombre": "Agua Mineral",
          "precio": 3.00
        },
        {
          "nombre": "Limonada Frozen 1L",
          "precio": 18.00
        },
        {
          "nombre": "Maracuyá 1L",
          "precio": 20.00
        },
        {
          "nombre": "Limonada Pink 1L",
          "precio": 20.00
        },
        {
          "nombre": "Chicha Morada 1L",
          "precio": 20.00
        },
        {
          "nombre": "Plátanos Fritos",
          "precio": 3.00
        },
        {
          "nombre": "Porción Arroz Blanco",
          "precio": 4.00
        },
        {
          "nombre": "Porción de Arroz Chaufa",
          "precio": 6.00
        },
        {
          "nombre": "Huevo Frito",
          "precio": 2.00
        },
        {
          "nombre": "Tortilla de Huevo",
          "precio": 2.00
        },
        {
          "nombre": "Porción de Tallarines Fritos",
          "precio": 5.00
        },
        {
          "nombre": "Porción de Tallarines Sancochados",
          "precio": 5.00
        },
        {
          "nombre": "Encurtido de Nabo",
          "precio": 8.00
        }
      ]
    }
  ]
};