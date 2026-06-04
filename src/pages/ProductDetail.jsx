import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  // Helper to format the ID back to a readable title
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div>
      {/* Detail Page Header */}
      <div className="page-header" style={{background: 'linear-gradient(135deg, #1a2a4a, #2a3a6a)', padding: '60px 40px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'left'}}>
          <Link to="/products" style={{color: '#88aadd', fontSize: '14px', fontWeight: '600', marginBottom: '16px', display: 'inline-block'}}>
            ← Back to Products
          </Link>
          <h1 style={{fontSize: '36px', marginBottom: '12px'}}>{title}</h1>
          <p style={{color: '#a0b0d0', fontSize: '16px'}}>Advanced Factory Automation Solution by Millennium Control System.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="page-content" style={{padding: '60px 40px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start'}}>
          
          {/* Left Column: Product Image/SVG Placeholder */}
          <div style={{background: '#f5f5f5', borderRadius: '4px', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--border)', aspectRatio: '4/3'}}>
            <div style={{textAlign: 'center', color: 'var(--muted)'}}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '16px'}}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <p style={{fontWeight: '600', fontSize: '16px'}}>{title}</p>
              <p style={{fontSize: '12px'}}>Detailed model view</p>
            </div>
          </div>

          {/* Right Column: Details & Specs */}
          <div>
            <h2 style={{fontSize: '24px', color: 'var(--navy)', marginBottom: '16px'}}>Overview</h2>
            <p style={{fontSize: '15px', color: 'var(--text)', lineHeight: '1.8', marginBottom: '32px'}}>
              The {title} series represents the pinnacle of digital manufacturing technology. Designed for seamless integration into the e-F@ctory ecosystem, this product delivers uncompromising performance, extreme reliability, and intelligent data processing capabilities for next-generation smart factories.
            </p>

            <h3 style={{fontSize: '18px', color: 'var(--navy)', borderBottom: '2px solid var(--red)', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block'}}>Key Features</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px'}}>
              <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--red)', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '14px', color: 'var(--text)'}}>High-speed processing and reduced cycle times for maximum efficiency.</span>
              </li>
              <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--red)', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '14px', color: 'var(--text)'}}>Seamless IoT connectivity ready for big data analysis.</span>
              </li>
              <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--red)', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '14px', color: 'var(--text)'}}>Robust design suited for harsh industrial environments.</span>
              </li>
              <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
                <span style={{color: 'var(--red)', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '14px', color: 'var(--text)'}}>Intuitive integration with existing MELSEC and MELFA components.</span>
              </li>
            </ul>

            <div style={{display: 'flex', gap: '16px'}}>
              <button style={{background: 'var(--red)', color: '#fff', padding: '12px 24px', fontWeight: '600', borderRadius: '2px'}}>Download Specifications</button>
              <button style={{background: '#fff', color: 'var(--navy)', border: '1px solid var(--border)', padding: '12px 24px', fontWeight: '600', borderRadius: '2px'}}>Request Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
