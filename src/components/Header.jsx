import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <div className="header-inner">
        <Link className="logo-area" to="/">
          <div className="logo-mark">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <polygon points="16,3 29,27 3,27" fill="white" opacity=".9"/>
              <polygon points="16,9 24,23 8,23" fill="#e60012"/>
            </svg>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-name">Millennium</span>
            <span className="logo-sub">Control System</span>
          </div>
        </Link>
        <span className="company-name">MILLENNIUM CONTROL SYSTEM PVT. LTD.</span>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
            <li className="nav-item">
              <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></Link>
              <ul className="dropdown">
                <li><Link to="/products">Controllers (MELSEC)</Link></li>
                <li><Link to="/products">Drive Products</Link></li>
                <li><Link to="/products">HMI / GOT</Link></li>
                <li><Link to="/products">Robots (MELFA)</Link></li>
                <li><Link to="/products">CNC</Link></li>
                <li><Link to="/products">All Products</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link></li>
            <li className="nav-item"><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <Link to="/about" className="about-link">About us</Link>
          <span style={{color:'#ccc'}}>|</span>
          <Link to="/contact" className="inquiries-link">Inquiries</Link>
          <a href="#" className="globe-btn" aria-label="Language">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
