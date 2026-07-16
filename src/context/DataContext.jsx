import { createContext, useContext, useState, useEffect } from 'react';
import { initialCategories, initialProducts } from '../data/productsData';

const DataContext = createContext(null);

// Helper to clean categories (filters out config leaks and handles basic deduplication)
const cleanCategories = (cats) => {
  if (!Array.isArray(cats)) return [];
  const seenNames = new Set();
  const seenIds = new Set();
  
  return cats.filter(cat => {
    if (!cat || !cat.id || !cat.name) return false;
    const id = cat.id.toLowerCase();
    const name = cat.name.toLowerCase();
    
    // Filter out Cloudinary placeholders and config leaks
    if (id.includes('cloud_name') || id.includes('upload_preset') || id.includes('cloudinary') || id.includes('preset') || id.includes('your_')) return false;
    if (name.includes('cloud_name') || name.includes('upload_preset') || name.includes('cloudinary') || name.includes('preset') || name.includes('your_')) return false;
    
    if (seenNames.has(name) || seenIds.has(cat.id)) return false;
    
    seenNames.add(name);
    seenIds.add(cat.id);
    return true;
  });
};

// Helper to clean products (filters out config leaks and duplicate product listings)
const cleanProducts = (prods, validCategoryIds) => {
  if (!Array.isArray(prods)) return [];
  const seenNames = new Set();
  const seenIds = new Set();
  
  return prods.filter(prod => {
    if (!prod || !prod.id || !prod.name) return false;
    const id = prod.id.toLowerCase();
    const name = prod.name.toLowerCase();
    
    // Filter out config leaks
    if (id.includes('cloud_name') || id.includes('upload_preset') || id.includes('cloudinary') || id.includes('preset') || id.includes('your_')) return false;
    if (name.includes('cloud_name') || name.includes('upload_preset') || name.includes('cloudinary') || name.includes('preset') || name.includes('your_')) return false;
    
    // Verify valid category assignment if specified
    if (prod.categorySlug && !validCategoryIds.has(prod.categorySlug)) return false;
    
    // Deduplicate by normalized name and ID
    if (seenNames.has(name) || seenIds.has(prod.id)) return false;
    
    seenNames.add(name);
    seenIds.add(prod.id);
    return true;
  });
};

export function DataProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    const defaultCats = cleanCategories(initialCategories);
    try {
      const stored = localStorage.getItem('mcs_categories');
      if (stored) {
        const storedCats = cleanCategories(JSON.parse(stored));
        const merged = [...defaultCats];
        const handledIds = new Set(defaultCats.map(c => c.id));
        
        for (const cat of storedCats) {
          if (!handledIds.has(cat.id)) {
            merged.push(cat);
            handledIds.add(cat.id);
          }
        }
        return merged;
      }
    } catch (e) {
      console.error("Error reading categories from localStorage", e);
    }
    return defaultCats;
  });

  const [products, setProducts] = useState(() => {
    // Get valid category IDs to ensure products don't point to cleaned-up/deleted categories
    const validCategoryIds = new Set(cleanCategories(initialCategories).map(c => c.id));
    
    // If we loaded categories from localStorage, merge those valid IDs too
    try {
      const storedCatsStr = localStorage.getItem('mcs_categories');
      if (storedCatsStr) {
        cleanCategories(JSON.parse(storedCatsStr)).forEach(c => validCategoryIds.add(c.id));
      }
    } catch {
      // Ignored
    }

    const defaultProds = cleanProducts(initialProducts, validCategoryIds);
    try {
      const stored = localStorage.getItem('mcs_products');
      if (stored) {
        const storedProds = cleanProducts(JSON.parse(stored), validCategoryIds);
        const merged = [...defaultProds];
        const handledIds = new Set(defaultProds.map(p => p.id));
        
        for (const prod of storedProds) {
          if (!handledIds.has(prod.id)) {
            merged.push(prod);
            handledIds.add(prod.id);
          }
        }
        return merged;
      }
    } catch (e) {
      console.error("Error reading products from localStorage", e);
    }
    return defaultProds;
  });

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem('mcs_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('mcs_products', JSON.stringify(products));
  }, [products]);

  // Add Category handler
  const addCategory = (category) => {
    // Generate id slug from name
    const id = category.id || category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    if (categories.some(c => c.id === id)) {
      return { success: false, error: 'Category with this name/slug already exists.' };
    }

    const newCategory = {
      id,
      name: category.name,
      description: category.description || '',
      image: category.image || '/images/cat_default.jpg',
      brochureUrl: category.brochureUrl || ''
    };

    setCategories(prev => [...prev, newCategory]);
    return { success: true, category: newCategory };
  };

  // Delete Category handler
  const deleteCategory = (id) => {
    if (!categories.some(c => c.id === id)) {
      return { success: false, error: 'Category not found.' };
    }
    setCategories(prev => prev.filter(c => c.id !== id));
    return { success: true };
  };

  // Update Category handler
  const updateCategory = (updated) => {
    if (!categories.some(c => c.id === updated.id)) {
      return { success: false, error: 'Category not found.' };
    }
    setCategories(prev => prev.map(c => c.id === updated.id ? { ...c, ...updated } : c));
    return { success: true };
  };

  // Add Product handler
  const addProduct = (product) => {
    const id = product.id || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    if (products.some(p => p.id === id)) {
      return { success: false, error: 'Product already exists.' };
    }

    const newProduct = {
      id,
      name: product.name,
      categorySlug: product.categorySlug,
      summary: product.summary || '',
      description: product.description || '',
      features: product.features || [],
      specifications: product.specifications || {},
      imageUrl: product.imageUrl || '/images/products/default.jpg',
      youtubeUrl: product.youtubeUrl || '',
      catalogUrl: product.catalogUrl || '#'
    };

    setProducts(prev => [...prev, newProduct]);
    return { success: true, product: newProduct };
  };

  // Delete Product handler
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    return { success: true };
  };

  return (
    <DataContext.Provider value={{
      categories,
      products,
      addCategory,
      deleteCategory,
      updateCategory,
      addProduct,
      deleteProduct,
      setCategories,
      setProducts
    }}>
      {children}
    </DataContext.Provider>
  );
}

// Provider and its consumer hook intentionally share this small context module.
// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
