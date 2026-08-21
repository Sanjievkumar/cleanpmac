import { useParams, useNavigate } from 'react-router-dom';

export default function Brands() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === 'klenco') {
    return (
      <div className="fade-in">

        {/* ─── HERO: full-bleed building image, NO red overlay ─── */}
        <div style={{ position: 'relative', height: '70vh', minHeight: '500px', overflow: 'hidden' }}>
          <img
            src="/content_images/image_9.png"
            alt="Klenco Building"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          {/* very subtle dark scrim so text is legible */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '4rem', textAlign: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>Since 1971 · Singapore</div>
            <img src="/content_images/klenco-logo.png" alt="Klenco" style={{ height: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} onError={(e) => e.currentTarget.style.display = 'none'} />
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
              KLENCO SINGAPORE
            </h1>
          </div>
        </div>

        {/* ─── CONTENT 1: Legacy – white band below hero ─── */}
        <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Story</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              A Legacy of Cleaning Excellence
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Established in 1971 in Singapore, Klenco has grown into one of Asia's leading providers of professional cleaning solutions. What began with a small range of cleaning machines and chemicals has evolved into a comprehensive portfolio serving customers in more than 20 countries across Asia, the Middle East, Australia and Europe.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-dark)' }}>
              Today, Klenco offers an extensive range of commercial cleaning equipment, professional chemicals, janitorial tools and industrial maintenance solutions, supported by expert technical consultation and reliable after-sales service.
            </p>
          </div>
        </section>

        {/* ─── CONTENT 2: One Brand – dark navy band ─── */}
        <section style={{ backgroundColor: 'var(--primary)', padding: '6rem 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
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
                      <div style={{ width: '4px', minWidth: '4px', height: '100%', minHeight: '40px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                      <div>
                        <div style={{ fontWeight: 800, color: 'white', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</div>
                        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/content_images/image_10.png"
                  alt="Klenco Complete Solutions"
                  style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENT 3: Industries – light grey, icon grid ─── */}
        <section style={{ backgroundColor: '#f5f7f9', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                Solutions Across Every Industry
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
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
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem', lineHeight: 1.4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTENT 4: Products – white, image cards ─── */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem auto' }}>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Product Range</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>PRODUCTS</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Klenco offers a comprehensive portfolio of professional cleaning solutions designed to meet the diverse requirements of commercial, industrial, institutional, and municipal environments.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {[
                {
                  title: 'FLOOR CLEANING',
                  image: '/content_images/image_31.jpeg',
                  desc: "Achieve exceptional floor cleaning performance with Klenco's range of scrubber dryers, sweepers, single disc machines, burnishers, carpet extractors, and steam cleaners. Designed to improve productivity while delivering spotless results across every floor type.",
                  link: '#',
                },
                {
                  title: 'VACUUM CLEANING',
                  image: '/content_images/image_20.png',
                  desc: 'From compact commercial vacuum cleaners to powerful industrial vacuum systems, Klenco provides reliable solutions for removing dust, debris, liquids, and fine particles across diverse working environments.',
                  link: '#',
                },
                {
                  title: 'HIGH PRESSURE CLEANER',
                  image: '/content_images/image_27.png',
                  desc: 'A complete range of high-performance high pressure cleaners formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.',
                  link: '#',
                },
                {
                  title: 'PROFESSIONAL CLEANING CHEMICALS',
                  image: '/content_images/image_35.png',
                  desc: 'A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.',
                  link: '#',
                },
              ].map((cat) => (
                <div key={cat.title} style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'none'; }}>
                  <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f5f7f9' }}>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      onError={(e) => { e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, var(--primary) 0%, #1e3a5f 100%)'; e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>{cat.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>{cat.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                      Explore {cat.title.split(' ').slice(0,2).join(' ')} <span style={{ fontSize: '1.1rem' }}>→</span>
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
