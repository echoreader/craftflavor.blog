import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://craftflavor.blog";
const POSTS_DIR = path.resolve("posts");
const OUTPUT_PATH = path.resolve("public/sitemap-category.xml");

// ✅ Ambil semua file MDX
const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx"));

// ✅ Kumpulkan kategori dari semua post
const categorySet = new Set();

files.forEach(file => {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(content);

  // ✅ Support BOTH: category (string) and categories (array)
  if (Array.isArray(data.categories)) {
    data.categories.forEach(cat => categorySet.add(cat));
  }

  if (typeof data.category === "string") {
    categorySet.add(data.category);
  }
});

// ✅ Convert Set → Array dan sort ascending
const categories = [...categorySet].sort();

// ✅ Generate XML entries
const today = new Date().toISOString();

const urls = categories.map(cat => {
  const slug = cat.toLowerCase().replace(/\s+/g, "-");

  return `
  <url>
    <loc>${SITE_URL}/category/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>`;
});

// ✅ Final XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

// ✅ Write file
fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-category.xml generated");
