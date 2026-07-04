import { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';

// Reusable Camera Helper Component for Webcam Capture
function CameraCapture({ onCapture, label, isPdfMode }) {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [capturedImage, setCapturedImage] = useState('');
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error(err);
      setError("Unable to access webcam. Please check browser permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(dataUrl);
      onCapture(dataUrl);
      stopCamera();
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div style={{ marginTop: '8px', padding: '12px', border: '1px dashed #cbd5e1', borderRadius: '4px', background: '#f8fafc' }}>
      <div style={{ fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
        {label || (isPdfMode ? "Webcam Document Scanner" : "Webcam Camera Feed")}
      </div>
      {error && <div style={{ color: '#dc2626', fontSize: '12px', marginBottom: '8px' }}>{error}</div>}
      
      {!stream && !capturedImage && (
        <button 
          type="button" 
          onClick={startCamera} 
          style={{ background: '#0f172a', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
        >
          🎥 Start Webcam
        </button>
      )}

      {stream && (
        <div>
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            style={{ width: '100%', maxWidth: '320px', borderRadius: '4px', background: '#000', marginBottom: '8px' }} 
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              type="button" 
              onClick={capturePhoto} 
              style={{ background: '#e60012', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              📷 Take Snapshot
            </button>
            <button 
              type="button" 
              onClick={stopCamera} 
              style={{ background: '#9ca3af', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {capturedImage && (
        <div>
          <img 
            src={capturedImage} 
            alt="Captured preview" 
            style={{ width: '100%', maxWidth: '160px', borderRadius: '4px', border: '1px solid #cbd5e1', marginBottom: '8px' }} 
          />
          <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '8px' }}>
            ✓ Snapshot Captured Successfully
          </div>
          <div>
            <button 
              type="button" 
              onClick={() => { setCapturedImage(''); startCamera(); }} 
              style={{ background: '#0f172a', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              Retake Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Admin() {
  const { categories, products, addCategory, deleteCategory, updateCategory, addProduct, deleteProduct } = useData();

  // Tab state: 'categories' | 'products'
  const [activeConsole, setActiveConsole] = useState('categories');

  // Common alert notifications
  const [alert, setAlert] = useState({ type: '', message: '' });
  const clearAlert = () => setTimeout(() => setAlert({ type: '', message: '' }), 4000);

  // ----------------------------------------------------
  // CATEGORY CONSOLE STATE
  // ----------------------------------------------------
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  const [catImgMode, setCatImgMode] = useState('link'); // 'link' | 'device' | 'capture'
  const [catImgLink, setCatImgLink] = useState('/images/cat_default.jpg');
  const [catImgFile, setCatImgFile] = useState('');
  const [catImgCap, setCatImgCap] = useState('');
  const [catBroMode, setCatBroMode] = useState('link'); // 'link' | 'device' | 'capture'
  const [catBroLink, setCatBroLink] = useState('');
  const [catBroFile, setCatBroFile] = useState('');
  const [catBroCap, setCatBroCap] = useState('');

  // ----------------------------------------------------
  // PRODUCT CONSOLE STATE
  // ----------------------------------------------------
  const [prodName, setProdName] = useState('');
  const [prodCategorySlug, setProdCategorySlug] = useState(''); // Category slug or 'new'
  const [prodSummary, setProdSummary] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodImgMode, setProdImgMode] = useState('link'); // 'link' | 'device' | 'capture'
  const [prodImgLink, setProdImgLink] = useState('/images/products/default.jpg');
  const [prodImgFile, setProdImgFile] = useState('');
  const [prodImgCap, setProdImgCap] = useState('');
  const [prodYoutube, setProdYoutube] = useState('');
  const [prodCatalog, setProdCatalog] = useState('');
  const [prodFeatures, setProdFeatures] = useState(''); // text line items
  const [prodSpecs, setProdSpecs] = useState(''); // key: value text lines

  // ----------------------------------------------------
  // INLINE CATEGORY STATE (When creating category inside product form)
  // ----------------------------------------------------
  const [inlineCatName, setInlineCatName] = useState('');
  const [inlineCatDesc, setInlineCatDesc] = useState('');
  const [inlineCatImgMode, setInlineCatImgMode] = useState('link');
  const [inlineCatImgLink, setInlineCatImgLink] = useState('/images/cat_default.jpg');
  const [inlineCatImgFile, setInlineCatImgFile] = useState('');
  const [inlineCatImgCap, setInlineCatImgCap] = useState('');
  const [inlineCatBroMode, setInlineCatBroMode] = useState('link');
  const [inlineCatBroLink, setInlineCatBroLink] = useState('');
  const [inlineCatBroFile, setInlineCatBroFile] = useState('');
  const [inlineCatBroCap, setInlineCatBroCap] = useState('');

  useSEO({
    title: 'Admin Category & Product Control Center',
    description: 'System dashboard to add automation categories and products with dynamic webcam scanner tools.',
    keywords: 'Admin, Millennium Control System, Products Manager'
  });

  const handleFileChange = (e, setVal) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVal(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ----------------------------------------------------
  // CATEGORY SUBMIT
  // ----------------------------------------------------
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!catName.trim()) {
      setAlert({ type: 'error', message: 'Category Name is required.' });
      return;
    }

    const imgVal = catImgMode === 'link' ? catImgLink : (catImgMode === 'device' ? catImgFile : catImgCap);
    const broVal = catBroMode === 'link' ? catBroLink : (catBroMode === 'device' ? catBroFile : catBroCap);

    const res = addCategory({
      name: catName.trim(),
      description: catDesc.trim(),
      image: imgVal || '/images/cat_default.jpg',
      brochureUrl: broVal
    });

    if (res.success) {
      setAlert({ type: 'success', message: `Category "${res.category.name}" created successfully!` });
      setCatName('');
      setCatDesc('');
      setCatImgLink('/images/cat_default.jpg');
      setCatImgFile('');
      setCatImgCap('');
      setCatBroLink('');
      setCatBroFile('');
      setCatBroCap('');
      setCatImgMode('link');
      setCatBroMode('link');
    } else {
      setAlert({ type: 'error', message: res.error });
    }
    clearAlert();
  };

  // ----------------------------------------------------
  // PRODUCT SUBMIT WITH INLINE CATEGORY SUPPORT
  // ----------------------------------------------------
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!prodName.trim()) {
      setAlert({ type: 'error', message: 'Product Name is required.' });
      return;
    }

    let finalCategorySlug = prodCategorySlug;

    // 1. Check if user is creating a new category inline
    if (prodCategorySlug === 'new') {
      if (!inlineCatName.trim()) {
        setAlert({ type: 'error', message: 'Inline Category Name is required.' });
        return;
      }

      const inlineImgVal = inlineCatImgMode === 'link' ? inlineCatImgLink : (inlineCatImgMode === 'device' ? inlineCatImgFile : inlineCatImgCap);
      const inlineBroVal = inlineCatBroMode === 'link' ? inlineCatBroLink : (inlineCatBroMode === 'device' ? inlineCatBroFile : inlineCatBroCap);

      const catRes = addCategory({
        name: inlineCatName.trim(),
        description: inlineCatDesc.trim(),
        image: inlineImgVal || '/images/cat_default.jpg',
        brochureUrl: inlineBroVal
      });

      if (catRes.success) {
        finalCategorySlug = catRes.category.id;
      } else {
        setAlert({ type: 'error', message: `Category Creation Failed: ${catRes.error}` });
        clearAlert();
        return;
      }
    }

    if (!finalCategorySlug) {
      setAlert({ type: 'error', message: 'Please select or create a category.' });
      return;
    }

    // Parse Features
    const parsedFeatures = prodFeatures
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    // Parse Specifications
    const parsedSpecs = {};
    prodSpecs.split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        if (key && value) {
          parsedSpecs[key] = value;
        }
      }
    });

    const prodImgVal = prodImgMode === 'link' ? prodImgLink : (prodImgMode === 'device' ? prodImgFile : prodImgCap);

    const res = addProduct({
      name: prodName.trim(),
      categorySlug: finalCategorySlug,
      summary: prodSummary.trim(),
      description: prodDescription.trim(),
      features: parsedFeatures,
      specifications: parsedSpecs,
      imageUrl: prodImgVal || '/images/products/default.jpg',
      youtubeUrl: prodYoutube.trim(),
      catalogUrl: prodCatalog.trim()
    });

    if (res.success) {
      setAlert({ type: 'success', message: `Product "${res.product.name}" added successfully!` });
      setProdName('');
      setProdCategorySlug('');
      setProdSummary('');
      setProdDescription('');
      setProdFeatures('');
      setProdSpecs('');
      setProdImgLink('/images/products/default.jpg');
      setProdImgFile('');
      setProdImgCap('');
      setProdYoutube('');
      setProdCatalog('');
      setInlineCatName('');
      setInlineCatDesc('');
      setInlineCatImgFile('');
      setInlineCatImgCap('');
      setInlineCatBroFile('');
      setInlineCatBroCap('');
      setInlineCatImgMode('link');
      setInlineCatBroMode('link');
    } else {
      setAlert({ type: 'error', message: res.error });
    }
    clearAlert();
  };

  const handleProductDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete the product "${name}"?`)) {
      const res = deleteProduct(id);
      if (res.success) {
        setAlert({ type: 'success', message: `Product "${name}" deleted.` });
      }
      clearAlert();
    }
  };

  const getProductCount = (categorySlug) => {
    return products.filter(p => p.categorySlug === categorySlug).length;
  };

  return (
    <div className="admin-page" style={{ paddingBottom: '80px' }}>
      
      {/* Page Title */}
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #111827, #1f2937)', padding: '50px 24px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px', fontWeight: '700' }}>Admin Console</h1>
        <p style={{ color: '#9ca3af', fontSize: '16px' }}>Manage Categories and Products dynamically</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto 0', padding: '0 20px' }}>
        
        {/* Toggle Navigation Tabs */}
        <div style={{ display: 'flex', gap: '20px', borderBottom: '2px solid #e5e7eb', marginBottom: '30px' }}>
          <button 
            type="button" 
            onClick={() => setActiveConsole('categories')}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              color: activeConsole === 'categories' ? '#e60012' : '#4b5563',
              borderBottom: activeConsole === 'categories' ? '3px solid #e60012' : '3px solid transparent',
              marginBottom: '-2px',
              backgroundColor: 'transparent'
            }}
          >
            Manage Categories
          </button>
          <button 
            type="button" 
            onClick={() => setActiveConsole('products')}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              color: activeConsole === 'products' ? '#e60012' : '#4b5563',
              borderBottom: activeConsole === 'products' ? '3px solid #e60012' : '3px solid transparent',
              marginBottom: '-2px',
              backgroundColor: 'transparent'
            }}
          >
            Manage Products
          </button>
        </div>

        {/* Global Alerts */}
        {alert.message && (
          <div style={{
            padding: '16px 20px',
            borderRadius: '4px',
            marginBottom: '24px',
            fontWeight: '600',
            fontSize: '14px',
            backgroundColor: alert.type === 'success' ? '#def7ec' : '#fde8e8',
            color: alert.type === 'success' ? '#03543f' : '#9b1c1c',
            border: `1px solid ${alert.type === 'success' ? '#bcf0da' : '#f8b4b4'}`
          }}>
            {alert.type === 'success' ? '✓ ' : '⚠ '} {alert.message}
          </div>
        )}

        {/* ----------------------------------------------------
            1. CATEGORIES CONSOLE
            ---------------------------------------------------- */}
        {activeConsole === 'categories' && (
          <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '40px' }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700', borderBottom: '2px solid #e60012', paddingBottom: '8px', display: 'inline-block' }}>
                Add New Category
              </h2>
              
              <form onSubmit={handleAddCategory}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Category Name *</label>
                  <input 
                    type="text" 
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                    placeholder="e.g. Graphic Operation Controllers" 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', color: '#111827' }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Description</label>
                  <textarea 
                    rows="3"
                    value={catDesc}
                    onChange={(e) => setCatDesc(e.target.value)}
                    placeholder="Category overview notes for customers and SEO indexing..." 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', color: '#111827', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>

                {/* Cover Image */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Category Image</label>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
                    <button type="button" onClick={() => setCatImgMode('link')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catImgMode === 'link' ? '2px solid #e60012' : 'none', color: catImgMode === 'link' ? '#e60012' : '#4b5563' }}>Link</button>
                    <button type="button" onClick={() => setCatImgMode('device')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catImgMode === 'device' ? '2px solid #e60012' : 'none', color: catImgMode === 'device' ? '#e60012' : '#4b5563' }}>Device</button>
                    <button type="button" onClick={() => setCatImgMode('capture')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catImgMode === 'capture' ? '2px solid #e60012' : 'none', color: catImgMode === 'capture' ? '#e60012' : '#4b5563' }}>Camera</button>
                  </div>
                  {catImgMode === 'link' && (
                    <input type="text" value={catImgLink} onChange={(e) => setCatImgLink(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }} />
                  )}
                  {catImgMode === 'device' && (
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setCatImgFile)} style={{ fontSize: '13px' }} />
                  )}
                  {catImgMode === 'capture' && (
                    <CameraCapture onCapture={setCatImgCap} label="Capture Image" isPdfMode={false} />
                  )}
                </div>

                {/* Brochure PDF */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Category Brochure PDF</label>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
                    <button type="button" onClick={() => setCatBroMode('link')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catBroMode === 'link' ? '2px solid #e60012' : 'none', color: catBroMode === 'link' ? '#e60012' : '#4b5563' }}>Link</button>
                    <button type="button" onClick={() => setCatBroMode('device')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catBroMode === 'device' ? '2px solid #e60012' : 'none', color: catBroMode === 'device' ? '#e60012' : '#4b5563' }}>Device</button>
                    <button type="button" onClick={() => setCatBroMode('capture')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: catBroMode === 'capture' ? '2px solid #e60012' : 'none', color: catBroMode === 'capture' ? '#e60012' : '#4b5563' }}>Webcam Scan</button>
                  </div>
                  {catBroMode === 'link' && (
                    <input type="text" value={catBroLink} onChange={(e) => setCatBroLink(e.target.value)} placeholder="e.g. /brochures/got.pdf" style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }} />
                  )}
                  {catBroMode === 'device' && (
                    <input type="file" accept="application/pdf,image/*" onChange={(e) => handleFileChange(e, setCatBroFile)} style={{ fontSize: '13px' }} />
                  )}
                  {catBroMode === 'capture' && (
                    <CameraCapture onCapture={setCatBroCap} label="Scan Brochure Sheet" isPdfMode={true} />
                  )}
                </div>

                <button type="submit" style={{ width: '100%', backgroundColor: '#e60012', color: '#fff', padding: '12px', fontWeight: '600', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                  Create Category
                </button>
              </form>
            </div>

            {/* Table */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700' }}>Active Categories ({categories.length})</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb', color: '#4b5563', fontWeight: '600' }}>
                      <th style={{ padding: '12px 8px' }}>Category Name</th>
                      <th style={{ padding: '12px 8px' }}>Slug / ID</th>
                      <th style={{ padding: '12px 8px' }}>Products</th>
                      <th style={{ padding: '12px 8px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map(cat => (
                      <tr key={cat.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={{ padding: '14px 8px', fontWeight: '600', color: '#111827' }}>{cat.name}</td>
                        <td style={{ padding: '14px 8px', fontFamily: 'monospace', fontSize: '12px' }}>{cat.id}</td>
                        <td style={{ padding: '14px 8px' }}>{getProductCount(cat.id)} items</td>
                        <td style={{ padding: '14px 8px', textAlign: 'right' }}>
                          <button onClick={() => handleDelete(cat.id, cat.name)} style={{ color: '#dc2626', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none' }}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            2. PRODUCTS CONSOLE
            ---------------------------------------------------- */}
        {activeConsole === 'products' && (
          <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.7fr', gap: '40px' }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700', borderBottom: '2px solid #e60012', paddingBottom: '8px', display: 'inline-block' }}>
                Add New Product
              </h2>

              <form onSubmit={handleAddProduct}>
                
                {/* Product Name */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Product Name *</label>
                  <input 
                    type="text" 
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    placeholder="e.g. MELSEC FX5U-64MR/ES PLC"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }}
                    required
                  />
                </div>

                {/* Category Selector Dropdown */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Product Category *</label>
                  <select
                    value={prodCategorySlug}
                    onChange={(e) => setProdCategorySlug(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', backgroundColor: '#fff' }}
                    required
                  >
                    <option value="">Select a Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                    <option value="new" style={{ fontWeight: '700', color: '#e60012' }}>+ Create New Category...</option>
                  </select>
                </div>

                {/* CONDITIONAL INLINE CATEGORY FORM */}
                {prodCategorySlug === 'new' && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '6px', padding: '20px', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '15px', color: '#991b1b', fontWeight: '700', marginBottom: '14px' }}>Inline Category Details</h3>
                    
                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#7f1d1d', marginBottom: '4px' }}>New Category Name *</label>
                      <input 
                        type="text"
                        value={inlineCatName}
                        onChange={(e) => setInlineCatName(e.target.value)}
                        placeholder="e.g. Industrial Computers"
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #fca5a5', fontSize: '13px' }}
                      />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#7f1d1d', marginBottom: '4px' }}>Category Description</label>
                      <textarea 
                        rows="2"
                        value={inlineCatDesc}
                        onChange={(e) => setInlineCatDesc(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #fca5a5', fontSize: '13px', resize: 'vertical' }}
                      />
                    </div>

                    {/* Inline Cover Image */}
                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#7f1d1d', marginBottom: '4px' }}>Category Image</label>
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', borderBottom: '1px solid #fca5a5' }}>
                        <button type="button" onClick={() => setInlineCatImgMode('link')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatImgMode === 'link' ? '2px solid #991b1b' : 'none', color: inlineCatImgMode === 'link' ? '#991b1b' : '#7f1d1d' }}>Link</button>
                        <button type="button" onClick={() => setInlineCatImgMode('device')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatImgMode === 'device' ? '2px solid #991b1b' : 'none', color: inlineCatImgMode === 'device' ? '#991b1b' : '#7f1d1d' }}>Device</button>
                        <button type="button" onClick={() => setInlineCatImgMode('capture')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatImgMode === 'capture' ? '2px solid #991b1b' : 'none', color: inlineCatImgMode === 'capture' ? '#991b1b' : '#7f1d1d' }}>Camera</button>
                      </div>
                      {inlineCatImgMode === 'link' && (
                        <input type="text" value={inlineCatImgLink} onChange={(e) => setInlineCatImgLink(e.target.value)} style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #fca5a5', fontSize: '13px' }} />
                      )}
                      {inlineCatImgMode === 'device' && (
                        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setInlineCatImgFile)} style={{ fontSize: '11px' }} />
                      )}
                      {inlineCatImgMode === 'capture' && (
                        <CameraCapture onCapture={setInlineCatImgCap} label="Capture Image" isPdfMode={false} />
                      )}
                    </div>

                    {/* Inline Brochure PDF */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#7f1d1d', marginBottom: '4px' }}>Category Brochure PDF</label>
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', borderBottom: '1px solid #fca5a5' }}>
                        <button type="button" onClick={() => setInlineCatBroMode('link')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatBroMode === 'link' ? '2px solid #991b1b' : 'none', color: inlineCatBroMode === 'link' ? '#991b1b' : '#7f1d1d' }}>Link</button>
                        <button type="button" onClick={() => setInlineCatBroMode('device')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatBroMode === 'device' ? '2px solid #991b1b' : 'none', color: inlineCatBroMode === 'device' ? '#991b1b' : '#7f1d1d' }}>Device</button>
                        <button type="button" onClick={() => setInlineCatBroMode('capture')} style={{ padding: '4px 8px', fontSize: '11px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: inlineCatBroMode === 'capture' ? '2px solid #991b1b' : 'none', color: inlineCatBroMode === 'capture' ? '#991b1b' : '#7f1d1d' }}>Camera Scan</button>
                      </div>
                      {inlineCatBroMode === 'link' && (
                        <input type="text" value={inlineCatBroLink} onChange={(e) => setInlineCatBroLink(e.target.value)} placeholder="e.g. /brochures/manual.pdf" style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #fca5a5', fontSize: '13px' }} />
                      )}
                      {inlineCatBroMode === 'device' && (
                        <input type="file" accept="application/pdf,image/*" onChange={(e) => handleFileChange(e, setInlineCatBroFile)} style={{ fontSize: '11px' }} />
                      )}
                      {inlineCatBroMode === 'capture' && (
                        <CameraCapture onCapture={setInlineCatBroCap} label="Scan brochure sheet" isPdfMode={true} />
                      )}
                    </div>
                  </div>
                )}

                {/* Summary */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Summary / Brief Description</label>
                  <input 
                    type="text" 
                    value={prodSummary}
                    onChange={(e) => setProdSummary(e.target.value)}
                    placeholder="Short product teaser..."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }}
                  />
                </div>

                {/* Description */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Long Description</label>
                  <textarea 
                    rows="3"
                    value={prodDescription}
                    onChange={(e) => setProdDescription(e.target.value)}
                    placeholder="Detailed specifications overview..."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>

                {/* Product Image */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Product Image</label>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', borderBottom: '1px solid #e5e7eb' }}>
                    <button type="button" onClick={() => setProdImgMode('link')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: prodImgMode === 'link' ? '2px solid #e60012' : 'none', color: prodImgMode === 'link' ? '#e60012' : '#4b5563' }}>Link</button>
                    <button type="button" onClick={() => setProdImgMode('device')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: prodImgMode === 'device' ? '2px solid #e60012' : 'none', color: prodImgMode === 'device' ? '#e60012' : '#4b5563' }}>Device</button>
                    <button type="button" onClick={() => setProdImgMode('capture')} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', background: 'transparent', border: 'none', borderBottom: prodImgMode === 'capture' ? '2px solid #e60012' : 'none', color: prodImgMode === 'capture' ? '#e60012' : '#4b5563' }}>Camera</button>
                  </div>
                  {prodImgMode === 'link' && (
                    <input type="text" value={prodImgLink} onChange={(e) => setProdImgLink(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }} />
                  )}
                  {prodImgMode === 'device' && (
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setProdImgFile)} style={{ fontSize: '13px' }} />
                  )}
                  {prodImgMode === 'capture' && (
                    <CameraCapture onCapture={setProdImgCap} label="Capture Product Image" isPdfMode={false} />
                  )}
                </div>

                {/* Youtube link */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>YouTube Embed URL</label>
                  <input 
                    type="text" 
                    value={prodYoutube}
                    onChange={(e) => setProdYoutube(e.target.value)}
                    placeholder="e.g. https://www.youtube.com/embed/..."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px' }}
                  />
                </div>

                {/* Key Features list */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Key Features (One feature per line)</label>
                  <textarea 
                    rows="3"
                    value={prodFeatures}
                    onChange={(e) => setProdFeatures(e.target.value)}
                    placeholder="High-speed sequence loop&#10;Integrated positioning unit&#10;Built-in analog controls"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>

                {/* Specifications table */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Specifications (Format: Key: Value, one per line)</label>
                  <textarea 
                    rows="4"
                    value={prodSpecs}
                    onChange={(e) => setProdSpecs(e.target.value)}
                    placeholder="Memory: 64,000 steps&#10;Speed: 0.034 microsec&#10;Ports: RS-485, Ethernet"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" style={{ width: '100%', backgroundColor: '#e60012', color: '#fff', padding: '12px', fontWeight: '600', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                  Create Product
                </button>
              </form>
            </div>

            {/* List Table */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700' }}>Active Products ({products.length})</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb', color: '#4b5563', fontWeight: '600' }}>
                      <th style={{ padding: '12px 8px' }}>Product Name</th>
                      <th style={{ padding: '12px 8px' }}>Category</th>
                      <th style={{ padding: '12px 8px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(prod => {
                      const catName = categories.find(c => c.id === prod.categorySlug)?.name || prod.categorySlug;
                      return (
                        <tr key={prod.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                          <td style={{ padding: '14px 8px', fontWeight: '600', color: '#111827' }}>{prod.name}</td>
                          <td style={{ padding: '14px 8px', color: '#4b5563' }}>{catName}</td>
                          <td style={{ padding: '14px 8px', textAlign: 'right' }}>
                            <button onClick={() => handleProductDelete(prod.id, prod.name)} style={{ color: '#dc2626', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none' }}>Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
