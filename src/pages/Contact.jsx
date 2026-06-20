import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Millennium Control System | Get Quotation & Support";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contact Millennium Control System in Vapi, Gujarat. Get in touch with Hemang Makwana for sales quotes, technical queries, or system integration details.");
    }
  }, []);

  return (
    <div>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #111b2d 0%, #1c2d4a 100%)', padding: '70px 40px' }}>
        <h1>Contact Us</h1>
        <p style={{ color: '#90a0c0', fontSize: '15px' }}>Get in touch with our automation experts.</p>
      </div>
      <div className="page-content" style={{ padding: '60px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'start' }}>
          
          <div>
            <h2 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '24px', fontWeight: '800' }}>Company Headquarters</h2>
            
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: 'var(--red)', marginBottom: '6px', fontSize: '16px', fontWeight: '700' }}>Millennium Control System</h4>
              <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '14px', margin: 0 }}>
                Gala No. 51, Royal Industrial Hub,<br />
                Opp. Jai Research Foundation, N.H. No. 08,<br />
                Valvada, Nahuli Village, Vapi, Gujarat - 396195, India.
              </p>
            </div>

            <div style={{ marginBottom: '24px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
              <h4 style={{ color: 'var(--red)', marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>Key Contact Person</h4>
              <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
                <strong>Mr. Hemang Makwana</strong> (Proprietor)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
              <div>
                <h4 style={{ color: 'var(--red)', marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>Phone</h4>
                <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>+91-7942656614</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--red)', marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>Email</h4>
                <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
                  <a href="mailto:info@millenniumcontrolsystem.com" style={{ color: 'var(--blue)' }}>info@millenniumcontrolsystem.com</a>
                </p>
              </div>
            </div>
            
            <div style={{ marginTop: '30px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1', height: '220px' }}>
              {/* Simple Map Embed Placeholder with premium visual */}
              <div style={{ width: '100%', height: '100%', background: '#e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e60012" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', marginTop: '10px' }}>Royal Industrial Hub, Vapi</span>
                <a 
                  href="https://maps.google.com?q=20.33868000,72.90559000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '11px', color: 'var(--blue)', marginTop: '4px', textDecoration: 'underline' }}
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '36px', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '20px', fontWeight: '800' }}>Send an Inquiry</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px' }} />
              <select style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px', backgroundColor: '#fff', color: '#334155' }}>
                <option>Select Product / Service</option>
                <option>Graphic Operation Controller (GOC)</option>
                <option>Human Machine Interfaces (GOT)</option>
                <option>Industrial Robots (MELFA)</option>
                <option>Inverters / AC Drives</option>
                <option>MELSERVO AC Servos</option>
                <option>MELSEC PLCs (FX5U / FX3U / Q Series)</option>
                <option>Circuit Breakers</option>
                <option>System Integration / Panel Designing</option>
              </select>
              <textarea rows="4" placeholder="Describe your automation requirement..." style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px', resize: 'vertical' }}></textarea>
              <button 
                type="button" 
                onClick={() => alert('Thank you! Your inquiry has been sent successfully. We will get back to you shortly.')}
                style={{ background: '#e60012', color: '#fff', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
