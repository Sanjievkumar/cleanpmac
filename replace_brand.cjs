const fs = require('fs');

const path = './src/pages/TruvoxBrand.tsx';
let data = fs.readFileSync(path, 'utf8');

const regex = /const productCategories = \[\s*\{([\s\S]*?)\]\n\s*\];/;

const replacement = `const productCategories = [
    {
      category: 'SCRUBBER DRYERS',
      products: [
        { id: 'multiwash-pro-240', name: 'Multiwash™ PRO 240' },
        { id: 'multiwash-pro-340', name: 'Multiwash™ PRO 340' },
        { id: 'multiwash-pro-440', name: 'Multiwash™ PRO 440' },
        { id: 'multiwash-pro-steam', name: 'Multiwash™ PRO Steam' },
        { id: 'multiwash-pro-battery', name: 'Multiwash™ PRO Battery' },
        { id: 'i-scrub-21b', name: 'i-scrub 21b' },
        { id: 'imop-lite', name: 'imop lite' }
      ]
    },
    {
      category: 'SINGLE DISC',
      products: [
        { id: 'orbis-motorscrubber-20-2', name: 'Orbis MotorScrubber 20' },
        { id: 'orbis-eco-200', name: 'Orbis Eco 200' },
        { id: 'orbis-eco-400', name: 'Orbis Eco 400' },
        { id: 'orbis-eco-duo', name: 'Orbis Eco Duo' },
        { id: 'orbis-200-38cm', name: 'Orbis 200 (38cm)' },
        { id: 'orbis-400-38cm-15-copy', name: 'Orbis 400 (38cm)' },
        { id: 'orbis-200-43', name: 'Orbis 200 (43cm)' },
        { id: 'orbis-200-hd', name: 'Orbis 200 HD' },
        { id: 'orbis-400-43cm', name: 'Orbis 400 (43cm)' },
        { id: 'orbis-duo', name: 'Orbis Duo' },
        { id: 'orbis-uhs-1500-43', name: 'Orbis UHS 1500 (43cm)' },
        { id: 'orbis-uhs-1500-50', name: 'Orbis UHS 1500 (50cm)' },
        { id: 'orbis-uhs-cordless-burnisher', name: 'Orbis UHS Cordless Burnisher' }
      ]
    },
    {
      category: 'CARPET CLEANERS',
      products: [
        { id: 'hydromist-lite', name: 'Hydromist® Lite' },
        { id: 'hydromist-10', name: 'Hydromist® 10' },
        { id: 'hydromist-20hd', name: 'Hydromist® 20HD' },
        { id: 'hydromist-compact', name: 'Hydromist® Compact' },
        { id: 'hydromist-35', name: 'Hydromist® 35' },
        { id: 'hydromist-40-120', name: 'Hydromist® 40-120' },
        { id: 'hydromist-40-220', name: 'Hydromist® 40-220' }
      ]
    },
    {
      category: 'CIMEX (THREE BRUSH)',
      products: [
        { id: 'cimex-cyclone', name: 'Cimex® Cyclone 38' },
        { id: 'cimex-cyclone-38-slow-speed', name: 'Cimex® Cyclone 38 Slow Speed' },
        { id: 'cimex-cyclone-48', name: 'Cimex® Cyclone 48' },
        { id: 'cimex-encap-2', name: 'Cimex-Encap®' },
        { id: 'cimex-heavy-duty', name: 'Cimex® Heavy Duty' },
        { id: 'cimex-diamond-finisher', name: 'Cimex® Diamond Finisher' }
      ]
    },
    {
      category: 'DRY VACUUMS',
      products: [
        { id: 'valet-backpack-pro-battery', name: 'Valet Backpack PRO Battery' },
        { id: 'vtve-compact', name: 'VTVe Compact' },
        { id: 'vtve', name: 'VTVe' },
        { id: 'valet-battery-upright-ii', name: 'Valet Battery Upright II' },
        { id: 'valet-dual-motor-upright', name: 'Valet Dual Motor Upright' },
        { id: 'valet-wide-area-vac', name: 'Valet Wide Area Vac' }
      ]
    },
    {
      category: 'WET & DRY VACUUMS',
      products: [
        { id: 'valet-aqua-20', name: 'Valet Aqua 20' },
        { id: 'valet-aqua-40', name: 'Valet Aqua 40' },
        { id: 'valet-aqua-55-heavy-duty', name: 'Valet Aqua 55 Heavy Duty' }
      ]
    },
    {
      category: 'ESCALATOR / SWEEPERS',
      products: [
        { id: 'trusweep-460', name: 'TruSweep 460' },
        { id: 'cimex-x46', name: 'Cimex® X46' }
      ]
    },
    {
      category: 'AIR MOVERS',
      products: [
        { id: 'am3000', name: 'AM3000' }
      ]
    }
  ];`;

const newData = data.replace(regex, replacement);
fs.writeFileSync(path, newData, 'utf8');
console.log('Replaced successfully');
