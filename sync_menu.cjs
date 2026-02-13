/**
 * sync_menu.cjs
 * 
 * Descarga los datos del Google Sheet y actualiza constants.ts
 * con la información más reciente del menú.
 * 
 * Uso:  node sync_menu.cjs
 * 
 * Requisito: El archivo .env debe tener VITE_GOOGLE_SHEET_ID y VITE_CATEGORIES_GID
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// ─── Leer .env ───────────────────────────────────────────────────────
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    if (!fs.existsSync(envPath)) {
        console.error('❌ No se encontró el archivo .env');
        process.exit(1);
    }
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const env = {};
    envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex === -1) return;
        const key = trimmed.substring(0, eqIndex).trim();
        const value = trimmed.substring(eqIndex + 1).trim();
        env[key] = value;
    });
    return env;
}

// ─── Descargar CSV desde Google Sheets ───────────────────────────────
function fetchCSV(spreadsheetId, gid) {
    const isPublished = spreadsheetId.startsWith('2PACX-');
    const fragment = isPublished ? `d/e/${spreadsheetId}` : `d/${spreadsheetId}`;
    const url = `https://docs.google.com/spreadsheets/${fragment}/pub?gid=${gid}&single=true&output=csv`;

    return new Promise((resolve, reject) => {
        const request = https.get(url, { timeout: 15000 }, (res) => {
            // Handle redirects (Google Sheets does 307 redirects)
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, { timeout: 15000 }, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => resolve(data));
                    res2.on('error', reject);
                }).on('error', reject);
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
        request.on('error', reject);
        request.on('timeout', () => {
            request.destroy();
            reject(new Error(`Timeout descargando GID ${gid}`));
        });
    });
}

// ─── Parsear CSV simple ──────────────────────────────────────────────
function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(l => l.trim());
    if (lines.length < 2) return [];

    const headers = parseCSVLine(lines[0]);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        const row = {};
        headers.forEach((h, idx) => {
            row[h.trim().toLowerCase()] = (values[idx] || '').trim();
        });
        rows.push(row);
    }
    return rows;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current);
    return result;
}

// ─── Mapa de imágenes por categoría ──────────────────────────────────
const CATEGORY_IMAGES = {
    "sopas": "/Sopa.png",
    "tallarines": "/tallarines.png",
    "arroces (chaufas y aeropuertos)": "/aeropuerto.png",
    "combinados": "/combinado.png",
    "platos dulces": "/tipakay.png",
    "platos salados": "/salados.png",
    "chancho asado": "/chancho.png",
    "pato asado": "/pato.png",
    "alitas": "/alitas.png",
    "piqueos": "/piqueos.png",
    "guarniciones": "/guarniciones.png",
    "bebidas frias": "/bebidas_frias.png",
    "refrescos": "/REFRESCOS.png",
    "bebidas calientes": "/bebidas_calientes.png"
};

// ─── Generar constants.ts ────────────────────────────────────────────
function generateConstantsTS(menuCategories) {
    const indent = '  ';
    let output = `import { MenuData } from './types';

export const COLORS = {
  primaryRed: '#8B0000',
  accentGold: '#FFD700',
  bgDark: '#5e0000', // Darker shade for contrast
  textBlack: '#000000',
  textWhite: '#FFFFFF',
};

export const MENU_DATA: MenuData = {
  "restaurante": "SAM SEM Chifa Rest.",
  "menu": [\n`;

    menuCategories.forEach((cat, catIdx) => {
        const imagen = CATEGORY_IMAGES[cat.nombre.toLowerCase()] || '';
        output += `${indent}${indent}{\n`;
        output += `${indent}${indent}${indent}"categoria": ${JSON.stringify(cat.nombre)},\n`;
        if (imagen) {
            output += `${indent}${indent}${indent}"imagen": ${JSON.stringify(imagen)},\n`;
        }
        output += `${indent}${indent}${indent}"items": [\n`;

        cat.items.forEach((item, itemIdx) => {
            output += `${indent}${indent}${indent}${indent}{\n`;
            output += `${indent}${indent}${indent}${indent}${indent}"nombre": ${JSON.stringify(item.nombre)}`;
            if (item.descripcion) {
                output += `,\n${indent}${indent}${indent}${indent}${indent}"descripcion": ${JSON.stringify(item.descripcion)}`;
            }
            output += `,\n${indent}${indent}${indent}${indent}${indent}"precio": ${item.precio}\n`;
            output += `${indent}${indent}${indent}${indent}}`;
            if (itemIdx < cat.items.length - 1) output += ',';
            output += '\n';
        });

        output += `${indent}${indent}${indent}]\n`;
        output += `${indent}${indent}}`;
        if (catIdx < menuCategories.length - 1) output += ',';
        output += '\n';
    });

    output += `${indent}]\n};\n`;
    return output;
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
    console.log('🔄 Sincronizando menú desde Google Sheets...\n');

    const env = loadEnv();
    const sheetId = env.VITE_GOOGLE_SHEET_ID;
    const catGid = env.VITE_CATEGORIES_GID || '0';
    const itemsGid = env.VITE_ITEMS_GID || '';

    if (!sheetId) {
        console.error('❌ VITE_GOOGLE_SHEET_ID no está definido en .env');
        process.exit(1);
    }

    try {
        // 1. Descargar categorías
        console.log('📋 Descargando categorías...');
        const catCSV = await fetchCSV(sheetId, catGid);
        const categories = parseCSV(catCSV);

        if (categories.length === 0) {
            console.error('❌ No se encontraron categorías en el Sheet');
            process.exit(1);
        }

        // Ordenar categorías
        categories.sort((a, b) => parseInt(a.orden || '0') - parseInt(b.orden || '0'));
        console.log(`   ✅ ${categories.length} categorías encontradas`);

        // 2. Determinar modo: multi-tab o single sheet
        const hasGids = categories.some(c => c.gid && c.gid.trim());

        let menuCategories = [];

        if (hasGids) {
            console.log('📑 Modo multi-pestaña detectado. Descargando cada categoría...\n');

            for (const cat of categories) {
                const gid = (cat.gid || '').trim();
                const catName = cat.nombre || 'Sin nombre';

                if (!gid) {
                    console.log(`   ⚠️  "${catName}" no tiene GID, se omite`);
                    menuCategories.push({ nombre: catName, items: [] });
                    continue;
                }

                try {
                    console.log(`   📥 Descargando "${catName}" (GID: ${gid})...`);
                    const itemsCSV = await fetchCSV(sheetId, gid);
                    const items = parseCSV(itemsCSV);
                    items.sort((a, b) => parseInt(a.orden || '0') - parseInt(b.orden || '0'));

                    const formattedItems = items.map(item => ({
                        nombre: item.nombre || '',
                        descripcion: item.descripcion || '',
                        precio: parseFloat(item.precio || '0'),
                    }));

                    console.log(`   ✅ ${formattedItems.length} platos en "${catName}"`);
                    menuCategories.push({ nombre: catName, items: formattedItems });
                } catch (err) {
                    console.error(`   ❌ Error descargando "${catName}": ${err.message}`);
                    menuCategories.push({ nombre: catName, items: [] });
                }
            }
        } else {
            // Single sheet mode
            if (!itemsGid) {
                console.error('❌ No hay GIDs por categoría ni VITE_ITEMS_GID definido');
                process.exit(1);
            }

            console.log('📥 Modo hoja única. Descargando todos los platos...');
            const itemsCSV = await fetchCSV(sheetId, itemsGid);
            const allItems = parseCSV(itemsCSV);
            console.log(`   ✅ ${allItems.length} platos encontrados`);

            for (const cat of categories) {
                const catName = cat.nombre || 'Sin nombre';
                const catItems = allItems
                    .filter(i => (i.categoria || '').trim().toLowerCase() === catName.trim().toLowerCase())
                    .sort((a, b) => parseInt(a.orden || '0') - parseInt(b.orden || '0'))
                    .map(item => ({
                        nombre: item.nombre || '',
                        descripcion: item.descripcion || '',
                        precio: parseFloat(item.precio || '0'),
                    }));

                menuCategories.push({ nombre: catName, items: catItems });
            }
        }

        // 3. Generar constants.ts
        console.log('\n📝 Generando constants.ts...');
        const tsContent = generateConstantsTS(menuCategories);
        const outputPath = path.join(__dirname, 'constants.ts');
        fs.writeFileSync(outputPath, tsContent, 'utf-8');

        // 4. Resumen
        const totalItems = menuCategories.reduce((sum, c) => sum + c.items.length, 0);
        console.log(`\n✅ ¡Sincronización completa!`);
        console.log(`   📂 ${menuCategories.length} categorías`);
        console.log(`   🍽️  ${totalItems} platos`);
        console.log(`   📄 Archivo actualizado: constants.ts`);
        console.log(`\n💡 Ahora puedes hacer deploy o correr "npm run dev" con los datos actualizados.`);

    } catch (err) {
        console.error(`\n❌ Error: ${err.message}`);
        process.exit(1);
    }
}

main();
