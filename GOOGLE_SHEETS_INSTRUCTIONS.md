# Integración con Google Sheets

Para que la web pueda leer los datos de tu menú desde Google Sheets, sigue estos pasos:

## 1. Crear la Hoja de Cálculo
Crea una nueva hoja de cálculo en Google Sheets.
Necesitarás **2 pestañas** (hojas) en la parte inferior.

### Pestaña 1: Nombre `Categorias`
Columnas (Fila 1):
- **nombre**: El nombre de la categoría (ej: "Sopas", "Tallarines").
- **imagen**: URL de la imagen (ej: `https://imgur.com/foto.jpg`).
- **orden**: Número para ordenar las categorías (1, 2, 3...).

### Pestaña 2: Nombre `Platos`
Columnas (Fila 1):
- **categoria**: Debe coincidir EXACTAMENTE con el nombre en la hoja Categorias.
- **nombre**: Nombre del plato (ej: "Sopa Wantán").
- **descripcion**: Descripción del plato.
- **precio**: Precio (solo números, ej: `15.00`).
- **orden**: Número para ordenar los platos dentro de la categoría.

## 2. Publicar en la Web (IMPORTANTE)
1. Ve a `Archivo` > `Compartir` > `Publicar en la web`.
2. Selecciona "Todo el documento" y formato "Página web" (o CSV, pero "Todo el documento" está bien, el código pide CSV específicamente por hoja).
3. Haz clic en **Publicar**.

## 3. Obtener los IDs (GID)
La URL de tu hoja se ve así:
`https://docs.google.com/spreadsheets/d/TU_ID_DE_HOJA/edit#gid=0`

- **VITE_GOOGLE_SHEET_ID**: Es la parte larga tras `/d/` y antes de `/edit`.
- **VITE_CATEGORIES_GID**: Entra a la pestaña `Categorias`. Mira la URL, al final dice `gid=...`. Ese número es el ID. (Usualmente es `0` si fue la primera).
- **VITE_ITEMS_GID**: Entra a la pestaña `Platos`. Mira el `gid=...`.

## 4. Configurar el Proyecto
Crea un archivo `.env` en la carpeta raíz del proyecto y añade:

```env
VITE_GOOGLE_SHEET_ID=tu_id_de_hoja_aqui
VITE_CATEGORIES_GID=gid_de_categorias
VITE_ITEMS_GID=gid_de_platos
```
Si lo haces localmente, necesitas reiniciar el servidor (`npm run dev`) para que tome los cambios.
