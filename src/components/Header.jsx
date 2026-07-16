import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import mcsLogo from "../assets/logo.png";
=======
import { useData } from '../context/DataContext';
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636

export default function Header() {
  const location = useLocation();
  const { categories } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header>
      <div className="header-inner">
<<<<<<< HEAD
        <Link className="logo-area" to="/">
          <img src={mcsLogo} alt="MCS LOGO"
            className='mcsLogo'
            style={{ width: '70px', height: '70px' }}
          />
=======
        <Link className="logo-area" to="/" onClick={handleLinkClick}>
          <img src="/MCS - LOGO.png" alt="Millennium Control System Logo" className="logo-img" />
          <div className="logo-text-wrap">
            <span className="logo-name">Millennium</span>
            <span className="logo-sub">Control System</span>
          </div>
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636
        </Link>

        {/* Hamburger Icon */}
        <button
          className="hamburger-btn"
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          style={{ marginLeft: 'auto', outline: 'none' }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav className={mobileMenuOpen ? 'nav-open' : ''}>
          <ul className="nav-list">
            <li className="nav-item">
<<<<<<< HEAD
              <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></Link>
              <ul className="dropdown">
                <li><Link to="/products/goc">Graphic Operation Controller (GOC)</Link></li>
                <li><Link to="/products/melhmi-got">Human Machine Interfaces (GOT)</Link></li>
                <li><Link to="/products/industrial-robots">Industrial Robots (MELFA)</Link></li>
                <li><Link to="/products/inverters-vfd">Inverters / AC Drives</Link></li>
                <li><Link to="/products/melservo-servo">MELSERVO (AC Servos)</Link></li>
                <li><Link to="/products/low-voltage-breakers">Circuit Breakers</Link></li>
                <li><Link to="/products">All 11 FA Categories</Link></li>
=======
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item dropdown-parent">
              <Link
                to="/products"
                className={`nav-link ${isActive('/products')}`}
                onClick={(e) => {
                  if (window.innerWidth <= 992) {
                    e.preventDefault();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  } else {
                    handleLinkClick();
                  }
                }}
              >
                Products
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: '12px',
                    height: '12px',
                    marginLeft: '4px',
                    transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              </Link>
              <ul className={`dropdown ${mobileDropdownOpen ? 'mobile-open' : ''}`}>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link to={`/products?category=${cat.id}`} onClick={handleLinkClick}>
                      {cat.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/products" onClick={handleLinkClick} style={{ fontWeight: '600', borderTop: '1px solid #f3f4f6' }}>
                    All Products
                  </Link>
                </li>
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={handleLinkClick}>About Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/infrastructure" className={`nav-link ${isActive('/infrastructure')}`} onClick={handleLinkClick}>Infrastructure</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="header-right">
<<<<<<< HEAD
          {/* <Link to="/about" className="about-link">About us</Link>
          <span style={{ color: '#ccc' }}>|</span> */}
          <Link to="/contact" className="inquiries-link">Inquiries</Link>
          {/* <a href="#" className="globe-btn" aria-label="Language">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        </a>*/}
=======
          <a
            href="/brochures/goc_goc35_catalogue-pdf.pdf"
            download="Millennium-Control-System-Catalogue.pdf"
            className="download-btn"
          >
            Download
          </a>
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636
        </div>
      </div>
    </header >
  );
}
