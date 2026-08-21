const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('product_test.html', 'utf8');
const $ = ch.load(h);

const features = [];
$('ul').each((i, ul) => {
    const lis = $(ul).find('li').map((j, li) => $(li).text().trim()).get();
    if (lis.length > 2 && lis[0].length > 10) {
        console.log('Found list:', lis);
    }
});
