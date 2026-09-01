import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setBrandsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner flex justify-between items-center">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/content_images/clean-promac-logo.png" 
            alt="Clean Promac Technologies" 
            className="header-logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav flex gap-8 items-center" style={{ fontWeight: 600 }}>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <div className="nav-dropdown relative cursor-pointer">
            <span className={`nav-link ${location.pathname.includes('/brands') ? 'active' : ''}`}>Brands ▾</span>
            <div className="dropdown-menu">
              <Link to="/brands/truvox" className="dropdown-item">Truvox International</Link>
              <Link to="/brands/klenco" className="dropdown-item">Klenco Singapore</Link>
            </div>
          </div>
          <Link to="/support" className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}>Support</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact Us</Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={26} color="var(--primary)" /> : <Menu size={26} color="var(--primary)" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>

            {/* Mobile Brands Accordion */}
            <div>
              <div 
                onClick={() => setBrandsDropdownOpen(!brandsDropdownOpen)}
                className="mobile-nav-link flex justify-between items-center cursor-pointer"
              >
                <span>Brands</span>
                <ChevronDown size={18} style={{ transform: brandsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </div>
              {brandsDropdownOpen && (
                <div className="mobile-sub-menu">
                  <Link to="/brands/truvox" className="mobile-sub-link">
                    Truvox International
                  </Link>
                  <Link to="/brands/klenco" className="mobile-sub-link">
                    Klenco Singapore
                  </Link>
                </div>
              )}
            </div>

            <Link to="/support" className={`mobile-nav-link ${location.pathname === '/support' ? 'active' : ''}`}>
              Support & Service
            </Link>

            <div style={{ paddingTop: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', padding: '0.85rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .header-inner {
          height: 100px;
          transition: height 0.3s ease;
        }
        .header-scrolled {
          box-shadow: 0 10px 30px rgba(0, 31, 63, 0.08);
        }
        .header-scrolled .header-inner {
          height: 85px;
        }
        .header-logo {
          height: 70px;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .header-scrolled .header-logo {
          height: 60px;
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

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background-color 0.2s;
        }
        .mobile-menu-btn:hover {
          background-color: #f1f5f9;
        }

        .mobile-drawer {
          display: none;
          background: white;
          border-bottom: 2px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: slideDown 0.25s ease-out forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-drawer-inner {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
        }
        .mobile-nav-link.active {
          color: var(--accent);
        }

        .mobile-sub-menu {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0.75rem 0 0.5rem 1.25rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          margin-top: 0.5rem;
        }

        .mobile-sub-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-dark);
          text-decoration: none;
        }
        .mobile-sub-link:hover {
          color: var(--accent);
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-drawer { display: block !important; }
          .header-inner {
            height: 70px !important;
          }
          .header-scrolled .header-inner {
            height: 65px !important;
          }
          .header-logo {
            height: 42px !important;
          }
          .header-scrolled .header-logo {
            height: 38px !important;
          }
        }
      `}</style>
    </header>
  );
}
