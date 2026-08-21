const fs = require('fs');
const { truvoxProductDetails } = require('./src/data/truvox-details.ts');
const cats = require('./live-categories.json');

const mapping = {
  "scrubber-dryers": "SCRUBBER DRYERS",
  "single-disc": "SINGLE DISC",
  "carpet-cleaners": "CARPET CLEANERS",
  "cimex-three-brush": "CIMEX (THREE BRUSH)",
  "dry-vacuums": "DRY VACUUMS",
  "wet-and-dry-vacuums": "WET & DRY VACUUMS",
  "sweepers": "ESCALATOR / SWEEPERS",
  "air-movers": "AIR MOVERS"
};

let res = '';
for (const rawCat of Object.keys(mapping)) {
    const displayCat = mapping[rawCat];
    const slugs = cats[rawCat];
    
    // Add missing ones manually if the scraper missed them due to different URLs
    if (rawCat === 'wet-and-dry-vacuums') {
        slugs.push('valet-aqua-20', 'valet-aqua-40', 'valet-aqua-55-heavy-duty');
    }
    if (rawCat === 'sweepers') {
        slugs.push('trusweep-460', 'cimex-x46');
    }

    res += `    {\n`;
    res += `      category: '${displayCat}',\n`;
    res += `      products: [\n`;
    
    const mapped = slugs.map(id => {
        const name = truvoxProductDetails[id]?.name || id;
        return `        { id: '${id}', name: '${name.replace(/'/g, "\\'")}' }`;
    });
    res += mapped.join(',\n') + '\n';
    res += `      ]\n    },\n`;
}

console.log(res);
