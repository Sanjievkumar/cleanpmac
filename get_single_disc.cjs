const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('single_disc.html', 'utf8');
const $ = ch.load(h);

const links = [];
$('.products .product > a.woocommerce-LoopProduct-link').each((i, e) => {
    const href = $(e).attr('href');
    if (!links.includes(href)) links.push(href);
});
console.log('Found:', links);
