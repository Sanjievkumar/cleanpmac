import { useParams, useNavigate } from 'react-router-dom';

export default function Brands() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === 'klenco') {
    return (
      <div className="fade-in" style={{ backgroundColor: '#f8f9fa' }}>
        {/* HERO SECTION - No red overlay, clear image */}
        <section className="section" style={{
          backgroundImage: 'url("/content_images/image_9.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '12rem 0',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
          <div className="container text-center slide-up" style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>KLENCO</h1>
            <p style={{ fontSize: '1.5rem', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Singapore - Since 1971</p>
          </div>
        </section>

        {/* CONTENT 1: Legacy */}
        <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>A Legacy of Cleaning Excellence</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Established in 1971 in Singapore, Klenco has grown into one of Asia's leading providers of professional cleaning solutions. What began with a small range of cleaning machines and chemicals has evolved into a comprehensive portfolio serving customers in more than 20 countries across Asia, the Middle East, Australia and Europe.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)' }}>
              Today, Klenco offers an extensive range of commercial cleaning equipment, professional chemicals, janitorial tools and industrial maintenance solutions, supported by expert technical consultation and reliable after-sales service.
            </p>
          </div>
        </section>

        {/* CONTENT 2: One Brand */}
        <section className="section" style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>ONE BRAND: A COMPLETE CLEANING SOLUTIONS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '2rem' }}>
                  From professional cleaning machines and specialty chemicals to maintenance equipment and accessories, Klenco offers a comprehensive portfolio designed to meet every cleaning requirement. Engineered for performance and backed by decades of expertise, Klenco helps businesses achieve superior hygiene, operational efficiency, and long-term value.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Professional Cleaning Machines:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Scrubber dryers, vacuum cleaners, sweepers, carpet extractors, high-pressure cleaners, steam cleaners and more.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Professional Cleaning Chemicals:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>A complete range of specialty chemicals for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and surface disinfection, formulated for effective and reliable cleaning performance.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Industrial Cleaning Solutions:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Heavy-duty cleaning equipment and solutions designed for manufacturing plants, warehouses, logistics centres, food processing facilities, and other industrial environments where performance and durability are essential.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Municipal Cleaning Solutions:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Comprehensive solutions for urban cleaning and public infrastructure, including road sweepers, high-pressure cleaning systems, litter collection equipment, and specialized machines designed to maintain clean streets, parks, public spaces, transport terminals, and municipal facilities.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="/content_images/image_10.png" alt="Klenco Complete Solutions" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT 3: Solutions Across Every Industry */}
        <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>Solutions Across Every Industry</h2>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {[
                { icon: '🏨', label: 'Hotels & Hospitality' },
                { icon: '🏥', label: 'Hospitals & Healthcare' },
                { icon: '🏢', label: 'Commercial Buildings' },
                { icon: '🏭', label: 'Manufacturing Facilities' },
                { icon: '🛍️', label: 'Retail & Shopping Malls' },
                { icon: '🎓', label: 'Educational Institutions' },
                { icon: '✈️', label: 'Airports' },
                { icon: '🏛️', label: 'Government & Public Infrastructure' }
              ].map((industry, i) => (
                <div key={i} style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-dark)' }}>{industry.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT 4: PRODUCTS category */}
        <section className="section" style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <div style={{ color: '#e31837', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Products Category
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Klenco offers a comprehensive portfolio of professional cleaning solutions designed to meet the diverse requirements of commercial, industrial, institutional, and municipal environments. From advanced floor cleaning machines and high-performance vacuum cleaners to specialty cleaning chemicals, high-pressure cleaning systems, municipal equipment, and industrial cleaning solutions, every product is engineered to deliver superior cleaning performance, enhanced productivity, and long-term reliability.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Whether maintaining commercial facilities, manufacturing plants, healthcare institutions, hospitality venues, or public infrastructure, Klenco provides the right solution for every cleaning challenge.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* FLOOR CLEANING */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>FLOOR CLEANING</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  Achieve exceptional floor cleaning performance with Klenco's range of scrubber dryers, sweepers, single disc machines, burnishers, carpet extractors, and steam cleaners. Designed to improve productivity while delivering spotless results across every floor type.
                </p>
                <button onClick={() => navigate('/brands/klenco/floor-cleaning')} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Floor Cleaning &rarr;
                </button>
              </div>

              {/* VACUUM CLEANING */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>VACUUM CLEANING</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  From compact commercial vacuum cleaners to powerful industrial vacuum systems, Klenco provides reliable solutions for removing dust, debris, liquids, and fine particles across diverse working environments.
                </p>
                <button onClick={() => navigate('/brands/klenco/vacuum-cleaners')} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Vacuum Cleaning &rarr;
                </button>
              </div>

              {/* HIGH PRESSURE CLEANER */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>HIGH PRESSURE CLEANER</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.
                </p>
                <button onClick={() => navigate('/brands/klenco/high-pressure-cleaners')} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore High Pressure Cleaner &rarr;
                </button>
              </div>

              {/* PROFESSIONAL CLEANING CHEMICALS */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>PROFESSIONAL CLEANING CHEMICALS</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.
                </p>
                <button onClick={() => navigate('/brands/klenco/chemicals')} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Cleaning Chemicals &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // General Brands Overview
  return (
    <div className="fade-in">
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container text-center slide-up">
          <h1 className="heading-xl mb-4">Our Brands</h1>
          <p className="text-lead" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>
            We represent globally recognized brands and provide application-focused cleaning solutions.
          </p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container grid grid-cols-2 gap-12">
          <div className="card card-dark p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/truvox')} style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[250px]">
              <img src="/content_images/truvox-logo.png" alt="Truvox" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: 'white' }}>TRUVOX</h2>
            <p className="text-muted mb-8" style={{ color: '#cbd5e1' }}>UK - Since 1960. Commercial and industrial floorcare equipment.</p>
            <span className="btn btn-primary">Explore Products</span>
          </div>
          <div className="card card-dark p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/klenco')} style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[250px]">
              <img src="/content_images/klenco-logo.png" alt="Klenco" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: 'white' }}>KLENCO</h2>
            <p className="text-muted mb-8" style={{ color: '#cbd5e1' }}>Singapore - Since 1971. Professional cleaning machines and chemicals.</p>
            <span className="btn btn-primary" style={{ backgroundColor: '#e31837' }}>Explore Products</span>
          </div>
        </div>
      </section>
    </div>
  );
}
