import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, ShieldCheck } from 'lucide-react';
import TruvoxProductName from '../components/TruvoxProductName';
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
      
      {/* ═══════════ TRUVOX VIDEO HERO BANNER ═══════════ */}
      <section style={{ backgroundColor: '#000814', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(0, 168, 176, 0.25)' }}>
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxHeight: '520px',
              objectFit: 'contain',
              display: 'block'
            }}
          >
            <source src="/videos/truvox-hero.mp4" type="video/mp4" />
            <source src="/videos/truvox-hero.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ═══════════ TRUVOX BRAND STORY & HD ARTWORK SECTION ═══════════ */}
      <section className="truvox-hero-section" style={{ 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(0, 168, 176, 0.25)',
      }}>
        {/* Content Container (Native Crisp Typography & Vector Badges + HD Visual Artwork) */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 truvox-hero-content-wrap" style={{ position: 'relative', zIndex: 2, padding: '3.75rem 1rem 3.25rem' }}>
          <div className="truvox-hero-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(280px, 0.85fr)', 
            gap: '2.5rem', 
            alignItems: 'center' 
          }}>
            
            {/* Left Column: Native Typography & Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px' }}>
              {/* Truvox Logo */}
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/content_images/truvox-logo.png" 
                  alt="Truvox International" 
                  style={{ height: '62px', maxWidth: '240px', objectFit: 'contain' }} 
                />
              </div>

              {/* Main Headline */}
              <h1 style={{ 
                fontSize: 'clamp(1.3rem, 2.1vw, 1.7rem)', 
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

            {/* Right Column: Pristine HD Artwork */}
            <div className="truvox-hero-artwork-wrap">
              <img 
                src="/content_images/truvox_hero_artwork_hd.png" 
                alt="Truvox Commercial Floorcare Machines - Multiwash PRO, Ride-On Scrubber, Valet Extraction" 
                className="truvox-hero-artwork-img"
              />
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
        .truvox-hero-section {
          background: linear-gradient(135deg, #FFFFFF 0%, #F5FBFC 40%, #EBF8FA 70%, #D8F2F6 100%);
        }
        .truvox-hero-artwork-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .truvox-hero-artwork-img {
          width: 100%;
          max-width: 540px;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 15px 30px rgba(0, 43, 73, 0.08));
        }
        @media (max-width: 991px) {
          .truvox-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .truvox-hero-artwork-img {
            max-width: 480px;
            margin: 0 auto;
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
            <div style={{ color: '#00A8B0', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              The Truvox Range
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: '#00A8B0', letterSpacing: '-0.02em' }}>
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
                  color: '#00A8B0', 
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
                        backgroundColor: 'white',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00A8B0';
                        e.currentTarget.style.borderColor = '#00A8B0';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 168, 176, 0.25)';
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
                      <TruvoxProductName name={product.name} layout="inline" size="sm" />
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', flexShrink: 0 }} />
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


