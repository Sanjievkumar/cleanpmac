const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('product_test.html', 'utf8');
const $ = ch.load(h);

const features = [];
$('.details-features ul li, .woocommerce-product-details__short-description li, .details .col2 ul li, .features ul li').each((i, el) => {
    features.push($(el).text().trim());
});

console.log('Features:', features);
