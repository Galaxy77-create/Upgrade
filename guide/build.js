const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(__dirname, 'index.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  await p.pdf({ path: path.resolve(__dirname, '..', 'UpGrade-Guide.pdf'), preferCSSPageSize: true, printBackground: true });
  await b.close();
})();
