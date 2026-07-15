import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { Monitor, Trophy, Cpu, ChevronLeft, ChevronRight, Play, MessageSquare, Mail } from 'lucide-react';

const SPOTLIGHT_SLIDES = [
  {
    id: 1,
    title: "Media Library is now open!",
    description: "Access technical catalogues, brochures, and application notes instantly.",
    bg: "rgba(15, 23, 42, 0.95)",
    bgImage: "/images/spotlight_media.png",
    icon: <Monitor size={48} strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Millennium Control System Cup",
    description: "Celebrating automation design excellence and engineering achievements in India.",
    bg: "rgba(30, 27, 75, 0.95)",
    bgImage: "/images/spotlight_cup.png",
    icon: <Trophy size={48} strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "e-F@ctory Smart Plant Solutions",
    description: "Integrating IoT, edge analytics, and real-time PLC execution systems for smart factories.",
    bg: "rgba(6, 78, 59, 0.95)",
    bgImage: "/images/spotlight_smart.png",
    icon: <Cpu size={48} strokeWidth={1.5} />
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
            <Mail size={22} />
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
            <MessageSquare size={24} />
          )}
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg-img"></div>
        <div className="hero-pattern"></div>
        <div className="hero-overlay-lines"></div>

        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }} viewBox="0 0 1400 520" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(255,255,255,.1)" strokeWidth="1" fill="none">
            <line x1="300" y1="100" x2="500" y2="200"/>
            <line x1="500" y1="200" x2="600" y2="150"/>
            <line x1="400" y1="300" x2="550" y2="350"/>
            <line x1="200" y1="250" x2="350" y2="200"/>
            <line x1="450" y1="400" x2="600" y2="380"/>
            <line x1="300" y1="180" x2="280" y2="350"/>
          </g>
          <g fill="none" stroke="rgba(230,0,18,.3)" strokeWidth="1.5">
            <g transform="translate(320,240)">
              <rect x="-18" y="-8" width="36" height="16" rx="8"/>
              <rect x="-8" y="-18" width="16" height="10" rx="2"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(230,0,18,.15)"/>
            </g>
            <g transform="translate(460,160)">
              <path d="M-15 0 L15 0 M-15 0 L-5 -8 L5 -8 L5 8 L-5 8 Z M5 -4 L15 0 L5 4"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(230,0,18,.15)"/>
            </g>
            <g transform="translate(340,380)">
              <rect x="-12" y="-10" width="24" height="18" rx="3"/>
              <circle cx="-6" cy="10" r="3"/>
              <circle cx="6" cy="10" r="3"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(230,0,18,.15)"/>
            </g>
          </g>
        </svg>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-fa-label">Factory Automation</div>
            <h1>Automating <span>the World</span></h1>
            <p className="hero-desc">
              Millennium Control System delivers robust engineering solutions. Sourcing premium components to empower manufacturing industries with high productivity and smart data.
            </p>
            <div className="hero-tagline-wrap">
              <Link to="/about" className="hero-tagline-link">
                About Millennium CS
              </Link>
            </div>
          </div>
          <div className="hero-boxes">
            <div className="hero-box box-accent-gray">
              <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>System Integrator</h3>
              <p style={{ fontSize: '13px', opacity: 0.8 }}>Delivering complete electrical schematic panels and software architecture designs.</p>
            </div>
            <div className="hero-box box-red">
              <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>Mitsubishi Authorized</h3>
              <p style={{ fontSize: '13px', opacity: 0.9 }}>Providing authorized distribution and supply of industry-leading Japanese automation lines.</p>
            </div>
            <div className="hero-box box-dark">
              <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>Pan-India Network</h3>
              <p style={{ fontSize: '13px', opacity: 0.8 }}>Supplying and serving factories, manufacturing sites, and custom workshops across regions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Slider Section */}
      <div className="spotlight">
        <div className="spotlight-inner">
          <div className="section-head">
            <div className="section-title">Spotlight</div>
            <div className="underline-bar2"></div>
          </div>
          
          <div className="spotlight-cards">
            {SPOTLIGHT_SLIDES.map((slide, index) => {
              const isVisible = index === activeSlide;
              return (
                <div 
                  key={slide.id} 
                  className={`spotlight-card ${isVisible ? 'active-slide' : ''}`}
                  style={{
                    background: slide.bgImage ? `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${slide.bgImage})` : slide.bg,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                  }}
                >
                  <div className="spotlight-card-icon">{slide.icon}</div>
                  <div>
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="spotlight-controls">
            <button className="sp-nav" onClick={handlePrevSlide} aria-label="Previous Spotlight">
              <ChevronLeft size={20} />
            </button>
            {SPOTLIGHT_SLIDES.map((_, index) => (
              <button 
                key={index} 
                className={`sp-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button className="sp-pause" onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? "Play" : "Pause"}>
              {isPaused ? <Play size={16} fill="currentColor" /> : <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>}
            </button>
            <button className="sp-nav" onClick={handleNextSlide} aria-label="Next Spotlight">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Solutions / e-F@ctory Section */}
      <section className="solutions" id="solutions">
        <div className="solutions-inner">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-title">Solutions & Ecosystem</div>
            <div className="underline-bar2" style={{ margin: '6px auto 0' }}></div>
          </div>
          <div className="efactory-panel" style={{ marginTop: '30px' }}>
            <div className="efactory-logo-wrap">
              <div className="efactory-logo-text">e-F<span style={{ color: 'var(--accent-red)' }}>@</span>ctory</div>
              <div className="efactory-tagline">Connect Everything</div>
            </div>
            <div className="efactory-right">
              <div className="efactory-desc">
                e-F@ctory creates "Smart Factories" through integrated IoT-based big data utilization, synchronizing production machines, MES layers, and ERP servers.
              </div>
              <Link to="/about" className="show-all-link">Learn More</Link>
            </div>
          </div>
          <div className="industry-panels">
            <div className="industry-panel industry-panel-industries">
              <div className="industry-panel-bg" style={{ backgroundImage: 'url(/images/spotlight_smart.png)' }}></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ textTransform: 'uppercase', fontWeight: '800' }}>Industries We Serve</div>
              </div>
            </div>
            <div className="industry-panel industry-panel-competencies">
              <div className="industry-panel-bg" style={{ backgroundImage: 'url(/images/spotlight_media.png)' }}></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ textTransform: 'uppercase', fontWeight: '800' }}>Our Competencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="news-inner">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-title">News Center</div>
            <div className="underline-bar2" style={{ margin: '6px auto 0' }}></div>
          </div>
          <div className="news-grid" style={{ marginTop: '30px' }}>
            <div className="news-card">
              <div className="news-thumb">
                <img src="/images/news_controller.png" alt="MELSEC Controllers" />
              </div>
              <div className="news-body">
                <div className="news-meta">
                  <span className="news-date">May 20, 2025</span>
                  <span className="news-tag">Product</span>
                </div>
                <div className="news-title">Millennium Control System launches next-generation MELSEC iQ-R Series controllers</div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb">
                <img src="/images/news_exhibition.png" alt="IMTEX Forming" />
              </div>
              <div className="news-body">
                <div className="news-meta">
                  <span className="news-date">Apr 10, 2025</span>
                  <span className="news-tag">Event</span>
                </div>
                <div className="news-title">MCS showcases Smart Factory solutions at IMTEX Forming 2025, Bangalore</div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb">
                <img src="/images/news_pharma.png" alt="Pharma Automation" />
              </div>
              <div className="news-body">
                <div className="news-meta">
                  <span className="news-date">Mar 5, 2025</span>
                  <span className="news-tag">Award</span>
                </div>
                <div className="news-title">MCS receives Industry Excellence Award for automation solutions in pharma sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="media-section">
        <div className="media-inner">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <div className="section-title">Media Library</div>
            <div className="underline-bar2" style={{ margin: '6px auto 0' }}></div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '32px', marginTop: '12px' }}>
            Review functional demonstrations, product configurations, and digital manufacturing concepts.
          </p>
          <div className="media-grid">
            <div className="video-card">
              <div className="video-thumb" style={{ backgroundImage: 'url(/images/video_promo.png)' }}>
                <Play size={40} fill="#fff" />
              </div>
              <div className="video-info">
                <div className="video-date">Dec 13, 2023</div>
                <div className="video-title">Promotional Short Film</div>
                <div className="video-type">Case Study</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ backgroundImage: 'url(/images/video_tour.png)' }}>
                <Play size={40} fill="#fff" />
              </div>
              <div className="video-info">
                <div className="video-date">Jan 21, 2024</div>
                <div className="video-title">MCS Smart Plant Tour - Pune</div>
                <div className="video-type">Exhibition demonstration</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ backgroundImage: 'url(/images/video_transform.png)' }}>
                <Play size={40} fill="#fff" />
              </div>
              <div className="video-info">
                <div className="video-date">Nov 7, 2023</div>
                <div className="video-title">Automation Systems Transforming Lives</div>
                <div className="video-type">Design Concept</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{ backgroundImage: 'url(/images/video_future.png)' }}>
                <Play size={40} fill="#fff" />
              </div>
              <div className="video-info">
                <div className="video-date">Feb 24, 2023</div>
                <div className="video-title">Digital Manufacturing Future</div>
                <div className="video-type">Technology Brief</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Channels Row */}
      <section className="social-section">
        <div className="social-inner">
          <div className="social-channels">
            <div className="social-channel-col" style={{ textAlign: 'center' }}>
              <span>YouTube Channel</span>
              <a href="#" className="social-btn">MILLENNIUM CONTROL SYSTEM INDIA</a>
            </div>
            <div className="social-channel-col" style={{ textAlign: 'center' }}>
              <span>LinkedIn Network</span>
              <a href="#" className="social-btn">Millennium Control System-FA-INDIA</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
