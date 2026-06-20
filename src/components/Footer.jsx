import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-follow">
        <span className="footer-follow-label">Follow us</span>
        <div className="footer-social-icons">
          <a href="#" className="fsocial fsocial-yt">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </a>
          <a href="#" className="fsocial fsocial-fb">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="fsocial fsocial-li">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
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
        </div>
      </div>
    </footer>
  );
}
