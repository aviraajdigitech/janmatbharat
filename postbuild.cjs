const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const HISTORY_DATA_PATH = path.join(__dirname, 'src', 'data', 'historyData.js');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error("Error: dist/index.html not found! Run vite build first.");
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');

// 1. Create a true SPA 404.html
const notFoundPath = path.join(DIST_DIR, '404.html');
fs.writeFileSync(notFoundPath, baseIndexHtml, 'utf8');
console.log("Created dist/404.html for GitHub Pages fallback.");

// 2. Define route metadata
const routeMetadata = {
  '/terms': {
    title: 'Terms & Conditions | Janmat Bharat',
    description: 'Read the Terms and Conditions for using Janmat Bharat, an independent public opinion polling platform.'
  },
  '/privacy': {
    title: 'Privacy Policy | Janmat Bharat',
    description: 'Read the Privacy Policy for Janmat Bharat. Learn how your data is protected with zero personal identity tracking.'
  },
  '/data-deletion': {
    title: 'Data Deletion Request | Janmat Bharat',
    description: 'Submit a request to permanently delete your Janmat Bharat account and data from our secure systems.'
  },
  '/about': {
    title: 'About Us | Janmat Bharat',
    description: 'Learn about Janmat Bharat, our mission to democratize public opinion polling, and our operator Aviraaj Digitech.'
  },
  '/corrections': {
    title: 'Corrections & Updates Policy | Janmat Bharat',
    description: 'Review our policy and process for submitting and verifying factual corrections on Janmat Bharat.'
  },
  '/press': {
    title: 'Press & Media Kit | Janmat Bharat',
    description: 'Official press assets, logos, and media guidelines for Janmat Bharat by Aviraaj Digitech.'
  },
  '/contact': {
    title: 'Contact Us | Janmat Bharat',
    description: 'Get in touch with the Janmat Bharat team for grievances, inquiries, and support.'
  },
  '/how-it-works': {
    title: 'How Polls Work & Methodology | Janmat Bharat',
    description: 'Discover how Janmat Bharat conducts unbiased, secure, and representative digital public opinion polls.'
  },
  '/evm-security': {
    title: 'EVM Security & Technology | Janmat Bharat',
    description: 'Comprehensive guide to Electronic Voting Machine security, standalone architecture, and VVPAT verification in India.'
  },
  '/voter-awareness': {
    title: 'Voter Awareness Guide | Janmat Bharat',
    description: 'Educational guide on Indian electoral democracy, voter registration, rights, and ethical voting.'
  },
  '/upcoming-elections': {
    title: 'Election Calendar | Janmat Bharat',
    description: 'Track upcoming Assembly and General elections schedule, tenure dates, and electoral trends across India.'
  },
  '/constituency': {
    title: 'Know Your Constituency | Janmat Bharat',
    description: "Explore representative profiles, demographic data, and election history across India's 543 Lok Sabha seats."
  },
  '/history': {
    title: 'Political History & Prime Ministers of India | Janmat Bharat',
    description: "Explore the comprehensive historical archive and timelines of India's Prime Ministers from 1947 to present."
  }
};

function generateHtmlForRoute(urlPath, meta) {
  let html = baseIndexHtml;
  if (meta && meta.title) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
    html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${meta.title}" />`);
  }
  if (meta && meta.description) {
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
    html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${meta.description}" />`);
  }
  if (urlPath) {
    const fullUrl = `https://janmatbharat.com${urlPath}`;
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${fullUrl}" />`);
  }
  return html;
}

// 3. Generate static pages for all standard routes
let count = 0;
for (const [routePath, meta] of Object.entries(routeMetadata)) {
  const routeHtml = generateHtmlForRoute(routePath, meta);
  
  // Folder/index.html (e.g. dist/terms/index.html)
  const dirPath = path.join(DIST_DIR, routePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), routeHtml, 'utf8');

  // File.html (e.g. dist/terms.html)
  fs.writeFileSync(path.join(DIST_DIR, `${routePath}.html`), routeHtml, 'utf8');
  count++;
}

// 4. Extract and generate dynamic history routes
try {
  const historyContent = fs.readFileSync(HISTORY_DATA_PATH, 'utf8');
  const idRegex = /id:\s*["']([^"']+)["']/g;
  let match;
  let dynamicCount = 0;
  
  while ((match = idRegex.exec(historyContent)) !== null) {
    const termId = match[1];
    const routePath = `/history/${termId}`;
    const meta = {
      title: `${termId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - Prime Minister of India | Janmat Bharat`,
      description: `Explore the tenure, key milestones, and political history of Prime Minister ${termId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} on Janmat Bharat.`
    };
    const routeHtml = generateHtmlForRoute(routePath, meta);

    const dirPath = path.join(DIST_DIR, 'history', termId);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, 'index.html'), routeHtml, 'utf8');
    fs.writeFileSync(path.join(DIST_DIR, 'history', `${termId}.html`), routeHtml, 'utf8');
    dynamicCount++;
  }
  console.log(`Generated ${dynamicCount} dynamic history route files.`);
} catch (err) {
  console.warn("Could not process dynamic history routes:", err.message);
}

console.log(`Successfully generated ${count} static routes with dedicated index.html and .html files for GitHub Pages!`);
