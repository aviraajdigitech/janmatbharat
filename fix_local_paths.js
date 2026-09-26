import fs from 'fs';
import path from 'path';

const historyDataPath = path.join('src', 'data', 'historyData.js');
let content = fs.readFileSync(historyDataPath, 'utf8');

// Replace ALL external Wikipedia URLs with local paths
const replacements = {
  'https://upload.wikimedia.org/wikipedia/commons/5/53/Jawaharlal_Nehru.jpg': '/assets/pms/nehru.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/91/Lal_Bahadur_Shastri_%28cropped%29.jpg': '/assets/pms/shastri.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6f/Indira_Gandhi.jpg': '/assets/pms/indira.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9c/Morarji_Desai.jpg': '/assets/pms/morarji.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f7/Chaudhary_Charan_Singh_%281%29.jpg': '/assets/pms/charan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/67/Rajiv_Gandhi_in_1986.jpg': '/assets/pms/rajiv.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a2/V._P._Singh.jpg': '/assets/pms/vp_singh.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Chandra_Shekhar_in_1990.jpg': '/assets/pms/chandra_shekhar.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/22/P._V._Narasimha_Rao.jpg': '/assets/pms/rao.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/cd/H._D._Deve_Gowda_%28cropped%29.jpg': '/assets/pms/deve_gowda.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/24/Inder_Kumar_Gujral.jpg': '/assets/pms/gujral.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9f/Atal_Bihari_Vajpayee.jpg': '/assets/pms/vajpayee.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/12/Dr._Manmohan_Singh_%283%29.jpg': '/assets/pms/manmohan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/80/Prime_Minister_Narendra_Modi_Official_Portrait.jpg': '/assets/pms/modi.jpg',
};

let count = 0;
for (const [remote, local] of Object.entries(replacements)) {
  const before = content;
  content = content.replaceAll(remote, local);
  if (content !== before) count++;
}

fs.writeFileSync(historyDataPath, content);
console.log(`✅ Updated ${count} image URLs to local paths in historyData.js`);
