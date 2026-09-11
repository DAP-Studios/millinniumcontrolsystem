import { useState } from "react";
import {
  Zap,
  Cpu,
  Lightbulb,
  Monitor,
  Settings,
  Sliders,
  Wrench,
  Radio,
  LayoutGrid,
  Trophy,
  BadgeDollarSign,
  Truck,
  Handshake,
  CreditCard,
  Phone,
  Target,
  Rocket,
  CheckCircle,
} from "lucide-react";
import useSEO from "../hooks/useSEO";

const FACTSHEET = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "Additional Business", value: "Retail Business, Factory / Manufacturing" },
  { label: "Company CEO", value: "Nimisha Hemang Makwana" },
  { label: "Registered Address", value: "Gala No. 51, Royal Industrial Hub, Opp. Jai Research Foundation, N.H. No. 08, Valvada, Vapi, Valsad – 396105, Gujarat, India" },
  { label: "Total Number of Employees", value: "11 – 25 People" },
  { label: "Year of Establishment", value: "2010" },
  { label: "Annual Turnover", value: "₹1.5 – 5 Crore" },
  { label: "Legal Status of Firm", value: "Proprietorship" },
  { label: "GST No.", value: "24BHUPM8741E1ZY" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "GST Partner Name", value: "Nimisha Hemang Makwana" },
  { label: "Banker", value: "Kotak Mahindra Bank" },
  { label: "Payment Mode", value: "Cash, Credit Card, Bank Transfer, Cheque, DD, Invoice, Online" },
  { label: "Shipment Mode", value: "By Road" },
  { label: "Market Covered", value: "Local, National" },
];

const PRODUCTS = [
  { name: "Mitsubishi AC Drive", Icon: Zap, desc: "FR-D740, FR-D720S, FR-A840 series" },
  { name: "Mitsubishi PLC", Icon: Cpu, desc: "Q Series, FX5U, FX3U series" },
  { name: "FX5U PLC", Icon: Lightbulb, desc: "FX5U-32MT/ESS, FX5U-64MR/ES" },
  { name: "Mitsubishi HMI", Icon: Monitor, desc: "GS2107-WTBD-N, GT2107-WTBD" },
  { name: "Mitsubishi Servo Motor", Icon: Settings, desc: "MR-JE-70AS, HG-KN73JK series" },
  { name: "Mitsubishi GOC", Icon: Sliders, desc: "GC35MH-16MT-DS, GC35MH-32MR-D" },
  { name: "Servo Motor & Drive", Icon: Wrench, desc: "HG-KN/HG-SN series combos" },
  { name: "FX3U PLC", Icon: Radio, desc: "FX3U-CNV-BD, FX3U-232BD" },
  { name: "Mitsubishi Module", Icon: LayoutGrid, desc: "FX5-8EX/ES, FX5-8AD modules" },
];

const STATS = [
  { number: "2010", label: "Year Established" },
  { number: "15+", label: "Years of Experience" },
  { number: "25+", label: "Team Members" },
  { number: "9+", label: "Product Categories" },
  { number: "₹5 Cr", label: "Annual Turnover" },
];

const WHY_US = [
  {
    Icon: Trophy,
    title: "Premium Quality",
    desc: "All products sourced from Mitsubishi Electric — Japan's leading industrial automation brand.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Competitive Pricing",
    desc: "Direct manufacturer & authorized trader ensuring best-in-market prices for all clients.",
  },
  {
    Icon: Truck,
    title: "Timely Delivery",
    desc: "Fast, reliable road shipments across Gujarat and pan-India with zero compromise on timelines.",
  },
  {
    Icon: Handshake,
    title: "TrustSEAL Verified",
    desc: "IndiaMART TrustSEAL verified business with GST registration since 2017.",
  },
  {
    Icon: CreditCard,
    title: "Flexible Payments",
    desc: "Accept Cash, Credit Card, Bank Transfer, Cheque, DD, Online & Invoice payments.",
  },
  {
    Icon: Phone,
    title: "75% Response Rate",
    desc: "High response rate ensuring your queries are answered quickly and efficiently.",
  },
];

export default function About() {
  const [expandedFact, setExpandedFact] = useState(false);

  useSEO({
    title: "About Millennium Control System | Manufacturer in Vapi, Gujarat",
    description:
      "Millennium Control System – Established in 2010 at Vapi, Gujarat. Manufacturer & trader of Mitsubishi VFD, PLC, HMI, Servo Motors and Instrumentation & Control Equipment.",
    keywords:
      "Millennium Control System, Vapi, Gujarat, Mitsubishi VFD, PLC, HMI, Servo Motor, Control Panel, Temperature Controller",
  });

  const visibleFacts = expandedFact ? FACTSHEET : FACTSHEET.slice(0, 8);

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <div className="about-hero-logo-wrap">
            <img src="/MCS - LOGO.png" alt="Millennium Control System Logo" className="about-hero-logo" />
          </div>
          <span className="about-badge">Est. 2010 · Vapi, Gujarat</span>
          <h1 className="about-hero-title">Millennium Control System</h1>
          <p className="about-hero-sub">
            Authorized Silver Channel Partner of Mitsubishi Electric's Factory Automation
            &amp; Industrial Division — "Solution You Deserve"
          </p>
          <div className="about-hero-tags">
            <span className="hero-tag"><CheckCircle size={14} strokeWidth={2.5} /> TrustSEAL Verified</span>
            <span className="hero-tag"><CheckCircle size={14} strokeWidth={2.5} /> GST Registered</span>
            <span className="hero-tag"><CheckCircle size={14} strokeWidth={2.5} /> 75% Response Rate</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="about-stats-bar">
        <div className="about-container">
          <div className="stats-bar-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-bar-item">
                <span className="stat-bar-num">{s.number}</span>
                <span className="stat-bar-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="about-intro-section">
        <div className="about-container">
          <div className="about-intro-grid">

            {/* LEFT — Logo card */}
            <div className="about-intro-img-col">
              <div className="about-logo-card">
                <img
                  src="/MCS - LOGO.png"
                  alt="Millennium Control System Logo"
                  className="about-logo-img"
                />
                <div className="about-company-name-plate">
                  <strong>Millennium Control System</strong>
                  <span>Vapi, Valsad, Gujarat</span>
                </div>
                <div className="about-trust-badges">
                  <div className="about-trust-badge">
                    <span className="trust-icon"><CheckCircle size={16} strokeWidth={2.5} /></span>
                    <div>
                      <div className="trust-title">TrustSEAL Verified</div>
                      <div className="trust-sub">IndiaMART Member Since 2010</div>
                    </div>
                  </div>
                  <div className="about-gst-tag">
                    <span className="gst-label">GST Verified</span>
                    <span className="gst-num">24BHUPM8741E1ZY</span>
                  </div>
                </div>
                <div className="about-contact-quick">
                  <a href="tel:+916356732897" className="quick-call-btn">
                    <Phone size={15} strokeWidth={2} /> +91 63567 32897
                  </a>
                  <div className="response-rate-badge">75% Response Rate</div>
                </div>
              </div>
            </div>

            {/* RIGHT — Text */}
            <div className="about-intro-text-col">
              <p className="section-eyebrow">Introduction &amp; Profile</p>
              <h2 className="about-intro-heading">Who We Are</h2>
              <p className="about-intro-body">
                <strong>Millennium Control System</strong> is an industrial automation company
                based in <strong>Vapi, Gujarat</strong>, specializing in PLCs, HMIs, VFDs, servo
                systems, industrial robots, control panels, and automation solutions. Established
                in <strong>2010</strong>, we are a Sole Proprietorship firm engaged as a leading{" "}
                <strong>manufacturer, wholesaler and trader</strong> of Temperature Controllers,
                Control Panels, PLC Systems and Pressure Sensors.
              </p>
              <p className="about-intro-body">
                We are an <strong>Authorized Silver Channel Partner of Mitsubishi Electric's
                Factory Automation &amp; Industrial Division</strong>, committed to providing
                genuine products, reliable support, and efficient automation solutions for
                various industries — bringing world-class Japanese technology to industries
                across Gujarat and India.
              </p>
              <p className="about-intro-body">
                Our products are high in demand due to their{" "}
                <strong>premium quality and affordable prices</strong>. We ensure timely delivery
                to all our clients, through which we have gained a huge clientele across local
                and national markets. <em>"Solution You Deserve."</em>
              </p>

              <div className="about-highlights">
                <div className="highlight-chip">
                  <span className="highlight-dot" />
                  Mitsubishi Silver Channel Partner
                </div>
                <div className="highlight-chip">
                  <span className="highlight-dot" />
                  Kotak Mahindra Bank Partner
                </div>
                <div className="highlight-chip">
                  <span className="highlight-dot" />
                  Pan-India Delivery
                </div>
                <div className="highlight-chip">
                  <span className="highlight-dot" />
                  15+ Years in Industry
                </div>
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
      </section>

      {/* ── COMPANY FACTSHEET ── */}
      <section className="about-factsheet-section">
        <div className="about-container">
          <div className="section-header-centered">
            <p className="section-eyebrow">Details</p>
            <h2 className="section-title">Company Factsheet</h2>
            <div className="section-divider" />
          </div>
          <div className="factsheet-table-wrap">
            <table className="factsheet-table">
              <tbody>
                {visibleFacts.map((row) => (
                  <tr key={row.label} className="factsheet-row">
                    <td className="factsheet-key">{row.label}</td>
                    <td className="factsheet-val">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="factsheet-toggle-btn"
              onClick={() => setExpandedFact(!expandedFact)}
              aria-expanded={expandedFact}
            >
              {expandedFact ? "Show Less ▲" : `View All Details (${FACTSHEET.length - 8} more) ▼`}
            </button>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS WE DEAL IN ── */}
      <section className="about-products-section">
        <div className="about-container">
          <div className="section-header-centered">
            <p className="section-eyebrow">Our Range</p>
            <h2 className="section-title">Products We Deal In</h2>
            <div className="section-divider" />
          </div>
          <div className="about-products-grid">
            {PRODUCTS.map(({ name, Icon, desc }) => (
              <div key={name} className="about-product-card">
                <span className="prod-icon"><Icon size={24} strokeWidth={1.8} /></span>
                <span className="prod-name">{name}</span>
                <span className="prod-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORIZATION CERTIFICATE ── */}
      <section className="about-certificate-section" style={{ padding: '60px 24px', background: '#f8fafc' }}>
        <div className="about-container">
          <div className="section-header-centered">
            <p className="section-eyebrow">Authorization</p>
            <h2 className="section-title">Mitsubishi Electric Certified</h2>
            <div className="section-divider" />
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <img
              src="/images/mitsubishi-authorization-certificate.jpg"
              alt="Mitsubishi Electric Authorisation Certificate — Millennium Control System, Vapi is an authorised Silver Channel Partner of the Factory Automation and Industrial Division"
              style={{ width: '100%', borderRadius: '4px', display: 'block' }}
            />
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--muted)', marginTop: '16px' }}>
              Certified <strong>Silver Channel Partner</strong> of Mitsubishi Electric's Factory Automation &amp; Industrial Division · Valid 1 Apr 2025 – 31 Mar 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="about-why-section">
        <div className="about-container">
          <div className="section-header-centered">
            <p className="section-eyebrow">Our Strengths</p>
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="section-divider" />
          </div>
          <div className="why-us-grid">
            {WHY_US.map(({ Icon, title, desc }) => (
              <div key={title} className="why-us-card">
                <div className="why-icon"><Icon size={28} strokeWidth={1.8} /></div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mv-section">
        <div className="about-container">
          <div className="about-mv-grid">
            <div className="about-mv-card mv-mission">
              <div className="mv-icon-wrap"><Target size={32} strokeWidth={1.8} /></div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-body">
                To deliver reliable automation products and quality services with customer
                satisfaction and continuous technological support.
              </p>
            </div>
            <div className="about-mv-card mv-vision">
              <div className="mv-icon-wrap"><Rocket size={32} strokeWidth={1.8} /></div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-body">
                To become a leading and trusted industrial automation solution provider by
                delivering innovative, reliable, and high-quality technologies — including
                robotics and smart automation systems — for modern industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="about-contact-section">
        <div className="about-container">
          <div className="about-contact-card">
            <div className="about-contact-left">
              <h3 className="contact-heading">Ready to Power Your Industry?</h3>
              <p className="contact-sub">
                Get in touch with our team for product inquiries, pricing, and bulk orders.
              </p>
            </div>
            <div className="about-contact-right">
              <a href="/contact" className="about-contact-btn">Contact Us</a>
              <a href="tel:+916356732897" className="about-contact-phone">
                <Phone size={16} strokeWidth={2} /> +91 63567 32897
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
