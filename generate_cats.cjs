const { truvoxProductDetails } = require('./src/data/truvox-details.ts');
const categories = {
  'CIMEX (THREE BRUSH)': ['cimex-cyclone', 'cimex-encap-2', 'cimex-heavy-duty'],
  'DRY VACUUMS': ['valet-backpack-pro-battery', 'vtve-compact', 'vtve', 'valet-battery-upright-ii', 'valet-dual-motor-upright', 'valet-wide-area-vac'],
  'WET & DRY VACUUMS': ['valet-aqua-20', 'valet-aqua-40', 'valet-aqua-55-heavy-duty'],
  'ESCALATOR / SWEEPERS': ['trusweep-460', 'cimex-x46'],
  'AIR MOVERS': ['am3000']
};

for (const cat in categories) {
    console.log(`    {`);
    console.log(`      category: '${cat}',`);
    console.log(`      products: [`);
    const mapped = categories[cat].map(id => {
        const name = truvoxProductDetails[id]?.name || 'UNKNOWN';
        return `        { id: '${id}', name: '${name.replace(/'/g, "\\'")}' }`;
    });
    console.log(mapped.join(',\n'));
    console.log(`      ]`);
    console.log(`    },`);
}
