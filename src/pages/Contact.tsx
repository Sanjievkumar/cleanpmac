import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="slide-up">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.75rem', lineHeight: 1.1 }}>We're Here to Help</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                Whether you need product recommendations, technical support, or customized cleaning solutions, our team is ready to assist you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-3d-wrapper" style={{ margin: 0, padding: '1rem' }}>
                    <MapPin size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Head Office</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Promac Technologies Pvt. Ltd.<br />123 Industrial Area, Phase 1, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-3d-wrapper" style={{ margin: 0, padding: '1rem' }}>
                    <Phone size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>+91 123 456 7890<br />+91 987 654 3210</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-3d-wrapper" style={{ margin: 0, padding: '1rem' }}>
                    <Mail size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>info@cleanpromac.com<br />sales@cleanpromac.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-3d-wrapper" style={{ margin: 0, padding: '1rem' }}>
                    <Clock size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>Business Hours</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-up">
              <div style={{ background: 'white', borderRadius: '1rem', padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid var(--border-color)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}></div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem' }}>Send us a Message</h3>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>First Name</label>
                      <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Last Name</label>
                      <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Email Address</label>
                    <input type="email" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Subject</label>
                    <input type="text" style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Message</label>
                    <textarea rows={4} style={{ width: '100%', background: 'var(--bg-gray)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem', color: 'var(--text-dark)', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                  </div>
                  
                  <button type="button" className="btn-3d" style={{ marginTop: '0.5rem' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
