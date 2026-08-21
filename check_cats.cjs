const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const fetchHtml = (url) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    }).on('error', reject);
});

(async () => {
    const urls = [
        'https://www.truvox.com/product-category/scrubber-dryers/',
        'https://www.truvox.com/product-category/single-disc/',
        'https://www.truvox.com/product-category/carpet-cleaners/',
        'https://www.truvox.com/product-category/cimex-three-brush/',
        'https://www.truvox.com/product-category/dry-vacuums/',
        'https://www.truvox.com/product-category/wet-and-dry-vacuums/',
        'https://www.truvox.com/product-category/sweepers/',
        'https://www.truvox.com/product-category/air-movers/'
    ];

    const allSlugs = {};
    for (const url of urls) {
        const catName = url.split('/')[4];
        const html = await fetchHtml(url);
        const $ = cheerio.load(html);
        const slugs = new Set();
        
        // Let's only look inside the main content area to avoid menus
        $('.content-area a, .site-main a, .elementor-widget-container a').each((i, e) => {
            const href = $(e).attr('href');
            if (href && href.includes('/product/') && !href.includes('/product-category/') && !$(e).closest('.menu').length && !$(e).closest('.header').length && !$(e).closest('footer').length) {
                const match = href.match(/\/product\/([^/]+)/);
                if (match && !match[1].includes('sector')) slugs.add(match[1]);
            }
        });
        allSlugs[catName] = Array.from(slugs);
    }
    console.log(JSON.stringify(allSlugs, null, 2));
})();
