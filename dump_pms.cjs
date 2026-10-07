const fs = require('fs');
const data = fs.readFileSync('src/data/historyData.js', 'utf8');
const regex = /id:\s*"(.*?)".*?pm_name_en:\s*"(.*?)"/gs;
let match;
while ((match = regex.exec(data)) !== null) {
  console.log(match[1] + " => " + match[2]);
}
