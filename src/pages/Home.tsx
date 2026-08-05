import { Link } from 'react-router-dom';
import { Award, Settings, Headphones, ShieldCheck, RotateCw, Wind, AlignJustify, Waves, Zap, FlaskConical, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="fade-in">
      {/* ═══════════ PREMIUM HERO ═══════════ */}
      <section style={{ position: 'relative', height: '90vh', minHeight: '650px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Image */}
        <img
          src="/content_images/clean_revolution.jpg"
          alt="Professional Cleaning with Truvox Multiwash PRO"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', zIndex: 0 }}
        />
        
        {/* Premium Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,15,30,0.98) 0%, rgba(0,15,30,0.92) 30%, rgba(0,15,30,0.5) 55%, transparent 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,15,30,0.4) 0%, transparent 20%)', zIndex: 1 }} />
        
        {/* Accent Lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: '15%', left: 0, height: '70%', width: '6px', background: 'var(--accent)', borderRadius: '0 4px 4px 0', zIndex: 2 }} />

        {/* Content Container */}
        <div className="container" style={{ position: 'relative', zIndex: 3, paddingLeft: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100%' }}>
          
          {/* Main Text Content */}
          <div style={{ maxWidth: '650px', paddingBottom: '10vh' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase' }}>Professional Equipment</span>
            </div>

            <h1 style={{ fontSize: 'clamp(3.8rem, 6.5vw, 6rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              <span style={{ color: 'white', display: 'block', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>CLEAN</span>
              <span style={{ color: 'var(--accent)', display: 'block', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>PROMAC</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '500px', fontWeight: 500 }}>
              Advanced solutions for a cleaner, safer, and more productive environment — for every industry across India.
            </p>

            {/* Premium Feature Pills - Horizontal layout */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              {['Simple to Use & Deploy', 'Easy to Maintain', 'Expert Support'].map((feat) => (
                <div key={feat} style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.6rem', 
                  background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255,255,255,0.15)', borderRadius: '2rem', 
                  padding: '0.5rem 1.25rem', color: 'white' 
                }}>
                  <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
                    <ShieldCheck size={16} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link to="/brands" className="btn-3d" style={{ padding: '1.1rem 2.5rem', fontSize: '1rem' }}>EXPLORE BRANDS</Link>
              <Link to="/contact" style={{ 
                color: 'white', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', 
                borderBottom: '2px solid transparent', paddingBottom: '0.2rem', transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Floating Glassmorphic Badge */}
          <div style={{ 
            marginBottom: '10vh', marginRight: '2rem',
            background: 'rgba(0,15,30,0.65)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: '1rem',
            padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ background: 'var(--accent)', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '1.2rem' }}>✦</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Truvox Multiwash PRO</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.02em' }}>Global Floorcare Solutions</div>
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
                  src="/content_images/hero-lady.jpg"
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
