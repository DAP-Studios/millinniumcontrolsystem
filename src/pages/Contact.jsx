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
    description: 'Get in touch with Millennium Control System engineers in Pune. Request quotes, get engineering assistance, or discuss smart plant integration.',
    keywords: 'Automation Inquiries Pune, Tech support PLC, request quote VFD'
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
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '50px 24px', color: '#fff', textAlign: 'center' }}>
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
              <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '14px' }}>
                Industrial Automation Park,<br />
                Phase II, Tech Sector,<br />
                Pune, Maharashtra, India - 411026.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '4px', fontSize: '14px', fontWeight: '700' }}>Phone Line</h4>
              <p style={{ color: '#475569', fontSize: '14px' }}>+91 20 1234 5678</p>
            </div>

            <div>
              <h4 style={{ color: '#0f172a', marginBottom: '4px', fontSize: '14px', fontWeight: '700' }}>Inquiries Email</h4>
              <p style={{ color: '#475569', fontSize: '14px' }}>inquiries@millenniumcontrolsystem.com</p>
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
