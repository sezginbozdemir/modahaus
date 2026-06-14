/**
 * generate-products.mjs
 *
 * Walks your products directory and generates src/features/products/data/products.ts
 *
 * Folder structure expected:
 * public/products/
 * └── BrandName/
 * └── 6001/
 * ├── meta.json
 * ├── stock.json
 * ├── 1_MAIN.jpg
 * └── 2.jpg
 *
 * Run:
 * node generate-products.mjs
 */

import fs from "fs";
import path from "path";

// Config
const PRODUCTS_DIR = "./public/products";
const OUTPUT_FILE = "./src/features/products/data/products.ts";
const IMAGE_PUBLIC_PREFIX = "/products";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getImages(folderPath, brand, code) {
  const all = fs
    .readdirSync(folderPath)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort();

  const main = all.find((f) =>
    path.basename(f, path.extname(f)).includes("_MAIN"),
  );
  const rest = all.filter((f) => f !== main);

  const toUrl = (f) => `${IMAGE_PUBLIC_PREFIX}/${brand}/${code}/${f}`;

  return {
    image: main ? toUrl(main) : all[0] ? toUrl(all[0]) : "",
    extraImages: (main ? rest : all.slice(1)).map(toUrl),
  };
}

// Main
const products = [];

// Sets to track all unique taxonomy values
const explicitBrands = new Set();
const allSizes = new Set();
const allColors = new Set();
const allTypes = new Set();

const brands = fs
  .readdirSync(PRODUCTS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const brand of brands) {
  const brandPath = path.join(PRODUCTS_DIR, brand);
  const folders = fs
    .readdirSync(brandPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const code of folders) {
    const folderPath = path.join(brandPath, code);
    const metaPath = path.join(folderPath, "meta.json");
    const stockPath = path.join(folderPath, "stock.json");

    // Skip folders without meta.json
    if (!fs.existsSync(metaPath)) {
      console.warn(`  ⚠ skipped (no meta.json): ${brand}/${code}`);
      continue;
    }

    let meta;
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    } catch (e) {
      console.warn(`  ⚠ skipped (invalid meta.json): ${brand}/${code}`);
      continue;
    }

    // Read stock if available
    let stock = null;
    if (fs.existsSync(stockPath)) {
      try {
        stock = JSON.parse(fs.readFileSync(stockPath, "utf-8")).stock;
      } catch {
        console.warn(`  ⚠ could not read stock.json: ${brand}/${code}`);
      }
    }

    const { image, extraImages } = getImages(folderPath, brand, code);

    // sizes display: first - last e.g. "34 - 39"
    const sizesDisplay =
      meta.sizes.length > 1
        ? `${meta.sizes[0]} - ${meta.sizes[meta.sizes.length - 1]}`
        : (meta.sizes[0] ?? "");

    // Track metadata in Sets
    if (meta.brand) explicitBrands.add(meta.brand.trim());
    if (meta.color) allColors.add(meta.color.trim());
    if (meta.type) allTypes.add(meta.type.trim());
    if (Array.isArray(meta.sizes)) {
      meta.sizes.forEach((size) => allSizes.add(String(size).trim()));
    }

    products.push({
      id: meta.code,
      brand: meta.brand,
      title: meta.title || "",
      description: meta.description || "",
      sizes: sizesDisplay,
      sizeList: meta.sizes,
      unitPrice: meta.price,
      salePrice: meta.sale_price,
      color: meta.color || "",
      type: meta.type || "",
      plusSize: meta.batal,
      stock: stock ?? null,
      image,
      extraImages,
    });

    console.log(
      `  ✅ ${brand} / ${code} — sizes: ${sizesDisplay} — ${image ? "has main img" : "no img"}`,
    );
  }
}

// Convert sets to sorted, cleaned arrays
const uniqueBrands = [...explicitBrands].filter(Boolean).sort();
const SIZE_ORDER = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
];

const uniqueSizes = [...allSizes].filter(Boolean).sort((a, b) => {
  const aIsNum = !isNaN(a);
  const bIsNum = !isNaN(b);

  // Both numeric → sort numerically
  if (aIsNum && bIsNum) return Number(a) - Number(b);

  // Both alphabetic → use custom order, fall back to localeCompare
  if (!aIsNum && !bIsNum) {
    const aIdx = SIZE_ORDER.indexOf(a.toUpperCase());
    const bIdx = SIZE_ORDER.indexOf(b.toUpperCase());
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1; // a is known, b is not → a first
    if (bIdx !== -1) return 1; // b is known, a is not → b first
    return a.localeCompare(b); // neither known → alphabetical
  }

  // Mixed: put numeric sizes before alphabetic (or swap if you prefer)
  return aIsNum ? -1 : 1;
});
const uniqueColors = [...allColors].filter(Boolean).sort();
const uniqueTypes = [...allTypes].filter(Boolean).sort();

// Emit TypeScript
const lines = [
  "// AUTO-GENERATED — do not edit by hand.",
  "// Run: node generate-products.mjs",
  "",
  "export interface Product {",
  "  id: string;",
  "  brand: string;",
  "  title: string;",
  "  description: string;",
  "  sizes: string;",
  "  sizeList: string[];",
  "  unitPrice: number;",
  "  salePrice: number | null;",
  "  color: string;",
  "  type: string;",
  "  plusSize: boolean;",
  "  stock: Record<string, number> | null;",
  "  image: string;",
  "  extraImages: string[];",
  "}",
  "",
  "export const BRANDS: string[] = " + JSON.stringify(uniqueBrands) + ";",
  "export const SIZES: string[] = " + JSON.stringify(uniqueSizes) + ";",
  "export const COLORS: string[] = " + JSON.stringify(uniqueColors) + ";",
  "export const TYPES: string[] = " + JSON.stringify(uniqueTypes) + ";",
  "",
  "export const products: Product[] = " +
    JSON.stringify(products, null, 2) +
    ";",
  "",
];

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf-8");

console.log(`\nGenerated ${products.length} products -> ${OUTPUT_FILE}`);
