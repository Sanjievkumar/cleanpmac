import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="fade-in">
      <section className="section relative" style={{
        background: 'linear-gradient(rgba(10, 10, 15, 0.7), rgba(10, 10, 15, 0.9)), url("/content_images/image_6.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '8rem 0'
      }}>
        <div className="container text-center slide-up">
          <h1 className="heading-xl mb-4 text-gradient">Contact Us</h1>
          <p className="text-lead" style={{ color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Let's find the right cleaning solution for your facility. Reach out to our specialists today.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div className="slide-up">
              <h2 className="heading-lg mb-8">Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="bg-[#1e1e24] p-4 rounded-full border border-[#333]" style={{ color: '#00b0f0' }}>
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white', fontWeight: 'bold' }}>Head Office</h4>
                    <p className="text-[#94a3b8]">Promac Technologies Pvt. Ltd.<br />123 Industrial Area, Phase 1, India</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="bg-[#1e1e24] p-4 rounded-full border border-[#333]" style={{ color: '#00b0f0' }}>
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white', fontWeight: 'bold' }}>Phone</h4>
                    <p className="text-[#94a3b8]">+91 123 456 7890<br />+91 987 654 3210</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="bg-[#1e1e24] p-4 rounded-full border border-[#333]" style={{ color: '#00b0f0' }}>
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white', fontWeight: 'bold' }}>Email</h4>
                    <p className="text-[#94a3b8]">info@cleanpromac.com<br />sales@cleanpromac.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="bg-[#1e1e24] p-4 rounded-full border border-[#333]" style={{ color: '#00b0f0' }}>
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white', fontWeight: 'bold' }}>Business Hours</h4>
                    <p className="text-[#94a3b8]">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card card-dark slide-up" style={{ padding: '3rem' }}>
              <h3 className="mb-8" style={{ fontSize: '1.75rem', color: 'white', fontWeight: 'bold' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-[#1e1e24] border border-[#333] text-white rounded-lg p-3 focus:outline-none focus:border-[#00b0f0] transition-colors" />
                  <input type="text" placeholder="Last Name" className="bg-[#1e1e24] border border-[#333] text-white rounded-lg p-3 focus:outline-none focus:border-[#00b0f0] transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="bg-[#1e1e24] border border-[#333] text-white rounded-lg p-3 focus:outline-none focus:border-[#00b0f0] transition-colors" />
                <input type="text" placeholder="Subject" className="bg-[#1e1e24] border border-[#333] text-white rounded-lg p-3 focus:outline-none focus:border-[#00b0f0] transition-colors" />
                <textarea placeholder="Your Message" rows={5} className="bg-[#1e1e24] border border-[#333] text-white rounded-lg p-3 focus:outline-none focus:border-[#00b0f0] transition-colors"></textarea>
                <button type="button" className="btn btn-primary w-full justify-center">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
