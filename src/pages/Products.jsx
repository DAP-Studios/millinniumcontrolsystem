import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Comprehensive factory automation solutions for global industries.</p>
      </div>

      <section className="products" id="products">
        <div className="products-inner">
          <div className="section-head">
            <div className="section-title">Products Lineup</div>
            <div style={{width:'120px', height:'4px', borderRadius:'2px', background:'linear-gradient(to right,#e60012 33%,#ddd 33%)', margin:'8px auto 0'}}></div>
          </div>
          <div className="products-grid" style={{marginTop:'32px'}}>
            
            <div className="product-card" onClick={() => navigate('/products/industrial-computer')}>
              <div className="product-card-img prod-img-ic">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="10" y="15" width="90" height="70" rx="3" fill="#555" stroke="#444" strokeWidth="1"/>
                  <rect x="14" y="19" width="82" height="58" rx="2" fill="#222"/>
                  <rect x="18" y="23" width="74" height="42" rx="1" fill="#1a1a2e"/>
                  <text x="55" y="48" textAnchor="middle" fill="#4488ff" fontSize="9" fontFamily="monospace">MELIPC</text>
                  <rect x="18" y="50" width="40" height="4" rx="1" fill="#4488ff" opacity=".6"/>
                  <rect x="18" y="56" width="28" height="3" rx="1" fill="#4488ff" opacity=".4"/>
                  <rect x="108" y="20" width="38" height="60" rx="2" fill="#666" stroke="#555" strokeWidth="1"/>
                  <rect x="112" y="26" width="30" height="20" rx="1" fill="#444"/>
                  <rect x="114" y="50" width="8" height="4" rx="1" fill="#888"/>
                  <rect x="126" y="50" width="8" height="4" rx="1" fill="#888"/>
                  <rect x="112" y="58" width="30" height="6" rx="1" fill="#555"/>
                  <rect x="112" y="67" width="30" height="6" rx="1" fill="#555"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">Industrial Computer</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/controllers')}>
              <div className="product-card-img prod-img-ctrl">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="15" y="20" width="50" height="75" rx="2" fill="#cc0000"/>
                  <rect x="18" y="24" width="44" height="12" rx="1" fill="#aa0000"/>
                  <rect x="20" y="38" width="8" height="6" rx="1" fill="#ff4444"/>
                  <rect x="30" y="38" width="8" height="6" rx="1" fill="#ffaa00"/>
                  <rect x="40" y="38" width="8" height="6" rx="1" fill="#00cc44"/>
                  <rect x="18" y="48" width="44" height="44" rx="1" fill="#aa0000"/>
                  <rect x="22" y="52" width="36" height="6" rx="1" fill="#cc0000"/>
                  <rect x="70" y="20" width="35" height="32" rx="2" fill="#444"/>
                  <rect x="72" y="22" width="31" height="10" rx="1" fill="#333"/>
                  <rect x="74" y="34" width="6" height="4" rx="1" fill="#666"/>
                  <rect x="82" y="34" width="6" height="4" rx="1" fill="#666"/>
                  <rect x="90" y="34" width="6" height="4" rx="1" fill="#666"/>
                  <rect x="70" y="56" width="35" height="32" rx="2" fill="#555"/>
                  <rect x="72" y="58" width="31" height="10" rx="1" fill="#444"/>
                  <rect x="110" y="20" width="30" height="68" rx="2" fill="#cc0000"/>
                  <rect x="112" y="24" width="26" height="10" rx="1" fill="#aa0000"/>
                  <rect x="114" y="36" width="22" height="48" rx="1" fill="#aa0000"/>
                  <rect x="116" y="40" width="4" height="4" rx="1" fill="#ff6666"/>
                  <rect x="122" y="40" width="4" height="4" rx="1" fill="#ff6666"/>
                  <rect x="128" y="40" width="4" height="4" rx="1" fill="#ffaa00"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix plus">+</span>
                <span>Controllers</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/cnc')}>
              <div className="product-card-img prod-img-cnc">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="10" y="15" width="140" height="85" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="15" y="20" width="80" height="55" rx="2" fill="#1a1a1a"/>
                  <rect x="18" y="23" width="74" height="46" rx="1" fill="#0a0a1a"/>
                  <line x1="22" y1="38" x2="88" y2="38" stroke="#00aaff" strokeWidth="1" opacity=".7"/>
                  <line x1="22" y1="28" x2="88" y2="28" stroke="#00ff88" strokeWidth="1" opacity=".5"/>
                  <path d="M22 48 L30 42 L42 50 L54 40 L66 46 L78 38 L88 44" fill="none" stroke="#4488ff" strokeWidth="1.5"/>
                  <rect x="100" y="22" width="44" height="50" rx="2" fill="#333"/>
                  <rect x="104" y="26" width="16" height="10" rx="1" fill="#444"/>
                  <rect x="124" y="26" width="16" height="10" rx="1" fill="#444"/>
                  <rect x="104" y="40" width="10" height="8" rx="1" fill="#cc0000"/>
                  <rect x="118" y="40" width="10" height="8" rx="1" fill="#555"/>
                  <rect x="132" y="40" width="8" height="8" rx="1" fill="#555"/>
                  <rect x="104" y="52" width="36" height="16" rx="2" fill="#222"/>
                  <rect x="108" y="56" width="6" height="6" rx="1" fill="#444"/>
                  <rect x="116" y="56" width="6" height="6" rx="1" fill="#444"/>
                  <rect x="124" y="56" width="6" height="6" rx="1" fill="#444"/>
                  <rect x="132" y="56" width="6" height="6" rx="1" fill="#444"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">Computerized Numerical Controllers(CNCs)</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/fa-sensor')}>
              <div className="product-card-img prod-img-sensor">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="20" y="30" width="60" height="55" rx="4" fill="#333" stroke="#444" strokeWidth="1"/>
                  <rect x="24" y="34" width="52" height="20" rx="2" fill="#222"/>
                  <circle cx="50" cy="62" r="18" fill="#222" stroke="#555" strokeWidth="1"/>
                  <circle cx="50" cy="62" r="12" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
                  <circle cx="50" cy="62" r="6" fill="#111"/>
                  <circle cx="47" cy="59" r="1.5" fill="rgba(255,255,255,.4)"/>
                  <rect x="24" y="36" width="8" height="4" rx="1" fill="#cc0000"/>
                  <rect x="35" y="36" width="4" height="4" rx="1" fill="#00aa44"/>
                  <rect x="90" y="25" width="18" height="65" rx="2" fill="#444" stroke="#555" strokeWidth="1"/>
                  <circle cx="99" cy="45" r="7" fill="#222" stroke="#555" strokeWidth="1"/>
                  <circle cx="99" cy="45" r="4" fill="#111"/>
                  <rect x="94" y="58" width="10" height="4" rx="1" fill="#cc0000"/>
                  <rect x="115" y="35" width="14" height="50" rx="2" fill="#555" stroke="#666" strokeWidth="1"/>
                  <rect x="118" y="42" width="8" height="8" rx="1" fill="#333"/>
                  <rect x="118" y="54" width="8" height="4" rx="1" fill="#cc0000"/>
                  <rect x="135" y="38" width="12" height="44" rx="2" fill="#666" stroke="#777" strokeWidth="1"/>
                  <circle cx="141" cy="58" r="5" fill="#333" stroke="#555" strokeWidth="1"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">FA Sensor</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/drive-products')}>
              <div className="product-card-img prod-img-drive">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="8" y="18" width="48" height="70" rx="2" fill="#1a1a2a" stroke="#333" strokeWidth="1"/>
                  <rect x="12" y="22" width="40" height="14" rx="1" fill="#cc0000"/>
                  <text x="32" y="32" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif" fontWeight="bold">FREQROL</text>
                  <rect x="12" y="40" width="40" height="24" rx="1" fill="#111"/>
                  <rect x="16" y="44" width="32" height="10" rx="1" fill="#1a1a2a"/>
                  <rect x="16" y="56" width="10" height="4" rx="1" fill="#444"/>
                  <rect x="28" y="56" width="10" height="4" rx="1" fill="#cc0000"/>
                  <rect x="40" y="56" width="8" height="4" rx="1" fill="#444"/>
                  <rect x="12" y="68" width="40" height="16" rx="1" fill="#222"/>
                  <ellipse cx="110" cy="75" rx="18" ry="28" fill="#555" stroke="#666" strokeWidth="1"/>
                  <ellipse cx="110" cy="75" rx="12" ry="22" fill="#444"/>
                  <rect x="70" y="68" width="25" height="14" rx="2" fill="#666" stroke="#777" strokeWidth="1"/>
                  <rect x="73" y="70" width="19" height="10" rx="1" fill="#555"/>
                  <rect x="128" y="72" width="22" height="6" rx="3" fill="#777"/>
                  <rect x="8" y="92" width="48" height="20" rx="2" fill="#333" stroke="#444" strokeWidth="1"/>
                  <rect x="12" y="95" width="8" height="14" rx="1" fill="#1a1a1a"/>
                  <rect x="22" y="95" width="8" height="14" rx="1" fill="#cc0000"/>
                  <rect x="32" y="95" width="8" height="14" rx="1" fill="#1a1a1a"/>
                  <rect x="42" y="95" width="10" height="14" rx="1" fill="#222"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix plus">+</span>
                <span>Drive Products</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/hmi')}>
              <div className="product-card-img prod-img-hmi">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="10" y="15" width="100" height="75" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="15" y="20" width="90" height="60" rx="2" fill="#0a0a1a"/>
                  <line x1="20" y1="72" x2="100" y2="72" stroke="#333" strokeWidth="1"/>
                  <line x1="20" y1="30" x2="20" y2="72" stroke="#333" strokeWidth="1"/>
                  <path d="M25 65 L35 55 L45 62 L55 45 L65 58 L75 40 L85 52 L95 44" fill="none" stroke="#4488ff" strokeWidth="1.5"/>
                  <path d="M25 68 L35 62 L45 68 L55 60 L65 65 L75 55 L85 60 L95 58" fill="none" stroke="#ff8844" strokeWidth="1.5"/>
                  <rect x="118" y="20" width="36" height="55" rx="3" fill="#333" stroke="#444" strokeWidth="1"/>
                  <rect x="122" y="24" width="28" height="38" rx="1" fill="#0a0a1a"/>
                  <path d="M125 52 L130 44 L135 49 L140 38 L145 45" fill="none" stroke="#4488ff" strokeWidth="1.5"/>
                  <rect x="125" y="64" width="22" height="6" rx="1" fill="#222"/>
                  <rect x="50" y="90" width="20" height="4" rx="1" fill="#444"/>
                  <rect x="35" y="94" width="50" height="4" rx="2" fill="#555"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">HMI</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/robots')}>
              <div className="product-card-img prod-img-robot">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="55" y="88" width="50" height="16" rx="3" fill="#ddd" stroke="#ccc" strokeWidth="1"/>
                  <rect x="70" y="76" width="20" height="14" rx="2" fill="#e8e8e8" stroke="#ccc" strokeWidth="1"/>
                  <rect x="72" y="60" width="16" height="18" rx="2" fill="#ddd" stroke="#bbb" strokeWidth="1"/>
                  <path d="M80 60 L65 44 L70 38 L82 52" fill="#e0e0e0" stroke="#ccc" strokeWidth="1"/>
                  <path d="M80 52 L88 36 L94 40 L84 56" fill="#d8d8d8" stroke="#ccc" strokeWidth="1"/>
                  <circle cx="80" cy="60" r="8" fill="#bbb" stroke="#aaa" strokeWidth="1"/>
                  <circle cx="70" cy="44" r="6" fill="#ccc" stroke="#bbb" strokeWidth="1"/>
                  <circle cx="88" cy="38" r="5" fill="#ccc" stroke="#bbb" strokeWidth="1"/>
                  <path d="M88 36 L96 28 L100 32" fill="none" stroke="#aaa" strokeWidth="2"/>
                  <path d="M96 28 L104 22 L107 26" fill="none" stroke="#aaa" strokeWidth="2"/>
                  <rect x="12" y="88" width="38" height="14" rx="2" fill="#f0f0f0" stroke="#ddd" strokeWidth="1"/>
                  <rect x="22" y="72" width="18" height="18" rx="2" fill="#e8e8e8" stroke="#ddd" strokeWidth="1"/>
                  <rect x="25" y="52" width="12" height="22" rx="6" fill="#e0e0e0" stroke="#ddd" strokeWidth="1"/>
                  <circle cx="31" cy="44" r="8" fill="#d8d8d8" stroke="#ccc" strokeWidth="1"/>
                  <rect x="25" y="36" width="12" height="10" rx="5" fill="#e0e0e0" stroke="#ddd" strokeWidth="1"/>
                  <path d="M37 46 L46 40 L48 44 L40 52" fill="none" stroke="#ccc" strokeWidth="2"/>
                  <path d="M48 42 L54 36" fill="none" stroke="#ccc" strokeWidth="2"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix plus">+</span>
                <span>Robots</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/low-voltage-power')}>
              <div className="product-card-img prod-img-lvd">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="8" y="18" width="45" height="80" rx="2" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="12" y="22" width="37" height="16" rx="1" fill="#1a1a1a"/>
                  <rect x="14" y="24" width="8" height="6" rx="1" fill="#00aa44"/>
                  <rect x="24" y="24" width="8" height="6" rx="1" fill="#cc0000"/>
                  <rect x="34" y="24" width="10" height="6" rx="1" fill="#ffaa00"/>
                  <rect x="18" y="44" width="22" height="48" rx="1" fill="#222"/>
                  <rect x="22" y="48" width="14" height="36" rx="1" fill="#111"/>
                  <rect x="25" y="52" width="8" height="10" rx="1" fill="#333"/>
                  <rect x="60" y="22" width="38" height="45" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
                  <rect x="63" y="25" width="32" height="14" rx="1" fill="#222"/>
                  <rect x="66" y="28" width="10" height="6" rx="2" fill="#cc0000"/>
                  <rect x="79" y="28" width="10" height="6" rx="2" fill="#444"/>
                  <rect x="63" y="42" width="32" height="22" rx="1" fill="#1a1a1a"/>
                  <rect x="67" y="46" width="6" height="10" rx="1" fill="#333"/>
                  <rect x="75" y="46" width="6" height="10" rx="1" fill="#333"/>
                  <rect x="83" y="46" width="6" height="10" rx="1" fill="#333"/>
                  <rect x="105" y="18" width="46" height="55" rx="2" fill="#1a1a2a" stroke="#333" strokeWidth="1"/>
                  <rect x="109" y="22" width="38" height="28" rx="1" fill="#0a0a1a"/>
                  <text x="128" y="38" textAnchor="middle" fill="#00ff88" fontSize="12" fontFamily="monospace">1234</text>
                  <text x="128" y="47" textAnchor="middle" fill="#4488ff" fontSize="7" fontFamily="monospace">kWh</text>
                  <rect x="109" y="54" width="10" height="10" rx="1" fill="#cc0000"/>
                  <rect x="122" y="54" width="10" height="10" rx="1" fill="#333"/>
                  <rect x="135" y="54" width="12" height="10" rx="1" fill="#333"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix plus">+</span>
                <span>Low-voltage Power Distribution Products</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/medium-voltage-power')}>
              <div className="product-card-img prod-img-mvd">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="10" y="15" width="60" height="90" rx="2" fill="#1a1a2a" stroke="#333" strokeWidth="1"/>
                  <rect x="15" y="20" width="50" height="20" rx="1" fill="#cc0000"/>
                  <text x="40" y="33" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">MV PANEL</text>
                  <rect x="15" y="44" width="50" height="55" rx="1" fill="#111"/>
                  <circle cx="40" cy="68" r="15" fill="none" stroke="#4488ff" strokeWidth="2"/>
                  <circle cx="40" cy="68" r="8" fill="none" stroke="#4488ff" strokeWidth="1.5"/>
                  <circle cx="40" cy="68" r="3" fill="#4488ff"/>
                  <rect x="18" y="86" width="8" height="8" rx="1" fill="#00aa44"/>
                  <rect x="30" y="86" width="8" height="8" rx="1" fill="#cc0000"/>
                  <rect x="42" y="86" width="8" height="8" rx="1" fill="#ffaa00"/>
                  <rect x="80" y="20" width="70" height="90" rx="2" fill="#2a2a3a" stroke="#444" strokeWidth="1" opacity=".8"/>
                  <rect x="85" y="28" width="28" height="35" rx="2" fill="#1a1a2a"/>
                  <rect x="120" y="28" width="24" height="35" rx="2" fill="#1a1a2a"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">Medium-voltage Power Distribution Products</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/energy-saving')}>
              <div className="product-card-img prod-img-energy">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="10" y="15" width="26" height="85" rx="2" fill="#cc4400" stroke="#aa3300" strokeWidth="1"/>
                  <rect x="13" y="20" width="20" height="12" rx="1" fill="#aa3300"/>
                  <rect x="15" y="34" width="16" height="10" rx="1" fill="#882200"/>
                  <rect x="15" y="48" width="16" height="8" rx="1" fill="#aa3300"/>
                  <rect x="15" y="60" width="16" height="8" rx="1" fill="#aa3300"/>
                  <rect x="13" y="72" width="20" height="24" rx="1" fill="#882200"/>
                  <rect x="40" y="20" width="26" height="80" rx="2" fill="#cc4400" stroke="#aa3300" strokeWidth="1"/>
                  <rect x="43" y="24" width="20" height="12" rx="1" fill="#aa3300"/>
                  <rect x="45" y="40" width="16" height="8" rx="1" fill="#882200"/>
                  <rect x="45" y="52" width="16" height="8" rx="1" fill="#aa3300"/>
                  <rect x="72" y="18" width="80" height="60" rx="3" fill="#1a1a2a" stroke="#333" strokeWidth="1"/>
                  <rect x="76" y="22" width="72" height="32" rx="2" fill="#0a0f1a"/>
                  <text x="112" y="42" textAnchor="middle" fill="#00ff88" fontSize="16" fontFamily="monospace">22.5</text>
                  <text x="112" y="50" textAnchor="middle" fill="#4488ff" fontSize="8" fontFamily="monospace">kW</text>
                  <rect x="76" y="58" width="16" height="8" rx="1" fill="#333"/>
                  <rect x="95" y="58" width="16" height="8" rx="1" fill="#cc0000"/>
                  <rect x="114" y="58" width="16" height="8" rx="1" fill="#333"/>
                  <rect x="133" y="58" width="14" height="8" rx="1" fill="#00aa44"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">Energy Saving Supporting Devices</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/modular-io')}>
              <div className="product-card-img prod-img-modio">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="20" y="15" width="120" height="90" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                  <rect x="26" y="22" width="20" height="78" rx="1" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="48" y="22" width="20" height="78" rx="1" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="70" y="22" width="20" height="78" rx="1" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="92" y="22" width="20" height="78" rx="1" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <rect x="114" y="22" width="20" height="78" rx="1" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
                  <circle cx="36" cy="30" r="2.5" fill="#00ff44"/>
                  <circle cx="58" cy="30" r="2.5" fill="#00ff44"/>
                  <circle cx="80" cy="30" r="2.5" fill="#ffaa00"/>
                  <circle cx="102" cy="30" r="2.5" fill="#00ff44"/>
                  <circle cx="124" cy="30" r="2.5" fill="#cc0000"/>
                  <rect x="28" y="62" width="16" height="4" rx="1" fill="#555"/>
                  <rect x="50" y="62" width="16" height="4" rx="1" fill="#555"/>
                  <rect x="72" y="62" width="16" height="4" rx="1" fill="#555"/>
                  <rect x="94" y="62" width="16" height="4" rx="1" fill="#555"/>
                  <rect x="116" y="62" width="16" height="4" rx="1" fill="#555"/>
                  <rect x="28" y="72" width="16" height="20" rx="1" fill="#cc6600" opacity=".8"/>
                  <rect x="50" y="72" width="16" height="20" rx="1" fill="#cc6600" opacity=".8"/>
                  <rect x="72" y="72" width="16" height="20" rx="1" fill="#cc6600" opacity=".8"/>
                  <rect x="94" y="72" width="16" height="20" rx="1" fill="#cc6600" opacity=".8"/>
                  <rect x="116" y="72" width="16" height="20" rx="1" fill="#cc6600" opacity=".8"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">Modular I/O</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/goc-43')}>
              <div className="product-card-img prod-img-goc43">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="20" y="15" width="120" height="90" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                  <rect x="25" y="20" width="110" height="65" rx="2" fill="#0a0a0a"/>
                  <rect x="30" y="25" width="60" height="50" rx="1" fill="#0a1020"/>
                  <text x="60" y="45" textAnchor="middle" fill="#4488ff" fontSize="8" fontFamily="monospace">GOC 43</text>
                  <rect x="33" y="52" width="14" height="10" rx="1" fill="#00aa44"/>
                  <rect x="50" y="52" width="14" height="10" rx="1" fill="#4488ff"/>
                  <rect x="67" y="52" width="14" height="10" rx="1" fill="#cc0000"/>
                  <rect x="96" y="28" width="36" height="52" rx="2" fill="#111"/>
                  <circle cx="114" cy="44" r="12" fill="#222" stroke="#444" strokeWidth="1.5"/>
                  <circle cx="114" cy="44" r="6" fill="#333" stroke="#555" strokeWidth="1"/>
                  <circle cx="114" cy="36" r="2" fill="#666"/>
                  <rect x="100" y="62" width="10" height="8" rx="1" fill="#cc0000"/>
                  <rect x="114" y="62" width="10" height="8" rx="1" fill="#4488ff"/>
                  <rect x="125" y="62" width="8" height="8" rx="1" fill="#00aa44"/>
                  <rect x="25" y="88" width="110" height="12" rx="1" fill="#111"/>
                  <rect x="30" y="91" width="6" height="6" rx="1" fill="#333"/>
                  <rect x="40" y="91" width="6" height="6" rx="1" fill="#333"/>
                  <rect x="100" y="91" width="30" height="4" rx="1" fill="#222"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">GOC 43 (PLC with HMI)</span>
              </div>
            </div>

            <div className="product-card" onClick={() => navigate('/products/goc-35')}>
              <div className="product-card-img prod-img-goc35">
                <svg width="160" height="120" viewBox="0 0 160 120">
                  <rect x="30" y="20" width="100" height="80" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                  <rect x="36" y="26" width="88" height="50" rx="2" fill="#0a0a0a"/>
                  <rect x="40" y="30" width="80" height="38" rx="1" fill="#0a1a2a"/>
                  <text x="80" y="42" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">LANGUAGES</text>
                  <text x="57" y="54" textAnchor="middle" fill="#4488ff" fontSize="6" fontFamily="sans-serif">हिन्दी</text>
                  <text x="83" y="54" textAnchor="middle" fill="#4488ff" fontSize="6" fontFamily="sans-serif">日本</text>
                  <text x="57" y="62" textAnchor="middle" fill="#4488ff" fontSize="6" fontFamily="sans-serif">தமிழ்</text>
                  <text x="83" y="62" textAnchor="middle" fill="#4488ff" fontSize="6" fontFamily="sans-serif">Deutsch</text>
                  <rect x="126" y="30" width="36" height="60" rx="2" fill="#111"/>
                  <rect x="129" y="34" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="144" y="34" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="129" y="46" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="144" y="46" width="12" height="8" rx="1" fill="#cc0000"/>
                  <rect x="129" y="58" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="144" y="58" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="129" y="70" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="144" y="70" width="12" height="8" rx="1" fill="#333"/>
                  <rect x="36" y="80" width="88" height="14" rx="1" fill="#111"/>
                </svg>
              </div>
              <div className="product-name">
                <span className="prod-prefix">▶</span>
                <span className="prod-name-link">GOC 35 (PLC with HMI)</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
