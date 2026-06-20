import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import industryBg from '../assets/industry_bg.png';
import competencyBg from '../assets/competency_bg.png';
import { productsData } from '../data/productsData';
import { getProductSVG } from '../utils/productSvg';

// Dynamic Spotlight Data
const spotlightData = [
  {
    id: 1,
    title: "State-of-the-Art Panel Integration",
    desc: "Custom design and assembly of high-efficiency VFD and PLC control panels, engineered to international standards for safety and reliability.",
    bgColor: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        <rect x="8" y="10" width="48" height="44" rx="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <line x1="8" y1="20" x2="56" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <circle cx="20" cy="35" r="4" fill="#e60012"/>
        <circle cx="32" cy="35" r="4" fill="#00ff88"/>
        <circle cx="44" cy="35" r="4" fill="#00aaff"/>
        <rect x="16" y="44" width="32" height="4" rx="1" fill="rgba(255,255,255,0.2)"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Onsite Commissioning & Support",
    desc: "Comprehensive diagnostic testing, parameters matching, and physical safety validation for automated manufacturing assembly lines.",
    bgColor: "linear-gradient(135deg, #090d16 0%, #111b2d 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        <circle cx="32" cy="32" r="20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <path d="M22 32l8 8 14-14" fill="none" stroke="#00ff88" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Precision CNC Retrofitting",
    desc: "Upgrading legacy machinery with modern high-speed computerized numerical controllers to maximize tool path efficiency and machine life.",
    bgColor: "linear-gradient(135deg, #0a111a 0%, #172535 100%)",
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        <rect x="8" y="12" width="48" height="40" rx="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <path d="M16 38l8-10 10 8 14-14" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="48" cy="22" r="3" fill="#e60012"/>
      </svg>
    )
  }
];

// Media Library Data
const mediaData = [
  {
    id: 1,
    title: "Millennium Control System Automation Overview",
    date: "Dec 13, 2024",
    type: "Corporate Profile",
    url: "https://www.youtube.com/embed/FaPromotionShort",
    color: "linear-gradient(135deg, #0f172a, #1e293b)"
  },
  {
    id: 2,
    title: "Vapi Factory Assembly & Testing Demo",
    date: "Jan 21, 2025",
    type: "Case Study",
    url: "https://www.youtube.com/embed/VapiSmartDemo",
    color: "linear-gradient(135deg, #111b2d, #0f172a)"
  },
  {
    id: 3,
    title: "Industrial Servo Drives Tuning Procedures",
    date: "Feb 28, 2025",
    type: "Technical Guide",
    url: "https://www.youtube.com/embed/ServoTuningGuide",
    color: "linear-gradient(135deg, #0a111a, #111b2d)"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [prodIndex, setProdIndex] = useState(0);

  // SEO & Headings
  useEffect(() => {
    document.title = "Millennium Control System | Industrial Automation Vapi Gujarat";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Millennium Control System in Vapi, Gujarat offers Mitsubishi AC Drives, PLCs, GOT HMIs, Servo Motors, and graphic operation controllers. Authorized manufacturer, supplier & system integrator.");
    }
  }, []);

  // Scroll Reveal Observer Hook
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Spotlight Carousel Slider State
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveSpotlight((prev) => (prev + 1) % spotlightData.length);
      }, 5000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveSpotlight((prev) => (prev - 1 + spotlightData.length) % spotlightData.length);
  };

  const handleNext = () => {
    setActiveSpotlight((prev) => (prev + 1) % spotlightData.length);
  };

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      {/* Sidebar Controls */}
      <div className="float-sidebar">
        <div className="float-btn" onClick={() => alert('Catalogs download starting shortly...')}>
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download
        </div>
        <Link className="float-btn" to="/contact">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Inquiries
        </Link>
      </div>

      {/* Hero Banner Section */}
      <div className="hero">
        <div className="hero-bg-img" style={{ backgroundImage: `linear-gradient(rgba(17, 27, 45, 0.65), rgba(28, 45, 74, 0.8)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="hero-pattern"></div>
        <div className="hero-overlay-lines"></div>

        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', zIndex:1, pointerEvents:'none'}} viewBox="0 0 1400 520" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(100,180,255,.25)" strokeWidth="1" fill="none">
            <line x1="300" y1="100" x2="500" y2="200"/>
            <line x1="500" y1="200" x2="600" y2="150"/>
            <line x1="400" y1="300" x2="550" y2="350"/>
            <line x1="200" y1="250" x2="350" y2="200"/>
            <line x1="450" y1="400" x2="600" y2="380"/>
            <line x1="300" y1="180" x2="280" y2="350"/>
          </g>
        </svg>

        <div className="hero-content">
          <div className="hero-left animate-fade-up">
            <h1 className="hero-fa-label" style={{ fontSize: '38px', fontWeight: '800', textShadow: '0 4px 16px rgba(0,0,0,0.5)', lineHeight: '1.2' }}>
              Millennium<br/>Control System
            </h1>
          </div>
          <div className="hero-boxes animate-slide-in-right delay-2">
            <div className="box-accent-gray"></div>
            <div className="box-red" style={{ boxShadow: '0 10px 30px rgba(230,0,18,0.25)' }}>
              <h2>Empowering<br/>Smart Factories</h2>
            </div>
            <div className="box-dark"></div>
          </div>
        </div>
        <div style={{position:'absolute', bottom:'40px', left:'60px', zIndex:3}} className="animate-fade-up delay-3">
          <Link to="/about" className="hero-tagline-link">
            "Innovative Automation Systems" – Custom engineered solutions.
          </Link>
        </div>
      </div>

      {/* Spotlight Carousel Section */}
      <div className="spotlight reveal" style={{ padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="spotlight-inner">
          <div className="section-head">
            <h2 className="section-title">Spotlight</h2>
            <div className="underline-bar" style={{ margin: '8px auto 0' }}></div>
          </div>
          
          <div style={{ position: 'relative', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            {spotlightData.map((slide, idx) => (
              <div
                key={slide.id}
                style={{
                  display: idx === activeSpotlight ? 'grid' : 'none',
                  gridTemplateColumns: '1fr 2.5fr',
                  gap: '40px',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  padding: '30px',
                  alignItems: 'center',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                  width: '100%',
                  maxWidth: '850px',
                  transition: 'opacity 0.5s ease-in-out'
                }}
              >
                <div 
                  style={{ 
                    background: slide.bgColor, 
                    borderRadius: '8px', 
                    aspectRatio: '1', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)' 
                  }}
                >
                  {slide.icon}
                </div>
                <div>
                  <span style={{ color: '#e60012', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                    Millennium CS Features
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                    {slide.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="spotlight-controls" style={{ marginTop: '30px' }}>
            <button className="sp-nav" onClick={handlePrev} style={{ outline: 'none' }}>
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            
            {spotlightData.map((_, idx) => (
              <button
                key={idx}
                className={`sp-dot ${idx === activeSpotlight ? 'active' : ''}`}
                onClick={() => setActiveSpotlight(idx)}
                style={{ cursor: 'pointer', outline: 'none' }}
              ></button>
            ))}

            <button className="sp-pause" onClick={() => setIsPlaying(!isPlaying)} style={{ outline: 'none', background: isPlaying ? 'transparent' : 'rgba(230,0,18,0.1)' }}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24" width="14" height="14"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
              )}
            </button>

            <button className="sp-nav" onClick={handleNext} style={{ outline: 'none' }}>
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Carousel Section */}
      <section className="products-carousel reveal" style={{ padding: '60px 0', background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Products Portfolio</h2>
              <div className="underline-bar" style={{ margin: '8px 0 0 0', background: '#e60012' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setProdIndex(prev => Math.max(prev - 1, 0))}
                disabled={prodIndex === 0}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: prodIndex === 0 ? 0.4 : 1,
                  cursor: prodIndex === 0 ? 'default' : 'pointer',
                  outline: 'none'
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button 
                onClick={() => setProdIndex(prev => Math.min(prev + 1, productsData.length - 4))}
                disabled={prodIndex >= productsData.length - 4}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: prodIndex >= productsData.length - 4 ? 0.4 : 1,
                  cursor: prodIndex >= productsData.length - 4 ? 'default' : 'pointer',
                  outline: 'none'
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          
          <div style={{ overflow: 'hidden', margin: '0 -10px' }}>
            <div 
              style={{
                display: 'flex',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `translateX(-${prodIndex * 25}%)`
              }}
            >
              {productsData.map((prod) => (
                <div 
                  key={prod.id} 
                  style={{
                    flex: '0 0 25%',
                    padding: '0 10px',
                    boxSizing: 'border-box'
                  }}
                >
                  <div 
                    className="product-card" 
                    onClick={() => navigate(`/products/${prod.id}`)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div 
                      style={{
                        background: '#f8fafc',
                        aspectRatio: '4/3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid var(--border)',
                        margin: 0
                      }}
                    >
                      {getProductSVG(prod.id)}
                    </div>
                    <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>{prod.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#e60012', fontSize: '11px', fontWeight: '700' }}>
                        <span>Details</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Division Panels Section */}
      <section className="solutions reveal" id="solutions" style={{ padding: '60px 0' }}>
        <div className="solutions-inner">
          <div className="section-head">
            <h2 className="section-title">Automation Segments</h2>
            <div className="underline-bar" style={{ margin: '8px auto 0' }}></div>
          </div>
          
          <div className="industry-panels" style={{ marginTop: '30px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <div className="industry-panel industry-panel-industries">
              <div className="industry-panel-bg" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${industryBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ borderRadius: '4px' }}>Industries We Serve</div>
              </div>
            </div>
            <div className="industry-panel industry-panel-competencies">
              <div className="industry-panel-bg" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${competencyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="industry-panel-label">
                <div className="industry-label-box" style={{ borderRadius: '4px' }}>Our System Competencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Library Interactive Section */}
      <section className="media-section reveal" style={{ padding: '60px 0', background: '#f8fafc', borderTop: '1px solid var(--border)' }}>
        <div className="media-inner">
          <div className="section-head">
            <h2 className="section-title">Media Library</h2>
            <div className="underline-bar" style={{ margin: '8px auto 0' }}></div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginBottom: '32px' }}>
            Watch dynamic system runs, engineering overviews, and customized mechatronics case studies.
          </p>
          
          <div className="media-grid">
            {mediaData.map((media) => (
              <div 
                key={media.id} 
                className="video-card" 
                onClick={() => setActiveVideo(media)}
                style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', background: '#fff' }}
              >
                <div className="video-thumb" style={{ background: media.color, padding: '40px 20px', position: 'relative' }}>
                  <svg viewBox="0 0 64 64" width="36" height="36" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}>
                    <path d="M24 16l24 16-24 16V16z" fill="#ffffff"/>
                  </svg>
                </div>
                <div className="video-info" style={{ padding: '20px' }}>
                  <div className="video-date" style={{ color: '#e60012', fontWeight: '700', fontSize: '11px' }}>{media.type}</div>
                  <h3 className="video-title" style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '6px', lineHeight: '1.4' }}>
                    {media.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '11px', color: 'var(--muted)' }}>
                    <span>Uploaded: {media.date}</span>
                    <span style={{ color: 'var(--blue)', fontWeight: '700' }}>Play Video →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Popup Modal simulation */}
      {activeVideo && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '650px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Simulated Player Display */}
            <div style={{ background: '#000000', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', color: '#fff' }}>
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e60012" strokeWidth="1" style={{ marginBottom: '16px' }}>
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '0 0 8px 0' }}>{activeVideo.title}</h4>
                <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Simulated Video Stream ({activeVideo.type})</p>
              </div>
              
              {/* Controls bar */}
              <div style={{ position: 'absolute', bottom: 0, insetX: 0, width: '100%', background: 'rgba(0,0,0,0.8)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '11px', fontFamily: 'monospace' }}>0:00 / 3:45</span>
                <div style={{ flexGrow: 1, height: '4px', background: '#334155', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ width: '33%', height: '100%', background: '#e60012', borderRadius: '2px' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', position: 'absolute', left: '33%', top: '-2px' }}></div>
                </div>
                <span style={{ fontSize: '11px', color: '#e60012', fontWeight: '700' }}>LIVE STREAMING</span>
              </div>
            </div>
            
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>{activeVideo.title}</h4>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Uploaded: {activeVideo.date}</span>
              </div>
              <button 
                onClick={() => setActiveVideo(null)}
                style={{
                  background: '#0f172a',
                  color: '#ffffff',
                  padding: '8px 18px',
                  fontWeight: '700',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Social and spec panel */}
      <section className="social-section reveal" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="social-inner">
          <div className="section-title">System Integration Platforms</div>
          <div className="underline-bar" style={{ margin: '8px auto 20px' }}></div>
          <p className="social-desc">
            Connect with us on our professional communication channels for project consultations, diagnostics, and panel scheduling.
          </p>
          <div className="social-channels">
            <div className="social-channel-col">
              <div className="social-platform-heading">
                <svg className="yt-icon" viewBox="0 0 24 24" fill="#ff0000"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                YouTube
              </div>
              <a href="#" className="social-btn">MILLENNIUM CONTROL SYSTEM INDIA PVT. LTD</a>
            </div>
            <div className="social-channel-col">
              <div className="social-platform-heading">
                <svg className="fb-icon" viewBox="0 0 24 24" fill="#1877f2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </div>
              <a href="#" className="social-btn">Millennium Control System India FA</a>
            </div>
            <div className="social-channel-col">
              <div className="social-platform-heading">
                <svg className="li-icon" viewBox="0 0 24 24" fill="#0a66c2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </div>
              <a href="#" className="social-btn">Millennium Control System-FA-INDIA</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
