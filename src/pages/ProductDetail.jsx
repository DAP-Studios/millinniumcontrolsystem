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
    <div className="product-detail-page" style={{ paddingBottom: '80px' }}>
      
      {/* Dynamic Breadcrumbs & Title Header */}
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '40px 24px', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '16px', fontWeight: '500' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: '#cbd5e1' }}>Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.categorySlug}`} style={{ color: '#cbd5e1' }}>{categoryName}</Link>
            <span>/</span>
            <span style={{ color: '#94a3b8' }}>{product.name}</span>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>{product.name}</h1>
          <p style={{ color: '#94a3b8', fontSize: '15px' }}>High-performance components integrated by Millennium Control System</p>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 20px' }}>
        
        {/* Two-Column Top Section */}
        <div className="product-detail-grid" style={{ marginBottom: '50px' }}>
          
          {/* Left Column: Mockup Visual card */}
          <div className="product-detail-visual-card">
            {product.imageUrl && product.imageUrl !== '/images/products/default.jpg' ? (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} 
              />
            ) : (
              <>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>Detailed model view</div>
              </>
            )}
          </div>

          {/* Right Column: Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 0' }}>
            <div>
              <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: '700', marginBottom: '16px' }}>Overview</h2>
              <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '24px' }}>
                {product.description}
              </p>

              <h3 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '700', borderBottom: '2px solid #e60012', paddingBottom: '6px', marginBottom: '16px', display: 'inline-block' }}>
                Key Features
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: '#334155' }}>
                    <span style={{ color: '#e60012', fontWeight: '700', fontSize: '15px' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {product.catalogUrl && product.catalogUrl !== '#' ? (
                <a 
                  href={product.catalogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    backgroundColor: '#e60012', 
                    color: '#fff', 
                    padding: '12px 24px', 
                    fontWeight: '700', 
                    borderRadius: '2px', 
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 2px 4px rgba(230, 0, 18, 0.15)',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0010'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e60012'}
                >
                  Download Specifications
                </a>
              ) : (
                <Link 
                  to="/contact"
                  state={{ productInquiry: product.name }}
                  style={{ 
                    backgroundColor: '#e60012', 
                    color: '#fff', 
                    padding: '12px 24px', 
                    fontWeight: '700', 
                    borderRadius: '2px', 
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 2px 4px rgba(230, 0, 18, 0.15)',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0010'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e60012'}
                >
                  Download Specifications
                </Link>
              )}
              <Link 
                to="/contact" 
                state={{ productInquiry: product.name }}
                style={{ 
                  border: '1px solid #cbd5e1', 
                  color: '#1f2937', 
                  padding: '12px 24px', 
                  fontWeight: '700', 
                  borderRadius: '2px', 
                  backgroundColor: '#fff',
                  display: 'inline-block',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background-color 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#f9fafb'; e.target.style.borderColor = '#9ca3af'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.borderColor = '#cbd5e1'; }}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section */}
        <div>
          <div className="responsive-tabs-header">
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '700',
                color: activeTab === 'overview' ? '#e60012' : '#64748b',
                borderBottom: activeTab === 'overview' ? '3px solid #e60012' : '3px solid transparent',
                marginBottom: '-2px',
                transition: 'all 0.2s'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '700',
                color: activeTab === 'specs' ? '#e60012' : '#64748b',
                borderBottom: activeTab === 'specs' ? '3px solid #e60012' : '3px solid transparent',
                marginBottom: '-2px',
                transition: 'all 0.2s'
              }}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('media')}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '700',
                color: activeTab === 'media' ? '#e60012' : '#64748b',
                borderBottom: activeTab === 'media' ? '3px solid #e60012' : '3px solid transparent',
                marginBottom: '-2px',
                transition: 'all 0.2s'
              }}
            >
              Media & Downloads
            </button>
          </div>

          <div style={{ minHeight: '200px' }}>
            {/* Overview Tab Content */}
            {activeTab === 'overview' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h4 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '700', marginBottom: '10px' }}>Digital Factory Integration Ready</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                  This device acts as a primary sensor / processing node in the e-F@ctory smart-plant ecosystem. Using standard communications interfaces (e.g. Ethernet, CC-Link, Modbus), it handles bidirectional data flow, exporting key runtime metrics for analytical dashboards and importing sequence tweaks.
                </p>
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '4px', borderLeft: '4px solid #e60012' }}>
                  <p style={{ fontSize: '13px', color: '#475569', fontStyle: 'italic' }}>
                    "Leverage Millennium CS integration expertise. We provide standard configurations, local wiring diagrams, software code blocks, and field debugging to guarantee zero production delays."
                  </p>
                </div>
              </div>
            )}

            {/* Specs Tab Content */}
            {activeTab === 'specs' && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#fff' }}>
                        <td style={{ padding: '14px 20px', fontWeight: '600', color: '#1e293b', width: '30%' }}>{key}</td>
                        <td style={{ padding: '14px 20px', color: '#475569' }}>{val}</td>
                      </tr>
                    ))}
                    {Object.keys(product.specifications).length === 0 && (
                      <tr>
                        <td style={{ padding: '20px', color: '#64748b', textAlign: 'center' }}>No detailed specifications defined for this model.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Media & Downloads Tab Content */}
            {activeTab === 'media' && (
              <div className="product-detail-media-grid" style={{ animation: 'fadeIn 0.3s ease' }}>
                {/* YouTube Video Section */}
                <div>
                  <h4 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '700', marginBottom: '12px' }}>Functional & Application Video</h4>
                  {product.youtubeUrl ? (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', border: '1px solid #e2e8f0', borderRadius: '4px' }}>
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
                    <div style={{ padding: '30px', backgroundColor: '#f8fafc', textAlign: 'center', border: '1px dashed #cbd5e1', color: '#64748b' }}>
                      No application videos currently associated with this product.
                    </div>
                  )}
                </div>

                {/* Downloads Section */}
                <div>
                  <h4 style={{ fontSize: '16px', color: '#0f172a', fontWeight: '700', marginBottom: '12px' }}>Technical Publications</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '14px' }}>Technical Catalogue</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (12.4 MB)</div>
                      </div>
                      <a href="#" style={{ color: '#e60012', fontWeight: '700', fontSize: '13px' }}>Download</a>
                    </li>
                    <li style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '14px' }}>Programming Manual</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (8.1 MB)</div>
                      </div>
                      <a href="#" style={{ color: '#e60012', fontWeight: '700', fontSize: '13px' }}>Download</a>
                    </li>
                    <li style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '14px' }}>CE Compliance Certificate</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>PDF document (1.2 MB)</div>
                      </div>
                      <a href="#" style={{ color: '#e60012', fontWeight: '700', fontSize: '13px' }}>Download</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
