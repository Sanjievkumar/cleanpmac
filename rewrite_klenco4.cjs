const fs = require('fs');

const path = 'src/pages/Brands.tsx';
const content = fs.readFileSync(path, 'utf8');

const startStr = "  if (id === 'klenco') {";
const endStr = "  // General Brands Overview";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find blocks. Start:", startIndex, "End:", endIndex);
  process.exit(1);
}

const newKlencoBlock = `  if (id === 'klenco') {
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

        {/* ─── CONTENT 2: One Brand – dark navy, stats on right instead of screenshot ─── */}
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
                      <div style={{ width: '4px', minWidth: '4px', alignSelf: 'stretch', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                      <div>
                        <div style={{ fontWeight: 800, color: 'white', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</div>
                        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: key stats/highlights instead of screenshot */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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
                    padding: '2rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(4px)',
                  }}>
                    <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.number}</div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENT 3: Industries – 4x2 grid ─── */}
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

        {/* ─── CONTENT 4: Products – no images, bold styled cards ─── */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem auto' }}>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Product Range</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>PRODUCTS</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Klenco offers a comprehensive portfolio of professional cleaning solutions designed to meet the diverse requirements of commercial, industrial, institutional, and municipal environments. Every product is engineered to deliver superior cleaning performance, enhanced productivity, and long-term reliability.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
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
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
                  {/* Colored top bar */}
                  <div style={{ height: '6px', backgroundColor: 'var(--accent)' }} />
                  <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Number badge */}
                    <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#f0f2f5', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.04em' }}>{cat.num}</div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.02em' }}>{cat.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', flex: 1, marginBottom: '2rem' }}>{cat.desc}</p>
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
      </div>
    );
  }
`;

const newContent = content.substring(0, startIndex) + newKlencoBlock + "\n" + content.substring(endIndex);
fs.writeFileSync(path, newContent, 'utf8');
console.log("Done. All 4 errors fixed.");
