const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('product_test.html', 'utf8');
const $ = ch.load(h);
const txt = [];
$('h2, h3, h4').each((i, e) => txt.push($(e).text()));
console.log(txt.join('\n'));
