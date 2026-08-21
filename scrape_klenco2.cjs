const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function downloadImage(imgUrl, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) { console.log(`Skipping existing: ${destPath}`); resolve(destPath); return; }
    const parsed = new URL(imgUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    const req = client.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(destPath, () => {});
        downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) { file.close(); fs.unlink(destPath, () => {}); reject(new Error(`Status ${res.statusCode}`)); return; }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
    });
    req.on('error', (e) => { fs.unlink(destPath, () => {}); reject(e); });
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// Direct image URLs from horme.com.sg and other distributors
const products = [
  // Floor Cleaning - Single Disc
  { id: 'cycline-s401', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-cycline-s401-single-disc-machine-800x800.jpg' },
  { id: 'cyclone-g680', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-cyclone-g680-single-disc-machine-800x800.jpg' },
  { id: 'cyclone-kw17', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-cyclone-kw17-single-disc-machine-800x800.jpg' },
  // Carpet Extractors
  { id: 'typhoon-se20', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-typhoon-se20-carpet-extractor-800x800.jpg' },
  { id: 'typhoon-se30', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-typhoon-se30-carpet-extractor-800x800.jpg' },
  // Vacuums
  { id: 'typhoon-nova-q', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-typhoon-nova-q-vacuum-cleaner-800x800.jpg' },
  { id: 'typhoon-r327', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-typhoon-r327-vacuum-cleaner-800x800.jpg' },
  // High Pressure
  { id: 'monsoon-336', url: 'https://www.horme.com.sg/image/cache/catalog/product/klenco/klenco-monsoon-336-high-pressure-cleaner-800x800.jpg' },
];

async function main() {
  for (const prod of products) {
    const ext = prod.url.split('.').pop().split('?')[0];
    const dest = path.join('public', 'content_images', `klenco-${prod.id}.${ext}`);
    try {
      await downloadImage(prod.url, dest);
      console.log(`✓ ${prod.id}`);
    } catch (e) {
      console.log(`✗ ${prod.id}: ${e.message}`);
    }
  }
}

main();
