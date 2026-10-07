const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://janmatbharat.com';
const PUBLIC_DIR = path.join(__dirname, 'public');
const HISTORY_DATA_PATH = path.join(__dirname, 'src', 'data', 'historyData.js');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// 1. Define Static Routes
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/history', changefreq: 'weekly', priority: 0.9 },
  { url: '/how-it-works', changefreq: 'monthly', priority: 0.8 },
  { url: '/evm-security', changefreq: 'monthly', priority: 0.8 },
  { url: '/voter-awareness', changefreq: 'monthly', priority: 0.8 },
  { url: '/upcoming-elections', changefreq: 'weekly', priority: 0.8 },
  { url: '/constituency', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/corrections', changefreq: 'yearly', priority: 0.6 },
  { url: '/data-deletion', changefreq: 'yearly', priority: 0.5 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
];

// 2. Extract Dynamic History Routes
let dynamicRoutes = [];
try {
  const historyDataContent = fs.readFileSync(HISTORY_DATA_PATH, 'utf8');
  // Match all instances of id: "some-id"
  const regex = /id:\s*["']([^"']+)["']/g;
  let match;
  
  while ((match = regex.exec(historyDataContent)) !== null) {
    const termId = match[1];
    dynamicRoutes.push({
      url: '/history/' + termId,
      changefreq: 'monthly',
      priority: 0.6
    });
  }
  
  console.log("Found " + dynamicRoutes.length + " dynamic history routes.");
} catch (error) {
  console.error("Error reading history data for sitemap:", error);
}

// 3. Combine and Generate XML
const allRoutes = [...staticRoutes, ...dynamicRoutes];

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

allRoutes.forEach(route => {
  sitemapXml += '  <url>\n';
  sitemapXml += '    <loc>' + DOMAIN + route.url + '</loc>\n';
  sitemapXml += '    <changefreq>' + route.changefreq + '</changefreq>\n';
  sitemapXml += '    <priority>' + route.priority + '</priority>\n';
  sitemapXml += '  </url>\n';
});

sitemapXml += '</urlset>';

// 4. Write to public/sitemap.xml
fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
console.log("Successfully generated sitemap.xml with " + allRoutes.length + " URLs at " + SITEMAP_PATH);
