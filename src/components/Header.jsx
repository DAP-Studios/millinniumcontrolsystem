import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Header() {
  const location = useLocation();
  const { categories } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isProductsRoute = location.pathname.startsWith('/products');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setMobileProductsOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.classList.toggle('nav-lock', mobileMenuOpen);
    return () => document.body.classList.remove('nav-lock');
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const activeClass = (path) => (
    location.pathname === path ? 'is-active' : ''
  );

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__utility">
        <div className="site-shell site-header__utility-inner">
          <span>Industrial automation engineered in India</span>
          <div className="site-header__utility-links">
            <a href="tel:+916356732897">
              <Phone size={12} aria-hidden="true" /> +91 63567 32897
            </a>
            <a href="mailto:info2.millenniumcontrol@gmail.com">
              <Mail size={12} aria-hidden="true" /> Email our team
            </a>
          </div>
        </div>
      </div>

      <div className="site-shell site-header__main">
        <Link className="site-brand" to="/" onClick={closeMenu} aria-label="Millennium Control System home">
          <span className="site-brand__mark">
            <img src="/MCS - LOGO.png" alt="" />
          </span>
          <span className="site-brand__copy">
            <strong>Millennium</strong>
            <small>Control System</small>
          </span>
        </Link>

        <nav className={`site-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <div className="site-nav__mobile-head">
            <span>Navigate</span>
            <button type="button" onClick={closeMenu} aria-label="Close navigation">
              <X size={22} />
            </button>
          </div>

          <Link to="/" className={`site-nav__link ${activeClass('/')}`}>Home</Link>

          <div className={`site-nav__group ${isProductsRoute ? 'is-active' : ''}`}>
            <div className="site-nav__product-trigger">
              <Link to="/products" className="site-nav__link">Products</Link>
              <button
                type="button"
                className="site-nav__chevron"
                onClick={() => setMobileProductsOpen((open) => !open)}
                aria-expanded={mobileProductsOpen}
                aria-label="Toggle product categories"
              >
                <ChevronDown size={15} />
              </button>
            </div>
            <div className={`site-mega-menu ${mobileProductsOpen ? 'is-open' : ''}`}>
              <div className="site-mega-menu__intro">
                <span className="site-kicker">Product portfolio</span>
                <strong>Built for the factory floor.</strong>
                <p>Control, motion, drive and interface technology for reliable production.</p>
                <Link to="/products" onClick={closeMenu}>
                  Explore all products <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="site-mega-menu__links">
                {categories.slice(0, 8).map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    onClick={closeMenu}
                  >
                    <span>{category.name}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className={`site-nav__link ${activeClass('/about')}`}>About</Link>
          <Link to="/contact" className={`site-nav__link ${activeClass('/contact')}`}>Contact</Link>

          <Link to="/contact" className="site-nav__mobile-cta">
            Start a project <ArrowUpRight size={17} />
          </Link>
        </nav>

        <div className="site-header__actions">
          <a
            href="/brochures/goc_goc35_catalogue-pdf.pdf"
            download="Millennium-Control-System-Catalogue.pdf"
            className="site-header__download"
          >
            <Download size={15} /> Catalogue
          </a>
          <Link to="/contact" className="site-header__cta">
            Talk to an engineer <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            className="site-header__menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation"
          >
            <Menu size={23} />
          </button>
        </div>
      </div>
      <div className="site-header__progress" aria-hidden="true" />
    </header>
  );
}
