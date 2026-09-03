import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="contact-hero relative" style={{
        background: 'linear-gradient(135deg, rgba(0,31,63,0.95) 0%, rgba(0,8,20,0.98) 100%), url("/content_images/image_6.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 text-center slide-up">
          <p style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>GET IN TOUCH</p>
          <h1 className="contact-title" style={{ fontWeight: 900, color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>Contact Us</h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Let's find the right cleaning solution for your facility. Reach out to our specialists today for expert consultation and support.
          </p>
        </div>
      </section>

      <section className="contact-main-section" style={{ background: '#f8fafc' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="contact-card-container">
            
            {/* Contact Information - Left Pane (Dark) */}
            <div className="contact-info-pane">
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, background: 'radial-gradient(circle at top right, white 0%, transparent 70%)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>Get in Touch</h2>
                <div style={{ width: '40px', height: '4px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }} />
                <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                  Have questions about our industrial cleaning solutions? Our experts are ready to provide the answers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="hover-scale" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                      <MapPin size={22} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Head Office</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>Ground Floor, Door No:5, Plot No:33,<br />Sapthagiri Nagar, Inner Ring Road,<br />Puludivakkam, Chennai - 600091,<br />Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="hover-scale" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                      <Phone size={22} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Phone</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>+91 9566340888</p>
                    </div>
                  </div>

                  <div className="hover-scale" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                      <Mail size={22} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Email</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>senthil@cleanpromac.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Pane (Light) */}
            <div className="contact-form-pane">
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>Send a Message</h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="contact-names-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>First Name</label>
                    <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '0.9rem 1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="John" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Name</label>
                    <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '0.9rem 1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '0.9rem 1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="john@company.com" />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
                  <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '0.9rem 1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="How can we help?" />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                  <textarea rows={4} style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '0.9rem 1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500, resize: 'vertical' }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="button" className="btn-3d" style={{ marginTop: '0.5rem', width: '100%', padding: '1.1rem', fontSize: '0.95rem', letterSpacing: '0.1em' }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          padding: 8rem 0 5rem;
        }
        .contact-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
        }
        .contact-main-section {
          padding: 5rem 0;
        }
        .contact-card-container {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          display: flex;
          border: 1px solid var(--border-color);
        }
        .contact-info-pane {
          flex: 1;
          background: var(--primary);
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }
        .contact-form-pane {
          flex: 1.2;
          background: white;
          padding: 4rem;
        }
        .contact-names-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 850px) {
          .contact-hero {
            padding: 6rem 0 3.5rem;
          }
          .contact-main-section {
            padding: 3rem 0;
          }
          .contact-card-container {
            flex-direction: column;
            border-radius: 1rem;
          }
          .contact-info-pane,
          .contact-form-pane {
            padding: 2.25rem 1.5rem;
            flex: none;
            width: 100%;
          }
          .contact-names-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
