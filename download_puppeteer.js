import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pms = [
  { name: 'nehru.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Jawaharlal-Nehru.jpg' },
  { name: 'shastri.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Lal-Bahadur-Shastri.jpg' },
  { name: 'indira.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Smt.-Indira-Gandhi.jpg' },
  { name: 'morarji.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Morarji-Desai.jpg' },
  { name: 'charan.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Charan-Singh.jpg' },
  { name: 'rajiv.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Rajiv-Gandhi.jpg' },
  { name: 'vp_singh.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Vishwanath-Pratap-Singh.jpg' },
  { name: 'chandra_shekhar.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Chandra-Shekhar.jpg' },
  { name: 'rao.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-P.-V.-Narasimha-Rao.jpg' },
  { name: 'deve_gowda.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-H.-D.-Deve-Gowda.jpg' },
  { name: 'gujral.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Inder-Kumar-Gujral.jpg' },
  { name: 'vajpayee.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Atal-Bihari-Vajpayee.jpg' },
  { name: 'manmohan.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Dr.-Manmohan-Singh.jpg' },
  { name: 'modi.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Narendra-Modi.jpg' },
  { name: 'majestic_flag.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png' }
];

const destPath = path.join(__dirname, 'public', 'assets', 'pms');

async function downloadImages() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Spoof user agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  for (const pm of pms) {
    try {
      console.log(`Fetching ${pm.name}...`);
      const viewSource = await page.goto(pm.url, { waitUntil: 'networkidle2' });
      if (viewSource.ok()) {
        const buffer = await viewSource.buffer();
        // verify it's an image (JPG starts with FF D8)
        fs.writeFileSync(path.join(destPath, pm.name), buffer);
        console.log(`Downloaded ${pm.name} successfully. (${buffer.length} bytes)`);
      } else {
        console.log(`Failed ${pm.name} - Status: ${viewSource.status()}`);
      }
    } catch (error) {
      console.error(`Failed to download ${pm.name}:`, error.message);
    }
  }
  
  await browser.close();
}

downloadImages();
