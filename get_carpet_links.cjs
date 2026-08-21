const fs = require('fs');
const cheerio = require('cheerio');
const h = fs.readFileSync('carpet-cleaners.html', 'utf8');
const $ = cheerio.load(h);
const links = new Set();
$('.products .product > a.woocommerce-LoopProduct-link').each((i, e) => {
    links.add($(e).attr('href'));
});
console.log(Array.from(links));
