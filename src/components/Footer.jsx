import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const productLinks = [
  ['PLCs & Controllers', 'melsec-fx5u-series'],
  ['VFD & AC Drives', 'inverters-vfd-ac-drive'],
  ['HMIs & Displays', 'human-machine-interfaces-melhmi-got'],
  ['Servo & Motion', 'melservo-ac-servo'],
  ['Industrial Robots', 'industrial-robots'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="site-footer__cta">
          <div>
            <span className="site-kicker site-kicker--light">Have a production challenge?</span>
            <h2>Let’s engineer the next move.</h2>
          </div>
          <Link to="/contact" className="site-footer__cta-button">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand-column">
            <Link className="site-brand site-brand--footer" to="/">
              <span className="site-brand__mark">
                <img src="/MCS - LOGO.png" alt="" />
              </span>
              <span className="site-brand__copy">
                <strong>Millennium</strong>
                <small>Control System</small>
              </span>
            </Link>
            <p>
              Industrial automation products and integration support that keep modern factories precise,
              connected, and productive.
            </p>
            <div className="site-footer__contact-list">
              <a href="tel:+916356732897"><Phone size={15} /> +91 63567 32897</a>
              <a href="mailto:info2.millenniumcontrol@gmail.com"><Mail size={15} /> info2.millenniumcontrol@gmail.com</a>
              <span><MapPin size={15} /> Vapi, Gujarat · Serving pan-India</span>
            </div>
          </div>

          <div className="site-footer__link-column">
            <h3>Company</h3>
            <Link to="/about">About us</Link>
            <Link to="/products">Product portfolio</Link>
            <Link to="/contact">Contact</Link>
            <a href="/brochures/goc_goc35_catalogue-pdf.pdf" download>Download catalogue</a>
          </div>

          <div className="site-footer__link-column site-footer__products">
            <h3>Solutions</h3>
            {productLinks.map(([label, category]) => (
              <Link key={category} to={`/products?category=${category}`}>{label}</Link>
            ))}
          </div>

          <div className="site-footer__brief">
            <span>Engineering desk</span>
            <h3>Need help selecting the right control architecture?</h3>
            <p>Share your machine, I/O, motion, or drive requirement with our team.</p>
            <Link to="/contact">Send your brief <ArrowUpRight size={15} /></Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Millennium Control System. All rights reserved.</span>
          <div>
            <span>Established 2010</span>
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
