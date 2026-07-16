<<<<<<< HEAD
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { getProductSVG } from '../utils/productSvg';
=======
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636

export default function Products() {
  const navigate = useNavigate();
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

  const getProductCount = (categorySlug) => {
    if (categorySlug === 'all') return products.length;
    return products.filter(p => p.categorySlug === categorySlug).length;
  };

  // Determine dynamic hardware categories to render
  const visibleHardwareCategories = categories
    .filter(cat => cat.id !== 'software')
    .filter(cat => {
      const catProducts = products.filter(p => p.categorySlug === cat.id);
      const filteredCatProducts = catProducts.filter(p => {
        if (!searchQuery) return true;
        return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
               p.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
      return (activeCategory === 'all' || activeCategory === cat.id) && (filteredCatProducts.length > 0 || !searchQuery);
    });

  // Determine if Software Section should display
  const shouldShowSoftware = (activeCategory === 'all' || activeCategory === 'software') && (() => {
    const softwareProducts = products.filter(p => p.categorySlug === 'software');
    const filteredSoftwareProducts = softwareProducts.filter(p => {
      if (!searchQuery) return true;
      return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return filteredSoftwareProducts.length > 0 || !searchQuery || 'software'.includes(searchQuery.toLowerCase());
  })();

  // Determine if Network Section should display
  const shouldShowNetworks = activeCategory === 'all' && (() => {
    if (!searchQuery) return true;
    const keywords = ['network', 'tsn', 'cc-link', 'field', 'sscnet', 'fiber', 'ethernet'];
    return keywords.some(k => searchQuery.toLowerCase().includes(k) || k.includes(searchQuery.toLowerCase()));
  })();

  const hasAnyContent = visibleHardwareCategories.length > 0 || shouldShowSoftware || shouldShowNetworks;

  useEffect(() => {
    document.title = "Industrial Automation Products Lineup | Millennium Control System";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Millennium Control System's lineup of Mitsubishi Electric automation equipment, including FX5U, FX3U PLCs, AC drives, servo systems, and engineering software.");
    }
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #111b2d 0%, #1e2e4a 100%)', padding: '70px 40px' }}>
        <h1>Products Lineup</h1>
        <p style={{ color: '#90a0c0', maxWidth: '750px', margin: '0 auto', fontSize: '15px' }}>
          Explore our range of premium Mitsubishi Electric Factory Automation (FA) products. Millennium Control System provides system integration, commissioning, and technical support.
        </p>
      </div>

      <section className="products" id="products" style={{ padding: '60px 0' }}>
        <div className="products-inner">
          <div className="section-head">
            <h2 className="section-title">Factory Automation Equipment</h2>
            <div style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'linear-gradient(to right, #e60012 33%, #ddd 33%)', margin: '8px auto 0' }}></div>
          </div>
          
          <div className="products-grid" style={{ marginTop: '40px' }}>
            {productsData.map((prod) => (
              <div 
                key={prod.id} 
                className="product-card" 
                onClick={() => navigate(`/products/${prod.id}`)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div 
                  className="product-card-img" 
                  style={{
                    background: '#f8fafc',
                    width: '100%',
                    aspectRatio: '4/3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #f1f5f9',
                    margin: 0
                  }}
                >
                  {getProductSVG(prod.id)}
                </div>
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                      {prod.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>
                      {prod.shortDesc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e60012', fontWeight: '700', fontSize: '13px' }}>
                    <span>Explore details</span>
                    <span style={{ transition: 'transform 0.2s' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
=======
    <div className="products-page" style={{ paddingBottom: '80px', backgroundColor: '#fcfcfc' }}>
      
      {/* ── VISUAL HERO HEADER ── */}
      <div className="c-mainVisual" style={{
        background: 'linear-gradient(135deg, #0d1e3d, #1a2f56)',
        color: '#fff',
        padding: '65px 24px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderBottom: '4px solid #e60012'
      }}>
        <div className="hero-pattern" style={{
          opacity: 0.08,
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{
            background: '#e60012',
            color: '#fff',
            padding: '4px 14px',
            fontSize: '11px',
            fontWeight: '700',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            display: 'inline-block',
            marginBottom: '12px'
          }}>
            Factory Automation Solutions
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
            Products Portfolio
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Introducing Millennium Control System FA product lineup. We offer advanced components and custom integration solutions across India.
          </p>
        </div>
      </div>

      {/* ── MAIN PORTAL GRID ── */}
      <div style={{ maxWidth: '1200px', margin: '30px auto 0', padding: '0 20px' }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '24px', fontWeight: '500' }}>
          <Link to="/" style={{ color: '#475569' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#94a3b8' }}>Products</span>
>>>>>>> 62f6dfa92f9f3ccf87b34b788d1351a315fb0636
        </div>

        {/* ── TOP SEARCH & FILTER CONTROLS ── */}
        <div style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          
          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: '500px', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search models, instructions, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 42px',
                borderRadius: '24px',
                border: '1.5px solid #d1d5db',
                fontSize: '14.5px',
                outline: 'none',
                transition: 'all 0.2s',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--red)'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
            <svg viewBox="0 0 24 24" style={{ position: 'absolute', left: '16px', top: '13px', width: '18px', height: '18px', fill: 'none', stroke: '#9ca3af', strokeWidth: 2.2 }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>

          {/* Horizontal Category Tags */}
          <div>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Filter by segment
            </span>
            <ul className="c-filter-tags">
              <li>
                <button 
                  onClick={() => handleCategorySelect('all')}
                  className={`c-filter-tag-btn ${activeCategory === 'all' ? 'active' : ''}`}
                >
                  All Products ({getProductCount('all')})
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`c-filter-tag-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  >
                    {cat.name} ({getProductCount(cat.id)})
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Dynamic Filter Details Banner */}
        {activeCategory !== 'all' && (
          <div style={{
            background: '#f8fafc',
            borderLeft: '4px solid #e60012',
            padding: '20px 24px',
            borderRadius: '0 6px 6px 0',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                Active Segment: {activeCategoryObject?.name}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                {activeCategoryObject?.description}
              </p>
            </div>
            {activeCategoryObject?.brochureUrl && (
              <a
                href={activeCategoryObject.brochureUrl}
                download={`${activeCategoryObject.name}-Brochure`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#e60012',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '12.5px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'var(--dark-red)'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e60012'}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Segment PDF
              </a>
            )}
          </div>
        )}

        {/* ── QUICK ACTION LINKS ANCHOR BAR ── */}
        <div className="c-anchorNav" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <Link to="/about" className="c-linkWithIcon">
            <div className="c-linkWithIcon__icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="c-linkWithIcon__link u-icons--bulletRight">
              Our Commitment to Sustainability
            </div>
          </Link>
          
          <Link to="/contact" className="c-linkWithIcon">
            <div className="c-linkWithIcon__icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="c-linkWithIcon__link u-icons--bulletRight">
              FA Products Security Initiatives
            </div>
          </Link>
          
          <Link to="/about" className="c-linkWithIcon">
            <div className="c-linkWithIcon__icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="c-linkWithIcon__link u-icons--bulletRight">
              Pune Automation Center Hub
            </div>
          </Link>
        </div>

        {/* ── IF SEARCH RESULTS EXIST ── */}
        {hasAnyContent ? (
          <>
            
            {/* ── SECTION 1: HARDWARE ── */}
            {visibleHardwareCategories.length > 0 && (
              <section style={{ marginBottom: '50px', animation: 'fadeIn 0.4s ease' }}>
                <h2 className="c-headingLv2">Hardware</h2>
                <div className="c-portalGrid">
                  {visibleHardwareCategories.map(cat => {
                    const catProducts = products.filter(p => p.categorySlug === cat.id);
                    const filteredCatProducts = catProducts.filter(p => {
                      if (!searchQuery) return true;
                      return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.description.toLowerCase().includes(searchQuery.toLowerCase());
                    });
                    
                    return (
                      <div className="c-portalCard" key={cat.id}>
                        <img 
                          src={cat.image || '/images/cat_default.jpg'} 
                          className="c-portalCard__img" 
                          alt={cat.name} 
                          onError={(e) => { e.target.src = '/images/cat_default.jpg'; }}
                        />
                        <h3 className="c-portalCard__title" style={{ cursor: 'default' }}>
                          <span>{cat.name}</span>
                          <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#6b7280', padding: '2px 8px', borderRadius: '10px' }}>
                            {filteredCatProducts.length}
                          </span>
                        </h3>
                        <ul className="c-portalCard__list">
                          {filteredCatProducts.map(prod => (
                            <li className="c-portalCard__item" key={prod.id} style={{ margin: '4px 0' }}>
                              <Link to={`/products/${prod.id}`}>
                                <span className="u-icons--bulletRight" style={{ fontWeight: '600' }}>{prod.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  
                  {/* Additional placeholder categories, displayed only when there is no query filters */}
                  {!searchQuery && activeCategory === 'all' && (
                    <>
                      <div className="c-portalCard">
                        <div className="c-portalCard__img" style={{
                          background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.2">
                            <rect x="2" y="2" width="20" height="20" rx="2" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <line x1="12" y1="2" x2="12" y2="22" />
                          </svg>
                        </div>
                        <h3 className="c-portalCard__title" style={{ cursor: 'default' }}>
                          Modular I/O Systems
                        </h3>
                        <ul className="c-portalCard__list">
                          <li className="c-portalCard__item">
                            <Link to="/contact">
                              <span className="u-icons--bulletRight">Remote I/O Slice Terminals</span>
                            </Link>
                          </li>
                          <li className="c-portalCard__item">
                            <Link to="/contact">
                              <span className="u-icons--bulletRight">CC-Link IE TSN Remote Modules</span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="c-portalCard">
                        <div className="c-portalCard__img" style={{
                          background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e60012" strokeWidth="1.2">
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                            <line x1="12" y1="2" x2="12" y2="22" />
                            <line x1="2" y1="8.5" x2="12" y2="15" />
                            <line x1="22" y1="8.5" x2="12" y2="15" />
                          </svg>
                        </div>
                        <h3 className="c-portalCard__title" style={{ cursor: 'default' }}>
                          Industrial Computers
                        </h3>
                        <ul className="c-portalCard__list">
                          <li className="c-portalCard__item">
                            <Link to="/contact">
                              <span className="u-icons--bulletRight">MELIPC Edge Computing Devices</span>
                            </Link>
                          </li>
                          <li className="c-portalCard__item">
                            <Link to="/contact">
                              <span className="u-icons--bulletRight">High-reliability fanless IPCs</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                </div>

                {/* Strong Box for Spec Lists */}
                <div className="u-box u-box--strong">
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '24px'
                  }}>
                    <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="#e60012" strokeWidth="2.2" fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                      <span style={{ fontSize: '13.5px', fontWeight: '600', color: '#1a1f2e' }} className="u-icons--bulletRight">
                        Technical Specifications Directory
                      </span>
                    </Link>
                    <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="#e60012" strokeWidth="2.2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span style={{ fontSize: '13.5px', fontWeight: '600', color: '#1a1f2e' }} className="u-icons--bulletRight">
                        Products Certified to Global Standards
                      </span>
                    </Link>
                    <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="#e60012" strokeWidth="2.2" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      <span style={{ fontSize: '13.5px', fontWeight: '600', color: '#1a1f2e' }} className="u-icons--bulletRight">
                        Discontinued Units & Retrofit Solutions
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* ── SECTION 2: NETWORKS ── */}
            {shouldShowNetworks && (
              <section style={{ marginBottom: '50px', animation: 'fadeIn 0.4s ease' }}>
                <h2 className="c-headingLv2">Network Integration</h2>
                <div className="c-portalGrid">
                  
                  <div className="c-linkWithImage">
                    <div className="c-linkWithImage__image" style={{ background: '#0d1b2a', minHeight: '130px' }}>
                      <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>TSN</span>
                    </div>
                    <div className="c-linkWithImage__content">
                      <span className="c-linkWithImage__link u-icons--bulletRight">CC-Link IE TSN</span>
                      <p className="c-linkWithImage__text">
                        Gigabit Ethernet-based open network connecting business systems directly to plant operations with real-time time-synchronized synchronization.
                      </p>
                    </div>
                  </div>

                  <div className="c-linkWithImage">
                    <div className="c-linkWithImage__image" style={{ background: '#780000', minHeight: '130px' }}>
                      <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>FIBER</span>
                    </div>
                    <div className="c-linkWithImage__content">
                      <span className="c-linkWithImage__link u-icons--bulletRight">SSCNET III/H</span>
                      <p className="c-linkWithImage__text">
                        High-performance fiber-optic servo network. Guarantees interference-free high-speed synchronization for multi-axis motion controls.
                      </p>
                    </div>
                  </div>

                  <div className="c-linkWithImage">
                    <div className="c-linkWithImage__image" style={{ background: '#003049', minHeight: '130px' }}>
                      <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800', letterSpacing: '1px' }}>FIELD</span>
                    </div>
                    <div className="c-linkWithImage__content">
                      <span className="c-linkWithImage__link u-icons--bulletRight">CC-Link IE Field</span>
                      <p className="c-linkWithImage__text">
                        Integrated control, simple wiring, and safety networking across field controllers over Cat5e topology grids.
                      </p>
                    </div>
                  </div>

                  <div className="c-linkWithImage">
                    <div className="c-linkWithImage__image" style={{ background: '#3d5a80', minHeight: '130px' }}>
                      <span style={{ color: '#fff', fontSize: '22px', fontWeight: '800', letterSpacing: '1px' }}>BASIC</span>
                    </div>
                    <div className="c-linkWithImage__content">
                      <span className="c-linkWithImage__link u-icons--bulletRight">CC-Link IE Field Basic</span>
                      <p className="c-linkWithImage__text">
                        Software-based implementation enabling cyclic ethernet packet communication without custom controller ASICs.
                      </p>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {/* ── SECTION 3: SOFTWARE ── */}
            {shouldShowSoftware && (
              <section style={{ marginBottom: '50px', animation: 'fadeIn 0.4s ease' }}>
                <h2 className="c-headingLv2">Software</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '32px' }}>
                  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '24px', display: 'flex', gap: '20px' }}>
                    <div style={{ flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width="40" height="40" stroke="#e60012" strokeWidth="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
                    </div>
                    <div>
                      <h3 className="c-headingLv3--noBorder">Solution Software</h3>
                      <p className="c-text">
                        Optimize operational efficiency across plant lifecycle phases. SCADA visualization dashboards (GENESIS64), 3D automation system simulators (MELSOFT Gemini), and AI engineering assistants.
                      </p>
                    </div>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '24px', display: 'flex', gap: '20px' }}>
                    <div style={{ flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width="40" height="40" stroke="#e60012" strokeWidth="1.5" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <div>
                      <h3 className="c-headingLv3--noBorder">Engineering Tool Suites</h3>
                      <p className="c-text">
                        Configure and troubleshoot your devices. Support setup times with MELSOFT GX Works3 (PLC), GT Works3 (HMI), MT Developer2 (Motion Controllers), and setup utilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '24px'
                }}>
                  {products.filter(p => p.categorySlug === 'software').map(prod => (
                    <Link to={`/products/${prod.id}`} key={prod.id} className="u-icons--bulletRight" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--blue)', textAlign: 'left', padding: 0 }}>
                      {prod.name}
                    </Link>
                  ))}
                  
                  {products.filter(p => p.categorySlug === 'software').length === 0 && (
                    <>
                      <button onClick={() => setSearchQuery('GX Works')} className="u-icons--bulletRight" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--blue)', textAlign: 'left', padding: 0 }}>
                        Integrated Engineering Software (iQ Works)
                      </button>
                      <button onClick={() => setSearchQuery('GX Works')} className="u-icons--bulletRight" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--blue)', textAlign: 'left', padding: 0 }}>
                        PLC Configuration Tools (GX Works)
                      </button>
                      <button onClick={() => setSearchQuery('GT Works')} className="u-icons--bulletRight" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--blue)', textAlign: 'left', padding: 0 }}>
                        HMI Design Software (GT Works)
                      </button>
                      <button onClick={() => setSearchQuery('Configurator')} className="u-icons--bulletRight" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--blue)', textAlign: 'left', padding: 0 }}>
                        Servo Utility Software (MR Configurator)
                      </button>
                    </>
                  )}
                </div>
              </section>
            )}

            {/* ── SECTION 4: RELATED INFO ── */}
            {activeCategory === 'all' && !searchQuery && (
              <section style={{ marginBottom: '30px', animation: 'fadeIn 0.4s ease' }}>
                <h2 className="c-headingLv2">Related Information</h2>
                <div className="c-portalGrid">
                  
                  <Link to="/about" className="c-linkWithIcon" style={{ padding: '20px' }}>
                    <div className="c-linkWithIcon__icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/></svg>
                    </div>
                    <span className="c-linkWithIcon__link u-icons--bulletRight">Media Catalog Library</span>
                  </Link>

                  <Link to="/contact" className="c-linkWithIcon" style={{ padding: '20px' }}>
                    <div className="c-linkWithIcon__icon" style={{ background: '#eff6ff', color: '#3b82f6' }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    </div>
                    <span className="c-linkWithIcon__link u-icons--bulletRight">FA Specification Search App</span>
                  </Link>

                  <Link to="/about" className="c-linkWithIcon" style={{ padding: '20px' }}>
                    <div className="c-linkWithIcon__icon" style={{ background: '#faf5ff', color: '#9333ea' }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <span className="c-linkWithIcon__link u-icons--bulletRight">Authorized Distributor Network</span>
                  </Link>

                  <Link to="/contact" className="c-linkWithIcon" style={{ padding: '20px' }}>
                    <div className="c-linkWithIcon__icon" style={{ background: '#fffbeb', color: '#d97706' }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <span className="c-linkWithIcon__link u-icons--bulletRight">Customer Training Center</span>
                  </Link>

                </div>
              </section>
            )}

          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db', color: '#6b7280', animation: 'fadeIn 0.3s' }}>
            <svg viewBox="0 0 24 24" style={{ width: '48px', height: '48px', fill: 'none', stroke: '#9ca3af', strokeWidth: 1.5, marginBottom: '12px', margin: '0 auto' }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>No products or categories match your query</p>
            <p style={{ fontSize: '14px' }}>Try resetting your filters or typing a different keyword in the search bar.</p>
          </div>
        )}

      </div>
    </div>
  );
}
