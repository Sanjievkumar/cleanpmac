import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Users, Package, HeartHandshake, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="fade-in">

      {/* ═══════════ HERO ═══════════ */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <img
          src="/content_images/support-hero.jpg"
          alt="Support & Service"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '75% center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,15,30,0.95) 0%, rgba(0,15,30,0.8) 30%, rgba(0,15,30,0.35) 50%, rgba(0,15,30,0.05) 65%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,15,30,0.4) 0%, transparent 30%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 60%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: '15%', left: 0, height: '70%', width: '5px', background: 'var(--accent)', borderRadius: '0 3px 3px 0', zIndex: 2 }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '5rem' }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ width: '28px', height: '2px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase' }}>AFTER-SALES EXCELLENCE</span>
            </div>

            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
              <span style={{ color: 'white', display: 'block' }}>SUPPORT</span>
              <span style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent', display: 'block' }}>&amp; SERVICE</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', maxWidth: '520px' }}>
              Keeping your cleaning operations performing at their best — with expert technical support, preventive maintenance, and genuine spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container max-w-5xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>OUR COMMITMENT</span>
              <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Keeping Your Cleaning Operations<br />Performing at Their Best
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.9', textAlign: 'center' }}>
              At Promac Cleaning Solutions, we believe outstanding service goes beyond maintaining equipment—it's about helping our customers achieve consistent cleaning performance, maximum productivity, and long-term operational efficiency.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.9', textAlign: 'center' }}>
              Our experienced technical team supports customers throughout the lifecycle of their equipment, delivering expert guidance, proactive maintenance, and responsive technical assistance to ensure every machine continues to perform at its highest standard.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--primary)', lineHeight: '1.9', textAlign: 'center', fontWeight: 600 }}>
              By combining technical expertise with a customer-first approach, we help businesses reduce downtime, extend equipment life, and maintain uninterrupted operations.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR APPROACH ═══════════ */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container max-w-6xl mx-auto">
          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>

            {/* Navy dark text panel */}
            <div style={{ flex: 1, background: 'var(--bg-dark)', borderRadius: '1.25rem', padding: '4rem', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,31,63,0.2)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', background: 'var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(227,30,36,0.06)' }} />

              <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>SERVICE PHILOSOPHY</p>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>Our Approach</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }} />

              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                Every facility has unique cleaning challenges, and every machine plays a critical role in daily operations. That's why our approach is built around understanding your operational requirements and providing practical, long-term support rather than simply responding to service requests.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                We focus on maintaining machine performance through regular inspections, preventive care, operator guidance, and technical expertise, enabling our customers to achieve greater reliability, lower operating costs, and improved cleaning productivity.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'white', lineHeight: '1.9', fontWeight: 600 }}>
                Our commitment is to become a trusted service partner who helps you maximize the value of your investment throughout the equipment lifecycle.
              </p>
            </div>

            {/* Image placeholder */}
            <div style={{ flex: '0 0 400px', position: 'relative', paddingBottom: '18px', paddingLeft: '18px' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 'calc(100% - 18px)', height: 'calc(100% - 18px)', background: 'var(--accent)', borderRadius: '1.25rem', zIndex: 0 }} />
              <div className="hover-scale" style={{ position: 'relative', zIndex: 1, borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,0,0,0.14)', height: '500px' }}>
                <div style={{ width: '100%', height: '100%', background: 'url("/content_images/service_philosophy.jpg") center/cover no-repeat' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GENUINE SPARE PARTS ═══════════ */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container max-w-6xl mx-auto">
          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>

            {/* Icon side */}
            <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ background: 'rgba(227,30,36,0.08)', borderRadius: '50%', padding: '2.5rem', marginBottom: '2rem' }}>
                <Package size={64} color="var(--accent)" strokeWidth={1.5} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%' }}>
                {[
                  'Maintain optimum machine performance',
                  'Reduce equipment downtime',
                  'Increase component life',
                  'Ensure safe and reliable operation',
                  'Protect long-term equipment value',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="spare-part-pill"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      background: 'var(--bg-gray)', borderRadius: '0.6rem',
                      padding: '0.75rem 1rem', border: '1px solid var(--border-color)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'default',
                      animationDelay: `${i * 0.1}s`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'rgba(227,30,36,0.06)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(227,30,36,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.background = 'var(--bg-gray)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0, transition: 'transform 0.3s ease' }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>OEM COMPONENTS</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1.1 }}>Genuine Spare Parts</h2>
              <div style={{ width: '50px', height: '4px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }} />

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                Maintaining equipment with genuine replacement parts helps preserve performance, reliability, and safety throughout its operating life.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                Promac Cleaning Solutions provides access to genuine OEM spare parts, ensuring the correct fit, dependable operation, and long-term durability of your professional cleaning equipment.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--primary)', lineHeight: '1.9', fontWeight: 600 }}>
                Using genuine parts helps maintain performance, reduce downtime, and protect your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE PROMAC ═══════════ */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>THE PROMAC ADVANTAGE</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', lineHeight: 1.1 }}>Why Choose Promac Cleaning Solutions?</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '1.5rem auto 0', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { Icon: Wrench, title: 'Technical Expertise', desc: 'Our experienced service engineers understand the demands of professional cleaning environments and provide practical solutions that keep equipment performing efficiently.' },
              { Icon: ShieldCheck, title: 'Proactive Support', desc: 'We believe prevention is better than repair. Our maintenance approach helps reduce downtime and improve equipment reliability.' },
              { Icon: Users, title: 'Customer Partnership', desc: 'We work closely with customers to understand their operational needs and provide ongoing technical support that delivers lasting value.' },
              { Icon: Package, title: 'Genuine OEM Parts', desc: 'We use genuine manufacturer-approved components to maintain equipment performance, reliability, and longevity.' },
              { Icon: HeartHandshake, title: 'Long-Term Commitment', desc: 'Our support extends beyond the sale. We are committed to helping customers maximize productivity and achieve the best possible return on their investment.' },
              { Icon: Clock, title: 'Responsive Service', desc: 'When you need assistance, our team responds quickly with expert technical support to minimize disruption and get your operations back on track.' },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === i ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${hoveredCard === i ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '1rem',
                  padding: '2.5rem 2rem',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                  boxShadow: hoveredCard === i ? '0 12px 30px rgba(227,30,36,0.3)' : 'none',
                  transform: hoveredCard === i ? 'translateY(-4px)' : 'none',
                }}
              >
                <div style={{
                  background: hoveredCard === i ? 'rgba(255,255,255,0.2)' : 'rgba(227,30,36,0.12)',
                  borderRadius: '50%',
                  padding: '0.9rem',
                  display: 'inline-flex',
                  marginBottom: '1.5rem',
                  transition: 'all 0.3s ease',
                }}>
                  <Icon size={28} color="white" />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem', transition: 'color 0.3s ease' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: hoveredCard === i ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.55)', lineHeight: '1.7', transition: 'color 0.3s ease' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SUPPORTING YOUR SUCCESS ═══════════ */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container max-w-4xl mx-auto text-center">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>YOUR SUCCESS IS OUR PRIORITY</span>
            <div style={{ width: '30px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1.1, marginBottom: '2rem' }}>Supporting Your Success</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '3rem' }}>
            At Promac Cleaning Solutions, service is about more than maintaining machines—it's about helping your business operate with confidence. Through expert technical support, preventive maintenance, and a commitment to long-term customer success, we ensure your cleaning equipment continues to deliver reliable performance every day.
          </p>
          <Link to="/contact" className="btn-3d" style={{ fontSize: '0.95rem' }}>
            GET IN TOUCH <ArrowRight size={18} style={{ marginLeft: '0.5rem', display: 'inline' }} />
          </Link>
        </div>
      </section>

      {/* ═══════════ SOLUTIONS FOR EVERY INDUSTRY ═══════════ */}
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0' }}>
        <div className="container max-w-6xl mx-auto">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', letterSpacing: '0.05em' }}>SOLUTIONS FOR EVERY INDUSTRY</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '1.5rem auto 0', borderRadius: '2px' }} />
          </div>
        </div>
      </section>

    </div>
  );
}
