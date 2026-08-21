import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20" style={{
        background: 'linear-gradient(135deg, rgba(0,31,63,0.95) 0%, rgba(0,8,20,0.98) 100%), url("/content_images/image_6.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 text-center slide-up">
          <p style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>GET IN TOUCH</p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>Contact Us</h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto 1.5rem auto', borderRadius: '2px' }} />
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Let's find the right cleaning solution for your facility. Reach out to our specialists today for expert consultation and support.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
        <div className="container max-w-6xl mx-auto">
          <div style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)', display: 'flex', border: '1px solid var(--border-color)' }}>
            
            {/* Contact Information - Left Pane (Dark) */}
            <div style={{ flex: '1', background: 'var(--primary)', padding: '4rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, background: 'radial-gradient(circle at top right, white 0%, transparent 70%)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>Get in Touch</h2>
                <div style={{ width: '40px', height: '4px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }} />
                <p style={{ fontSize: '1.05rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: '1.8' }}>
                  Have questions about our industrial cleaning solutions? Our experts are ready to provide the answers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  <div className="hover-scale" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <MapPin size={24} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Head Office</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Promac Technologies Pvt. Ltd.<br />123 Industrial Area, Phase 1, India</p>
                    </div>
                  </div>

                  <div className="hover-scale" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Phone size={24} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Phone</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>+91 123 456 7890<br />+91 987 654 3210</p>
                    </div>
                  </div>

                  <div className="hover-scale" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Mail size={24} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>Email</h4>
                      <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>info@cleanpromac.com<br />sales@cleanpromac.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Pane (Light) */}
            <div style={{ flex: '1.2', background: 'white', padding: '4rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>Send a Message</h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>First Name</label>
                    <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="John" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Last Name</label>
                    <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="john@company.com" />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
                  <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500 }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="How can we help?" />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                  <textarea rows={4} style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid transparent', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'all 0.3s', fontWeight: 500, resize: 'vertical' }} onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 4px rgba(0,31,63,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--bg-gray)'; e.target.style.boxShadow = 'none'; }} placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="button" className="btn-3d" style={{ marginTop: '1rem', width: '100%', padding: '1.25rem', fontSize: '1rem', letterSpacing: '0.1em' }}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
