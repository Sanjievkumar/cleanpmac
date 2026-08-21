const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const https = require('https');

const downloadImage = (url, filepath) => {
    if (fs.existsSync(filepath)) {
        return Promise.resolve(); // Skip if already exists
    }
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                file.close();
                fs.unlink(filepath, () => {});
                reject(`Status code: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err.message);
        });
    });
};

async function scrape() {
    // Include Scrubber Dryers + Single Disc + Carpet Cleaners + All Remaining
    const productLinks = [
        // Scrubber Dryers
        'https://www.truvox.com/product/multiwash-pro-240/',
        'https://www.truvox.com/product/multiwash-pro-340/',
        'https://www.truvox.com/product/multiwash-pro-440/',
        'https://www.truvox.com/product/multiwash-pro-steam/',
        'https://www.truvox.com/product/multiwash-pro-battery/',
        'https://www.truvox.com/product/i-scrub-21b/',
        'https://www.truvox.com/product/imop-lite/',
        // Single Disc
        'https://www.truvox.com/product/orbis-motorscrubber-20-2/',
        'https://www.truvox.com/product/orbis-eco-200/',
        'https://www.truvox.com/product/orbis-eco-400/',
        'https://www.truvox.com/product/orbis-eco-duo/',
        'https://www.truvox.com/product/orbis-200-38cm/',
        'https://www.truvox.com/product/orbis-400-38cm-15-copy/',
        'https://www.truvox.com/product/orbis-200-43/',
        'https://www.truvox.com/product/orbis-200-hd/',
        'https://www.truvox.com/product/orbis-400-43cm/',
        'https://www.truvox.com/product/orbis-duo/',
        'https://www.truvox.com/product/orbis-uhs-1500-43/',
        'https://www.truvox.com/product/orbis-uhs-1500-50/',
        'https://www.truvox.com/product/orbis-uhs-cordless-burnisher/',
        // Carpet Cleaners
        'https://www.truvox.com/product/hydromist-lite/',
        'https://www.truvox.com/product/hydromist-10/',
        'https://www.truvox.com/product/hydromist-20hd/',
        'https://www.truvox.com/product/hydromist-compact/',
        'https://www.truvox.com/product/hydromist-35/',
        'https://www.truvox.com/product/hydromist-40-120/',
        'https://www.truvox.com/product/hydromist-40-220/',
        // CIMEX
        'https://www.truvox.com/product/cimex-cyclone/',
        'https://www.truvox.com/product/cimex-cyclone-38-slow-speed/',
        'https://www.truvox.com/product/cimex-cyclone-48/',
        'https://www.truvox.com/product/cimex-encap-2/',
        'https://www.truvox.com/product/cimex-heavy-duty/',
        'https://www.truvox.com/product/cimex-diamond-finisher/',
        // DRY VACUUMS
        'https://www.truvox.com/product/valet-backpack-pro-battery/',
        'https://www.truvox.com/product/vtve-compact/',
        'https://www.truvox.com/product/vtve/',
        'https://www.truvox.com/product/valet-battery-upright-ii/',
        'https://www.truvox.com/product/valet-dual-motor-upright/',
        'https://www.truvox.com/product/valet-wide-area-vac/',
        // WET & DRY VACUUMS
        'https://www.truvox.com/product/valet-aqua-20/',
        'https://www.truvox.com/product/valet-aqua-40/',
        'https://www.truvox.com/product/valet-aqua-55-heavy-duty/',
        // SWEEPERS
        'https://www.truvox.com/product/trusweep-460/',
        'https://www.truvox.com/product/cimex-x46/',
        // AIR MOVERS
        'https://www.truvox.com/product/am3000/'
    ];

    console.log(`Found ${productLinks.length} products.`);
    const products = {};

    for (let link of productLinks) {
        try {
            console.log(`Scraping ${link}...`);
            const slug = link.split('/').filter(Boolean).pop();

            // Fetch the page content
            const html = await new Promise((resolve, reject) => {
                https.get(link, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => resolve(data));
                }).on('error', reject);
            });

            const $p = cheerio.load(html);

            const title = $p('h1.product_title').text().trim();
            const brand = 'TRUVOX INTERNATIONAL';
            const description = $p('.woocommerce-product-details__short-description p').text().trim();
            
            const downloadPromises = [];
            
            // Image
            let heroImage = $p('.woocommerce-product-gallery__image a').first().attr('href') || $p('.wp-post-image').attr('src');
            // Remove dimensions like -768x1024
            if (heroImage) {
                heroImage = heroImage.replace(/-\d+x\d+(?=\.[a-z]+$)/i, '');
            }

            // Download image locally
            const ext = heroImage ? path.extname(heroImage) || '.jpg' : '.jpg';
            const localImageName = `${slug}${ext}`;
            const localImagePath = path.join(__dirname, 'public', 'content_images', localImageName);
            
            if (heroImage) {
                downloadPromises.push(downloadImage(heroImage, localImagePath));
            }

            // --- GALLERY ---
            const galleryImages = [];
            let g_idx = 0;
            $p('.woocommerce-product-gallery__image, .details-gallery, .elementor-image-carousel .swiper-slide').each((i, e) => {
                let img = $p(e).find('a').attr('href') || $p(e).find('img.lazyload').attr('data-src') || $p(e).find('img').attr('data-src') || $p(e).find('img').attr('src');
                if (img && img !== heroImage && !img.includes('data:image')) {
                    img = img.replace(/-\d+x\d+(?=\.[a-z]+$)/i, '');
                    const gExt = path.extname(img).split('?')[0] || '.jpg';
                    const gName = `${slug}-gallery-${g_idx++}${gExt}`;
                    downloadPromises.push(downloadImage(img, path.join(__dirname, 'public', 'content_images', gName)));
                    galleryImages.push(`/content_images/${gName}`);
                }
            });

            // --- FEATURES ---
            const features = [];
            let f_idx = 1;
            $p('.details-features .item').each((i, e) => {
                const title = $p(e).find('h5').text().trim();
                const text = $p(e).find('p').text().trim();
                const img = $p(e).find('img.lazyload').attr('data-src') || $p(e).find('img').attr('data-src') || $p(e).find('img').attr('src');
                if (title || text) {
                    let localImg = '';
                    if (img && !img.includes('data:image')) {
                        const ext = path.extname(img).split('?')[0] || '.jpg';
                        localImg = `${slug}-feature-${f_idx++}${ext}`;
                        downloadPromises.push(downloadImage(img, path.join(__dirname, 'public', 'content_images', localImg)));
                        localImg = `/content_images/${localImg}`;
                    }
                    features.push({ title, text, image: localImg });
                }
            });

            // --- FLOOR TYPES ---
            const floorTypes = [];
            let fl_idx = 1;
            $p('.details:has(h5:contains("CARPET")) .item, .details:has(h4:contains("FLOOR")) .item, .details-floor_types .item, .details-floor .item').each((i, e) => {
                const title = $p(e).find('.name, h5, span, p').text().trim() || $p(e).text().trim();
                const img = $p(e).find('img.lazyload').attr('data-src') || $p(e).find('img').attr('data-src') || $p(e).find('img').attr('src');
                if (title && img && !img.includes('data:image')) {
                    const ext = path.extname(img).split('?')[0] || '.jpg';
                    const localImg = `${slug}-floor-${fl_idx++}${ext}`;
                    downloadPromises.push(downloadImage(img, path.join(__dirname, 'public', 'content_images', localImg)));
                    floorTypes.push({ title, image: `/content_images/${localImg}` });
                }
            });

            // --- ACCESSORIES ---
            const accessories = [];
            let acc_idx = 1;
            $p('.details-accessories .item').each((i, e) => {
                const title = $p(e).find('h5').text().trim();
                const text = $p(e).find('p').text().trim();
                const img = $p(e).find('img.lazyload').attr('data-src') || $p(e).find('img').attr('data-src') || $p(e).find('img').attr('src');
                if ((title || text) && title) {
                    let localImg = '';
                    if (img && !img.includes('data:image')) {
                        const ext = path.extname(img).split('?')[0] || '.jpg';
                        localImg = `${slug}-acc-${acc_idx++}${ext}`;
                        downloadPromises.push(downloadImage(img, path.join(__dirname, 'public', 'content_images', localImg)));
                        localImg = `/content_images/${localImg}`;
                    }
                    accessories.push({ title, text, image: localImg });
                }
            });

            // Wait for all downloads to finish
            console.log(`Waiting for ${downloadPromises.length} images to download...`);
            await Promise.allSettled(downloadPromises);

            // Specifications
            const specifications = {};
            // Layout 1: Table
            $p('table.shop_attributes tr').each((i, e) => {
                const key = $p(e).find('th').text().trim();
                const value = $p(e).find('td').text().trim();
                if (key && value) specifications[key] = value;
            });
            // Layout 2: Flexbox divs (used in Orbis)
            if (Object.keys(specifications).length === 0) {
                $p('.spec.flexbox').each((i, e) => {
                    const key = $p(e).find('.col1').text().replace(/\s+/g, ' ').trim();
                    const unit = $p(e).find('.col2').text().trim();
                    const value = $p(e).find('.col3').text().trim();
                    if (key && value) {
                        specifications[key + (unit ? ` (${unit})` : '')] = value;
                    }
                });
            }

            // Downloads
            const downloads = [];
            $p('.details-downloads').each((i, catElem) => {
                const catTitle = $p(catElem).find('h4').text().trim() || $p(catElem).prev('h4').text().trim() || 'Downloads';
                const links = [];
                $p(catElem).find('a').each((j, aElem) => {
                    links.push({
                        title: $p(aElem).text().trim() || 'Download File',
                        url: $p(aElem).attr('href')
                    });
                });
                if (links.length > 0) {
                    downloads.push({ category: catTitle, links });
                }
            });
            // If they are not inside .details-downloads, try the other layout
            if (downloads.length === 0) {
                const genericDownloads = [];
                $p('.tab-downloads a, .downloads a, a[href$=".pdf"]').each((j, aElem) => {
                    genericDownloads.push({
                        title: $p(aElem).text().trim() || 'Download File',
                        url: $p(aElem).attr('href')
                    });
                });
                if (genericDownloads.length > 0) {
                    downloads.push({ category: 'Documents', links: genericDownloads });
                }
            }

            products[slug] = {
                id: slug,
                name: title,
                brand,
                description,
                heroImage: `/content_images/${localImageName}`,
                galleryImages,
                features,
                floorTypes,
                specifications,
                accessories,
                downloads
            };
        } catch (e) {
            console.error(`Error scraping ${link}:`, e);
        }
    }

    const fileContent = `export const truvoxProductDetails = ${JSON.stringify(products, null, 2)};`;
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'truvox-details.ts'), fileContent, 'utf8');
    console.log('Done!');
}

scrape().catch(console.error);
