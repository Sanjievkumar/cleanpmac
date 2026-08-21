const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('product_test.html', 'utf8');
const $ = ch.load(h);
console.log('Tabs:', $('.woocommerce-tabs ul.tabs li').text());
console.log('Features tab:', $('#tab-features').length);
console.log('Features class:', $('.tab-features').length);
