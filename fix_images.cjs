const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'truvox-details.ts');
let content = fs.readFileSync(dataFile, 'utf8');

// A little hacky, but we can just regex replace the exact strings of the missing files
const missing = [
    '/content_images/multiwash-pro-240-gallery-0.jpg',
    '/content_images/multiwash-pro-steam-gallery-0.jpg',
    '/content_images/multiwash-pro-battery-gallery-0.jpg',
    '/content_images/vtve-compact-gallery-0.jpg',
    '/content_images/valet-dual-motor-upright-gallery-0.jpg'
];

missing.forEach(m => {
    // We want to remove the array entry for this string.
    // E.g., `"/content_images/multiwash-pro-240-gallery-0.jpg",` or `"/content_images/...-gallery-0.jpg"`
    const re = new RegExp(`['"]${m}['"]\\s*,?`, 'g');
    content = content.replace(re, '');
});

fs.writeFileSync(dataFile, content, 'utf8');
console.log("Removed missing images from truvox-details.ts");
