import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, categories } = useData();

  // Active tab state: 'overview' | 'specs' | 'media'
  const [activeTab, setActiveTab] = useState('overview');

  // Find product by slug/id
  const product = products.find(p => p.id === id);

  // Schema structured data injection
  const schema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl,
    "description": product.summary,
    "brand": {
      "@type": "Brand",
      "name": "Mitsubishi Electric"
    },
    "mpn": product.id,
    "category": categories.find(c => c.id === product.categorySlug)?.name || 'Factory Automation',
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "Contact for pricing",
      "seller": {
        "@type": "Organization",
        "name": "Millennium Control System Pvt. Ltd."
      }
    }
  } : null;

  useSEO({
    title: product ? `${product.name} | Authorized Dealer Pune | Millennium Control System` : 'Product Detail',
    description: product ? `${product.name} - Authorized Mitsubishi Electric supplier in Pune, Maharashtra. ${product.summary} Millennium Control System Pvt. Ltd. provides complete panel engineering, wiring designs, software configuration, and commissioning services.` : '',
    keywords: product ? `${product.name}, Mitsubishi ${product.name}, Mitsubishi dealer Pune, authorized distributor Maharashtra, industrial automation Pune, Millennium Control System, ${product.name} manual, PLC panel integration` : '',
    schema: schema
  });

  if (!product) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center', minHeight: '400px' }}>
        <h2 style={{ fontSize: '24px', color: '#111827', marginBottom: '12px' }}>Product Not Found</h2>
        <p style={{ color: '#6b7280', marginBottom: '24px' }}>The product you are looking for does not exist or has been relocated.</p>
        <Link to="/products" style={{ background: '#e60012', color: '#fff', padding: '12px 24px', borderRadius: '4px', fontWeight: '600' }}>
          Back to Products
        </Link>
      </div>
    );
  }

  const categoryName = categories.find(c => c.id === product.categorySlug)?.name || 'Products';

  return (
    <div className="product-detail-page" style={{ paddingBottom: '90px', backgroundColor: '#fcfcfc' }}>
      
      {/* ── Breadcrumbs & Title Hero ── */}
      <div className="premium-gradient-header" style={{ textAlign: 'left', padding: '50px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#cbd5e1', marginBottom: '20px', fontWeight: '500' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: '#fff' }}>Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.categorySlug}`} style={{ color: '#fff' }}>{categoryName}</Link>
            <span>/</span>
            <span style={{ color: '#94a3b8' }}>{product.name}</span>
          </div>
          <h1 className="premium-gradient-text" style={{ fontSize: '38px', fontWeight: '800', marginBottom: '8px' }}>
            {product.name}
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '15px', margin: 0 }}>
            High-performance factory automation components integrated by Millennium Control System
          </p>
        </div>
      </div>

      {/* ── Main Container ── */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 20px' }}>
        
        {/* Two-Column Top Showcase Section */}
        <div className="premium-detail-container">
          
          {/* Left Column: Premium Mockup card */}
          <div className="premium-visual-mockup">
            <span className="premium-detail-badge">Fully Certified</span>
            {product.imageUrl && product.imageUrl !== '/images/products/default.jpg' ? (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} 
              />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Technical Model View</div>
              </div>
            )}
          </div>

          {/* Right Column: Key Details & Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '10px 0' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--accent-red)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                Overview & Description
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                Product Highlights
              </h2>
              <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: '1.75', marginBottom: '28px' }}>
                {product.description}
              </p>

              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', borderBottom: '2px solid var(--accent-red)', paddingBottom: '6px', marginBottom: '16px', display: 'inline-block' }}>
                Key System Features
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, marginBottom: '36px', listStyle: 'none' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '14.5px', color: '#475569' }}>
                    <span style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {product.catalogUrl && product.catalogUrl !== '#' ? (
                <a 
                  href={product.catalogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="premium-btn-details"
                  style={{ padding: '14px 28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Brochure
                </a>
              ) : (
                <Link 
                  to="/contact"
                  state={{ productInquiry: product.name }}
                  className="premium-btn-details"
                  style={{ padding: '14px 28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Brochure
                </Link>
              )}
              <Link 
                to="/contact" 
                state={{ productInquiry: product.name }}
                className="premium-btn-quote"
                style={{ padding: '14px 28px', textDecoration: 'none' }}
              >
                Request Panel Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Tabbed Detailed Information Section */}
        <div style={{ marginTop: '60px' }}>
          
          {/* Tab Button Headers */}
          <div className="premium-tabs-header">
            <button
              onClick={() => setActiveTab('overview')}
              className={`premium-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            >
              System Integration
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`premium-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`premium-tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            >
              Documentation & Videos
            </button>
          </div>

          {/* Tab Content Panels */}
          <div style={{ minHeight: '220px', paddingTop: '10px' }}>
            
            {/* System Integration Tab */}
            {activeTab === 'overview' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h4 style={{ fontSize: '17px', color: '#0f172a', fontWeight: '800', marginBottom: '12px' }}>
                  Smart Factory & e-F@ctory Integration Ready
                </h4>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.75', marginBottom: '20px' }}>
                  This device acts as a primary sensor or processing node in the e-F@ctory smart-plant ecosystem. Using standard communications interfaces (e.g. Ethernet, CC-Link IE TSN, Modbus), it handles bidirectional data flow, exporting key runtime metrics for analytical dashboards and importing sequence tweaks.
                </p>
                <div style={{ 
                  padding: '24px', 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
                  borderRadius: '8px', 
                  borderLeft: '5px solid var(--accent-red)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <p style={{ fontSize: '14px', color: '#334155', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                    "Leverage Millennium Control System's panel integration expertise. We provide standard configurations, customized wiring designs, software code blocks, and field commissioning to guarantee zero production delays."
                  </p>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specs' && (
              <div style={{ animation: 'fadeIn 0.3s ease', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <table className="premium-spec-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#fff' }}>
                        <td className="premium-spec-label">{key}</td>
                        <td className="premium-spec-value">{val}</td>
                      </tr>
                    ))}
                    {Object.keys(product.specifications).length === 0 && (
                      <tr>
                        <td style={{ padding: '24px', color: '#64748b', textAlign: 'center' }}>No detailed specifications defined for this model.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Documentation & Media Tab */}
            {activeTab === 'media' && (
              <div className="premium-media-grid" style={{ animation: 'fadeIn 0.3s ease' }}>
                
                {/* Left: Video Embed */}
                <div>
                  <h4 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '800', marginBottom: '14px' }}>
                    Functional & Application Video
                  </h4>
                  {product.youtubeUrl ? (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', border: '1.5px solid #e2e8f0', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
                      <iframe
                        src={product.youtubeUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : (
                    <div style={{ 
                      padding: '40px 20px', 
                      backgroundColor: '#f8fafc', 
                      textAlign: 'center', 
                      borderRadius: '8px',
                      border: '1.5px dashed #cbd5e1', 
                      color: '#64748b' 
                    }}>
                      No application videos currently associated with this product.
                    </div>
                  )}
                </div>

                {/* Right: PDF Publications list */}
                <div>
                  <h4 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '800', marginBottom: '14px' }}>
                    Technical Publications
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <div className="premium-download-card">
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                        <div className="premium-download-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>Technical Catalogue</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (12.4 MB)</div>
                        </div>
                      </div>
                      <a href="#" style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>Download</a>
                    </div>

                    <div className="premium-download-card">
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                        <div className="premium-download-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>Programming Manual</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (8.1 MB)</div>
                        </div>
                      </div>
                      <a href="#" style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>Download</a>
                    </div>

                    <div className="premium-download-card">
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                        <div className="premium-download-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>Compliance Certificate</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (1.2 MB)</div>
                        </div>
                      </div>
                      <a href="#" style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>Download</a>
                    </div>

                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
