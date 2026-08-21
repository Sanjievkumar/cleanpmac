const fs = require('fs');
const path = require('path');
const { truvoxProductDetails } = require('./src/data/truvox-details.ts');

const publicDir = path.join(__dirname, 'public');
const missingFiles = [];

const checkFile = (url, context) => {
    if (!url) return;
    if (url.startsWith('/')) {
        const filePath = path.join(publicDir, url);
        if (!fs.existsSync(filePath)) {
            missingFiles.push(`${context}: ${url}`);
        }
    } else {
        missingFiles.push(`${context} (Not local!): ${url}`);
    }
};

for (const id in truvoxProductDetails) {
    const p = truvoxProductDetails[id];
    checkFile(p.image, `${id} hero image`);
    
    if (p.galleryImages) {
        p.galleryImages.forEach((img, i) => checkFile(img, `${id} gallery[${i}]`));
    }
    
    if (p.floorTypes) {
        p.floorTypes.forEach((f, i) => checkFile(f.image, `${id} floorType[${i}]`));
    }
    
    if (p.accessories) {
        p.accessories.forEach((a, i) => checkFile(a.image, `${id} accessory[${i}]`));
    }
    
    if (p.features) {
        p.features.forEach((f, i) => checkFile(f.image, `${id} feature[${i}]`));
    }
}

if (missingFiles.length > 0) {
    console.log("MISSING FILES DETECTED:");
    console.log(missingFiles.join('\n'));
} else {
    console.log("All referenced images exist locally!");
}
