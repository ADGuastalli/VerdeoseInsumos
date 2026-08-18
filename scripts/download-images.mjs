// Descarga a public/images/ todas las fotos de stock que hoy el sitio enlaza desde
// Unsplash/Pexels, para dejar de depender de esos servicios externos.
//
// Uso (una sola vez, desde la carpeta del proyecto):
//   node scripts/download-images.mjs
//
// Requiere Node 18 o superior (ya lo tenés instalado, usa el "fetch" incluido).

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "images");

// nombre de archivo final -> URL de origen (misma resolución que usa el sitio hoy,
// un poco más grande para que Next.js tenga margen al recortar/optimizar)
const IMAGES = {
  "hero-drone.jpg":
    "https://images.pexels.com/photos/34182367/pexels-photo-34182367.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "drones-detalle.jpg":
    "https://images.unsplash.com/photo-1456615913800-c33540eac399?w=1200&q=90&auto=format&fit=crop",
  "drones-campo.jpg":
    "https://images.pexels.com/photos/34182383/pexels-photo-34182383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "insumos.jpg":
    "https://images.unsplash.com/photo-1748119814697-4ab8b4a00903?w=1200&q=90&auto=format&fit=crop",
  "paso1-whatsapp.jpg":
    "https://images.unsplash.com/photo-1752245120001-c5831c2735ef?w=1200&q=90&auto=format&fit=crop",
  "drones-servicio.jpg":
    "https://images.pexels.com/photos/37288742/pexels-photo-37288742.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "hero-visual-trigo.jpg":
    "https://images.unsplash.com/photo-1756512929969-db773ad2a599?w=1200&q=90&auto=format&fit=crop",
  "asesoramiento-campo.jpg":
    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=1200&q=90&auto=format&fit=crop",
  "dji-t100-campo.jpg":
    "https://images.pexels.com/photos/37288738/pexels-photo-37288738.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "paso2-analisis.jpg":
    "https://images.unsplash.com/photo-1626576842773-576a5b58945a?w=1200&q=90&auto=format&fit=crop",
  "paso3-aplicacion.jpg":
    "https://images.pexels.com/photos/34182313/pexels-photo-34182313.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "cultivo-trigo.jpg":
    "https://images.unsplash.com/photo-1437252611977-07f74518abd7?w=1200&q=90&auto=format&fit=crop",
  "cultivo-maiz.jpg":
    "https://images.unsplash.com/photo-1672881898557-cb4aa814c744?w=1200&q=90&auto=format&fit=crop",
  "cultivo-cebolla.jpg":
    "https://images.unsplash.com/photo-1625426478756-17c70db4e7e6?w=1200&q=90&auto=format&fit=crop",
  "cultivo-girasol.jpg":
    "https://images.unsplash.com/photo-1726486896376-4d1340e2f672?w=1200&q=90&auto=format&fit=crop",
  "cultivo-cebada.jpg":
    "https://images.unsplash.com/photo-1719557362652-d68caf96df85?w=1200&q=90&auto=format&fit=crop",
};

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  console.log(`Descargando ${Object.keys(IMAGES).length} imágenes a public/images/ ...\n`);

  let ok = 0;
  let failed = [];

  for (const [filename, url] of Object.entries(IMAGES)) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile(path.join(OUT_DIR, filename), buffer);
      console.log(`✓ ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.error(`✗ ${filename} — ${err.message}`);
      failed.push(filename);
    }
  }

  console.log(`\nListo: ${ok}/${Object.keys(IMAGES).length} imágenes descargadas en public/images/`);
  if (failed.length) {
    console.log(`\nFallaron: ${failed.join(", ")}`);
    console.log("Volvé a correr el script — solo reintenta las que falten, no pisa las que ya bajaron bien.");
  } else {
    console.log("\nSiguiente paso: reemplazá las URLs en el código por las rutas locales (ver instrucciones).");
  }
}

main();
