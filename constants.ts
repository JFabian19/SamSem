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
      "imagen": "/Sopa.png",
      "items": [
        {
          "nombre": "Sopa Wantan",
          "descripcion": "Delicada sopa con wantanes rellenos de carne jugosa, pollo en trozos tiernos, huevo de codorniz y verduras frescas.",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Woming",
          "descripcion": "Sopa sustanciosa con fideos chinos artesanales, pollo, verduras selectas y huevo de codorniz en un caldo reconfortante.",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Fuchifu",
          "descripcion": "Tradicional sopa con fideos de arroz, trozos de pollo y el toque especial de huevo batido con col china fresca.",
          "precio": 11.00
        },
        {
          "nombre": "Sopa Wantan Especial",
          "descripcion": "La versión suprema: wantanes, langostinos frescos, pollo, chancho asado, huevo de codorniz y verduras.",
          "precio": 14.00
        },
        {
          "nombre": "Sopa Woming Especial",
          "descripcion": "Festín de fideos chinos con langostinos, pollo, chancho asado, huevo de codorniz y verduras crujientes.",
          "precio": 12.00
        }
      ]
    },
    {
      "categoria": "Tallarines",
      "imagen": "/tallarines.png",
      "items": [
        {
          "nombre": "Tallarín Saltado con Pollo",
          "descripcion": "Tallarines salteados al wok con trozos de pollo tierno y verduras frescas en salsa de la casa.",
          "precio": 18.00
        },
        {
          "nombre": "Tallarín Saltado con Chancho",
          "descripcion": "Tallarines con láminas de chancho asado y verduras crocantes, salteados para un sabor ahumado único.",
          "precio": 20.00
        },
        {
          "nombre": "Tallarín Saltado con Pato",
          "descripcion": "Delicioso pato asado salteado con tallarines y verduras en su punto.",
          "precio": 22.00
        },
        {
          "nombre": "Tallarín Saltado con Carne",
          "descripcion": "Trozos de carne de res salteados al fuego alto con tallarines y verduras.",
          "precio": 20.00
        },
        {
          "nombre": "Tallarín Saltado con Langostino",
          "descripcion": "Langostinos frescos salteados con tallarines y verduras, un clásico marinero.",
          "precio": 25.00
        },
        {
          "nombre": "40 x 40 Taipa",
          "descripcion": "Plato contundente con tallarines, pollo, carne, chancho, langostinos y huevo de codorniz en salsa especial.",
          "precio": 35.00
        },
        {
          "nombre": "Saofan Saltado",
          "descripcion": "Fideos de arroz (Saofan) salteados con pollo y verduras, una textura suave y deliciosa.",
          "precio": 25.00
        },
        {
          "nombre": "Tallarín Saltado Sam Sem",
          "descripcion": "Nuestra especialidad: tallarín con pollo, carne, chancho asado, tortilla de huevo y el toque crujiente del Fan sí frito.",
          "precio": 28.00
        }
      ]
    },
    {
      "categoria": "Arroces (Chaufas y Aeropuertos)",
      "imagen": "/aeropuerto.png",
      "items": [
        {
          "nombre": "Chaufa de Pollo",
          "descripcion": "Arroz salteado al wok con trozos de pollo, huevo y cebollita china, con el auténtico sabor ahumado.",
          "precio": 16.00
        },
        {
          "nombre": "Chaufa de Pato",
          "descripcion": "Exquisito arroz chaufa con trozos de pato asado, lleno de sabor.",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa de Chancho",
          "descripcion": "Arroz chaufa con nuestro característico chancho asado dulce y jugoso.",
          "precio": 22.00
        },
        {
          "nombre": "Chaufa Vegetariano",
          "descripcion": "Variedad de verduras frescas salteadas al wok con arroz, ideal para disfrutar sin carne.",
          "precio": 22.00
        },
        {
          "nombre": "Chaufa de Mariscos",
          "descripcion": "Sabor a mar: arroz chaufa salteado con una selección de mariscos frescos.",
          "precio": 28.00
        },
        {
          "nombre": "Chaufa Sam Sem",
          "descripcion": "El chaufa que lo tiene todo: pollo, chancho asado, champiñones y tortilla de huevo.",
          "precio": 25.00
        },
        {
          "nombre": "Chaufa de Carne",
          "descripcion": "Arroz chaufa clásico con trozos de carne de res salteada.",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa Mar y Tierra",
          "descripcion": "Lo mejor de dos mundos: mariscos, pollo y carne salteados en un chaufa espectacular.",
          "precio": 25.00
        },
        {
          "nombre": "Chaufa Tropical",
          "descripcion": "Toque dulce y salado: arroz chaufa con pollo, piña, verduras y plátanos fritos.",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa a la Cubana",
          "descripcion": "Contundente chaufa de pollo acompañado de plátanos fritos dulces y huevo frito montado.",
          "precio": 20.00
        },
        {
          "nombre": "Chaufa con Langostinos",
          "descripcion": "Arroz chaufa salteado con langostinos jugosos y frescos.",
          "precio": 30.00
        },
        {
          "nombre": "Aeropuerto con Pollo",
          "descripcion": "Mezcla perfecta de arroz chaufa, tallarines fritos, verduras y pollo, todo salteado al wok.",
          "precio": 18.00
        },
        {
          "nombre": "Aeropuerto con Chancho",
          "descripcion": "Combinación de arroz chaufa y tallarines crocantes con nuestro chancho asado.",
          "precio": 20.00
        },
        {
          "nombre": "Aeropuerto con Carne",
          "descripcion": "Arroz chaufa y tallarines salteados con trozos de carne y verduras.",
          "precio": 20.00
        },
        {
          "nombre": "Aeropuerto Especial",
          "descripcion": "Aeropuerto completo con pollo, carne, chancho asado y tortilla de huevo. ¡Para compartir!",
          "precio": 26.00
        },
        {
          "nombre": "Aeropuerto a la Cubana",
          "descripcion": "Aeropuerto de pollo servido con plátanos fritos y huevo frito, una explosión de sabor.",
          "precio": 23.00
        }
      ]
    },
    {
      "categoria": "Combinados",
      "imagen": "/combinado.png",
      "items": [
        {
          "nombre": "Combinado con Pollo",
          "descripcion": "Dúo perfecto: Arroz chaufa y tallarín (frito o sancochado) con pollo y verduras.",
          "precio": 20.00
        },
        {
          "nombre": "Combinado con Chancho",
          "descripcion": "Arroz chaufa con tallarín y nuestro chancho asado especial.",
          "precio": 23.00
        },
        {
          "nombre": "Combinado con Carne",
          "descripcion": "Mezcla de chaufa y tallarín con carne de res y verduras.",
          "precio": 25.00
        },
        {
          "nombre": "Combinado con Pato",
          "descripcion": "Combinado servido con generosas porciones de pato asado y verduras.",
          "precio": 25.00
        },
        {
          "nombre": "Combinado Especial",
          "descripcion": "El plato que lo tiene todo: chaufa, tallarín, chancho, pollo, carne y langostinos.",
          "precio": 28.00
        }
      ]
    },
    {
      "categoria": "Platos Dulces",
      "imagen": "/tipakay.png",
      "items": [
        {
          "nombre": "Pollo con Durazno",
          "descripcion": "Pollo crocante bañado en salsa de durazno dulce con verduras seleccionadas.",
          "precio": 22.00
        },
        {
          "nombre": "Pollo con Piña",
          "descripcion": "Clásico agridulce: pollo con trozos de piña en salsa especial.",
          "precio": 21.00
        },
        {
          "nombre": "Pollo Tipakay",
          "descripcion": "Pechuga de pollo crocante en salsa dulce (agridulce de tomate) con wantan y frutas.",
          "precio": 21.00
        },
        {
          "nombre": "Pollo con Tamarindo",
          "descripcion": "Pollo y verduras bañados en nuestra clásica salsa de tamarindo agridulce.",
          "precio": 21.00
        },
        {
          "nombre": "Kamlu Wantan",
          "descripcion": "Plato festivo: wantanes crocantes cubiertos con pollo, chancho, carne, langostinos y verduras en salsa dulce.",
          "precio": 25.00
        },
        {
          "nombre": "Pollo Enrollado con Tamarindo",
          "descripcion": "Pollo enrollado especial servido con verduras y salsa de tamarindo.",
          "precio": 25.00
        },
        {
          "nombre": "Pollo con Piña y Durazno",
          "descripcion": "Dulce combinación de pollo con piña y durazno, una delicia frutal.",
          "precio": 23.00
        },
        {
          "nombre": "Pollo Limonkay",
          "descripcion": "Crujiente pollo empanizado bañado en brillante salsa de limón oriental, servido con verduras.",
          "precio": 23.00
        }
      ]
    },
    {
      "categoria": "Platos Salados",
      "imagen": "/salados.png",
      "items": [
        {
          "nombre": "Pollo con Verduras",
          "descripcion": "Saludable y delicioso: pollo salteado con verduras frescas variadas.",
          "precio": 18.00
        },
        {
          "nombre": "Pollo con Champiñones",
          "descripcion": "Pollo tierno salteado con champiñones frescos y verduras.",
          "precio": 22.00
        },
        {
          "nombre": "Pollo en Salsa de Ostión",
          "descripcion": "Trozos de pollo marinados y bañados en salsa de ostión con verduras.",
          "precio": 20.00
        },
        {
          "nombre": "Pollo con Tausi",
          "descripcion": "Pollo salteado con salsa de tausi (frijol negro fermentado) para un sabor intenso.",
          "precio": 19.00
        },
        {
          "nombre": "Pollo Enrollado en Salsa de Ostión",
          "descripcion": "Elegante pollo enrollado cubierto con salsa de ostión y verduras.",
          "precio": 22.00
        }
      ]
    },
    {
      "categoria": "Chancho Asado",
      "imagen": "/chancho.png",
      "items": [
        {
          "nombre": "Chancho con Tamarindo",
          "descripcion": "Chancho asado bañado en salsa agridulce de tamarindo con verduras.",
          "precio": 22.00
        },
        {
          "nombre": "Chancho con Verduras",
          "descripcion": "Chancho asado salteado con mix de verduras frescas.",
          "precio": 19.00
        },
        {
          "nombre": "Chancho con Nabo",
          "descripcion": "Tradicional combinación de chancho asado con nabo encurtido y verduras.",
          "precio": 20.00
        },
        {
          "nombre": "Chancho con Tausí",
          "descripcion": "Chancho asado salteado en salsa de tausi, sabor oriental clásico.",
          "precio": 20.00
        },
        {
          "nombre": "Chancho Cruyok",
          "descripcion": "Chancho asado crocante con salsa y verduras.",
          "precio": 20.00
        }
      ]
    },
    {
      "categoria": "Pato Asado",
      "imagen": "/pato.png",
      "items": [
        {
          "nombre": "Pato con Verduras",
          "descripcion": "Pato asado jugoso salteado con verduras frescas.",
          "precio": 22.00
        },
        {
          "nombre": "Pato con Champiñones",
          "descripcion": "Lujosa combinación de pato asado y champiñones.",
          "precio": 25.00
        },
        {
          "nombre": "Pato con Orejas Chinas",
          "descripcion": "Pato asado acompañado de orejas chinas (hongo de madera) y verduras.",
          "precio": 23.00
        },
        {
          "nombre": "Pato con Tamarindo",
          "descripcion": "Pato asado bañado en nuestra salsa de tamarindo agridulce.",
          "precio": 25.00
        }
      ]
    },
    {
      "categoria": "Alitas",
      "imagen": "/alitas.png",
      "items": [
        {
          "nombre": "Alitas con Tausi",
          "descripcion": "Alitas fritas crocantes salteadas con salsa de tausi.",
          "precio": 20.00
        },
        {
          "nombre": "Alitas con Tamarindo",
          "descripcion": "Alitas fritas bañadas en salsa de tamarindo con frutas.",
          "precio": 20.00
        },
        {
          "nombre": "Alitas Limonkay",
          "descripcion": "Alitas fritas glaseadas con salsa de limón oriental.",
          "precio": 20.00
        },
        {
          "nombre": "Alitas con Ostión",
          "descripcion": "Alitas salteadas en rica salsa de ostión.",
          "precio": 20.00
        },
        {
          "nombre": "Alitas Teriyaki",
          "descripcion": "Alitas con el toque dulce y salado de la salsa Teriyaki.",
          "precio": 20.00
        },
        {
          "nombre": "Alitas BBQ",
          "descripcion": "Alitas bañadas en salsa BBQ clásica y deliciosa.",
          "precio": 20.00
        }
      ]
    },
    {
      "categoria": "Piqueos",
      "imagen": "/piqueos.png",
      "items": [
        {
          "nombre": "Porción de Wantan",
          "descripcion": "12 wantanes fritos, doraditos y crujientes con salsa de tamarindo.",
          "precio": 15.00
        },
        {
          "nombre": "½ Porción de Wantan",
          "descripcion": "6 unidades de nuestros wantanes clásicos.",
          "precio": 8.00
        },
        {
          "nombre": "Porción de Tequeños",
          "descripcion": "8 tequeños rellenos de jamón y queso, acompañados de salsa guacamole.",
          "precio": 22.00
        }
      ]
    },
    {
      "categoria": "Guarniciones",
      "imagen": "/guarniciones.png",
      "items": [
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
    },
    {
      "categoria": "Bebidas Frias",
      "imagen": "/bebidas_frias.png",
      "items": [
        {
          "nombre": "Gaseosa 1L",
          "descripcion": "Coca Cola / Inca Kola",
          "precio": 8.00
        },
        {
          "nombre": "Gaseosa Gordita",
          "precio": 5.00
        },
        {
          "nombre": "Gaseosa ½ L",
          "descripcion": "Coca Cola / Inca Kola",
          "precio": 4.00
        },
        {
          "nombre": "Gaseosa Personal",
          "descripcion": "Coca Cola / Inca Kola",
          "precio": 3.00
        },
        {
          "nombre": "Gaseosa 1.5 L",
          "precio": 12.00
        },
        {
          "nombre": "Agua Mineral",
          "precio": 3.00
        }
      ]
    },
    {
      "categoria": "Refrescos",
      "imagen": "/REFRESCOS.png",
      "items": [
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
        }
      ]
    },
    {
      "categoria": "Bebidas Calientes",
      "imagen": "/bebidas_calientes.png",
      "items": [
        {
          "nombre": "Te Jazmin",
          "precio": 5.00
        },
        {
          "nombre": "Te Verde",
          "precio": 5.00
        },
        {
          "nombre": "Anis / Manzanilla / Te",
          "precio": 3.00
        },
        {
          "nombre": "Cafe",
          "precio": 4.00
        }
      ]
    }
  ]
};