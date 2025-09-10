import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://nextleapitsolutions.netlify.app";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 }
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: siteUrl });

    pages.forEach((page) => sitemap.write(page));
    sitemap.end();

    const xml = await streamToPromise(sitemap);

    const filePath = path.join(__dirname, "../public/sitemap.xml");
    const writeStream = createWriteStream(filePath);
    writeStream.write(xml.toString());
    writeStream.end();

    console.log("✅ Sitemap generated at public/sitemap.xml");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();
