import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container flex justify-between items-center" style={{ height: '110px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/content_images/clean-promac-logo.jpg" alt="Clean Promac Technologies" style={{ height: '80px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="flex gap-8 items-center" style={{ fontWeight: 600 }}>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <div className="nav-dropdown relative cursor-pointer">
            <span className={`nav-link ${location.pathname.includes('/brands') ? 'active' : ''}`}>Brands ▾</span>
            <div className="dropdown-menu">
              <Link to="/brands/truvox" className="dropdown-item">Truvox International</Link>
              <Link to="/brands/klenco" className="dropdown-item">Klenco Singapore</Link>
            </div>
          </div>
          <Link to="/support" className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}>Support</Link>
          <Link to="/contact" className={`btn btn-primary`} style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact Us</Link>
        </nav>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .header-scrolled {
          box-shadow: 0 10px 30px rgba(0, 31, 63, 0.08);
        }
        .nav-link {
          position: relative;
          color: var(--text-dark);
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        
        .nav-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          background-color: white;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          border-radius: 0.75rem;
          min-width: 220px;
          padding: 0.75rem 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
          z-index: 999;
        }
        
        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .dropdown-item {
          padding: 0.75rem 1.5rem;
          color: var(--text-dark);
          transition: all 0.2s ease;
        }
        .dropdown-item:hover {
          background-color: var(--bg-gray);
          color: var(--primary);
          padding-left: 2rem;
        }
        
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
