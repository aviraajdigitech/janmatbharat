import fs from 'fs';
import path from 'path';
import axios from 'axios';
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
  { name: 'modi.jpg', url: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Shri-Narendra-Modi.jpg' }
];

const destPath = path.join(__dirname, 'public', 'assets', 'pms');

async function downloadImages() {
  for (const pm of pms) {
    try {
      const response = await axios.get(pm.url, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'max-age=0',
          'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"Windows"',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
          'Upgrade-Insecure-Requests': '1'
        }
      });
      fs.writeFileSync(path.join(destPath, pm.name), response.data);
      console.log(`Downloaded ${pm.name} successfully. Size: ${response.data.length}`);
    } catch (error) {
      console.error(`Failed to download ${pm.name}:`, error.message);
    }
  }
}

downloadImages();
