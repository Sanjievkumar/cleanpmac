import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, ShieldCheck } from 'lucide-react';
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
      
      {/* ═══════════ TRUVOX HERO (Pixel-Perfect Native Layout) ═══════════ */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f0fbfc 0%, #e2f7f9 45%, #cdeff3 100%)', 
        borderBottom: '1px solid rgba(0, 168, 176, 0.25)',
        position: 'relative',
        overflow: 'hidden',
        padding: '3.75rem 0 3rem'
      }}>
        {/* Background Decorative Large Watermark "VOX" */}
        <div style={{
          position: 'absolute',
          right: '6%',
          top: '48%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(9rem, 18vw, 20rem)',
          fontWeight: 900,
          color: 'rgba(0, 168, 176, 0.08)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '-0.05em'
        }}>
          VOX
        </div>

        {/* Subtle Top-Right Globe Network SVG */}
        <svg style={{ position: 'absolute', top: 0, right: 0, width: '380px', height: '320px', pointerEvents: 'none', opacity: 0.35, zIndex: 0 }} viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="80" r="140" stroke="#00A8B0" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="280" cy="80" r="100" stroke="#00A8B0" strokeWidth="1" />
          <circle cx="280" cy="80" r="60" stroke="#00A8B0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="140" y1="80" x2="420" y2="80" stroke="#00A8B0" strokeWidth="0.75" />
          <line x1="280" y1="-60" x2="280" y2="220" stroke="#00A8B0" strokeWidth="0.75" />
          <circle cx="220" cy="40" r="4" fill="#00A8B0" />
          <circle cx="330" cy="110" r="4" fill="#00A8B0" />
          <circle cx="250" cy="130" r="3.5" fill="#00A8B0" />
        </svg>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.15fr 0.85fr', 
            gap: '3rem', 
            alignItems: 'center' 
          }} className="truvox-hero-grid">
            
            {/* Left Column: Native Typography & Badges */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Truvox Logo & Tagline */}
              <div style={{ marginBottom: '1.25rem' }}>
                <img 
                  src="/content_images/truvox-logo.png" 
                  alt="Truvox International" 
                  style={{ height: '46px', objectFit: 'contain' }} 
                />
                <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', color: '#008b94', textTransform: 'uppercase', marginTop: '0.4rem' }}>
                  GLOBAL FLOORCARE SOLUTIONS
                </div>
              </div>

              {/* Main Headline */}
              <h1 style={{ 
                fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', 
                fontWeight: 800, 
                color: '#00A8B0', 
                lineHeight: 1.35, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em'
              }}>
                Truvox International is a leading global manufacturer and supplier of commercial and industrial floorcare machines.
              </h1>

              {/* Body Paragraphs */}
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.75, marginBottom: '1rem', fontWeight: 450 }}>
                Based in Southampton, England, with a history dating back to 1960, Truvox has earned a strong reputation for producing innovative and reliable cleaning solutions, becoming the first choice in floorcare equipment in over 70 countries worldwide.
              </p>

              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.75rem', fontWeight: 450 }}>
                We offer a wide range of well-established brands and machines, including Orbis single disc machines, Hydromist carpet cleaners, Valet vacuums, Multiwash scrubbers, and Cimex Three Brush Technology. Our products are designed to tackle various cleaning challenges and meet the highest standards of quality, efficiency, and durability.
              </p>

              {/* 3 Circular Stat Badges */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1.25rem', 
                paddingTop: '1.5rem', 
                borderTop: '1px solid rgba(0, 168, 176, 0.25)' 
              }} className="truvox-badges-grid">
                
                {/* Badge 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 168, 176, 0.3)', boxShadow: '0 4px 12px rgba(0, 168, 176, 0.12)' }}>
                    <Building2 size={22} color="#00A8B0" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>EST. 1960</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Southampton, England</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 168, 176, 0.3)', boxShadow: '0 4px 12px rgba(0, 168, 176, 0.12)' }}>
                    <Globe size={22} color="#00A8B0" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>70+</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Countries Worldwide</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 168, 176, 0.3)', boxShadow: '0 4px 12px rgba(0, 168, 176, 0.12)' }}>
                    <ShieldCheck size={22} color="#00A8B0" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>Trusted Global Brand</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Innovative. Reliable. Proven.</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Top-Right Slogan Tag & Clean Machine Cluster */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              
              {/* Top-Right Slogan Tag */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', color: '#005b63', lineHeight: 1.45, textAlign: 'right' }}>
                  CLEANER<br />SPACES<br />BRIGHTER<br />POSSIBILITIES
                </span>
                <div style={{ width: '38px', height: '2.5px', backgroundColor: '#00A8B0', marginTop: '0.4rem' }} />
              </div>

              {/* Clean Transparent Machine Cluster */}
              <div style={{ width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                <img
                  src="/content_images/truvox_3_machines_trans.png"
                  alt="Truvox Floorcare Machines"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 14px 28px rgba(0, 168, 176, 0.15))'
                  }}
                />
              </div>

            </div>

          </div>

          {/* Bottom Footer Accent */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 168, 176, 0.18)' }}>
            <div style={{ width: '48px', height: '2px', backgroundColor: '#00A8B0' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.2em', color: '#008b94', textTransform: 'uppercase' }}>
              GLOBAL FLOORCARE SOLUTIONS
            </span>
            <div style={{ width: '48px', height: '2px', backgroundColor: '#00A8B0' }} />
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


