import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pms = [
  { name: 'nehru.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Jawaharlal_Nehru.jpg/400px-Jawaharlal_Nehru.jpg' },
  { name: 'shastri.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lal_Bahadur_Shastri_%28cropped%29.jpg/400px-Lal_Bahadur_Shastri_%28cropped%29.jpg' },
  { name: 'indira.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Indira_Gandhi.jpg/400px-Indira_Gandhi.jpg' },
  { name: 'morarji.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Morarji_Desai.jpg/400px-Morarji_Desai.jpg' },
  { name: 'charan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chaudhary_Charan_Singh_%281%29.jpg/400px-Chaudhary_Charan_Singh_%281%29.jpg' },
  { name: 'rajiv.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rajiv_Gandhi_in_1986.jpg/400px-Rajiv_Gandhi_in_1986.jpg' },
  { name: 'vp_singh.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/V._P._Singh.jpg/400px-V._P._Singh.jpg' },
  { name: 'chandra_shekhar.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Chandra_Shekhar_in_1990.jpg/400px-Chandra_Shekhar_in_1990.jpg' },
  { name: 'rao.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/P._V._Narasimha_Rao.jpg/400px-P._V._Narasimha_Rao.jpg' },
  { name: 'deve_gowda.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/H._D._Deve_Gowda_%28cropped%29.jpg/400px-H._D._Deve_Gowda_%28cropped%29.jpg' },
  { name: 'gujral.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Inder_Kumar_Gujral.jpg/400px-Inder_Kumar_Gujral.jpg' },
  { name: 'vajpayee.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Atal_Bihari_Vajpayee.jpg/400px-Atal_Bihari_Vajpayee.jpg' },
  { name: 'manmohan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dr._Manmohan_Singh_%283%29.jpg/400px-Dr._Manmohan_Singh_%283%29.jpg' },
  { name: 'modi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Prime_Minister_Narendra_Modi_Official_Portrait.jpg/400px-Prime_Minister_Narendra_Modi_Official_Portrait.jpg' },
  { name: 'majestic_flag.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png' }
];

const destPath = path.join(__dirname, 'public', 'assets', 'pms');

async function downloadImages() {
  for (const pm of pms) {
    try {
      const response = await axios.get(pm.url, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      fs.writeFileSync(path.join(destPath, pm.name), response.data);
      console.log(`Downloaded ${pm.name}`);
    } catch (error) {
      console.error(`Failed to download ${pm.name}:`, error.message);
    }
  }
}

downloadImages();
