import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-follow">
        <span className="footer-follow-label">Follow us</span>
        <div className="footer-social-icons">
          <a href="https://youtube.com/channel/UCD742GE8smj5IfMKC59tBGQ" target="_blank" rel="noopener noreferrer" className="fsocial fsocial-yt" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064039602158" target="_blank" rel="noopener noreferrer" className="fsocial fsocial-fb" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/millenniumcontrolsystem?r=nametag" target="_blank" rel="noopener noreferrer" className="fsocial fsocial-ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-col">
          <h4>Millennium CS</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Corporate Profile</Link></li>
            <li><a href="#">Careers</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Global Network</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#">Smart Manufacturing</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Competencies</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Controllers</Link></li>
            <li><Link to="/products">Drive Products</Link></li>
            <li><Link to="/products">HMI / GOT</Link></li>
            <li><Link to="/products">Robots</Link></li>
            <li><Link to="/products">CNC</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Technical Support</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Service Network</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">&copy; 2025 Millennium Control System Pvt. Ltd. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
          <Link to="/admin" style={{ marginLeft: '12px', opacity: 0.6, fontSize: '11px', borderLeft: '1px solid #555', paddingLeft: '12px' }}>Admin Control</Link>
        </div>
      </div>
    </footer>
  );
}
