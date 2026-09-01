import { useState } from 'react';
import { Globe, Wrench, Users, CheckCircle, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="fade-in">

      {/* ═══════════ HERO ═══════════ */}
      <section className="about-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Full bleed background image */}
        <img
          src="/content_images/image_6.jpeg"
          alt="About Promac"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
        />
        {/* Diagonal gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,15,30,0.95) 0%, rgba(0,15,30,0.8) 30%, rgba(0,15,30,0.35) 50%, rgba(0,15,30,0.05) 65%, transparent 100%)' }} />
        {/* subtle vignette at bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,15,30,0.4) 0%, transparent 30%)' }} />
        {/* Red top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)', zIndex: 2 }} />
        {/* Vertical red bar */}
        <div style={{ position: 'absolute', top: '15%', left: 0, height: '70%', width: '5px', background: 'var(--accent)', borderRadius: '0 3px 3px 0', zIndex: 2 }} />

        {/* Content */}
        <div className="container about-hero-container">
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '2px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase' }}>PROMAC CLEANING SOLUTIONS</span>
            </div>

            <h1 className="about-hero-title">
              <span style={{ color: 'white', display: 'block' }}>ABOUT</span>
              <span style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent', display: 'block' }}>US</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              PROMAC CLEANING SOLUTIONS is the dedicated cleaning equipment division of{' '}
              <strong style={{ color: 'white' }}>Promac Technologies Pvt. Ltd.</strong> — committed to delivering professional cleaning solutions for commercial, industrial, institutional, and public facilities across India.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
              We go beyond supplying equipment — working closely with customers to understand their needs and recommend solutions that deliver long-term value and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FOUR PILLARS ═══════════ */}
      <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {[
              { Icon: Globe, label: 'GLOBAL BRANDS', desc: 'Partnering with internationally recognized brands that deliver proven performance, innovation, and reliability.' },
              { Icon: Lightbulb, label: 'APPLICATION EXPERTISE', desc: 'Application-focused recommendations tailored to your industry, facility, and operational requirements.' },
              { Icon: Wrench, label: 'TECHNICAL EXCELLENCE', desc: 'Professional installation, commissioning, operator training, and responsive technical support from experienced engineers.' },
              { Icon: Users, label: 'CUSTOMER CENTRIC', desc: 'Every solution is tailored to your operational needs, ensuring the right equipment for maximum performance and long-term value.' },
            ].map(({ Icon, label, desc }) => (
              <div key={label} className="card-3d">
                <div className="icon-3d-wrapper"><Icon size={38} color="var(--accent)" /></div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ VISION & MISSION ═══════════ */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-card">
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(227,30,36,0.07)' }} />
              <div style={{ background: 'rgba(227,30,36,0.15)', display: 'inline-flex', padding: '0.85rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Target size={32} color="var(--accent)" />
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Our Vision</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '1.5rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--accent)', fontWeight: 500 }}>
                To be India's most trusted provider of professional cleaning solutions — delivering innovative technologies, exceptional service, and sustainable solutions that create cleaner, safer, and more efficient environments.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-card">
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(0,31,63,0.03)' }} />
              <div style={{ background: 'rgba(227,30,36,0.1)', display: 'inline-flex', padding: '0.85rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Lightbulb size={32} color="var(--accent)" />
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                To empower businesses with world-class cleaning equipment and expert technical support that improves productivity, enhances hygiene standards, and delivers long-term operational value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMMITMENT ═══════════ */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="commitment-grid">

            {/* Text — navy dark card with hover transition */}
            <div className="commitment-card">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', background: 'var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(227,30,36,0.06)' }} />

              <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>OPERATIONAL EXCELLENCE</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>Our Commitment</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '1.75rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1rem', fontWeight: 500, color: 'white', lineHeight: '1.8', marginBottom: '2rem' }}>
                We believe professional cleaning is an essential part of operational excellence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Technical Excellence', text: 'Every solution is backed by technical expertise and application knowledge to ensure superior cleaning performance.' },
                  { title: 'Lasting Partnerships', text: 'We build partnerships that support customers through the entire lifecycle of their investment — not just the sale.' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      display: 'flex', gap: '1rem', alignItems: 'flex-start',
                      background: hoveredCard === i ? 'var(--accent)' : 'white',
                      borderRadius: '0.75rem', padding: '1.1rem 1.25rem',
                      border: `1px solid ${hoveredCard === i ? 'var(--accent)' : 'rgba(255,255,255,0.9)'}`,
                      transition: 'all 0.35s ease', cursor: 'default',
                      boxShadow: hoveredCard === i ? '0 8px 24px rgba(227,30,36,0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                    <CheckCircle size={20} color={hoveredCard === i ? 'white' : 'var(--accent)'} style={{ flexShrink: 0, marginTop: '0.2rem', transition: 'color 0.3s ease' }} />
                    <div>
                      <h4 style={{ fontWeight: 800, color: hoveredCard === i ? 'white' : 'var(--accent)', fontSize: '0.92rem', marginBottom: '0.25rem', transition: 'color 0.3s ease' }}>{item.title}</h4>
                      <p style={{ color: hoveredCard === i ? 'rgba(255,255,255,0.92)' : 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.88rem', transition: 'color 0.3s ease' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="commitment-img-card">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("/content_images/operational_excellence.jpg") center/cover no-repeat' }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,31,63,0.95), rgba(0,31,63,0.2))' }}></div>
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', padding: '0.4rem 0.9rem', borderRadius: '0.25rem', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>EXCELLENCE</div>
                <h3 style={{ color: 'white', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3 }}>Delivering superior performance across every facility we serve.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ APPROACH ═══════════ */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container max-w-5xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>HOW WE WORK</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.1 }}>Our Approach</h2>
            <div style={{ width: '50px', height: '4px', background: 'var(--accent)', margin: '0 auto 3rem auto', borderRadius: '2px' }} />
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {[
              { num: '01', title: 'Understand', text: 'We assess your facility, cleaning challenges, and operational requirements before recommending anything.' },
              { num: '02', title: 'Recommend', text: 'We identify the most effective cleaning solution based on your application and operational goals.' },
              { num: '03', title: 'Implement', text: 'We install, commission, and train your team for optimal performance from day one.' },
              { num: '04', title: 'Support', text: 'Comprehensive after-sales support, preventive maintenance, AMC, genuine spare parts, and expert assistance throughout the lifecycle.' },
            ].map((step) => {
              const isHovered = activeStep === step.num;
              return (
                <div 
                  key={step.num} 
                  className="timeline-row"
                  onMouseEnter={() => setActiveStep(step.num)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Timeline badge in the exact middle */}
                  <div className="timeline-badge" style={{
                    background: isHovered ? 'var(--accent)' : 'var(--primary)',
                    boxShadow: isHovered ? '0 8px 20px rgba(227,30,36,0.35)' : '0 8px 20px rgba(0,31,63,0.2)',
                    transition: 'all 0.3s ease',
                    transform: `translateX(-50%) ${isHovered ? 'scale(1.15)' : 'scale(1)'}`
                  }}>
                    {step.num}
                  </div>

                  {/* Timeline Card */}
                  <div className={`timeline-card ${isHovered ? 'accent-red' : 'accent-blue'}`}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: isHovered ? 'var(--accent)' : 'var(--primary)', marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{step.text}</p>
                  </div>

                  {/* Timeline Spacer for the other half */}
                  <div className="timeline-spacer"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          height: 90vh;
          min-height: 600px;
        }
        .about-hero-container {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 5rem;
        }
        .about-hero-title {
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
        }
        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .vision-card {
          background: var(--bg-dark);
          padding: 3.5rem;
          border-radius: 1.25rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,31,63,0.2);
        }
        .mission-card {
          background: white;
          padding: 3.5rem;
          border-radius: 1.25rem;
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,0,0,0.05);
        }
        .commitment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: stretch;
        }
        .commitment-card {
          background: var(--bg-dark);
          border-radius: 1.25rem;
          padding: 3.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,31,63,0.15);
          transition: all 0.4s ease;
        }
        .commitment-img-card {
          position: relative;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0,0,0,0.2);
          min-height: 440px;
        }

        @media (max-width: 900px) {
          .about-hero {
            height: auto;
            min-height: 480px;
            padding: 5rem 0 3.5rem;
          }
          .about-hero-container {
            padding-left: 0;
          }
          .about-hero-title {
            font-size: clamp(2.8rem, 9vw, 4.5rem);
            margin-bottom: 1.5rem;
          }
          .vision-mission-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .vision-card, .mission-card {
            padding: 2.25rem 1.5rem;
          }
          .commitment-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .commitment-card {
            padding: 2.25rem 1.5rem;
          }
          .commitment-img-card {
            min-height: 300px;
          }
        }
      `}</style>
    </div>
  );
}

