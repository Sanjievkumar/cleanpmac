import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Globe, Building2, Handshake } from 'lucide-react';

export default function Brands() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === 'klenco') {
    return (
      <div className="fade-in">

        {/* ─── HERO: full-bleed building image, NO text/logo overlay ─── */}
        <div style={{ position: 'relative', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
          <img
            src="/content_images/image_9.png"
            alt="Klenco Building"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* ─── CONTENT 1: Our Story (Native Pixel-Perfect Layout) ─── */}
        <section style={{ 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid var(--border-color)',
          position: 'relative',
          overflow: 'hidden',
          padding: '4.5rem 0 4rem'
        }}>
          {/* Top-Left Corner Vector SVG Geometric Accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '140px', height: '140px', pointerEvents: 'none', zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 80,0 0,80" fill="#E31E24" />
              <polygon points="95,0 125,0 0,125 0,95" fill="#E31E24" opacity="0.85" />
            </svg>
          </div>

          {/* Bottom-Right Corner Vector SVG Geometric Accents */}
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '140px', height: '140px', pointerEvents: 'none', zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="140,140 60,140 140,60" fill="#E31E24" />
              <polygon points="45,140 15,140 140,15 140,45" fill="#E31E24" opacity="0.85" />
            </svg>
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
            
            {/* 3-Column Layout: Left Flank Motto, Center Content, Right Flank Logo & Motto */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'minmax(140px, 180px) 1fr minmax(140px, 180px)', 
              gap: '2.5rem', 
              alignItems: 'center' 
            }} className="klenco-story-grid">
              
              {/* Left Flank Motto */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="hidden lg:flex">
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', color: '#475569', lineHeight: 1.65 }}>
                  PEOPLE<br />PRODUCTS<br />PARTNERSHIPS<br />A CLEANER TOMORROW
                </span>
                <div style={{ width: '42px', height: '3px', backgroundColor: '#E31E24', marginTop: '0.75rem', borderRadius: '2px' }} />
              </div>

              {/* Center Main Story Block */}
              <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '36px', height: '2px', backgroundColor: '#E31E24' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.22em', color: '#E31E24', textTransform: 'uppercase' }}>
                    OUR STORY
                  </span>
                  <div style={{ width: '36px', height: '2px', backgroundColor: '#E31E24' }} />
                </div>
                
                {/* Main Headline */}
                <h2 style={{ 
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)', 
                  fontWeight: 900, 
                  color: '#E31E24', 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1.18,
                  marginBottom: '1.5rem' 
                }}>
                  A Legacy of Cleaning Excellence
                </h2>

                {/* Paragraphs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.85, color: '#334155', fontWeight: 400 }}>
                    Established in 1971 in Singapore, Klenco has grown into one of Asia's leading providers of professional cleaning solutions. What began with a small range of cleaning machines and chemicals has evolved into a comprehensive portfolio serving customers in more than 20 countries across Asia, the Middle East, Australia and Europe.
                  </p>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.85, color: '#334155', fontWeight: 400 }}>
                    Today, Klenco offers an extensive range of commercial cleaning equipment, professional chemicals, janitorial tools and industrial maintenance solutions, supported by expert technical consultation and reliable after-sales service.
                  </p>
                </div>
              </div>

              {/* Right Flank Logo & Motto */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} className="hidden lg:flex">
                <img 
                  src="/content_images/klenco_logo_clean.png" 
                  alt="Klenco Logo" 
                  style={{ width: '85px', height: 'auto', display: 'block', objectFit: 'contain', marginBottom: '0.85rem' }} 
                />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', color: '#0f172a', textAlign: 'right', lineHeight: 1.65 }}>
                  A CLEANER<br />BRIGHTER<br />SAFER<br />TOMORROW
                </span>
                <div style={{ width: '42px', height: '3px', backgroundColor: '#E31E24', marginTop: '0.75rem', borderRadius: '2px' }} />
              </div>

            </div>

            {/* Bottom 4 Stat Badges with Hairline Dividers */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              maxWidth: '920px', 
              margin: '3.5rem auto 0', 
              alignItems: 'center',
              paddingTop: '2rem',
              borderTop: '1px solid #f1f5f9'
            }} className="klenco-badges-grid">
              
              {/* Badge 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.65rem', padding: '0 1rem', borderRight: '1px solid #e2e8f0' }} className="klenco-badge-item">
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(227,30,36,0.18)', boxShadow: '0 4px 12px rgba(227,30,36,0.08)' }}>
                  <Calendar size={24} color="#E31E24" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.05rem', letterSpacing: '0.02em' }}>EST. 1971</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Singapore</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.65rem', padding: '0 1rem', borderRight: '1px solid #e2e8f0' }} className="klenco-badge-item">
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(227,30,36,0.18)', boxShadow: '0 4px 12px rgba(227,30,36,0.08)' }}>
                  <Globe size={24} color="#E31E24" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.05rem', letterSpacing: '0.02em' }}>20+</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Countries</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.65rem', padding: '0 1rem', borderRight: '1px solid #e2e8f0' }} className="klenco-badge-item">
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(227,30,36,0.18)', boxShadow: '0 4px 12px rgba(227,30,36,0.08)' }}>
                  <Building2 size={24} color="#E31E24" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.05rem', letterSpacing: '0.02em' }}>Complete</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Cleaning Solutions</div>
                </div>
              </div>

              {/* Badge 4 (No right border) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.65rem', padding: '0 1rem' }} className="klenco-badge-item">
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(227,30,36,0.18)', boxShadow: '0 4px 12px rgba(227,30,36,0.08)' }}>
                  <Handshake size={24} color="#E31E24" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.05rem', letterSpacing: '0.02em' }}>Trusted</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>Across Industries</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ─── CONTENT 2: One Brand – dark navy, stats on right instead of screenshot ─── */}
        <section style={{ backgroundColor: 'var(--primary)', padding: '5rem 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="one-brand-grid">
              <div>
                <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Offer</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                  ONE BRAND:<br />A COMPLETE CLEANING SOLUTION
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
                  From professional cleaning machines and specialty chemicals to maintenance equipment and accessories, Klenco offers a comprehensive portfolio designed to meet every cleaning requirement. Engineered for performance and backed by decades of expertise.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { title: 'Professional Cleaning Machines', desc: 'Scrubber dryers, vacuum cleaners, sweepers, carpet extractors, high-pressure cleaners, steam cleaners and more.' },
                    { title: 'Professional Cleaning Chemicals', desc: 'Specialty chemicals for floor care, housekeeping, washrooms, kitchens, industrial maintenance and surface disinfection.' },
                    { title: 'Industrial Cleaning Solutions', desc: 'Heavy-duty equipment for manufacturing plants, warehouses, logistics centres and food processing facilities.' },
                    { title: 'Municipal Cleaning Solutions', desc: 'Road sweepers, high-pressure systems and litter collection equipment for streets, parks and public infrastructure.' },
                  ].map((item) => (
                    <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', minWidth: '4px', alignSelf: 'stretch', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                      <div>
                        <div style={{ fontWeight: 800, color: 'white', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</div>
                        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: key stats/highlights */}
              <div className="brand-stats-grid">
                {[
                  { number: '1971', label: 'Founded in Singapore' },
                  { number: '20+', label: 'Countries Served' },
                  { number: '50+', label: 'Years of Experience' },
                  { number: '4', label: 'Core Product Divisions' },
                ].map((stat) => (
                  <div key={stat.number} style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '1rem',
                    padding: '1.75rem 1.25rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(4px)',
                  }}>
                    <div style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.number}</div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENT 3: Industries – 4x2 grid ─── */}
        <section style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                Solutions Across Every Industry
              </h2>
            </div>
            <div className="industries-grid">
              {[
                { icon: '🏨', label: 'Hotels & Hospitality' },
                { icon: '🏥', label: 'Hospitals & Healthcare' },
                { icon: '🏢', label: 'Commercial Buildings' },
                { icon: '🏭', label: 'Manufacturing Facilities' },
                { icon: '🛍️', label: 'Retail & Shopping Malls' },
                { icon: '🎓', label: 'Educational Institutions' },
                { icon: '✈️', label: 'Airports' },
                { icon: '🏛️', label: 'Government & Public Infrastructure' },
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.75rem',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.88rem', lineHeight: 1.4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTENT 4: Products ─── */}
        <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Product Range</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>PRODUCTS</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Klenco offers a comprehensive portfolio of professional cleaning solutions designed to meet the diverse requirements of commercial, industrial, institutional, and municipal environments. Every product is engineered to deliver superior cleaning performance, enhanced productivity, and long-term reliability.
              </p>
            </div>

            <div className="products-grid">
              {[
                {
                  num: '01',
                  title: 'FLOOR CLEANING',
                  desc: "Achieve exceptional floor cleaning performance with Klenco's range of scrubber dryers, sweepers, single disc machines, burnishers, carpet extractors, and steam cleaners. Designed to improve productivity while delivering spotless results across every floor type.",
                  arrow: 'Explore Floor Cleaning',
                },
                {
                  num: '02',
                  title: 'VACUUM CLEANING',
                  desc: 'From compact commercial vacuum cleaners to powerful industrial vacuum systems, Klenco provides reliable solutions for removing dust, debris, liquids, and fine particles across diverse working environments.',
                  arrow: 'Explore Vacuum Cleaning',
                },
                {
                  num: '03',
                  title: 'HIGH PRESSURE CLEANER',
                  desc: 'A complete range of high-pressure cleaners engineered for exceptional cleaning power — removing stubborn dirt, grease, oil, mud, and grime from a wide range of surfaces in commercial and industrial environments.',
                  arrow: 'Explore High Pressure Cleaner',
                },
                {
                  num: '04',
                  title: 'PROFESSIONAL CLEANING CHEMICALS',
                  desc: 'A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.',
                  arrow: 'Explore Cleaning Chemicals',
                },
              ].map((cat, i) => (
                <div key={i} style={{
                  borderRadius: '1rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => navigate(['/brands/klenco/floor-cleaning', '/brands/klenco/vacuum-cleaners', '/brands/klenco/high-pressure-cleaners', '/brands/klenco/chemicals'][i])}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
                  {/* Colored top bar */}
                  <div style={{ height: '6px', backgroundColor: 'var(--accent)' }} />
                  <div style={{ padding: '2rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Number badge */}
                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#f0f2f5', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.04em' }}>{cat.num}</div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>{cat.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>{cat.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {cat.arrow} <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '3rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
              Whether maintaining commercial facilities, manufacturing plants, healthcare institutions, hospitality venues, or public infrastructure, Klenco provides the right solution for every cleaning challenge.
            </p>
          </div>
        </section>

        <style>{`
          .klenco-story-grid {
            display: grid;
            grid-template-columns: minmax(140px, 180px) 1fr minmax(140px, 180px);
            gap: 2.5rem;
            align-items: center;
          }
          .one-brand-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          .brand-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
          .industries-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
          .products-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }

          @media (max-width: 991px) {
            .klenco-story-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .klenco-badges-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2rem 1rem !important;
            }
            .klenco-badge-item {
              border-right: none !important;
            }
          }

          @media (max-width: 900px) {
            .one-brand-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
            .industries-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }
            .products-grid {
              grid-template-columns: 1fr;
              gap: 1.25rem;
            }
          }

          @media (max-width: 500px) {
            .klenco-badges-grid {
              grid-template-columns: 1fr !important;
              gap: 1.75rem !important;
            }
            .brand-stats-grid {
              grid-template-columns: 1fr;
            }
            .industries-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // General Brands Overview
  return (
    <div className="fade-in">
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container text-center slide-up">
          <h1 className="heading-xl mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Our Brands</h1>
          <p className="text-lead" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem' }}>
            We represent globally recognized brands and provide application-focused cleaning solutions.
          </p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container grid grid-cols-2 gap-8">
          <div className="card card-dark cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/truvox')} style={{ padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '1rem' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[220px]">
              <img src="/content_images/truvox-logo.png" alt="Truvox" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-3" style={{ color: 'white', fontSize: '1.75rem' }}>TRUVOX</h2>
            <p className="text-muted mb-6" style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>UK - Since 1960. Commercial and industrial floorcare equipment.</p>
            <span className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>Explore Products</span>
          </div>
          <div className="card card-dark cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/klenco')} style={{ padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '1rem' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[220px]">
              <img src="/content_images/klenco-logo.png" alt="Klenco" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-3" style={{ color: 'white', fontSize: '1.75rem' }}>KLENCO</h2>
            <p className="text-muted mb-6" style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Singapore - Since 1971. Professional cleaning machines and chemicals.</p>
            <span className="btn btn-primary" style={{ backgroundColor: '#e31837', padding: '0.75rem 1.75rem' }}>Explore Products</span>
          </div>
        </div>
      </section>
    </div>
  );
}
