const fs = require('fs');
const code = fs.readFileSync('src/data/historyData.js', 'utf8');

const startIndex = code.indexOf('id: "term_19_17th_loksabha_modi2"');
const endIndex = code.indexOf('id: "term_20_18th_loksabha_modi3"');
const block = code.substring(startIndex, endIndex);

const match_en = block.match(/criticisms_en:\s*\[(.*?)\]/s);
const match_hi = block.match(/criticisms_hi:\s*\[(.*?)\]/s);

console.log("EN===", match_en[1]);
console.log("HI===", match_hi[1]);
