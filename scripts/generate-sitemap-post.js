import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://craftflavor.blog";
const POSTS_DIR = path.resolve("posts");
const OUTPUT_PATH = path.resolve("public/sitemap-post.xml");

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx"));

const urls = files.map(file => {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(content);
  const slug = file.replace(/\.mdx$/, "");
  const date = new Date(data.date || new Date().toISOString());

  return {
    slug,
    date,
    xml: `
    <url>
      <loc>${SITE_URL}/${slug}/</loc>
      <lastmod>${date.toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>`
  };
}).sort((a, b) => b.date - a.date); // ✅ sort descending

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => u.xml).join("\n")}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, xml.trim());
console.log("✅ sitemap-post.xml generated in descending order");
