import puppeteer from 'puppeteer';

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0', timeout: 10000 }).catch(e => console.log('Goto Error:', e.message));
  
  const content = await page.content();
  console.log('Body length:', content.length);
  if (content.includes('id="root"')) {
    const rootHtml = await page.$eval('#root', el => el.innerHTML);
    console.log('Root HTML length:', rootHtml.length);
  }
  
  await browser.close();
})();
