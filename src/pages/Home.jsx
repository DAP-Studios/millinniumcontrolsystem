import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="float-sidebar">
        <div className="float-btn">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download
        </div>
        <div className="float-btn">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Inquiries
        </div>
        <div className="float-btn">
          <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          Share
        </div>
      </div>

      <div className="hero">
        <div className="hero-bg-img"></div>
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
          <g fill="none" stroke="rgba(150,210,255,.5)" strokeWidth="1.5">
            <g transform="translate(320,240)">
              <rect x="-18" y="-8" width="36" height="16" rx="8"/>
              <rect x="-8" y="-18" width="16" height="10" rx="2"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)" fill="none"/>
            </g>
            <g transform="translate(460,160)">
              <path d="M-15 0 L15 0 M-15 0 L-5 -8 L5 -8 L5 8 L-5 8 Z M5 -4 L15 0 L5 4"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)" fill="none"/>
            </g>
            <g transform="translate(340,380)">
              <rect x="-12" y="-10" width="24" height="18" rx="3"/>
              <circle cx="-6" cy="10" r="3"/>
              <circle cx="6" cy="10" r="3"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)" fill="none"/>
            </g>
            <g transform="translate(530,430)">
              <path d="M-14 4 L-10 -4 L10 -4 L14 4 Z"/>
              <circle cx="-8" cy="6" r="3"/>
              <circle cx="8" cy="6" r="3"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)" fill="none"/>
            </g>
            <g transform="translate(260,130)">
              <circle cx="0" cy="0" r="8"/>
              <path d="M0 -12 L2 -8 L-2 -8 Z M0 12 L2 8 L-2 8 Z M-12 0 L-8 2 L-8 -2 Z M12 0 L8 2 L8 -2 Z"/>
              <circle cx="0" cy="0" r="22" strokeWidth="1" stroke="rgba(150,210,255,.3)" fill="none"/>
            </g>
          </g>
          <g transform="translate(470,240)" opacity=".3">
            <rect x="-80" y="-60" width="160" height="120" rx="4" fill="none" stroke="rgba(100,200,255,.6)" strokeWidth="1"/>
            <rect x="-60" y="-40" width="120" height="80" rx="2" fill="none" stroke="rgba(100,200,255,.4)" strokeWidth="1"/>
            <text x="0" y="-20" textAnchor="middle" fill="rgba(100,200,255,.7)" fontSize="10" fontFamily="sans-serif">LOGISTICS ROUTE</text>
            <text x="0" y="-6" textAnchor="middle" fill="rgba(100,200,255,.5)" fontSize="8" fontFamily="sans-serif">NETWORK: REAL-TIME</text>
          </g>
        </svg>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-fa-label">Factory Automation</div>
          </div>
          <div className="hero-boxes">
            <div className="box-accent-gray"></div>
            <div className="box-red">
              <h2>Automating<br/>the World</h2>
            </div>
            <div className="box-dark"></div>
          </div>
        </div>
        <div style={{position:'absolute', bottom:'40px', left:'60px', zIndex:3}}>
          <Link to="/about" className="hero-tagline-link">
            "Automating the World" – a global approach.
          </Link>
        </div>
      </div>

      <div className="spotlight">
        <div className="spotlight-inner">
          <div className="section-head">
            <div className="section-title" style={{fontSize:'20px'}}>Spotlight</div>
            <div className="section-head"><div className="underline-bar2"></div></div>
          </div>
          <div className="spotlight-cards">
            <div className="spotlight-card">
              <div className="spotlight-img-placeholder" style={{background:'linear-gradient(135deg,#0d1829,#1a3a6a)'}}>
                <svg viewBox="0 0 64 64"><rect x="4" y="8" width="56" height="40" rx="2"/><line x1="4" y1="16" x2="60" y2="16" stroke="rgba(255,255,255,.4)" strokeWidth="2"/><rect x="12" y="22" width="40" height="2" rx="1" fill="rgba(255,255,255,.3)"/><rect x="12" y="28" width="30" height="2" rx="1" fill="rgba(255,255,255,.3)"/></svg>
              </div>
              <div className="spotlight-label">Media Library is now open!</div>
            </div>
            <div className="spotlight-card">
              <div className="spotlight-img-placeholder" style={{background:'linear-gradient(135deg,#0a1040,#1a2060)'}}>
                <svg viewBox="0 0 64 64"><circle cx="32" cy="28" r="16" fill="none" stroke="rgba(100,180,255,.4)" strokeWidth="2"/><path d="M24 28a8 8 0 0 1 16 0" fill="rgba(100,180,255,.3)"/><text x="32" y="32" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="8" fontFamily="sans-serif">MCS CUP</text></svg>
              </div>
              <div className="spotlight-label">Millennium Control System Cup</div>
            </div>
            <div className="spotlight-card">
              <div className="spotlight-img-placeholder" style={{background:'linear-gradient(135deg,#0a1a30,#1a3050)'}}>
                <svg viewBox="0 0 64 64"><rect x="4" y="8" width="56" height="40" rx="2"/><rect x="12" y="16" width="20" height="16" rx="1" fill="rgba(255,255,255,.15)"/><rect x="36" y="16" width="16" height="8" rx="1" fill="rgba(255,255,255,.1)"/></svg>
              </div>
              <div className="spotlight-label">Media Library is now open!</div>
            </div>
          </div>
          <div className="spotlight-controls">
            <button className="sp-nav"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>
            <button className="sp-dot active"></button>
            <button className="sp-dot"></button>
            <button className="sp-pause"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg></button>
            <button className="sp-nav"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>
            <a href="#" className="sp-showall">Show All</a>
          </div>
        </div>
      </div>

      <section className="solutions" id="solutions">
        <div className="solutions-inner">
          <div className="section-head">
            <div className="section-title">Solutions</div>
            <div className="underline-bar2" style={{width:'120px', height:'4px', borderRadius:'2px', background:'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin:'8px auto 28px'}}></div>
          </div>
          <div className="efactory-panel">
            <div className="efactory-logo-wrap">
              <div className="efactory-logo-text">e-F<span style={{WebkitTextFillColor:'#e60012', color:'#e60012', fontStyle:'normal'}}>@</span>ctory</div>
              <div className="efactory-tagline">Connect everything</div>
            </div>
            <div className="efactory-right">
              <div className="efactory-desc">e-F@ctory creates "Smart Factories"<br/>through IoT-based big data utilization</div>
              <a href="#" className="show-all-link">Show All</a>
            </div>
          </div>
          <div className="industry-panels" style={{marginTop:'2px'}}>
            <div className="industry-panel industry-panel-industries">
              <div className="industry-panel-bg"></div>
              <div className="industry-panel-label">
                <div className="industry-label-box">Industries</div>
              </div>
            </div>
            <div className="industry-panel industry-panel-competencies">
              <div className="industry-panel-bg"></div>
              <div className="industry-panel-label">
                <div className="industry-label-box">Competencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-inner">
          <div className="section-head">
            <div className="section-title">News Center</div>
            <div style={{width:'120px', height:'4px', borderRadius:'2px', background:'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin:'8px auto 28px'}}></div>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-thumb" style={{background:'linear-gradient(135deg,#1a2a5e,#0d3060)'}}>
                <svg viewBox="0 0 64 64"><path d="M8 16h48M8 24h48M8 32h32" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2"/></svg>
              </div>
              <div className="news-body">
                <div className="news-meta"><span className="news-date">May 20, 2025</span><span className="news-tag">Product</span></div>
                <div className="news-title">Millennium Control System launches next-generation MELSEC iQ-R Series controllers</div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb" style={{background:'linear-gradient(135deg,#1a3a5e,#0d4060)'}}>
                <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="20" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2"/><path d="M28 24l12 8-12 8V24z" fill="rgba(255,255,255,.3)"/></svg>
              </div>
              <div className="news-body">
                <div className="news-meta"><span className="news-date">Apr 10, 2025</span><span className="news-tag">Event</span></div>
                <div className="news-title">MCS showcases Smart Factory solutions at IMTEX Forming 2025, Bangalore</div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-thumb" style={{background:'linear-gradient(135deg,#1a4a2a,#0d4020)'}}>
                <svg viewBox="0 0 64 64"><path d="M16 32l10 10 22-22" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <div className="news-body">
                <div className="news-meta"><span className="news-date">Mar 5, 2025</span><span className="news-tag">Achievement</span></div>
                <div className="news-title">MCS receives Industry Excellence Award for automation solutions in pharma sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="media-inner">
          <div className="section-head">
            <div className="section-title">Media Library</div>
            <div style={{width:'120px', height:'4px', borderRadius:'2px', background:'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin:'8px auto 12px'}}></div>
          </div>
          <p style={{textAlign:'center', color:'var(--muted)', fontSize:'13px', marginBottom:'28px'}}>You can view videos of various events, exhibitions, product concepts, processing videos, and more.</p>
          <div className="media-grid">
            <div className="video-card">
              <div className="video-thumb"><svg viewBox="0 0 64 64"><path d="M24 16l24 16-24 16V16z" fill="rgba(255,255,255,.7)"/></svg></div>
              <div className="video-info">
                <div className="video-date">Dec 13, 2023</div>
                <div className="video-title">Millennium Control System Factory Automation Promotional Film (Short)</div>
                <div className="video-type">Products · Case Study</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{background:'linear-gradient(135deg,#2a1a5e,#4a0060)'}}><svg viewBox="0 0 64 64"><path d="M24 16l24 16-24 16V16z" fill="rgba(255,255,255,.7)"/></svg></div>
              <div className="video-info">
                <div className="video-date">Jan 21, 2024</div>
                <div className="video-title">MCS India Smart Factory – Pune, Maharashtra</div>
                <div className="video-type">Concept</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{background:'linear-gradient(135deg,#0a2a3a,#0a4050)'}}><svg viewBox="0 0 64 64"><path d="M24 16l24 16-24 16V16z" fill="rgba(255,255,255,.7)"/></svg></div>
              <div className="video-info">
                <div className="video-date">Nov 7, 2023</div>
                <div className="video-title">MCS FA Systems That Transform Our Lives</div>
                <div className="video-type">Concept</div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumb" style={{background:'linear-gradient(135deg,#1a3a1a,#0d3020)'}}><svg viewBox="0 0 64 64"><path d="M24 16l24 16-24 16V16z" fill="rgba(255,255,255,.7)"/></svg></div>
              <div className="video-info">
                <div className="video-date">Feb 24, 2023</div>
                <div className="video-title">Creating the Future through Digital Manufacturing</div>
                <div className="video-type">Concept · Products</div>
              </div>
            </div>
          </div>
          <div style={{textAlign:'right', marginTop:'24px'}}>
            <a href="#" className="show-all-link">Show All</a>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-inner">
          <div className="section-title">Social Media</div>
          <div style={{width:'120px', height:'4px', borderRadius:'2px', background:'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin:'8px auto 20px'}}></div>
          <p className="social-desc">
            You can find our global channel here with articles from around the world on factory automation,<br/>
            e-F@ctory as well as the e-F@ctory Alliance and mechatronics topics.
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
        <div className="spec-app-wrap" style={{marginTop:'32px'}}>
          <a href="#" className="spec-app-box">
            <div className="spec-app-icon">
              <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/></svg>
            </div>
            <div className="spec-app-text">Factory Automation<br/>SPEC Search App.</div>
          </a>
        </div>
      </section>
    </>
  );
}
