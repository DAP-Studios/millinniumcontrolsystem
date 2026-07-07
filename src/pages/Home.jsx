import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const SPOTLIGHT_SLIDES = [
  {
    id: 1,
    title: "Media Library is now open!",
    description: "Access technical catalogues, brochures, and application notes instantly.",
    bg: "linear-gradient(135deg, rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.9))",
    bgImage: "/images/spotlight_media.png",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="56" height="40" rx="2"/>
        <line x1="4" y1="16" x2="60" y2="16" stroke="rgba(255,255,255,.4)" strokeWidth="2"/>
        <rect x="12" y="22" width="40" height="2" rx="1" fill="currentColor"/>
        <rect x="12" y="28" width="30" height="2" rx="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Millennium Control System Cup",
    description: "Celebrating automation design excellence and engineering achievements in India.",
    bg: "linear-gradient(135deg, rgba(30, 27, 75, 0.75), rgba(49, 46, 129, 0.9))",
    bgImage: "/images/spotlight_cup.png",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="28" r="16" stroke="rgba(100,180,255,.4)" strokeWidth="2"/>
        <path d="M24 28a8 8 0 0 1 16 0" fill="rgba(100,180,255,.3)"/>
        <text x="32" y="32" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif" fontWeight="bold">MCS CUP</text>
      </svg>
    )
  },
  {
    id: 3,
    title: "e-F@ctory Smart Plant Solutions",
    description: "Integrating IoT, edge analytics, and real-time PLC execution systems for smart factories.",
    bg: "linear-gradient(135deg, rgba(6, 78, 59, 0.75), rgba(6, 95, 70, 0.9))",
    bgImage: "/images/spotlight_smart.png",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="56" height="40" rx="2"/>
        <rect x="12" y="16" width="20" height="16" rx="1" fill="rgba(255,255,255,.15)"/>
        <rect x="36" y="16" width="16" height="8" rx="1" fill="rgba(255,255,255,.1)"/>
      </svg>
    )
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Home Page Schema.org Organization structured data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Millennium Control System Pvt. Ltd.",
    "image": "/images/logo.png",
    "telephone": "+91-20-12345678",
    "email": "info@millenniumcontrolsystem.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411026",
      "addressCountry": "IN"
    },
    "url": window.location.origin
  };

  useSEO({
    title: 'Factory Automation Solutions Pune | Mitsubishi Systems Integration',
    description: 'Millennium Control System Pvt. Ltd. delivers state-of-the-art industrial automation, offering high-performance PLCs, VFD inverters, servo drives, human-machine interfaces, and smart factory integrations.',
    keywords: 'Factory Automation Pune, Mitsubishi Electric PLC, VFD Inverters India, AC Servo Motors, e-F@ctory, GOC 43, HMI GOT, industrial robots',
    schema: orgSchema
  });

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SPOTLIGHT_SLIDES.length) % SPOTLIGHT_SLIDES.length);
  };

  return (
    <>
      {/* Floating Contact Widget */}
      <div className="floating-contact-container">
        <div className={`floating-contact-popup ${isContactOpen ? 'show' : ''}`}>
          {/* WhatsApp Icon Link */}
          <a
            href="https://wa.me/916356732897"
            target="_blank"
            rel="noopener noreferrer"
            className="popup-item-btn whatsapp-btn"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>

          {/* Mail Icon Link */}
          <a
            href="mailto:info2.millenniumcontrol@gmail.com"
            className="popup-item-btn mail-btn"
            title="Send Email"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>

        {/* Trigger Button */}
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`floating-contact-btn ${isContactOpen ? 'active' : ''}`}
          aria-label="Contact support"
        >
          {isContactOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg-img"></div>
        <div className="hero-pattern"></div>
        <div className="hero-overlay-lines"></div>

        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }} viewBox="0 0 1400 520" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(100,180,255,.25)" strokeWidth="1" fill="none">
            <line x1="300" y1="100" x2="500" y2="200"/>
            <line x1="500" y1="200" x2="600" y2="150"/>
            <line x1="400" y1="300" x2="550" y2="350"/>
            <line x1="200" y1="250" x2="350" y2="200"/>
            <line x1="450" y1="400" x2="600" y2="380"/>
            <line x1="300" y1="180" x2="280" y2="350"/>
          </g>
          <g fill="none" stroke="rgba(150,210,255,.5)" strokeWidth="1.5">
            <g transform="translate(320,240)">
              <rect x="-18" y="-8" width="36" height="16" rx="8"/>
              <rect x="-8" y="-18" width="16" height="10" rx="2"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)"/>
            </g>
            <g transform="translate(460,160)">
              <path d="M-15 0 L15 0 M-15 0 L-5 -8 L5 -8 L5 8 L-5 8 Z M5 -4 L15 0 L5 4"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)"/>
            </g>
            <g transform="translate(340,380)">
              <rect x="-12" y="-10" width="24" height="18" rx="3"/>
              <circle cx="-6" cy="10" r="3"/>
              <circle cx="6" cy="10" r="3"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)"/>
            </g>
          </g>
        </svg>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-fa-label" style={{ textTransform: 'uppercase', tracking: '1px' }}>Factory Automation</div>
          </div>
          <div className="hero-boxes">
            <div className="box-accent-gray"></div>
            <div className="box-red">
              <h2 style={{ fontSize: '32px', lineHeight: '1.2' }}>Automating<br/>the World</h2>
            </div>
            <div className="box-dark"></div>
          </div>
        </div>
        <div className="hero-tagline-wrap">
          <Link to="/about" className="hero-tagline-link">
            "Automating the World" – A global approach in Pune & India.
          </Link>
        </div>
      </div>

      {/* Spotlight Slider Section */}
      <div className="spotlight">
        <div className="spotlight-inner">
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <div className="section-title" style={{ fontSize: '20px', fontWeight: '700' }}>Spotlight</div>
            <div className="underline-bar2" style={{ background: '#e60012', width: '50px', height: '3px', marginTop: '4px' }}></div>
          </div>
          
          <div className="spotlight-cards" style={{ display: 'flex', gap: '20px', minHeight: '180px' }}>
            {SPOTLIGHT_SLIDES.map((slide, index) => {
              const isVisible = index === activeSlide;
              return (
                <div 
                  key={slide.id} 
                  className={`spotlight-card ${isVisible ? 'active-slide' : ''}`}
                  style={{
                    display: isVisible ? 'flex' : 'none',
                    background: slide.bgImage ? `${slide.bg}, url(${slide.bgImage})` : slide.bg,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    borderRadius: '4px',
                    padding: '30px',
                    color: '#fff',
                    alignItems: 'center',
                    gap: '24px',
                    width: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    animation: 'slideIn 0.5s ease-in-out'
                  }}
                >
                  <div style={{ color: '#e60012', flexShrink: 0 }}>{slide.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{slide.title}</h4>
                    <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.5' }}>{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="spotlight-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <button className="sp-nav" onClick={handlePrevSlide} style={{ color: '#333' }}>
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </button>
            {SPOTLIGHT_SLIDES.map((_, index) => (
              <button 
                key={index} 
                className={`sp-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === activeSlide ? '#e60012' : '#cbd5e1',
                  border: 'none',
                  padding: 0
                }}
              />
            ))}
            <button className="sp-pause" onClick={() => setIsPaused(!isPaused)} style={{ color: '#333' }}>
              {isPaused ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              )}
            </button>
            <button className="sp-nav" onClick={handleNextSlide} style={{ color: '#333' }}>
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Solutions / e-F@ctory Section */}
      <section className="solutions" id="solutions" style={{ padding: '60px 0' }}>
        <div className="solutions-inner">
          <div className="section-head">
            <div className="section-title">Solutions & Ecosystem</div>
            <div className="underline-bar2" style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin: '8px auto 28px' }}></div>
          </div>
          <div className="efactory-panel">
            <div className="efactory-logo-wrap">
              <div className="efactory-logo-text">e-F<span style={{ WebkitTextFillColor: '#e60012', color: '#e60012', fontStyle: 'normal' }}>@</span>ctory</div>
              <div className="efactory-tagline">Connect Everything</div>
            </div>
            <div className="efactory-right">
              <div className="efactory-desc">
                e-F@ctory creates "Smart Factories" through integrated IoT-based big data utilization, synchronizing production machines, MES layers, and ERP servers.
              </div>
              <Link to="/about" className="show-all-link">Learn More</Link>
            </div>
          </div>
          <div className="industry-panels" style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="industry-panel industry-panel-industries" style={{ minHeight: '180px', borderRadius: '4px', overflow: 'hidden' }}>
              <div className="industry-panel-bg"></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ textTransform: 'uppercase', fontWeight: '700' }}>Industries We Serve</div>
              </div>
            </div>
            <div className="industry-panel industry-panel-competencies" style={{ minHeight: '180px', borderRadius: '4px', overflow: 'hidden' }}>
              <div className="industry-panel-bg"></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ textTransform: 'uppercase', fontWeight: '700' }}>Our Competencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section" style={{ padding: '60px 0', backgroundColor: '#f9fafb' }}>
        <div className="news-inner">
          <div className="section-head">
            <div className="section-title">News Center</div>
            <div style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin: '8px auto 28px' }}></div>
          </div>
          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div className="news-card" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div className="news-thumb" style={{ height: '140px', overflow: 'hidden' }}>
                <img src="/images/news_controller.png" alt="MELSEC Controllers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="news-body" style={{ padding: '20px' }}>
                <div className="news-meta" style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}><span className="news-date">May 20, 2025</span><span className="news-tag" style={{ color: '#e60012', fontWeight: '700' }}>Product</span></div>
                <div className="news-title" style={{ fontSize: '15px', fontWeight: '700', color: '#111827' }}>Millennium Control System launches next-generation MELSEC iQ-R Series controllers</div>
              </div>
            </div>
            <div className="news-card" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div className="news-thumb" style={{ height: '140px', overflow: 'hidden' }}>
                <img src="/images/news_exhibition.png" alt="IMTEX Forming" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="news-body" style={{ padding: '20px' }}>
                <div className="news-meta" style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}><span className="news-date">Apr 10, 2025</span><span className="news-tag" style={{ color: '#e60012', fontWeight: '700' }}>Event</span></div>
                <div className="news-title" style={{ fontSize: '15px', fontWeight: '700', color: '#111827' }}>MCS showcases Smart Factory solutions at IMTEX Forming 2025, Bangalore</div>
              </div>
            </div>
            <div className="news-card" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div className="news-thumb" style={{ height: '140px', overflow: 'hidden' }}>
                <img src="/images/news_pharma.png" alt="Pharma Automation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="news-body" style={{ padding: '20px' }}>
                <div className="news-meta" style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}><span className="news-date">Mar 5, 2025</span><span className="news-tag" style={{ color: '#e60012', fontWeight: '700' }}>Award</span></div>
                <div className="news-title" style={{ fontSize: '15px', fontWeight: '700', color: '#111827' }}>MCS receives Industry Excellence Award for automation solutions in pharma sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="media-section" style={{ padding: '60px 0' }}>
        <div className="media-inner">
          <div className="section-head">
            <div className="section-title">Media Library</div>
            <div style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin: '8px auto 12px' }}></div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '14px', marginBottom: '28px' }}>
            Review functional demonstrations, product configurations, and digital manufacturing concepts.
          </p>
          <div className="media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div className="video-card">
              <div className="video-thumb" style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(/images/video_promo.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div className="video-info" style={{ padding: '16px' }}>
                <div className="video-date">Dec 13, 2023</div>
                <div className="video-title" style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '4px 0' }}>Promotional Short Film</div>
                <div className="video-type" style={{ fontSize: '11px', color: '#e60012', fontWeight: '600' }}>Case Study</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(/images/video_tour.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div className="video-info" style={{ padding: '16px' }}>
                <div className="video-date">Jan 21, 2024</div>
                <div className="video-title" style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '4px 0' }}>MCS Smart Plant Tour - Pune</div>
                <div className="video-type" style={{ fontSize: '11px', color: '#e60012', fontWeight: '600' }}>Exhibition demonstration</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(/images/video_transform.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div className="video-info" style={{ padding: '16px' }}>
                <div className="video-date">Nov 7, 2023</div>
                <div className="video-title" style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '4px 0' }}>Automation Systems Transforming Lives</div>
                <div className="video-type" style={{ fontSize: '11px', color: '#e60012', fontWeight: '600' }}>Design Concept</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45)), url(/images/video_future.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <div className="video-info" style={{ padding: '16px' }}>
                <div className="video-date">Feb 24, 2023</div>
                <div className="video-title" style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '4px 0' }}>Digital Manufacturing Future</div>
                <div className="video-type" style={{ fontSize: '11px', color: '#e60012', fontWeight: '600' }}>Technology Brief</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Channels Row */}
      <section className="social-section" style={{ padding: '40px 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="social-inner" style={{ textAlign: 'center' }}>
          <div className="social-channels" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div className="social-channel-col">
              <span style={{ fontWeight: '700', display: 'block', marginBottom: '8px' }}>YouTube Channel</span>
              <a href="#" className="social-btn" style={{ fontSize: '13px', color: '#dc2626', fontWeight: '600' }}>MILLENNIUM CONTROL SYSTEM INDIA</a>
            </div>
            <div className="social-channel-col">
              <span style={{ fontWeight: '700', display: 'block', marginBottom: '8px' }}>LinkedIn Network</span>
              <a href="#" className="social-btn" style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600' }}>Millennium Control System-FA-INDIA</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
