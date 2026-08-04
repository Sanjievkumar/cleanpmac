import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container grid grid-cols-4 gap-12 mb-12">
        <div className="footer-col">
          <div style={{ background: 'white', display: 'inline-block', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '1.25rem' }}>
            <img src="/content_images/clean-promac-logo.jpg" alt="Clean Promac Technologies" style={{ height: '40px', objectFit: 'contain' }} />
          </div>
          <p className="footer-text">Professional Cleaning Solutions for Every Industry. We provide complete lifecycle support to maximize productivity and equipment performance.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/support">Support & Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Partner Brands</h4>
          <ul className="footer-links">
            <li><Link to="/brands/truvox">Truvox International</Link></li>
            <li><Link to="/brands/klenco">Klenco Singapore</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <p className="footer-text mb-2"><strong>Email:</strong> info@cleanpromac.com</p>
          <p className="footer-text mb-2"><strong>Phone:</strong> +91 123 456 7890</p>
          <p className="footer-text"><strong>Address:</strong> Promac Technologies Pvt. Ltd.<br/>123 Industrial Area, Phase 1</p>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} Promac Technologies Pvt. Ltd. All Rights Reserved.
      </div>

      <style>{`
        .footer-section {
          background-color: var(--primary); /* Navy Blue */
          color: white;
          padding: 5rem 0 2rem;
          border-top: 4px solid var(--accent); /* Red top border */
        }
        .footer-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
        }
        .footer-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          font-size: 0.95rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
          position: relative;
          display: inline-block;
          width: fit-content;
        }
        .footer-links a:hover {
          color: white;
          transform: translateX(5px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .grid-cols-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
