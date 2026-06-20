import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { getProductSVG } from '../utils/productSvg';

export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Industrial Automation Products Lineup | Millennium Control System";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Millennium Control System's lineup of Mitsubishi Electric automation equipment, including FX5U, FX3U PLCs, AC drives, servo systems, and engineering software.");
    }
  }, []);

  return (
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
        </div>
      </section>
    </div>
  );
}
