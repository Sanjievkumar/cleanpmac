const fs = require('fs');
const ch = require('cheerio');
const $ = ch.load(fs.readFileSync('product_test.html', 'utf8'));

console.log('--- HEADERS ---');
const headers = [];
$('h1, h2, h3, h4, h5, h6').each((i, e) => headers.push($(e).text().trim()));
console.log(headers.filter(h => h.length > 0));

console.log('\n--- TABS/MENUS ---');
const tabs = [];
$('.tabs li, .menu li, .elementor-tab-title').each((i, e) => tabs.push($(e).text().trim()));
console.log(tabs);

console.log('\n--- IMAGES ---');
const images = [];
$('img').each((i, e) => {
    let src = $(e).attr('data-src') || $(e).attr('src');
    if (src && !src.includes('data:image')) {
        images.push(src);
    }
});
console.log(images.slice(0, 20));
