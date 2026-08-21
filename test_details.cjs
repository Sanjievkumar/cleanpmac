const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('product_test.html', 'utf8');
const $ = ch.load(h);

console.log('Tables:', $('table').length);
$('table').first().find('tr').each((i, e) => {
    console.log($(e).text().replace(/\s+/g, ' ').trim());
});

console.log('--- FEATURES ---');
$('.woocommerce-product-details__short-description').nextAll('ul').first().find('li').each((i, e) => {
    console.log($(e).text().trim());
});

console.log('--- WHAT ELSE ---');
$('.elementor-widget-container ul').each((i, e) => {
    // console.log($(e).text());
});
