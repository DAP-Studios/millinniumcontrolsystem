import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';

export default function Products() {
  const { categories, products } = useData();
  const [searchParams, setSearchParams] = useSearchParams();

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Selected category slug/id
  const activeCategory = searchParams.get('category') || 'all';

  // Dynamic SEO implementation
  const activeCategoryObject = categories.find(c => c.id === activeCategory);
  
  const seoTitle = activeCategory === 'all'
    ? 'Factory Automation Products Catalogue | Pune'
    : `${activeCategoryObject?.name || 'Products'} Catalogue | Millennium Control System`;

  const seoDescription = activeCategory === 'all'
    ? 'Explore the full portfolio of factory automation equipment by Millennium Control System in Pune, India: PLCs, VFD inverters, servos, HMIs, network modules, and robotic cells.'
    : activeCategoryObject?.description || 'Browse factory automation products and industrial control systems.';

  const seoKeywords = activeCategory === 'all'
    ? 'Factory Automation Pune, Mitsubishi PLC India, VFD Inverter, Servo Motor, HMI GOT, Industrial Robots, MCCB Switchgear, CC-Link IE TSN'
    : `${activeCategoryObject?.name || 'Products'}, Mitsubishi ${activeCategoryObject?.name || 'Automation'}, Pune distributor, industrial integration`;

  // CollectionPage JSON-LD Schema for advanced e-commerce crawlers
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": seoTitle,
    "description": seoDescription,
    "url": window.location.href,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Millennium Control System Pvt. Ltd.",
      "image": "/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Industrial Area",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411026",
        "addressCountry": "IN"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": products.filter(p => activeCategory === 'all' || p.categorySlug === activeCategory).length,
      "itemListElement": products
        .filter(p => activeCategory === 'all' || p.categorySlug === activeCategory)
        .map((product, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `${window.location.origin}/products/${product.id}`,
          "name": product.name,
          "description": product.summary
        }))
    }
  };

  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    schema: collectionSchema
  });

  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  // Get count of products in a category slug
  const getProductCount = (categorySlug) => {
    if (categorySlug === 'all') return products.length;
    return products.filter(p => p.categorySlug === categorySlug).length;
  };

  // Unified Product Filtering logic
  const filteredProducts = products.filter(prod => {
    // 1. Category Filter
    if (activeCategory !== 'all' && prod.categorySlug !== activeCategory) {
      return false;
    }
    // 2. Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = prod.name?.toLowerCase().includes(q);
      const summaryMatch = prod.summary?.toLowerCase().includes(q);
      const descMatch = prod.description?.toLowerCase().includes(q);
      const specsMatch = Object.entries(prod.specifications || {}).some(
        ([key, val]) => key.toLowerCase().includes(q) || String(val).toLowerCase().includes(q)
      );
      const featuresMatch = prod.features?.some(f => f.toLowerCase().includes(q));
      return nameMatch || summaryMatch || descMatch || specsMatch || featuresMatch;
    }
    return true;
  });

  return (
    <div className="products-page" style={{ paddingBottom: '90px', backgroundColor: '#fcfcfc' }}>
      
      {/* ── VISUAL HERO HEADER ── */}
      <div className="premium-gradient-header">
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <span className="premium-title-badge">
            Factory Automation Solutions
          </span>
          <h1 className="premium-gradient-text" style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 12px 0' }}>
            Products Portfolio
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Introducing Millennium Control System FA product lineup. We offer advanced components and custom integration solutions across India.
          </p>

          {/* Glassmorphic Search Bar */}
          <div className="premium-glass-search-box">
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'none', stroke: '#cbd5e1', strokeWidth: 2.2 }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search models, specifications, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="premium-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#94a3b8', 
                  marginRight: '12px', 
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
                title="Clear Search"
              >
                ✕
              </button>
            )}
            <div className="premium-search-button">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CATALOG CONTAINER ── */}
      <div style={{ maxWidth: '1200px', margin: '30px auto 0', padding: '0 20px' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '24px', fontWeight: '500' }}>
          <Link to="/" style={{ color: '#475569' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#94a3b8' }}>Products</span>
        </div>

        {/* Horizontal Category Tags (Pills) */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#64748b', marginBottom: '12px', letterSpacing: '0.8px' }}>
            Filter by product segment
          </span>
          <div className="premium-categories-container">
            <button 
              onClick={() => handleCategorySelect('all')}
              className={`premium-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Products
              <span className="premium-cat-count">{getProductCount('all')}</span>
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`premium-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
                <span className="premium-cat-count">{getProductCount(cat.id)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Category Segment Info Banner */}
        {activeCategory !== 'all' && activeCategoryObject && (
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            borderLeft: '5px solid var(--accent-red)',
            padding: '28px',
            borderRadius: '8px',
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <span style={{ fontSize: '11px', fontWeight: '850', textTransform: 'uppercase', color: 'var(--accent-red)', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>Active Segment</span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                {activeCategoryObject.name}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                {activeCategoryObject.description}
              </p>
            </div>
            {activeCategoryObject.brochureUrl && (
              <a
                href={activeCategoryObject.brochureUrl}
                download={`${activeCategoryObject.name}-Brochure`}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn-details"
                style={{ 
                  padding: '12px 24px', 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Segment PDF
              </a>
            )}
          </div>
        )}

        {/* ── PRODUCTS CARDS GRID ── */}
        {filteredProducts.length > 0 ? (
          <section style={{ marginBottom: '60px' }}>
            <div className="premium-products-grid">
              {filteredProducts.map(prod => {
                const prodCat = categories.find(c => c.id === prod.categorySlug);
                return (
                  <div className="premium-product-card" key={prod.id}>
                    <div className="premium-product-card-img-wrap">
                      <span className="premium-product-card-badge">
                        {prodCat?.name || 'Automation'}
                      </span>
                      <img 
                        src={prod.imageUrl || '/images/products/default.jpg'} 
                        className="premium-product-card-img" 
                        alt={prod.name} 
                        onError={(e) => { e.target.src = '/images/products/default.jpg'; }}
                      />
                    </div>
                    <div className="premium-product-card-body">
                      <h3 className="premium-product-card-title">{prod.name}</h3>
                      <p className="premium-product-card-summary">{prod.summary}</p>
                      
                      {prod.features && prod.features.length > 0 && (
                        <div className="premium-product-card-features">
                          {prod.features.slice(0, 3).map((feat, idx) => (
                            <span key={idx} className="premium-product-card-feature-tag">
                              {feat.length > 28 ? feat.substring(0, 28) + '...' : feat}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="premium-product-card-footer">
                        <Link to={`/products/${prod.id}`} className="premium-btn-details">
                          View Details
                        </Link>
                        <Link 
                          to="/contact" 
                          state={{ productInquiry: prod.name }}
                          className="premium-btn-quote"
                        >
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          /* Empty Search/Filter State */
          <div style={{ 
            textAlign: 'center', 
            padding: '70px 20px', 
            background: '#fff', 
            borderRadius: '12px', 
            border: '1.5px dashed #cbd5e1', 
            color: '#64748b', 
            marginBottom: '60px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <svg viewBox="0 0 24 24" style={{ width: '56px', height: '56px', fill: 'none', stroke: '#94a3b8', strokeWidth: 1.5, marginBottom: '16px', margin: '0 auto' }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <h4 style={{ fontWeight: '750', fontSize: '18px', color: '#0f172a', marginBottom: '6px' }}>No products match your parameters</h4>
            <p style={{ fontSize: '14.5px', marginBottom: '20px' }}>Try adjusting your filters or typing a different query in the search bar.</p>
            <button 
              onClick={() => { setSearchQuery(''); handleCategorySelect('all'); }}
              className="premium-btn-details"
              style={{ padding: '10px 24px', display: 'inline-block' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── ADDITIONAL NETWORK SOLUTIONS (Only shown when viewing all products and no search is active) ── */}
        {activeCategory === 'all' && !searchQuery && (
          <>
            <section style={{ marginBottom: '60px', borderTop: '1px solid #e2e8f0', paddingTop: '50px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>Network Integration</h2>
              <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '28px', maxWidth: '700px' }}>
                We support advanced industrial communication protocols to seamlessly bind field devices, servers, and controllers into a unified smart-factory network.
              </p>
              
              <div className="premium-products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                
                <div className="premium-product-card" style={{ minHeight: 'auto' }}>
                  <div style={{ background: '#0f172a', padding: '24px', color: '#fff', textAlign: 'center', fontWeight: '800', fontSize: '24px', letterSpacing: '1px' }}>
                    CC-Link TSN
                  </div>
                  <div className="premium-product-card-body" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '750', color: '#0f172a', marginBottom: '8px' }}>CC-Link IE TSN</h4>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Gigabit Ethernet-based open network connecting business systems directly to plant operations with real-time time-synchronized synchronization.
                    </p>
                  </div>
                </div>

                <div className="premium-product-card" style={{ minHeight: 'auto' }}>
                  <div style={{ background: '#780000', padding: '24px', color: '#fff', textAlign: 'center', fontWeight: '800', fontSize: '24px', letterSpacing: '1px' }}>
                    SSCNET III/H
                  </div>
                  <div className="premium-product-card-body" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '750', color: '#0f172a', marginBottom: '8px' }}>SSCNET III/H (Fiber)</h4>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      High-performance fiber-optic servo network. Guarantees interference-free high-speed synchronization for multi-axis motion controls.
                    </p>
                  </div>
                </div>

                <div className="premium-product-card" style={{ minHeight: 'auto' }}>
                  <div style={{ background: '#003049', padding: '24px', color: '#fff', textAlign: 'center', fontWeight: '800', fontSize: '24px', letterSpacing: '1px' }}>
                    IE Field Grid
                  </div>
                  <div className="premium-product-card-body" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '750', color: '#0f172a', marginBottom: '8px' }}>CC-Link IE Field</h4>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Integrated control, simple wiring, and safety networking across field controllers over Cat5e topology grids.
                    </p>
                  </div>
                </div>

                <div className="premium-product-card" style={{ minHeight: 'auto' }}>
                  <div style={{ background: '#3d5a80', padding: '24px', color: '#fff', textAlign: 'center', fontWeight: '800', fontSize: '22px', letterSpacing: '1px' }}>
                    Basic Ethernet
                  </div>
                  <div className="premium-product-card-body" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '750', color: '#0f172a', marginBottom: '8px' }}>CC-Link IE Field Basic</h4>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Software-based implementation enabling cyclic ethernet packet communication without custom controller ASICs.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* ── RELATED INFORMATION SECTION ── */}
            <section style={{ marginBottom: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '50px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>Related Services & Links</h2>
              <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '28px', maxWidth: '700px' }}>
                Access product catalog resources, find compliance directives, or coordinate custom training plans with Pune automation engineers.
              </p>
              
              <div className="premium-info-grid">
                
                <Link to="/about" className="premium-info-card" style={{ textDecoration: 'none' }}>
                  <div className="premium-info-icon-wrapper" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/></svg>
                  </div>
                  <h4 className="premium-info-card-title">Media Catalog Library</h4>
                  <p className="premium-info-card-text">Explore our collection of engineering documentation, brochures, and application studies.</p>
                </Link>

                <Link to="/contact" className="premium-info-card" style={{ textDecoration: 'none' }}>
                  <div className="premium-info-icon-wrapper" style={{ background: '#eff6ff', color: '#3b82f6' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  </div>
                  <h4 className="premium-info-card-title">FA Specification Search</h4>
                  <p className="premium-info-card-text">Search and review engineering specifications and device parameter parameters dynamically.</p>
                </Link>

                <Link to="/about" className="premium-info-card" style={{ textDecoration: 'none' }}>
                  <div className="premium-info-icon-wrapper" style={{ background: '#faf5ff', color: '#9333ea' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 className="premium-info-card-title">Distributor Network</h4>
                  <p className="premium-info-card-text">Connect with our local representatives and authorized distribution agents in Pune and Maharashtra.</p>
                </Link>

                <Link to="/contact" className="premium-info-card" style={{ textDecoration: 'none' }}>
                  <div className="premium-info-icon-wrapper" style={{ background: '#fffbeb', color: '#d97706' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <h4 className="premium-info-card-title">Customer Training Center</h4>
                  <p className="premium-info-card-text">Schedule hands-on programming workshops and panel configuration classes for your operators.</p>
                </Link>

              </div>
            </section>
          </>
        )}

      </div>
    </div>
  );
}
