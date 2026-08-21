const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

function fetchPage(pageUrl) {
  return new Promise((resolve, reject) => {
    const parsed = url.parse(pageUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const options = {
      hostname: parsed.hostname,
      path: parsed.path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    };
    const req = client.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
    req.end();
  });
}

function downloadImage(imgUrl, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) { resolve(destPath); return; }
    const parsed = url.parse(imgUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const file = fs.createWriteStream(destPath);
    const req = client.get({ hostname: parsed.hostname, path: parsed.path, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
    });
    req.on('error', (e) => { fs.unlink(destPath, () => {}); reject(e); });
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function extractImageSrc(html, context) {
  // Try to find og:image first
  const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
  if (ogMatch) return ogMatch[1];
  // Try woocommerce product image
  const wcMatch = html.match(/class="woocommerce-product-gallery__image[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/);
  if (wcMatch) return wcMatch[1];
  // Try first large image
  const imgMatch = html.match(/<img[^>]+src="(https?:\/\/[^"]+(?:\.jpg|\.png|\.jpeg|\.webp))[^"]*"[^>]+class="[^"]*wp-post-image[^"]*"/i);
  if (imgMatch) return imgMatch[1];
  return null;
}

const productUrls = [
  // Single Disc
  { id: 'cycline-s401', url: 'https://www.klenco.com.sg/product/cycline-s401/' },
  { id: 'cyclone-g680', url: 'https://www.klenco.com.sg/product/cyclone-g680/' },
  { id: 'cyclone-kw17', url: 'https://www.klenco.com.sg/product/cyclone-kw17/' },
  { id: 'foam-generator', url: 'https://www.klenco.com.sg/product/foam-generator/' },
  { id: 'floor-pads', url: 'https://www.klenco.com.sg/product/floor-pads/' },
  // Carpet Extractors
  { id: 'typhoon-se20', url: 'https://www.klenco.com.sg/product/typhoon-se20/' },
  { id: 'typhoon-se30', url: 'https://www.klenco.com.sg/product/typhoon-se30/' },
  { id: 'typhoon-kw22', url: 'https://www.klenco.com.sg/product/typhoon-kw22/' },
  { id: 'typhoon-kw22p', url: 'https://www.klenco.com.sg/product/typhoon-kw22p/' },
  // Scrubbers
  { id: 'curve', url: 'https://www.klenco.com.sg/product/curve/' },
  { id: 'rock-8', url: 'https://www.klenco.com.sg/product/rock-8/' },
  // Sweepers
  { id: 'tempest-ms900', url: 'https://www.klenco.com.sg/product/tempest-ms900/' },
  // Steam Cleaners
  { id: 'monsoon-st7', url: 'https://www.klenco.com.sg/product/monsoon-st7/' },
  { id: 'monsoon-st12-uv', url: 'https://www.klenco.com.sg/product/monsoon-st12-uv/' },
  // Vacuums
  { id: 'typhoon-nova-q', url: 'https://www.klenco.com.sg/product/typhoon-nova-q/' },
  { id: 'typhoon-r327', url: 'https://www.klenco.com.sg/product/typhoon-r327/' },
  { id: 'typhoon-432', url: 'https://www.klenco.com.sg/product/typhoon-432/' },
  { id: 'typhoon-463', url: 'https://www.klenco.com.sg/product/typhoon-463/' },
  // High Pressure
  { id: 'monsoon-336', url: 'https://www.klenco.com.sg/product/monsoon-336/' },
  { id: 'monsoon-444', url: 'https://www.klenco.com.sg/product/monsoon-444/' },
  { id: 'monsoon-525', url: 'https://www.klenco.com.sg/product/monsoon-525/' },
  // Chemicals
  { id: 'action-170-s', url: 'https://www.klenco.com.sg/product/action-170-s/' },
  { id: 'campaign', url: 'https://www.klenco.com.sg/product/campaign/' },
  { id: 'power-spotter', url: 'https://www.klenco.com.sg/product/power-spotter/' },
  { id: 'easy-clean', url: 'https://www.klenco.com.sg/product/easy-clean/' },
  { id: 'power-lime', url: 'https://www.klenco.com.sg/product/power-lime/' },
  { id: 'power-view', url: 'https://www.klenco.com.sg/product/power-view/' },
  { id: 'power-lemon', url: 'https://www.klenco.com.sg/product/power-lemon/' },
];

async function scrapeProduct(prod) {
  try {
    const html = await fetchPage(prod.url);
    const imgSrc = extractImageSrc(html, prod.id);
    
    // Also grab title and short description
    const titleMatch = html.match(/<h1[^>]+class="[^"]*product_title[^"]*"[^>]*>([^<]+)</);
    const descMatch = html.match(/<div[^>]+class="[^"]*woocommerce-product-details__short-description[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    
    let desc = '';
    if (descMatch) {
      desc = descMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 300);
    }
    
    return { id: prod.id, title: titleMatch ? titleMatch[1].trim() : prod.id, image: imgSrc, desc };
  } catch (e) {
    console.log(`Error fetching ${prod.id}: ${e.message}`);
    return { id: prod.id, title: prod.id, image: null, desc: '' };
  }
}

async function downloadProductImage(prod, imgUrl) {
  if (!imgUrl) return null;
  const ext = imgUrl.split('?')[0].split('.').pop() || 'jpg';
  const dest = path.join('public', 'content_images', `klenco-${prod.id}.${ext}`);
  try {
    await downloadImage(imgUrl, dest);
    return `/content_images/klenco-${prod.id}.${ext}`;
  } catch (e) {
    console.log(`Failed to download image for ${prod.id}: ${e.message}`);
    return null;
  }
}

async function main() {
  const results = [];
  for (const prod of productUrls) {
    console.log(`Scraping ${prod.id}...`);
    const data = await scrapeProduct(prod);
    if (data.image) {
      const localPath = await downloadProductImage(prod, data.image);
      data.localImage = localPath;
    }
    results.push(data);
    await new Promise(r => setTimeout(r, 500));
  }
  fs.writeFileSync('klenco-scraped.json', JSON.stringify(results, null, 2));
  console.log('\nDone! Results written to klenco-scraped.json');
  results.forEach(r => {
    console.log(`${r.id}: image=${r.localImage || 'NONE'}`);
  });
}

main();
