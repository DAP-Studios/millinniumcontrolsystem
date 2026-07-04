import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About Our Systems Integration | Millennium CS',
    description: 'Pioneering factory automation systems integration in India. Millennium Control System partners with global leaders to deliver PLC, drive, HMI, and software panels.',
    keywords: 'Automation Engineers, Systems Integrator Pune, e-F@ctory Alliance, Industrial IoT'
  });

  return (
    <div>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', padding: '50px 24px', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>About Millennium Control System</h1>
        <p style={{ color: '#94a3b8', fontSize: '16px' }}>Delivering cutting-edge mechatronics and industrial engineering since 2012</p>
      </div>
      
      <div className="page-content" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', color: '#0f172a', marginBottom: '20px', fontWeight: '700' }}>
            Pioneering Factory Automation in India
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '40px' }}>
            Millennium Control System Pvt. Ltd. is a premier engineering systems integrator. 
            We specialize in implementing the <strong>e-F@ctory</strong> digital smart factory concept, combining 
            precision hardware (PLCs, VFD inverters, AC servos) with advanced control software to drive 
            maximum manufacturing efficiency. Serving automotive, pharmaceutical, packaging, and steel giants across Pune, Mumbai, and India.
          </p>

          <div className="about-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px', textAlign: 'left' }}>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '4px', borderTop: '4px solid #e60012', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '12px', fontSize: '18px', fontWeight: '700' }}>Our Mission</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                To engineer bespoke, robust, and sustainable automated panels that increase cycle speeds, improve system diagnostics, and eliminate machine downtime.
              </p>
            </div>
            <div style={{ padding: '30px', background: '#f8fafc', borderRadius: '4px', borderTop: '4px solid #0f172a', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '12px', fontSize: '18px', fontWeight: '700' }}>Our Vision</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                To lead the Indian digital transformation journey, making connected manufacturing systems (IoT, cloud logs, sensor networks) standard across all processing sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
