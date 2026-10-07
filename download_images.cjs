const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
          // Follow redirect
          https.get(response.headers.location, options, (res) => {
             res.pipe(file);
             file.on('finish', () => {
               file.close(resolve);
             });
          });
      } else {
        reject(`Failed to get '${url}' (${response.statusCode})`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const evmUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Electronic_Voting_Machine_%28EVM%29.jpg/640px-Electronic_Voting_Machine_%28EVM%29.jpg';
const scUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Supreme_Court_of_India_-_01.jpg/640px-Supreme_Court_of_India_-_01.jpg';

async function main() {
  try {
    await download(evmUrl, 'public/assets/images/evm.jpg');
    console.log('EVM image downloaded successfully.');
    await download(scUrl, 'public/assets/images/sc.jpg');
    console.log('SC image downloaded successfully.');
  } catch (err) {
    console.error(err);
  }
}

main();
