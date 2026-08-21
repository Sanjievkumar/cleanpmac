const fs = require('fs');
const ch = require('cheerio');
const h = fs.readFileSync('scrubber.html', 'utf8');
const $ = ch.load(h);
const arr = [];
$('a[href^="https://www.truvox.com/product/"]').each((i, e) => {
    arr.push($(e).attr('href'));
});
const unique = [...new Set(arr)];
console.log('Total:', unique.length);
console.log(unique);
