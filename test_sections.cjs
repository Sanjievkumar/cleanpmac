const fs = require('fs');
const ch = require('cheerio');
const $ = ch.load(fs.readFileSync('product_test.html', 'utf8'));

console.log('--- FEATURES ---');
$('.details-features .item').each((i, e) => {
    const title = $(e).find('h5').text().trim();
    const text = $(e).find('p').text().trim();
    const img = $(e).find('img.lazyload').attr('data-src') || $(e).find('img').attr('src');
    console.log({title, text, img});
});

console.log('\n--- DESCRIPTION ---');
console.log($('.woocommerce-product-details__short-description').text().trim());

console.log('\n--- FLOOR TYPES ---');
$('.details:has(h5:contains("CARPET")) .item, .details:has(h4:contains("FLOOR")) .item').each((i, e) => {
    const title = $(e).find('.name, h5, span').text().trim() || $(e).text().trim();
    const img = $(e).find('img.lazyload').attr('data-src') || $(e).find('img').attr('src');
    if(title) console.log({title, img});
});

console.log('\n--- ACCESSORIES ---');
$('.details-accessories .item').each((i, e) => {
    const title = $(e).find('h5').text().trim();
    const text = $(e).find('p').text().trim();
    const img = $(e).find('img.lazyload').attr('data-src') || $(e).find('img').attr('src');
    if (title || text) console.log({title, text, img});
});
