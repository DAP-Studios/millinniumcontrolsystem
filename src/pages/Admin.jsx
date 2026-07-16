import { useState, useRef, useEffect } from 'react';
import { useData } from '../context/DataContext';
import useSEO from '../hooks/useSEO';
import { 
  Video, 
  Camera, 
  Check, 
  AlertTriangle, 
  CheckCircle,
} from 'lucide-react';

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
          style={{ background: '#0f172a', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <Video size={14} /> Start Webcam
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
              style={{ background: '#e60012', color: '#fff', fontSize: '12px', padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Camera size={14} /> Take Snapshot
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
          <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Check size={14} /> Snapshot Captured Successfully
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
  const { 
    categories, 
    products, 
    addCategory, 
    deleteCategory, 
    addProduct, 
    deleteProduct,
    setCategories,
    setProducts 
  } = useData();

  // Tab state: 'categories' | 'products' | 'cloudinary'
  const [activeConsole, setActiveConsole] = useState('categories');

  // Common alert notifications
  const [alert, setAlert] = useState({ type: '', message: '' });
  const clearAlert = () => setTimeout(() => setAlert({ type: '', message: '' }), 4000);

  // Cloudinary Settings State
  const [cloudName, setCloudName] = useState(() => localStorage.getItem('mcs_cloudinary_cloud_name') || import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '');
  const [uploadPreset, setUploadPreset] = useState(() => localStorage.getItem('mcs_cloudinary_upload_preset') || import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '');
  const [testingConnection, setTestingConnection] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState('');

  // Uploading States
  const [catImgUploading, setCatImgUploading] = useState(false);
  const [catBroUploading, setCatBroUploading] = useState(false);
  const [prodImgUploading, setProdImgUploading] = useState(false);
  const [inlineCatImgUploading, setInlineCatImgUploading] = useState(false);
  const [inlineCatBroUploading, setInlineCatBroUploading] = useState(false);

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

  const uploadToCloudinary = async (fileOrUrl, cName, uPreset) => {
    let fileToUpload = fileOrUrl;

    // If it's a local relative URL, fetch it and convert to blob
    if (typeof fileOrUrl === 'string' && fileOrUrl.startsWith('/') && !fileOrUrl.startsWith('data:')) {
      try {
        const response = await fetch(fileOrUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch local file ${fileOrUrl} (Status: ${response.status})`);
        }
        fileToUpload = await response.blob();
      } catch (e) {
        console.warn(`Could not load local asset ${fileOrUrl} to upload to Cloudinary. Skipping.`, e);
        throw e;
      }
    }

    const formData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('upload_preset', uPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cName}/auto/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || 'Upload to Cloudinary failed.');
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleFileChangeAndUpload = async (e, setVal, setUploadingState, fieldLabel) => {
    const file = e.target.files[0];
    if (!file) return;

    // Set preview / read local base64 first
    const reader = new FileReader();
    reader.onloadend = async () => {
      const localBase64 = reader.result;
      
      // If Cloudinary is configured, upload it
      if (cloudName && uploadPreset) {
        setUploadingState(true);
        try {
          const cloudinaryUrl = await uploadToCloudinary(file, cloudName, uploadPreset);
          setVal(cloudinaryUrl);
          setAlert({ type: 'success', message: `${fieldLabel} uploaded to Cloudinary successfully!` });
          clearAlert();
        } catch (err) {
          console.error(err);
          setAlert({ type: 'error', message: `Cloudinary Upload Failed: ${err.message}. Reverting to Base64 local storage.` });
          setVal(localBase64); // Fallback to local Base64
          clearAlert();
        } finally {
          setUploadingState(false);
        }
      } else {
        // Fallback to Base64
        setVal(localBase64);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCameraCaptureAndUpload = async (dataUrl, setVal, setUploadingState, fieldLabel) => {
    if (cloudName && uploadPreset) {
      setUploadingState(true);
      try {
        const cloudinaryUrl = await uploadToCloudinary(dataUrl, cloudName, uploadPreset);
        setVal(cloudinaryUrl);
        setAlert({ type: 'success', message: `${fieldLabel} uploaded to Cloudinary successfully!` });
        clearAlert();
      } catch (err) {
        console.error(err);
        setAlert({ type: 'error', message: `Cloudinary Upload Failed: ${err.message}. Reverting to Base64 local storage.` });
        setVal(dataUrl); // Fallback to local Base64
        clearAlert();
      } finally {
        setUploadingState(false);
      }
    } else {
      setVal(dataUrl);
    }
  };

  const testCloudinaryConnection = async () => {
    if (!cloudName || !uploadPreset) {
      setAlert({ type: 'error', message: 'Please enter both Cloud Name and Upload Preset to test.' });
      return;
    }
    setTestingConnection(true);
    try {
      const testGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      const url = await uploadToCloudinary(testGif, cloudName, uploadPreset);
      if (url) {
        setAlert({ type: 'success', message: 'Cloudinary connection test successful! Uploaded test asset.' });
      } else {
        throw new Error('No URL returned.');
      }
      clearAlert();
    } catch (err) {
      console.error(err);
      setAlert({ type: 'error', message: `Cloudinary test failed: ${err.message}` });
    } finally {
      setTestingConnection(false);
    }
  };

  const syncExistingAssets = async () => {
    if (!cloudName || !uploadPreset) {
      setAlert({ type: 'error', message: 'Please configure Cloudinary before syncing.' });
      return;
    }
    setSyncing(true);
    setSyncProgress('Initializing sync...');
    try {
      let updatedCategories = [...categories];
      let updatedProducts = [...products];
      let categoriesChanged = false;
      let productsChanged = false;
      
      // Sync Categories
      for (let i = 0; i < updatedCategories.length; i++) {
        const cat = updatedCategories[i];
        
        // Image
        if (cat.image && !cat.image.includes('cloudinary.com') && (cat.image.startsWith('data:') || cat.image.startsWith('/images/'))) {
          setSyncProgress(`Uploading image for category "${cat.name}"...`);
          try {
            const url = await uploadToCloudinary(cat.image, cloudName, uploadPreset);
            updatedCategories[i] = { ...updatedCategories[i], image: url };
            categoriesChanged = true;
          } catch (err) {
            console.error(`Failed to sync category image for ${cat.name}:`, err);
          }
        }

        // Brochure
        if (cat.brochureUrl && !cat.brochureUrl.includes('cloudinary.com') && (cat.brochureUrl.startsWith('data:') || cat.brochureUrl.startsWith('/brochures/'))) {
          setSyncProgress(`Uploading brochure for category "${cat.name}"...`);
          try {
            const url = await uploadToCloudinary(cat.brochureUrl, cloudName, uploadPreset);
            updatedCategories[i] = { ...updatedCategories[i], brochureUrl: url };
            categoriesChanged = true;
          } catch (err) {
            console.error(`Failed to sync category brochure for ${cat.name}:`, err);
          }
        }
      }

      // Sync Products
      for (let i = 0; i < updatedProducts.length; i++) {
        const prod = updatedProducts[i];
        
        // Image
        if (prod.imageUrl && !prod.imageUrl.includes('cloudinary.com') && (prod.imageUrl.startsWith('data:') || prod.imageUrl.startsWith('/images/'))) {
          setSyncProgress(`Uploading image for product "${prod.name}"...`);
          try {
            const url = await uploadToCloudinary(prod.imageUrl, cloudName, uploadPreset);
            updatedProducts[i] = { ...updatedProducts[i], imageUrl: url };
            productsChanged = true;
          } catch (err) {
            console.error(`Failed to sync product image for ${prod.name}:`, err);
          }
        }

        // Catalog
        if (prod.catalogUrl && prod.catalogUrl !== '#' && !prod.catalogUrl.includes('cloudinary.com') && (prod.catalogUrl.startsWith('data:') || prod.catalogUrl.startsWith('/brochures/') || prod.catalogUrl.startsWith('/catalogs/'))) {
          setSyncProgress(`Uploading catalog for product "${prod.name}"...`);
          try {
            const url = await uploadToCloudinary(prod.catalogUrl, cloudName, uploadPreset);
            updatedProducts[i] = { ...updatedProducts[i], catalogUrl: url };
            productsChanged = true;
          } catch (err) {
            console.error(`Failed to sync product catalog for ${prod.name}:`, err);
          }
        }
      }

      if (categoriesChanged) {
        setCategories(updatedCategories);
      }
      if (productsChanged) {
        setProducts(updatedProducts);
      }

      setAlert({ type: 'success', message: 'All local assets successfully synced to Cloudinary!' });
      setSyncProgress('');
      clearAlert();
    } catch (error) {
      console.error(error);
      setAlert({ type: 'error', message: `Sync failed: ${error.message}` });
      setSyncProgress('');
    } finally {
      setSyncing(false);
    }
  };

  const handleCategoryDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete the category "${name}"? This will not delete products under it.`)) {
      const res = deleteCategory(id);
      if (res.success) {
        setAlert({ type: 'success', message: `Category "${name}" deleted.` });
      } else {
        setAlert({ type: 'error', message: res.error });
      }
      clearAlert();
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
      <div className="page-header" style={{ background: 'var(--primary-navy)', padding: '50px 24px', textAlign: 'center', color: '#fff' }}>
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
          <button 
            type="button" 
            onClick={() => setActiveConsole('cloudinary')}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              color: activeConsole === 'cloudinary' ? '#e60012' : '#4b5563',
              borderBottom: activeConsole === 'cloudinary' ? '3px solid #e60012' : '3px solid transparent',
              marginBottom: '-2px',
              backgroundColor: 'transparent'
            }}
          >
            Cloudinary Configuration
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
            border: `1px solid ${alert.type === 'success' ? '#bcf0da' : '#f8b4b4'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {alert.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
            {alert.message}
          </div>
        )}

        {/* ----------------------------------------------------
            1. CATEGORIES CONSOLE
            ---------------------------------------------------- */}
        {activeConsole === 'categories' && (
          <div className="admin-grid">
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
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChangeAndUpload(e, setCatImgFile, setCatImgUploading, 'Category Image')} style={{ fontSize: '13px' }} />
                      {catImgUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading to Cloudinary...</div>}
                      {!catImgUploading && catImgFile && catImgFile.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Uploaded to Cloudinary</div>
                      )}
                    </div>
                  )}
                  {catImgMode === 'capture' && (
                    <div>
                      <CameraCapture onCapture={(dataUrl) => handleCameraCaptureAndUpload(dataUrl, setCatImgCap, setCatImgUploading, 'Category Image')} label="Capture Image" isPdfMode={false} />
                      {catImgUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading snapshot to Cloudinary...</div>}
                      {!catImgUploading && catImgCap && catImgCap.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Snapshot uploaded to Cloudinary</div>
                      )}
                    </div>
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
                    <div>
                      <input type="file" accept="application/pdf,image/*" onChange={(e) => handleFileChangeAndUpload(e, setCatBroFile, setCatBroUploading, 'Category Brochure PDF')} style={{ fontSize: '13px' }} />
                      {catBroUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading PDF/Image to Cloudinary...</div>}
                      {!catBroUploading && catBroFile && catBroFile.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Uploaded to Cloudinary</div>
                      )}
                    </div>
                  )}
                  {catBroMode === 'capture' && (
                    <div>
                      <CameraCapture onCapture={(dataUrl) => handleCameraCaptureAndUpload(dataUrl, setCatBroCap, setCatBroUploading, 'Category Brochure PDF')} label="Scan Brochure Sheet" isPdfMode={true} />
                      {catBroUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading scan to Cloudinary...</div>}
                      {!catBroUploading && catBroCap && catBroCap.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Scan uploaded to Cloudinary</div>
                      )}
                    </div>
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
                          <button onClick={() => handleCategoryDelete(cat.id, cat.name)} style={{ color: '#dc2626', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none' }}>Delete</button>
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
          <div className="admin-grid">
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
                        <div>
                          <input type="file" accept="image/*" onChange={(e) => handleFileChangeAndUpload(e, setInlineCatImgFile, setInlineCatImgUploading, 'Inline Category Image')} style={{ fontSize: '11px' }} />
                          {inlineCatImgUploading && <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px' }}>Uploading to Cloudinary...</div>}
                          {!inlineCatImgUploading && inlineCatImgFile && inlineCatImgFile.startsWith('https://res.cloudinary.com') && (
                            <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px' }}>Uploaded to Cloudinary</div>
                          )}
                        </div>
                      )}
                      {inlineCatImgMode === 'capture' && (
                        <div>
                          <CameraCapture onCapture={(dataUrl) => handleCameraCaptureAndUpload(dataUrl, setInlineCatImgCap, setInlineCatImgUploading, 'Inline Category Image')} label="Capture Image" isPdfMode={false} />
                          {inlineCatImgUploading && <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px' }}>Uploading snapshot to Cloudinary...</div>}
                          {!inlineCatImgUploading && inlineCatImgCap && inlineCatImgCap.startsWith('https://res.cloudinary.com') && (
                            <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px' }}>Snapshot uploaded to Cloudinary</div>
                          )}
                        </div>
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
                        <div>
                          <input type="file" accept="application/pdf,image/*" onChange={(e) => handleFileChangeAndUpload(e, setInlineCatBroFile, setInlineCatBroUploading, 'Inline Category Brochure PDF')} style={{ fontSize: '11px' }} />
                          {inlineCatBroUploading && <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px' }}>Uploading PDF/Image to Cloudinary...</div>}
                          {!inlineCatBroUploading && inlineCatBroFile && inlineCatBroFile.startsWith('https://res.cloudinary.com') && (
                            <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px' }}>Uploaded to Cloudinary</div>
                          )}
                        </div>
                      )}
                      {inlineCatBroMode === 'capture' && (
                        <div>
                          <CameraCapture onCapture={(dataUrl) => handleCameraCaptureAndUpload(dataUrl, setInlineCatBroCap, setInlineCatBroUploading, 'Inline Category Brochure PDF')} label="Scan brochure sheet" isPdfMode={true} />
                          {inlineCatBroUploading && <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '4px' }}>Uploading scan to Cloudinary...</div>}
                          {!inlineCatBroUploading && inlineCatBroCap && inlineCatBroCap.startsWith('https://res.cloudinary.com') && (
                            <div style={{ fontSize: '11px', color: '#15803d', marginTop: '4px' }}>Scan uploaded to Cloudinary</div>
                          )}
                        </div>
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
                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChangeAndUpload(e, setProdImgFile, setProdImgUploading, 'Product Image')} style={{ fontSize: '13px' }} />
                      {prodImgUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading to Cloudinary...</div>}
                      {!prodImgUploading && prodImgFile && prodImgFile.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Uploaded to Cloudinary</div>
                      )}
                    </div>
                  )}
                  {prodImgMode === 'capture' && (
                    <div>
                      <CameraCapture onCapture={(dataUrl) => handleCameraCaptureAndUpload(dataUrl, setProdImgCap, setProdImgUploading, 'Product Image')} label="Capture Product Image" isPdfMode={false} />
                      {prodImgUploading && <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px' }}>Uploading snapshot to Cloudinary...</div>}
                      {!prodImgUploading && prodImgCap && prodImgCap.startsWith('https://res.cloudinary.com') && (
                        <div style={{ fontSize: '12px', color: '#16a34a', marginTop: '4px' }}>Snapshot uploaded to Cloudinary</div>
                      )}
                    </div>
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

        {activeConsole === 'cloudinary' && (
          <div className="admin-grid">
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700', borderBottom: '2px solid #e60012', paddingBottom: '8px', display: 'inline-block' }}>
                Cloudinary Configuration
              </h2>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem('mcs_cloudinary_cloud_name', cloudName.trim());
                localStorage.setItem('mcs_cloudinary_upload_preset', uploadPreset.trim());
                setAlert({ type: 'success', message: 'Cloudinary configuration saved successfully!' });
                clearAlert();
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Cloud Name *</label>
                  <input 
                    type="text" 
                    value={cloudName}
                    onChange={(e) => setCloudName(e.target.value)}
                    placeholder="Enter your Cloudinary Cloud Name" 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', color: '#111827' }}
                    required
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Upload Preset (Unsigned) *</label>
                  <input 
                    type="text" 
                    value={uploadPreset}
                    onChange={(e) => setUploadPreset(e.target.value)}
                    placeholder="Enter your Unsigned Upload Preset" 
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '14px', color: '#111827' }}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="submit" style={{ flex: 1, backgroundColor: '#e60012', color: '#fff', padding: '12px', fontWeight: '600', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                    Save Settings
                  </button>
                  <button 
                    type="button" 
                    onClick={testCloudinaryConnection}
                    disabled={testingConnection}
                    style={{ flex: 1, backgroundColor: '#0f172a', color: '#fff', padding: '12px', fontWeight: '600', borderRadius: '4px', border: 'none', cursor: 'pointer', opacity: testingConnection ? 0.7 : 1 }}
                  >
                    {testingConnection ? 'Testing...' : 'Test Connection'}
                  </button>
                </div>
              </form>

              {/* Bulk sync tool */}
              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Bulk Image & PDF Sync</h3>
                <p style={{ fontSize: '13px', color: '#4b5563', marginBottom: '16px', lineHeight: '1.5' }}>
                  Upload all current images and PDF brochures (from existing categories and products) that are currently stored as Base64 strings or local placeholders to Cloudinary in bulk.
                </p>
                <button 
                  type="button" 
                  onClick={syncExistingAssets}
                  disabled={syncing}
                  style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', padding: '12px', fontWeight: '600', borderRadius: '4px', border: 'none', cursor: 'pointer', opacity: syncing ? 0.7 : 1 }}
                >
                  {syncing ? 'Syncing Assets...' : 'Sync Assets to Cloudinary'}
                </button>
                {syncProgress && (
                  <div style={{ marginTop: '12px', fontSize: '12px', color: '#2563eb', fontWeight: '600', backgroundColor: '#eff6ff', padding: '8px 12px', borderRadius: '4px' }}>
                    {syncProgress}
                  </div>
                )}
              </div>
            </div>

            {/* Instruction Guide */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '20px', color: '#111827', marginBottom: '20px', fontWeight: '700' }}>Cloudinary Setup Guide</h2>
              <div style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '12px' }}>
                  To enable direct uploads of images and brochure PDFs from this admin console, you need to use an <strong>Unsigned Upload Preset</strong>. Follow these steps:
                </p>
                <ol style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    Create a free account or log in at <a href="https://cloudinary.com" target="_blank" rel="noreferrer" style={{ color: '#e60012', fontWeight: '600' }}>Cloudinary.com</a>.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Open your Cloudinary Console dashboard. Copy the <strong>Cloud Name</strong> displayed at the top.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Click on the <strong>Settings (Gear Icon)</strong> at the bottom left.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Select <strong>Upload</strong> from the settings menu.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Scroll down to <strong>Upload presets</strong> and click <strong>Add upload preset</strong>.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Change the <strong>Signing Mode</strong> from <em>Signed</em> to <strong>Unsigned</strong>.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <em>Optional:</em> Specify a folder name (e.g. <code>mcs_assets</code>) where your files should be stored.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Click <strong>Save</strong> at the top right.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Copy the generated <strong>Upload Preset name</strong> (it will be a random alphanumeric string unless you renamed it) and paste it into the form on the left.
                  </li>
                </ol>
                <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '4px', padding: '12px 16px', color: '#78350f', fontSize: '13px' }}>
                  <strong>Note:</strong> Once configured, all newly selected files (from device or camera scans) will automatically upload to Cloudinary. Unconfigured environments will continue to save images as raw Base64 data strings.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
