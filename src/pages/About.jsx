export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about Millennium Control System Pvt. Ltd.</p>
      </div>
      <div className="page-content">
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', color: 'var(--navy)', marginBottom: '20px'}}>Pioneering Factory Automation</h2>
          <p style={{fontSize: '16px', lineHeight: '1.8', color: 'var(--text)', marginBottom: '30px'}}>
            Millennium Control System Pvt. Ltd. provides cutting-edge factory automation solutions. 
            We specialize in implementing the e-F@ctory concept to create Smart Factories, leveraging 
            advanced controllers, robotics, and integrated network solutions to optimize global manufacturing.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px'}}>
            <div style={{padding: '30px', background: 'var(--gray)', borderRadius: '4px'}}>
              <h3 style={{color: 'var(--red)', marginBottom: '10px'}}>Our Mission</h3>
              <p>To deliver innovative, reliable, and sustainable automation products that drive the future of digital manufacturing.</p>
            </div>
            <div style={{padding: '30px', background: 'var(--gray)', borderRadius: '4px'}}>
              <h3 style={{color: 'var(--red)', marginBottom: '10px'}}>Our Vision</h3>
              <p>Automating the world through seamless connectivity, IoT big data utilization, and advanced mechatronics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
