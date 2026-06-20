import { Link, useLocation } from 'react-router-dom';
import mcsLogo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <div className="header-inner">
        <Link className="logo-area" to="/">
          <img src={mcsLogo} alt="MCS LOGO"
            className='mcsLogo'
            style={{ width: '70px', height: '70px' }}
          />
        </Link>
        <span className="company-name">MILLENNIUM CONTROL SYSTEM PVT. LTD.</span>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
            <li className="nav-item">
              <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></Link>
              <ul className="dropdown">
                <li><Link to="/products/goc">Graphic Operation Controller (GOC)</Link></li>
                <li><Link to="/products/melhmi-got">Human Machine Interfaces (GOT)</Link></li>
                <li><Link to="/products/industrial-robots">Industrial Robots (MELFA)</Link></li>
                <li><Link to="/products/inverters-vfd">Inverters / AC Drives</Link></li>
                <li><Link to="/products/melservo-servo">MELSERVO (AC Servos)</Link></li>
                <li><Link to="/products/low-voltage-breakers">Circuit Breakers</Link></li>
                <li><Link to="/products">All 11 FA Categories</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link></li>
            <li className="nav-item"><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          {/* <Link to="/about" className="about-link">About us</Link>
          <span style={{ color: '#ccc' }}>|</span> */}
          <Link to="/contact" className="inquiries-link">Inquiries</Link>
          {/* <a href="#" className="globe-btn" aria-label="Language">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        </a>*/}
        </div>
      </div>
    </header >
  );
}
