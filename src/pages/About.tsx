import { useState } from 'react';
import { Globe, Wrench, Users, CheckCircle, Lightbulb, Target, Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="fade-in">

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ position: 'relative', height: '92vh', overflow: 'hidden' }}>
        {/* Full bleed background image */}
        <img
          src="/content_images/image_6.jpeg"
          alt="About Promac"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
        />
        {/* Diagonal gradient overlay — solid left for text, transparent right for image */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,15,30,0.95) 0%, rgba(0,15,30,0.8) 30%, rgba(0,15,30,0.35) 50%, rgba(0,15,30,0.05) 65%, transparent 100%)' }} />
        {/* subtle vignette at bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,15,30,0.4) 0%, transparent 30%)' }} />
        {/* Red top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)', zIndex: 2 }} />
        {/* Vertical red bar */}
        <div style={{ position: 'absolute', top: '15%', left: 0, height: '70%', width: '5px', background: 'var(--accent)', borderRadius: '0 3px 3px 0', zIndex: 2 }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '5rem' }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '28px', height: '2px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase' }}>PROMAC CLEANING SOLUTIONS</span>
            </div>

            <h1 style={{ fontSize: 'clamp(4.5rem, 7vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '2.5rem' }}>
              <span style={{ color: 'white', display: 'block' }}>ABOUT</span>
              <span style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent', display: 'block' }}>US</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', marginBottom: '1.25rem' }}>
              PROMAC CLEANING SOLUTIONS is the dedicated cleaning equipment division of{' '}
              <strong style={{ color: 'white' }}>Promac Technologies Pvt. Ltd.</strong> — committed to delivering professional cleaning solutions for commercial, industrial, institutional, and public facilities across India.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.9' }}>
              We go beyond supplying equipment — working closely with customers to understand their needs and recommend solutions that deliver long-term value and measurable results.
            </p>


          </div>
        </div>
      </section>

      {/* ═══════════ FOUR PILLARS ═══════════ */}
      <section style={{ padding: '5rem 0', background: 'white', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            {[
              { Icon: Globe, label: 'GLOBAL BRANDS', desc: 'Partnering with internationally recognized brands that deliver proven performance, innovation, and reliability.' },
              { Icon: Lightbulb, label: 'APPLICATION EXPERTISE', desc: 'Application-focused recommendations tailored to your industry, facility, and operational requirements.' },
              { Icon: Wrench, label: 'TECHNICAL EXCELLENCE', desc: 'Professional installation, commissioning, operator training, and responsive technical support from experienced engineers.' },
              { Icon: Users, label: 'CUSTOMER CENTRIC', desc: 'Every solution is tailored to your operational needs, ensuring the right equipment for maximum performance and long-term value.' },
            ].map(({ Icon, label, desc }) => (
              <div key={label} className="card-3d">
                <div className="icon-3d-wrapper"><Icon size={40} color="var(--accent)" /></div>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {/* Vision */}
            <div style={{ background: 'var(--bg-dark)', padding: '4rem', borderRadius: '1.25rem', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,31,63,0.2)' }}>
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(227,30,36,0.07)' }} />
              <div style={{ background: 'rgba(227,30,36,0.15)', display: 'inline-flex', padding: '0.9rem', borderRadius: '50%', marginBottom: '2rem' }}>
                <Target size={36} color="var(--accent)" />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Our Vision</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '1.5rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--accent)', fontWeight: 500 }}>
                To be India's most trusted provider of professional cleaning solutions — delivering innovative technologies, exceptional service, and sustainable solutions that create cleaner, safer, and more efficient environments.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: 'white', padding: '4rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.05)' }}>
              <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(0,31,63,0.03)' }} />
              <div style={{ background: 'rgba(227,30,36,0.1)', display: 'inline-flex', padding: '0.9rem', borderRadius: '50%', marginBottom: '2rem' }}>
                <Lightbulb size={36} color="var(--accent)" />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-muted)' }}>
                To empower businesses with world-class cleaning equipment and expert technical support that improves productivity, enhances hygiene standards, and delivers long-term operational value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMMITMENT ═══════════ */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-stretch">

            {/* Text — navy dark card with hover transition */}
            <div style={{
              background: 'var(--bg-dark)',
              borderRadius: '1.25rem',
              padding: '4rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0,31,63,0.15)',
              transition: 'all 0.4s ease',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', background: 'var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(227,30,36,0.06)' }} />

              <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>OPERATIONAL EXCELLENCE</p>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>Our Commitment</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }} />
              <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                We believe professional cleaning is an essential part of operational excellence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      borderRadius: '0.75rem', padding: '1.25rem 1.5rem',
                      border: `1px solid ${hoveredCard === i ? 'var(--accent)' : 'rgba(255,255,255,0.9)'}`,
                      transition: 'all 0.35s ease', cursor: 'default',
                      boxShadow: hoveredCard === i ? '0 8px 24px rgba(227,30,36,0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                    <CheckCircle size={20} color={hoveredCard === i ? 'white' : 'var(--accent)'} style={{ flexShrink: 0, marginTop: '0.2rem', transition: 'color 0.3s ease' }} />
                    <div>
                      <h4 style={{ fontWeight: 800, color: hoveredCard === i ? 'white' : 'var(--accent)', fontSize: '0.95rem', marginBottom: '0.35rem', transition: 'color 0.3s ease' }}>{item.title}</h4>
                      <p style={{ color: hoveredCard === i ? 'rgba(255,255,255,0.92)' : 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,0,0,0.2)', minHeight: '480px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("/content_images/operational_excellence.jpg") center/cover no-repeat' }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,31,63,0.95), rgba(0,31,63,0.2))' }}></div>
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>EXCELLENCE</div>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3 }}>Delivering superior performance across every facility we serve.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ APPROACH ═══════════ */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-start">

            <div className="process-container" style={{ position: 'sticky', top: '8rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', boxShadow: '0 24px 50px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>The Promac Process</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="hover-scale" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', borderBottom: '3px solid var(--primary)', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ background: 'var(--bg-gray)', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', transition: 'all 0.3s ease' }}>
                    <Target size={20} color="var(--primary)" />
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Assess</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.8 }}>We evaluate your specific facility needs.</p>
                </div>
                
                <div className="hover-scale" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', borderBottom: '3px solid var(--primary)', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ background: 'var(--bg-gray)', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', transition: 'all 0.3s ease' }}>
                    <Lightbulb size={20} color="var(--primary)" />
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Design</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.8 }}>We engineer a customized cleaning plan.</p>
                </div>
                
                <div className="hover-scale" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', borderBottom: '3px solid var(--accent)', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ background: 'var(--accent)', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '0 4px 10px rgba(227,30,36,0.2)', transition: 'all 0.3s ease' }}>
                    <Wrench size={20} color="white" />
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Execute</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.8 }}>Deployment of top-tier equipment.</p>
                </div>
                
                <div className="hover-scale" style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', borderBottom: '3px solid var(--primary)', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ background: 'var(--bg-gray)', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', transition: 'all 0.3s ease' }}>
                    <Shield size={20} color="var(--primary)" />
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Maintain</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.8 }}>Ongoing support and maintenance.</p>
                </div>
              </div>
              
              <div className="hover-scale" style={{ background: 'var(--primary)', borderRadius: '1rem', padding: '1.5rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                  <CheckCircle2 size={24} color="white" />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>End-to-End Reliability</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>We stand by our equipment long after installation.</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>HOW WE WORK</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.1 }}>Our Approach</h2>
              <div style={{ width: '50px', height: '4px', background: 'var(--accent)', marginBottom: '3rem', borderRadius: '2px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { num: '01', title: 'Understand', text: 'We assess your facility, cleaning challenges, and operational requirements before recommending anything.', accent: false },
                  { num: '02', title: 'Recommend', text: 'We identify the most effective cleaning solution based on your application and operational goals.', accent: false },
                  { num: '03', title: 'Implement', text: 'We install, commission, and train your team for optimal performance from day one.', accent: false },
                  { num: '04', title: 'Support', text: 'Comprehensive after-sales support, preventive maintenance, AMC, genuine spare parts, and expert assistance throughout the lifecycle.', accent: true },
                ].map((step, i, arr) => (
                  <div key={step.num} style={{ display: 'flex', gap: '1.75rem', paddingBottom: i < arr.length - 1 ? '2rem' : 0, position: 'relative' }}>
                    {i < arr.length - 1 && (
                      <div style={{ position: 'absolute', left: '23px', top: '50px', bottom: 0, width: '2px', background: 'linear-gradient(180deg, var(--border-color), transparent)' }} />
                    )}
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      background: step.accent ? 'var(--accent)' : 'var(--primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 900, fontSize: '0.85rem', color: 'white', flexShrink: 0,
                      position: 'relative', zIndex: 1,
                      boxShadow: step.accent ? '0 8px 20px rgba(227,30,36,0.35)' : '0 8px 20px rgba(0,31,63,0.2)',
                    }}>
                      {step.num}
                    </div>
                    <div style={{
                      background: 'white', borderRadius: '1rem', padding: '1.75rem 2rem', flex: 1,
                      border: '1px solid var(--border-color)',
                      borderLeft: `4px solid ${step.accent ? 'var(--accent)' : 'var(--primary)'}`,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: step.accent ? 'var(--accent)' : 'var(--primary)', marginBottom: '0.5rem' }}>{step.title}</h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.93rem' }}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
