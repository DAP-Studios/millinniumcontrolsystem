import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About Us | Millennium Control System Vapi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about Millennium Control System, established in 2012 in Vapi, Gujarat. Leading system integrator and proprietor-led trader of industrial automation products.");
    }
  }, []);

  return (
    <div>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #111b2d 0%, #1c2d4a 100%)', padding: '70px 40px' }}>
        <h1>About Us</h1>
        <p style={{ color: '#90a0c0', fontSize: '15px' }}>Learn more about Millennium Control System</p>
      </div>
      
      <div className="page-content" style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px', alignItems: 'start' }}>
          
          <div>
            <h2 style={{ fontSize: '28px', color: 'var(--navy)', marginBottom: '20px', fontWeight: '800' }}>
              Pioneering Factory Automation Solutions
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Established in 2012, <strong>Millennium Control System</strong> is a premier manufacturer, wholesaler, and trader of high-end industrial automation and mechatronics solutions. Under the visionary leadership of our proprietor, <strong>Mr. Hemang Makwana</strong>, we have earned a stellar reputation for delivering superior quality equipment and engineering services.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
              We specialize in the distribution and integration of world-class Mitsubishi Electric products, including AC Drives (VFDs), Programmable Logic Controllers (PLCs), Human Machine Interfaces (HMIs), AC Servo Motors, Motion Units, and specialized design software. Our mission is to empower factories to adopt smart manufacturing processes, optimizing their production efficiency through smart connectivity, IoT integrations, and data-driven automation systems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={{ padding: '24px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <h3 style={{ color: '#e60012', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Our Mission</h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                  To supply top-tier, reliable, and energy-efficient automation components that secure operations and boost manufacturing yields.
                </p>
              </div>
              <div style={{ padding: '24px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <h3 style={{ color: '#e60012', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }}>Our Vision</h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                  To drive industrial digital transformations by offering state-of-the-art system integration and specialized engineering support.
                </p>
              </div>
            </div>
          </div>

          <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px', borderBottom: '2px solid #e60012', paddingBottom: '8px' }}>
              Company Profile & Facts
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Proprietor</span>
                <span style={{ color: '#1e293b' }}>Mr. Hemang Makwana</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Nature of Business</span>
                <span style={{ color: '#1e293b' }}>Manufacturer & Wholesaler</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Legal Status of Firm</span>
                <span style={{ color: '#1e293b' }}>Proprietorship</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Year of Establishment</span>
                <span style={{ color: '#1e293b' }}>2012</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Annual Turnover</span>
                <span style={{ color: '#1e293b' }}>₹5 - ₹25 Crore</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed #cbd5e1', paddingBottom: '8px' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>GST Registration No.</span>
                <span style={{ color: '#1e293b', fontFamily: 'monospace' }}>24BHUPM8741E1ZY</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', paddingBottom: '0' }}>
                <span style={{ fontWeight: '700', color: '#475569' }}>Primary Location</span>
                <span style={{ color: '#1e293b' }}>Vapi, Gujarat, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
