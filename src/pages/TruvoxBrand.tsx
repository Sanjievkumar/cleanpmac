import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// import { truvoxCategories } from '../data/truvox-products'; // Will be used when real data is available

import StudioBanner from '../components/StudioBanner';

export default function TruvoxBrand() {
  // Complete Truvox Product Categories Data
  const truvoxBannerImages = [
    '/content_images/multiwash-pro-340.png',
    '/content_images/orbis-200-43.png',
    '/content_images/hydromist-10.png',
    '/content_images/valet-aqua-20.png',
    '/content_images/trusweep-460.png'
  ];

  const truvoxData = [
    {
      category: 'SCRUBBER DRYERS',
      products: [
        { id: 'multiwash-pro-240', name: 'Multiwash PRO 240' },
        { id: 'multiwash-pro-340', name: 'Multiwash PRO 340' },
        { id: 'multiwash-pro-440', name: 'Multiwash PRO 440' },
        { id: 'multiwash-pro-steam', name: 'Multiwash PRO Steam' },
        { id: 'multiwash-pro-battery', name: 'Multiwash PRO Battery' },
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
        { id: 'hydromist-lite', name: 'Hydromist Lite' },
        { id: 'hydromist-10', name: 'Hydromist 10' },
        { id: 'hydromist-20hd', name: 'Hydromist 20HD' },
        { id: 'hydromist-compact', name: 'Hydromist Compact' },
        { id: 'hydromist-35', name: 'Hydromist 35' },
        { id: 'hydromist-40-120', name: 'Hydromist 40-120' },
        { id: 'hydromist-40-220', name: 'Hydromist 40-220' }
      ]
    },
    {
      category: 'CIMEX (THREE BRUSH)',
      products: [
        { id: 'cimex-cyclone', name: 'Cimex Cyclone 38' },
        { id: 'cimex-cyclone-38-slow-speed', name: 'Cimex Cyclone 38 Slow Speed' },
        { id: 'cimex-cyclone-48', name: 'Cimex Cyclone 48' },
        { id: 'cimex-encap-2', name: 'Cimex-Encap' },
        { id: 'cimex-heavy-duty', name: 'Cimex Heavy Duty' },
        { id: 'cimex-diamond-finisher', name: 'Cimex Diamond Finisher' }
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
        { id: 'cimex-x46', name: 'Cimex X46' }
      ]
    },
    {
      category: 'AIR MOVERS',
      products: [
        { id: 'am3000', name: 'AM3000' }
      ]
    }
  ];

  return (
    <div className="fade-in">
      
      {/* ?????????? TRUVOX HERO ?????????? */}
      <section style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)' }}>
        {/* Banner Image Area */}
        <StudioBanner images={truvoxBannerImages} height="550px" />
        
        {/* Text Area Below Banner */}
        <div className="container slide-up" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ maxWidth: '300px', width: '100%' }}>
               <img src="/content_images/truvox-logo.png" alt="Truvox International" style={{ width: '100%', objectFit: 'contain' }} />
            </div>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
            <p style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 }}>
              Truvox International is a leading global manufacturer and supplier of commercial and industrial floorcare machines.
            </p>
            <p>
              Based in Southampton, England, with a history dating back to 1960, Truvox has earned a strong reputation for producing innovative and reliable cleaning solutions, becoming the first choice in floorcare equipment in over 70 countries worldwide.
            </p>
            <p>
              We offer a wide range of well-established brands and machines, including Orbis single disc machines, Hydromist carpet cleaners, Valet vacuums, Multiwash scrubbers, and Cimex Three Brush Technology. Our products are designed to tackle various cleaning challenges and meet the highest standards of quality, efficiency, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT CATEGORIES ═══════════ */}
      <section style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
        <div className="container max-w-7xl mx-auto px-4">
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              The Truvox Range
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
              PRODUCT CATEGORIES
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}>
            {truvoxData.map((category) => (
              <div key={category.category} style={{ 
                background: 'white', 
                borderRadius: '1rem', 
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                border: '1px solid var(--border-color)'
              }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  fontWeight: 800, 
                  color: 'var(--primary)', 
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)',
                  textTransform: 'uppercase'
                }}>
                  {category.category}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {category.products.map((product) => (
                    <Link 
                      key={product.id} 
                      to={`/brands/truvox/${product.id}`}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.6rem 0.8rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '0.4rem',
                        color: 'var(--text-dark)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        backgroundColor: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(227,30,36,0.15)';
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) icon.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-dark)';
                        e.currentTarget.style.boxShadow = 'none';
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) icon.style.color = 'var(--text-muted)';
                      }}
                    >
                      <span>{product.name}</span>
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}


