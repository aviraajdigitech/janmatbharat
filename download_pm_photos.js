import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destPath = path.join(__dirname, 'public', 'assets', 'pms');

// Using Wikimedia Commons Special:FilePath API which works without bot-blocking
const pms = [
  { name: 'nehru.jpg',           file: 'Jawaharlal_Nehru.jpg' },
  { name: 'shastri.jpg',         file: 'Lal_Bahadur_Shastri_(cropped).jpg' },
  { name: 'indira.jpg',          file: 'Indira_Gandhi.jpg' },
  { name: 'morarji.jpg',         file: 'Morarji_Desai.jpg' },
  { name: 'charan.jpg',          file: 'Chaudhary_Charan_Singh_(1).jpg' },
  { name: 'rajiv.jpg',           file: 'Rajiv_Gandhi_in_1986.jpg' },
  { name: 'vp_singh.jpg',        file: 'V._P._Singh.jpg' },
  { name: 'chandra_shekhar.jpg', file: 'Chandra_Shekhar_in_1990.jpg' },
  { name: 'rao.jpg',             file: 'P._V._Narasimha_Rao.jpg' },
  { name: 'deve_gowda.jpg',      file: 'H._D._Deve_Gowda_(cropped).jpg' },
  { name: 'gujral.jpg',          file: 'Inder_Kumar_Gujral.jpg' },
  { name: 'vajpayee.jpg',        file: 'Atal_Bihari_Vajpayee.jpg' },
  { name: 'manmohan.jpg',        file: 'Dr._Manmohan_Singh_(3).jpg' },
  { name: 'modi.jpg',            file: 'Prime_Minister_Narendra_Modi_Official_Portrait.jpg' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124',
        'Accept': 'image/*,*/*',
      }
    };

    const req = https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const size = fs.statSync(dest).size;
        if (size < 8000) {
          if (fs.existsSync(dest)) fs.unlinkSync(dest);
          reject(new Error(`Too small: ${size} bytes`));
        } else {
          resolve(size);
        }
      });
    });

    req.on('error', (e) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(e);
    });

    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  console.log('\n📸 Downloading all PM photos via Wikimedia Special:FilePath API...\n');

  for (const pm of pms) {
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${pm.file}?width=400`;
    const dest = path.join(destPath, pm.name);
    try {
      const bytes = await downloadFile(url, dest);
      console.log(`✅  ${pm.name}  —  ${(bytes / 1024).toFixed(1)} KB`);
    } catch (e) {
      console.log(`❌  ${pm.name}  —  ${e.message}`);
    }
  }

  console.log('\n📋 Final files:');
  fs.readdirSync(destPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png')).forEach(f => {
    const s = fs.statSync(path.join(destPath, f)).size;
    const ok = s > 8000 ? '✅' : '❌';
    console.log(`  ${ok} ${f}: ${(s / 1024).toFixed(1)} KB`);
  });
}

main();
