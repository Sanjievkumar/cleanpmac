const fs = require('fs');
const cheerio = require('cheerio');
const h = fs.readFileSync('truvox-home.html', 'utf8');
const $ = cheerio.load(h);

const allSlugs = new Set();
$('a').each((i, e) => {
    const href = $(e).attr('href');
    if (href && href.includes('/product/') && !href.includes('/product-category/')) {
        const match = href.match(/\/product\/([^/]+)/);
        if (match) allSlugs.add(match[1]);
    }
});

console.log('Total unique products:', allSlugs.size);
console.log(Array.from(allSlugs).join(', '));
