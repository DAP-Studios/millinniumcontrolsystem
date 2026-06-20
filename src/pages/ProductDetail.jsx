import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

// Re-use or scale the SVGs for the detail header/visual block
function getDetailSVG(id) {
  switch (id) {
    case 'goc':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="20" y="15" width="120" height="90" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
          <rect x="25" y="20" width="110" height="65" rx="2" fill="#0a0a0a"/>
          <rect x="30" y="25" width="60" height="50" rx="1" fill="#0a1020"/>
          <text x="60" y="45" textAnchor="middle" fill="#4488ff" fontSize="8" fontFamily="monospace" fontWeight="bold">GOC 43</text>
          <rect x="33" y="52" width="14" height="10" rx="1" fill="#00aa44" opacity=".8"/>
          <rect x="50" y="52" width="14" height="10" rx="1" fill="#4488ff" opacity=".8"/>
          <rect x="67" y="52" width="14" height="10" rx="1" fill="#cc0000" opacity=".8"/>
          <rect x="96" y="28" width="36" height="52" rx="2" fill="#111"/>
          <circle cx="114" cy="44" r="12" fill="#222" stroke="#444" strokeWidth="1.5"/>
          <circle cx="114" cy="44" r="6" fill="#333" stroke="#555" strokeWidth="1"/>
          <rect x="100" y="62" width="10" height="8" rx="1" fill="#cc0000"/>
          <rect x="114" y="62" width="10" height="8" rx="1" fill="#4488ff"/>
          <rect x="125" y="62" width="8" height="8" rx="1" fill="#00aa44"/>
          <rect x="25" y="88" width="110" height="12" rx="1" fill="#111"/>
        </svg>
      );
    case 'melhmi-got':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="10" y="15" width="140" height="90" rx="4" fill="#222" stroke="#444" strokeWidth="1.5"/>
          <rect x="16" y="21" width="128" height="78" rx="2" fill="#0c1020"/>
          <line x1="22" y1="80" x2="138" y2="80" stroke="#334466" strokeWidth="1"/>
          <line x1="22" y1="30" x2="22" y2="80" stroke="#334466" strokeWidth="1"/>
          <path d="M22 70 C 40 50, 60 75, 80 45 C 100 25, 120 60, 138 35" fill="none" stroke="url(#hmiGradDetail)" strokeWidth="2"/>
          <circle cx="80" cy="45" r="3" fill="#ffaa00"/>
          <circle cx="138" cy="35" r="3" fill="#e60012"/>
          <text x="130" y="90" textAnchor="end" fill="#88aadd" fontSize="7" fontFamily="sans-serif">GOT2000</text>
          <rect x="26" y="85" width="20" height="8" rx="1" fill="#e60012" opacity=".8"/>
          <rect x="50" y="85" width="20" height="8" rx="1" fill="#00aa44" opacity=".8"/>
          <defs>
            <linearGradient id="hmiGradDetail" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4488ff"/>
              <stop offset="100%" stopColor="#00ff88"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'industrial-robots':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="40" y="90" width="80" height="15" rx="2" fill="#e0e0e0" stroke="#b0b0b0" strokeWidth="1"/>
          <path d="M80 90 L80 65" stroke="#ccc" strokeWidth="12" strokeLinecap="round"/>
          <circle cx="80" cy="65" r="9" fill="#e60012"/>
          <path d="M80 65 L50 40" stroke="#e0e0e0" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="50" cy="40" r="7" fill="#222"/>
          <path d="M50 40 L90 25" stroke="#e0e0e0" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="90" cy="25" r="5" fill="#e60012"/>
          <path d="M90 25 L105 15 M105 15 L102 10 M105 15 L112 18" stroke="#333" strokeWidth="2"/>
          <line x1="105" y1="15" x2="125" y2="45" stroke="#ff3333" strokeWidth="1.5" strokeDasharray="3,3"/>
        </svg>
      );
    case 'inverters-vfd':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="45" y="15" width="70" height="90" rx="3" fill="#1e1e1e" stroke="#333" strokeWidth="1.5"/>
          <rect x="52" y="22" width="56" height="20" rx="1" fill="#cc0000"/>
          <text x="80" y="34" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">50.00 Hz</text>
          <rect x="52" y="47" width="56" height="30" rx="1" fill="#111"/>
          <circle cx="68" cy="62" r="8" fill="#333" stroke="#555" strokeWidth="1"/>
          <circle cx="68" cy="62" r="3" fill="#111"/>
          <rect x="84" y="52" width="10" height="6" rx="1" fill="#00cc44"/>
          <rect x="84" y="62" width="10" height="6" rx="1" fill="#e60012"/>
          <line x1="55" y1="88" x2="105" y2="88" stroke="#333" strokeWidth="3"/>
          <line x1="55" y1="94" x2="105" y2="94" stroke="#333" strokeWidth="3"/>
        </svg>
      );
    case 'low-voltage-breakers':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="25" y="15" width="110" height="90" rx="3" fill="#3a3a3a" stroke="#222" strokeWidth="1"/>
          <rect x="35" y="25" width="90" height="18" rx="1" fill="#1a1a1a"/>
          <text x="80" y="37" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif">MITSUBISHI WS-V</text>
          <rect x="42" y="50" width="16" height="40" rx="1" fill="#222"/>
          <rect x="45" y="55" width="10" height="15" rx="1" fill="#e60012"/>
          <text x="50" y="85" textAnchor="middle" fill="#888" fontSize="7">ON</text>
          <rect x="72" y="50" width="16" height="40" rx="1" fill="#222"/>
          <rect x="75" y="70" width="10" height="15" rx="1" fill="#00aa44"/>
          <text x="80" y="62" textAnchor="middle" fill="#888" fontSize="7">OFF</text>
          <rect x="102" y="50" width="16" height="40" rx="1" fill="#222"/>
          <rect x="105" y="70" width="10" height="15" rx="1" fill="#00aa44"/>
          <text x="110" y="62" textAnchor="middle" fill="#888" fontSize="7">OFF</text>
        </svg>
      );
    case 'melsec-fx3u':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="20" y="20" width="120" height="80" rx="2" fill="#d0d5dd" stroke="#98a2b3" strokeWidth="1.5"/>
          <rect x="20" y="20" width="120" height="14" fill="#475467"/>
          <text x="25" y="30" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">MELSEC FX3U</text>
          <rect x="25" y="40" width="110" height="8" rx="1" fill="#344054"/>
          <rect x="25" y="82" width="110" height="8" rx="1" fill="#344054"/>
          <circle cx="35" cy="60" r="2" fill="#00ff44"/>
          <circle cx="43" cy="60" r="2" fill="#00ff44"/>
          <circle cx="51" cy="60" r="2" fill="#344054"/>
          <text x="35" y="70" fill="#475467" fontSize="6" fontFamily="monospace">POWER RUN ERR</text>
          <rect x="105" y="55" width="25" height="15" rx="1" fill="#e60012"/>
        </svg>
      );
    case 'melsec-fx5u':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="20" y="20" width="120" height="80" rx="2" fill="#2d3748" stroke="#1a202c" strokeWidth="1.5"/>
          <rect x="20" y="20" width="120" height="14" fill="#e60012"/>
          <text x="25" y="30" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">MELSEC iQ-F FX5U</text>
          <rect x="30" y="45" width="16" height="14" rx="1" fill="#1a202c" stroke="#4a5568" strokeWidth="1"/>
          <rect x="34" y="52" width="8" height="7" fill="#cbd5e0"/>
          <circle cx="70" cy="50" r="2" fill="#00ff44"/>
          <circle cx="78" cy="50" r="2" fill="#00ff44"/>
          <circle cx="86" cy="50" r="2" fill="#718096"/>
          <text x="70" y="60" fill="#a0aec0" fontSize="5" fontFamily="monospace">PWR RUN ERR</text>
          <rect x="110" y="45" width="15" height="20" rx="1" fill="#1a202c"/>
          <rect x="112" y="48" width="11" height="3" fill="#ecc94b"/>
          <rect x="30" y="75" width="100" height="12" rx="1" fill="#4a5568"/>
        </svg>
      );
    case 'melsec-q':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="15" y="15" width="130" height="90" rx="2" fill="#1a1f2c" stroke="#333" strokeWidth="1.5"/>
          <rect x="22" y="20" width="22" height="80" rx="1" fill="#e60012" opacity=".9"/>
          <rect x="26" y="28" width="14" height="24" rx="1" fill="#333"/>
          <rect x="48" y="20" width="22" height="80" rx="1" fill="#475467"/>
          <circle cx="59" cy="30" r="2.5" fill="#00ff44"/>
          <rect x="53" y="42" width="12" height="18" rx="1" fill="#111"/>
          <rect x="74" y="20" width="20" height="80" rx="1" fill="#2d3748"/>
          <line x1="84" y1="28" x2="84" y2="92" stroke="#e60012" strokeWidth="2" strokeDasharray="2,4"/>
          <rect x="98" y="20" width="20" height="80" rx="1" fill="#2d3748"/>
          <line x1="108" y1="28" x2="108" y2="92" stroke="#4488ff" strokeWidth="2" strokeDasharray="2,4"/>
          <rect x="122" y="20" width="18" height="80" rx="1" fill="#475467"/>
          <rect x="126" y="70" width="10" height="10" fill="#111"/>
        </svg>
      );
    case 'melservo-servo':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="15" y="45" width="22" height="40" rx="1" fill="#718096"/>
          <rect x="37" y="30" width="70" height="70" rx="4" fill="#2d3748" stroke="#1a202c" strokeWidth="1"/>
          <circle cx="72" cy="65" r="24" fill="none" stroke="#4a5568" strokeWidth="2"/>
          <rect x="107" y="25" width="8" height="80" rx="1" fill="#e2e8f0"/>
          <rect x="115" y="60" width="25" height="10" fill="#a0aec0"/>
          <rect x="128" y="58" width="6" height="4" fill="#3182ce"/>
          <rect x="37" y="20" width="30" height="12" rx="2" fill="#e60012"/>
          <path d="M52 20 C 52 10, 25 12, 15 22" fill="none" stroke="#e60012" strokeWidth="2"/>
        </svg>
      );
    case 'motion-unit':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="20" y="15" width="120" height="90" rx="2" fill="#1a202c" stroke="#333" strokeWidth="1"/>
          <line x1="30" y1="85" x2="130" y2="85" stroke="#4a5568" strokeWidth="1"/>
          <line x1="30" y1="25" x2="30" y2="85" stroke="#4a5568" strokeWidth="1"/>
          <path d="M30 85 L60 45 L90 45 L120 85" fill="none" stroke="#e60012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 85 L50 65 L100 65 L120 85" fill="none" stroke="#3182ce" strokeWidth="1.5" strokeDasharray="3,3"/>
          <circle cx="60" cy="45" r="3" fill="#e60012"/>
          <circle cx="90" cy="45" r="3" fill="#e60012"/>
          <text x="60" y="38" fill="#a0aec0" fontSize="6" fontFamily="sans-serif">AXIS 1 (CAM)</text>
          <text x="110" y="60" fill="#63b3ed" fontSize="6" fontFamily="sans-serif">AXIS 2</text>
        </svg>
      );
    case 'software':
      return (
        <svg width="240" height="180" viewBox="0 0 160 120" fill="none">
          <rect x="15" y="15" width="130" height="90" rx="3" fill="#2d3748" stroke="#1a202c" strokeWidth="2"/>
          <rect x="20" y="20" width="120" height="70" rx="1" fill="#1a202c"/>
          <line x1="30" y1="35" x2="110" y2="35" stroke="#4a5568" strokeWidth="1"/>
          <path d="M30 35 L30 75 M110 35 L110 75" stroke="#718096" strokeWidth="1.5"/>
          <path d="M30 50 L45 50 M45 45 L45 55 M50 45 L50 55 M50 50 L80 50" stroke="#00ff44" strokeWidth="1.5"/>
          <circle cx="85" cy="50" r="5" fill="none" stroke="#e60012" strokeWidth="1.5"/>
          <line x1="90" y1="50" x2="110" y2="50" stroke="#718096" strokeWidth="1.5"/>
          <rect x="15" y="90" width="130" height="15" fill="#475467"/>
          <text x="25" y="100" fill="#fff" fontSize="7" fontFamily="sans-serif">MELSOFT iQ Works - Online</text>
        </svg>
      );
    default:
      return null;
  }
}

export default function ProductDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const product = productsData.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Millennium Control System`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", `Get technical specifications, series lineup, and manuals/brochure downloads for the ${product.name} series distributed by Millennium Control System.`);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="page-content" style={{ textAlign: 'center', padding: '100px 40px' }}>
        <h2 style={{ color: 'var(--navy)', marginBottom: '16px' }}>Product Not Found</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>The product you are looking for does not exist or has been moved.</p>
        <Link to="/products" style={{ background: '#e60012', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: '600' }}>
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Dynamic Header */}
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #111b2d 0%, #1c2d4a 100%)', padding: '50px 40px', textAlign: 'left' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/products" style={{ color: '#88aadd', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <span>←</span> Back to Lineup
          </Link>
          <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 8px 0', color: '#ffffff' }}>{product.name}</h1>
          <p style={{ color: '#90a8cc', fontSize: '15px', margin: 0 }}>Category: {product.folderName}</p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '32px' }}>
          <button 
            onClick={() => setActiveTab('overview')} 
            style={{
              padding: '16px 0',
              fontWeight: '700',
              fontSize: '14px',
              color: activeTab === 'overview' ? '#e60012' : '#64748b',
              borderBottom: activeTab === 'overview' ? '3px solid #e60012' : '3px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Overview & Features
          </button>
          <button 
            onClick={() => setActiveTab('specifications')} 
            style={{
              padding: '16px 0',
              fontWeight: '700',
              fontSize: '14px',
              color: activeTab === 'specifications' ? '#e60012' : '#64748b',
              borderBottom: activeTab === 'specifications' ? '3px solid #e60012' : '3px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Specifications
          </button>
          <button 
            onClick={() => setActiveTab('downloads')} 
            style={{
              padding: '16px 0',
              fontWeight: '700',
              fontSize: '14px',
              color: activeTab === 'downloads' ? '#e60012' : '#64748b',
              borderBottom: activeTab === 'downloads' ? '3px solid #e60012' : '3px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Downloads
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="page-content" style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left Column: Premium SVG Graphic Block */}
          <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #e2e8f0', aspectRatio: '4/3', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.02)' }}>
            <div style={{ textAlign: 'center' }}>
              {getDetailSVG(product.id)}
              <p style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b', marginTop: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {product.folderName}
              </p>
              <p style={{ fontSize: '11px', color: '#94a3b8' }}>Millennium Control System Integrated Unit</p>
            </div>
          </div>

          {/* Right Column: Dynamic Tab Content */}
          <div>
            {activeTab === 'overview' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '16px' }}>Overview</h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.8', marginBottom: '32px' }}>
                  {product.overview}
                </p>

                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e60012', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>Key Features</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', paddingLeft: 0 }}>
                  {product.features.map((feat, index) => (
                    <li key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#e60012', fontWeight: 'bold', fontSize: '16px', lineHeight: '1' }}>✓</span>
                      <span style={{ fontSize: '14px', color: '#334155', lineHeight: '1.5' }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {product.subProducts && (
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e60012', paddingBottom: '8px', marginBottom: '20px', display: 'inline-block' }}>Lineup / Series</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {product.subProducts.map((sub, index) => (
                        <div key={index} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '6px', background: '#f8fafc' }}>
                          <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>{sub.name}</h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>Technical Specifications</h2>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ padding: '14px 20px', fontWeight: '700', color: '#334155' }}>Parameter</th>
                        <th style={{ padding: '14px 20px', fontWeight: '700', color: '#334155' }}>Details / Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((spec, index) => (
                        <tr key={index} style={{ borderBottom: index === product.specs.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                          <td style={{ padding: '14px 20px', fontWeight: '600', color: '#1e293b', background: '#fcfcfc', width: '40%' }}>{spec.key}</td>
                          <td style={{ padding: '14px 20px', color: '#475569' }}>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>Downloads & Documentation</h2>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
                  Access catalogs, manual guides, and programming references for the {product.name}.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.downloads.map((dl, index) => (
                    <div 
                      key={index} 
                      style={{
                        padding: '16px 20px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#ffffff',
                        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.02)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ background: '#fef2f2', color: '#e60012', width: '40px', height: '40px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyBox: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>
                          {dl.type}
                        </div>
                        <div>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>{dl.title}</h4>
                          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Size: {dl.size}</span>
                        </div>
                      </div>
                      <button 
                        style={{
                          background: '#1e293b',
                          color: '#ffffff',
                          padding: '8px 16px',
                          fontSize: '12px',
                          fontWeight: '600',
                          borderRadius: '4px',
                          transition: 'background 0.2s'
                        }}
                        onClick={() => alert(`Downloading ${dl.title}...`)}
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
              <Link to="/contact" style={{ background: '#e60012', color: '#fff', padding: '12px 24px', fontWeight: '700', borderRadius: '4px', fontSize: '14px' }}>
                Request Quotation
              </Link>
              <Link to="/contact" style={{ background: '#fff', color: '#1e293b', border: '1px solid #cbd5e1', padding: '12px 24px', fontWeight: '700', borderRadius: '4px', fontSize: '14px' }}>
                Technical Query
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
