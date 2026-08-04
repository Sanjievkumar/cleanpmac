import { Link } from 'react-router-dom';
import { Award, Settings, Headphones, ShieldCheck, RotateCw, Wind, AlignJustify, Waves, Zap, FlaskConical } from 'lucide-react';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{ padding: 0, minHeight: '90vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        {/* Left — content */}
        <div style={{ background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 5rem', position: 'relative', overflow: 'hidden' }}>
          {/* decorative accent top */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          {/* decorative circle */}
          <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(227,30,36,0.07)', zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase' }}>PROFESSIONAL CLEANING EQUIPMENT</span>
            </div>

            <h1 style={{ fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              <span style={{ color: 'white', display: 'block' }}>CLEAN</span>
              <span style={{ color: 'var(--accent)', display: 'block' }}>PROMAC</span>
            </h1>

            <div style={{ display: 'flex', gap: '6px', marginBottom: '2.5rem' }}>
              <div style={{ width: '55px', height: '4px', background: 'var(--accent)', borderRadius: '2px' }} />
              <div style={{ width: '18px', height: '4px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }} />
            </div>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.9', marginBottom: '3rem', maxWidth: '420px' }}>
              Advanced solutions for a cleaner, safer, and more productive environment — for every industry across India.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '3rem' }}>
              {['Simple to Use & Deploy', 'Easy to Maintain', 'Expert After-Sales Support'].map((feat) => (
                <div key={feat} className="hero-pill" style={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
                  <div className="hero-pill-check" style={{ background: 'var(--accent)', color: 'white', borderRadius: '50%', minWidth: '26px', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900, transition: 'all 0.3s ease' }}>✓</div>
                  <span className="hero-pill-text" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.03em', transition: 'color 0.3s ease' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/brands" className="btn-3d" style={{ fontSize: '0.9rem' }}>EXPLORE BRANDS</Link>
              <Link to="/contact" className="btn-ghost">Contact Us →</Link>
            </div>
          </div>
        </div>

        {/* Right — full image */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#e8f4f8' }}>
          <img
            src="/content_images/hero-lady.jpg"
            alt="Professional Cleaning with Truvox Multiwash PRO"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          {/* subtle left gradient to blend into navy panel */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,15,30,0.35) 0%, transparent 30%)' }} />
          {/* floating badge */}
          <div style={{ position: 'absolute', bottom: '2.5rem', left: '2rem', background: 'white', borderRadius: '0.75rem', padding: '0.85rem 1.25rem', boxShadow: '0 12px 30px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--accent)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontSize: '1rem' }}>✦</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Truvox Multiwash PRO</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>Global Floorcare Solutions</div>
            </div>
          </div>
        </div>
      </section>


      {/* The Clean Revolution */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>

            {/* Text — RIGHT */}
            <div style={{ flex: 1, order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>WHO WE ARE</span>
              </div>
              <h2 className="heading-lg mb-2" style={{ color: 'var(--primary)' }}>The Clean Revolution</h2>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', fontWeight: 600 }}>Professional Cleaning Solutions for Every Industry</h3>
              <p className="mb-4 text-muted" style={{ lineHeight: '1.8' }}>
                PROMAC CLEANING SOLUTIONS is the dedicated cleaning equipment division of Promac Technologies Pvt. Ltd., delivering world-class commercial and industrial cleaning equipment across India. We partner with globally trusted brands to provide advanced cleaning technologies that improve productivity, hygiene, safety, and operational efficiency.
              </p>
              <p className="mb-4 text-muted" style={{ lineHeight: '1.8' }}>
                From facility management companies and manufacturing plants to hospitals, hotels, airports, educational institutions, retail spaces, and commercial buildings, we provide the right cleaning solution for every application.
              </p>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginTop: '1.5rem', lineHeight: '1.7' }}>
                With expert consultation, reliable after-sales support, and a commitment to customer success, Clean Promac is your trusted partner for professional cleaning.
              </p>
            </div>

            {/* Image — LEFT */}
            <div style={{ flex: 1, order: 1, position: 'relative', paddingBottom: '18px', paddingLeft: '18px' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 'calc(100% - 18px)', height: 'calc(100% - 18px)', background: 'var(--accent)', borderRadius: '1.25rem', zIndex: 0 }} />
              <div className="hover-scale" style={{ position: 'relative', zIndex: 1, borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,0,0,0.14)', height: '460px' }}>
                <img
                  src="/content_images/clean_revolution.jpg"
                  alt="Professional Cleaning Solutions"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(0,31,63,0.85)', backdropFilter: 'blur(8px)', borderRadius: '0.6rem', padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Trusted Across Industries</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features / Icons Banner */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Award size={48} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>WORLD-CLASS</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>EQUIPMENT</p>
            </div>
            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Settings size={48} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>ENGINEERED FOR</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>RELIABILITY</p>
            </div>
            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Headphones size={48} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>EXPERT SUPPORT</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>& SERVICE</p>
            </div>
            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <ShieldCheck size={48} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>TRUSTED BY</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>INDUSTRIES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Challenges & Our Approach */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6" style={{ color: 'var(--primary)' }}>Every Facility Has Different Cleaning Challenges</h2>
            <p className="text-lead mb-4 max-w-4xl mx-auto" style={{ lineHeight: '1.8' }}>
              Maintaining hygiene, improving productivity, reducing labour, and lowering operating costs require more than just cleaning equipment—they require the right solution.
            </p>
            <p className="text-lead max-w-4xl mx-auto" style={{ lineHeight: '1.8' }}>
              PROMAC CLEANING SOLUTIONS delivers professional cleaning technologies that help organizations clean smarter, work faster, and maintain consistently high standards across every environment.
            </p>
          </div>

          <div style={{ background: 'var(--bg-dark)', borderRadius: '1rem', padding: '4rem', color: 'white', boxShadow: '0 20px 40px rgba(0, 31, 63, 0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="heading-lg mb-4 text-center" style={{ color: 'white' }}>OUR APPROACH</h2>
              <h3 className="text-center mb-8" style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 600 }}>More Than Equipment. Complete Cleaning Solutions.</h3>
              
              <div className="grid grid-cols-2 gap-12 mt-8">
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'white' }}>
                  Selecting the right cleaning equipment is only the beginning. We work closely with customers to understand their facility, cleaning requirements, and operational goals before recommending the most effective solution.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'white' }}>
                  From equipment selection and product demonstrations to installation, operator training, preventive maintenance, and after-sales support, we provide complete lifecycle support to help maximize productivity and equipment performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg" style={{ color: 'var(--primary)' }}>GLOBAL PARTNERS</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '1.5rem auto 0' }}></div>
          </div>
          
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-12 items-center" style={{ background: 'white', borderRadius: '1rem', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <div className="flex justify-center hover-scale" style={{ padding: '2rem' }}>
                <img src="/content_images/truvox-logo.png" alt="Truvox" style={{ width: '100%', maxWidth: '300px', objectFit: 'contain' }} />
              </div>
              <div>
                <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>TRUVOX INTERNATIONAL - UK - Since 1960</h3>
                <p className="mb-6 text-muted" style={{ lineHeight: '1.8' }}>
                  Truvox is a global name in commercial and industrial floorcare equipment. With a heritage dating back to 1960, the brand is known for practical, reliable machines designed to make professional cleaning simpler and more effective. Its range includes scrubber dryers, single-disc machines, vacuum cleaners, carpet care equipment, sweepers, and specialist floorcare solutions—suited to facilities management, healthcare, education, retail, leisure, and industrial environments.
                </p>
                <Link to="/brands/truvox" className="btn btn-truvox">Explore Products</Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 items-center" style={{ background: 'white', borderRadius: '1rem', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <div>
                <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>Klenco Singapore Pte Ltd – Since 1976</h3>
                <p className="mb-4 text-muted" style={{ lineHeight: '1.8' }}>
                  Established in 1976, Klenco is a globally recognized cleaning solutions brand offering a comprehensive portfolio of professional cleaning equipment, tools, consumables, and chemicals. Its extensive range supports everyday housekeeping, floor care, industrial cleaning, hygiene management, and specialized cleaning applications across diverse industries.
                </p>
                <p className="mb-8 text-muted" style={{ lineHeight: '1.8' }}>
                  From advanced cleaning machines and vacuum systems, Klenco delivers reliable, high-performance solutions designed to enhance cleaning efficiency, improve hygiene standards, and meet the evolving needs of commercial and industrial facilities.
                </p>
                <Link to="/brands/klenco" className="btn btn-klenco">Explore Products</Link>
              </div>
              <div className="flex justify-center hover-scale" style={{ padding: '3rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                <img src="/content_images/klenco-logo.png" alt="Klenco" style={{ width: '100%', maxWidth: '300px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Built Around Your Cleaning Needs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4" style={{ color: 'var(--primary)' }}>SOLUTIONS BUILT AROUND YOUR CLEANING NEEDS</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto' }}></div>
                <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <RotateCw size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">Floor Care</h3>
              <p className="card-3d-text">High-performance floor cleaning for commercial and industrial facilities.</p>
            </div>

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Wind size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">Vacuum Cleaning</h3>
              <p className="card-3d-text">Professional wet & dry vacuum solutions for every application.</p>
            </div>

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <AlignJustify size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">Carpet Care</h3>
              <p className="card-3d-text">Deep cleaning solutions designed to restore and maintain carpets.</p>
            </div>

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Waves size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">Steam Cleaning</h3>
              <p className="card-3d-text">Advanced chemical-free cleaning and deep sanitization.</p>
            </div>

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <Zap size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">High Pressure</h3>
              <p className="card-3d-text">Easily remove stubborn dirt, grease, and tough contaminants.</p>
            </div>

            <div className="card-3d">
              <div className="icon-3d-wrapper">
                <FlaskConical size={52} strokeWidth={2} color="var(--accent)" />
              </div>
              <h3 className="card-3d-title">Specialty</h3>
              <p className="card-3d-text">Purpose-built advanced solutions for demanding environments.</p>
            </div>

          </div>
          </div>
        </div>
      </section>

      {/* Let's Find the Right Cleaning Solution */}
      <section className="section pb-12" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="card-3d" style={{ background: 'var(--primary)', padding: '5rem 4rem', textAlign: 'center', borderColor: 'var(--primary)' }}>
            <h2 className="heading-lg mb-6" style={{ color: 'white' }}>Let's Find the Right Cleaning Solution</h2>
            <p className="text-lead mx-auto" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '800px', marginBottom: '3rem' }}>
              Whether you're planning a new facility, expanding your operations, or replacing existing equipment, our specialists are ready to help you identify the most effective cleaning solution for your application.
            </p>
            <Link to="/contact" className="btn-3d" style={{ fontSize: '1.1rem' }}>CONTACT OUR EXPERTS</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
