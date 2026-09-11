import { useState } from 'react';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';

export default function Contact() {
  const { categories } = useData();
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  useSEO({
    title: 'Inquiries & Technical Support | Millennium CS',
    description: 'Get in touch with Millennium Control System engineers in Vapi, Gujarat. Request quotes, get engineering assistance, or discuss smart plant integration.',
    keywords: 'Automation Inquiries Vapi, Tech support PLC, request quote VFD'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setInterest('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '96px 24px 50px', marginTop: '-64px', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>Contact Our Engineering Team</h1>
        <p style={{ color: '#94a3b8', fontSize: '16px' }}>Request quotations, design consultations, or site-commissioning support</p>
      </div>

      <div className="page-content" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="contact-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '50px', alignItems: 'start' }}>

          {/* Office Address Card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '20px', color: '#0f172a', fontWeight: '700', marginBottom: '24px', borderBottom: '2px solid #e60012', paddingBottom: '6px', display: 'inline-block' }}>
              Headquarters
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '6px', fontSize: '15px', fontWeight: '700' }}>Millennium Control System Pvt. Ltd.</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Millennium+Control+System+Pvt.+Ltd.+Gala+no+51+royal+Industrial+hub+opp+jai+research+foundation+nh+no+08+valvada+vapi+Gujarat+India+396105"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'flex-start' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', marginTop: '3px', flexShrink: 0, transition: 'transform 0.2s ease' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', lineHeight: '1.6', fontSize: '14px', transition: 'color 0.2s ease', margin: 0 }}>
                  Gala no 51 royal Industrial hub,<br />
                  opp jai research foundation,n h no 08 valvada<br />
                  vapi, Gujarat, India - 396105.
                </p>
              </a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '4px', fontSize: '14px', fontWeight: '700' }}>Phone Lines</h4>
              <a
                href="https://wa.me/916356732897"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-anchor-whatsapp"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#25D366', flexShrink: 0, transition: 'transform 0.2s ease' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', transition: 'color 0.2s ease', margin: 0, display: 'flex', alignItems: 'center' }}>
                  +91 63567 32897
                  <span style={{ fontSize: '11px', color: '#25D366', backgroundColor: '#e8fdec', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px', fontWeight: '600' }}>WhatsApp</span>
                </p>
              </a>
              <a
                href="tel:+919825557418"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', margin: 0 }}>+91 98255 57418</p>
              </a>
              <a
                href="tel:+919712631318"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', margin: 0 }}>+91 97126 31318</p>
              </a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '4px', fontSize: '14px', fontWeight: '700' }}>Director</h4>
              <a
                href="tel:+919904171318"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', flexShrink: 0 }}>
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
                  Hemang Makwana &nbsp;·&nbsp; +91 99041 71318
                </p>
              </a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '4px', fontSize: '14px', fontWeight: '700' }}>Inquiries Email</h4>
              <a
                href="mailto:marketing.millenniumcontrol@gmail.com"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', flexShrink: 0, transition: 'transform 0.2s ease' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', transition: 'color 0.2s ease', margin: 0 }}>
                  marketing.millenniumcontrol@gmail.com
                </p>
              </a>
              <a
                href="mailto:millennium.cont@yahoo.com"
                className="contact-anchor-red"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e60012', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="contact-interactive-link" style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
                  millennium.cont@yahoo.com
                </p>
              </a>
            </div>

            <div>
              <h4 style={{ color: '#0f172a', marginBottom: '10px', fontSize: '14px', fontWeight: '700' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://www.facebook.com/profile.php?id=100064039602158" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#1877f2' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/millenniumcontrolsystem?r=nametag" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#c2185b' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="https://youtube.com/channel/UCD742GE8smj5IfMKC59tBGQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: '#ff0000' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '20px', color: '#0f172a', fontWeight: '700', marginBottom: '24px' }}>Submit an Inquiry</h2>

            {submitted && (
              <div style={{ padding: '12px 16px', backgroundColor: '#def7ec', color: '#03543f', borderRadius: '4px', border: '1px solid #bcf0da', fontWeight: '600', fontSize: '14px', marginBottom: '20px' }}>
                ✓ Inquiry submitted successfully! Our automation desk will call you back shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Your Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '14px' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Your Corporate Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@company.com"
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '14px' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Product Interest</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: '#fff', fontSize: '14px' }}
                >
                  <option value="">Select an Option</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                  <option value="custom">General / Custom Commission Panel</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Requirements Details</label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain your machine specification, input/output points count, or requested service date..."
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', resize: 'vertical', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <button
                type="submit"
                style={{ background: '#e60012', color: '#fff', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.2s', fontSize: '14px' }}
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
