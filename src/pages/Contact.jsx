export default function Contact() {
  return (
    <div>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our automation experts.</p>
      </div>
      <div className="page-content">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
            
            <div>
              <h2 style={{fontSize: '24px', color: 'var(--navy)', marginBottom: '20px'}}>Global Headquarters</h2>
              <div style={{marginBottom: '20px'}}>
                <h4 style={{color: 'var(--red)', marginBottom: '5px'}}>Millennium Control System Pvt. Ltd.</h4>
                <p style={{color: 'var(--muted)', lineHeight: '1.6'}}>
                  Industrial Automation Park,<br />
                  Phase II, Tech Sector,<br />
                  Pune, Maharashtra, India.
                </p>
              </div>
              <div style={{marginBottom: '20px'}}>
                <h4 style={{color: 'var(--red)', marginBottom: '5px'}}>Phone</h4>
                <p style={{color: 'var(--muted)'}}>+91 20 1234 5678</p>
              </div>
              <div>
                <h4 style={{color: 'var(--red)', marginBottom: '5px'}}>Email</h4>
                <p style={{color: 'var(--muted)'}}>inquiries@mcs-fa.com</p>
              </div>
            </div>

            <div style={{background: 'var(--gray)', padding: '30px', borderRadius: '4px'}}>
              <h2 style={{fontSize: '20px', color: 'var(--navy)', marginBottom: '20px'}}>Send an Inquiry</h2>
              <form style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <input type="text" placeholder="Your Name" style={{padding: '12px', border: '1px solid var(--border)', borderRadius: '2px'}} />
                <input type="email" placeholder="Your Email" style={{padding: '12px', border: '1px solid var(--border)', borderRadius: '2px'}} />
                <select style={{padding: '12px', border: '1px solid var(--border)', borderRadius: '2px', backgroundColor: '#fff'}}>
                  <option>Select Product Interest</option>
                  <option>Controllers (MELSEC)</option>
                  <option>Robots (MELFA)</option>
                  <option>Drive Products</option>
                  <option>e-F@ctory Solutions</option>
                </select>
                <textarea rows="4" placeholder="Your Message" style={{padding: '12px', border: '1px solid var(--border)', borderRadius: '2px', resize: 'vertical'}}></textarea>
                <button type="button" style={{background: 'var(--red)', color: '#fff', padding: '14px', border: 'none', borderRadius: '2px', fontWeight: 'bold', cursor: 'pointer'}}>
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
