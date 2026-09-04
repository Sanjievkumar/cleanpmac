import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// import { truvoxCategories } from '../data/truvox-products'; // Will be used when real data is available

export default function TruvoxBrand() {
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
      
      {/* ═══════════ TRUVOX HERO ═══════════ */}
      <section style={{ 
        background: 'linear-gradient(135deg, #ECF7F9 0%, #D8F2F6 45%, #A8DCE9 100%)', 
        borderBottom: '1px solid rgba(0, 168, 176, 0.25)',
        position: 'relative',
        padding: '2.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div style={{
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0, 168, 176, 0.14)'
          }}>
            <img
              src="/content_images/truvox_brand_hero_full.jpg"
              alt="Truvox International - Global Floorcare Solutions"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 991px) {
          .truvox-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .truvox-badges-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

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


