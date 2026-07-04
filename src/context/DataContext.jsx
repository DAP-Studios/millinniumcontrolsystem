import { createContext, useContext, useState, useEffect } from 'react';
import { initialCategories, initialProducts } from '../data/productsData';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    try {
      const stored = localStorage.getItem('mcs_categories');
      if (stored) {
        const storedCats = JSON.parse(stored);
        const merged = [];
        const handledIds = new Set();
        
        for (const cat of initialCategories) {
          merged.push(cat);
          handledIds.add(cat.id);
        }
        
        for (const cat of storedCats) {
          if (!handledIds.has(cat.id)) {
            merged.push(cat);
          }
        }
        return merged;
      }
    } catch (e) {
      console.error("Error reading categories from localStorage", e);
    }
    return initialCategories;
  });

  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem('mcs_products');
      if (stored) {
        const storedProds = JSON.parse(stored);
        const merged = [];
        const handledIds = new Set();
        
        for (const prod of initialProducts) {
          merged.push(prod);
          handledIds.add(prod.id);
        }
        
        for (const prod of storedProds) {
          if (!handledIds.has(prod.id)) {
            merged.push(prod);
          }
        }
        return merged;
      }
    } catch (e) {
      console.error("Error reading products from localStorage", e);
    }
    return initialProducts;
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

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
