import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Factory,
  Gauge,
  Headphones,
  Mail,
  MessageCircle,
  Network,
  Pause,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { AnimatedNumber, Reveal } from '../components/Motion';

const FEATURED_PRODUCTS = [
  {
    number: '01',
    eyebrow: 'Logic & control',
    title: 'MELSEC FX5U PLC',
    description: 'High-speed control with built-in Ethernet, motion, and advanced diagnostics.',
    image: '/images/products/melsec-fx5u-series_fx5u-image-png.png',
    category: 'melsec-fx5u-series',
    spec: 'iQ-F SERIES',
  },
  {
    number: '02',
    eyebrow: 'Variable speed',
    title: 'FR-A800 Drive',
    description: 'Vector control and energy performance for demanding industrial loads.',
    image: '/images/products/inverters-vfd-ac-drive_a800_a840-png.png',
    category: 'inverters-vfd-ac-drive',
    spec: '0.4—630 kW',
  },
  {
    number: '03',
    eyebrow: 'Operator interface',
    title: 'GOT2000 HMI',
    description: 'Clear, connected machine visualization for confident shop-floor operation.',
    image: '/images/products/human-machine-interfaces-melhmi-got_got-hmi_feature-png.png',
    category: 'human-machine-interfaces-melhmi-got',
    spec: 'MULTI-TOUCH',
  },
  {
    number: '04',
    eyebrow: 'Flexible automation',
    title: 'MELFA Robots',
    description: 'Repeatable, high-speed handling for assembly, sorting, and production cells.',
    image: '/images/products/industrial-robots_products_media_image1.png',
    category: 'industrial-robots',
    spec: '±0.02 mm',
  },
];

const CAPABILITIES = [
  {
    icon: CircuitBoard,
    number: '01',
    title: 'Control architecture',
    copy: 'PLC, HMI, servo, motion, and network design shaped around the real sequence of your machine.',
    className: 'capability-card--wide capability-card--dark',
    meta: ['PLC & HMI', 'Motion', 'Industrial networks'],
  },
  {
    icon: Boxes,
    number: '02',
    title: 'Product supply',
    copy: 'A focused portfolio of Mitsubishi Electric automation technology, selected for compatibility and lifecycle value.',
    className: 'capability-card--light',
    meta: ['Selection', 'Sourcing'],
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Integration support',
    copy: 'Configuration, commissioning guidance, diagnostics, and responsive post-installation assistance.',
    className: 'capability-card--red',
    meta: ['Commissioning', 'Support'],
  },
];

const SPOTLIGHTS = [
  {
    id: 'connected',
    label: 'Connected factory',
    title: 'Turn production data into faster decisions.',
    description: 'Connect shop-floor control with real-time visibility so teams can spot drift, reduce response time, and improve throughput.',
    image: '/images/spotlight_smart.png',
    icon: Network,
    stat: 'Live',
    statLabel: 'production insight',
  },
  {
    id: 'engineering',
    label: 'Engineering library',
    title: 'Technical knowledge, closer to the work.',
    description: 'Access product information and application guidance that helps your team specify and maintain the right automation stack.',
    image: '/images/spotlight_media.png',
    icon: Cpu,
    stat: '11',
    statLabel: 'product families',
  },
  {
    id: 'excellence',
    label: 'Engineering excellence',
    title: 'Celebrate the thinking behind better machines.',
    description: 'We believe the best automation outcomes come from precise design, confident teams, and a culture of continuous improvement.',
    image: '/images/spotlight_cup.png',
    icon: Sparkles,
    stat: '15+',
    statLabel: 'years in industry',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    copy: 'Map the machine sequence, constraints, interfaces, and performance target.',
    icon: ScanLine,
  },
  {
    step: '02',
    title: 'Engineer',
    copy: 'Define the right control stack, communication layer, and component selection.',
    icon: CircuitBoard,
  },
  {
    step: '03',
    title: 'Commission',
    copy: 'Support configuration, validation, tuning, and a clean production handover.',
    icon: Gauge,
  },
  {
    step: '04',
    title: 'Support',
    copy: 'Stay available for troubleshooting, expansion, and lifecycle requirements.',
    icon: Headphones,
  },
];

function SpotlightCard({ children, className = '' }) {
  const moveLight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div className={`rb-spotlight-card ${className}`} onPointerMove={moveLight}>
      {children}
    </div>
  );
}

function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`contact-dock ${isOpen ? 'is-open' : ''}`}>
      <div className="contact-dock__panel">
        <span>Talk to our engineering team</span>
        <a href="https://wa.me/916356732897" target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> WhatsApp
        </a>
        <a href="mailto:info2.millenniumcontrol@gmail.com">
          <Mail size={17} /> Email
        </a>
      </div>
      <button
        type="button"
        className="contact-dock__button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={21} />}
      </button>
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Millennium Control System',
    image: '/MCS - LOGO.png',
    telephone: '+91-63567-32897',
    email: 'info2.millenniumcontrol@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gala No. 51, Royal Industrial Hub, NH 08, Valvada',
      addressLocality: 'Vapi',
      addressRegion: 'Gujarat',
      postalCode: '396105',
      addressCountry: 'IN',
    },
    url: window.location.origin,
  };

  useSEO({
    title: 'Industrial Automation & Mitsubishi Electric Systems | Millennium CS',
    description: 'Millennium Control System supplies and supports PLC, VFD, HMI, servo, motion, and robotic automation solutions for manufacturers across India.',
    keywords: 'industrial automation India, Mitsubishi Electric PLC, VFD drives, HMI, servo systems, factory automation, system integrator',
    schema: organizationSchema,
  });

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SPOTLIGHTS.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const selectPrevious = () => {
    setActiveSlide((current) => (current - 1 + SPOTLIGHTS.length) % SPOTLIGHTS.length);
  };

  const selectNext = () => {
    setActiveSlide((current) => (current + 1) % SPOTLIGHTS.length);
  };

  const activeSpotlight = SPOTLIGHTS[activeSlide];
  const ActiveSpotlightIcon = activeSpotlight.icon;

  return (
    <div className="home-v2">
      <ContactDock />

      <section className="home-hero">
        <div className="home-hero__bg" style={{ backgroundImage: `url('/images/factory_hero_bg.png')` }} />
        <div className="home-hero__overlay" aria-hidden="true" />
        
        {/* Futuristic Blueprint Connections Overlay */}
        <div className="home-hero__tech-canvas" aria-hidden="true">
          <svg className="home-hero__tech-svg" viewBox="0 0 700 500" fill="none">
            <path d="M 120 180 L 260 80 L 460 160" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 260 80 L 220 310 L 480 280" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
            <circle cx="260" cy="80" r="3" fill="#38bdf8" />
            <circle cx="120" cy="180" r="3" fill="#38bdf8" />
            <circle cx="220" cy="310" r="3" fill="#38bdf8" />
            <circle cx="460" cy="160" r="3" fill="#38bdf8" />
          </svg>
          <div className="tech-node tech-node--1" title="Control Systems">
            <CircuitBoard size={16} />
          </div>
          <div className="tech-node tech-node--2" title="Robotics">
            <Bot size={16} />
          </div>
          <div className="tech-node tech-node--3" title="Factory Automation">
            <Factory size={16} />
          </div>
        </div>

        <div className="site-shell home-hero__layout">
          <div className="home-hero__copy">
            <div className="home-hero__eyebrow">
              <span className="home-hero__live-dot" />
              Millennium Control System
            </div>
            <h1 className="home-hero__main-heading">
              FACTORY AUTOMATION
            </h1>
            <p className="home-hero__lead">
              Empowering industrial enterprises with advanced Mitsubishi Electric control systems, robotics, 
              drives, and end-to-end integration support.
            </p>
            <div className="home-hero__actions">
              <Link to="/about" className="button button--primary">
                About Millennium CS <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="button button--ghost-light">
                Explore products <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Reference image ticker tag at bottom left */}
            <div className="home-hero__ticker-badge">
              <span className="ticker-badge__icon">▶</span>
              <span className="ticker-badge__text">
                <strong>"Automating the World"</strong> – A global approach in Vapi & Pan-India.
              </span>
            </div>
          </div>

          <div className="home-hero__right-container">
            {/* Vivid Red Highlight Card from Reference Image */}
            <div className="home-hero__red-card">
              <h2>Automating <br />the World</h2>
            </div>

            <div className="home-hero__showcase">
              <div className="home-hero__showcase-grid">
                <Link to="/products?category=melsec-fx5u-series" className="showcase-card">
                  <div className="showcase-card__header">
                    <span className="showcase-card__tag">PLC / CONTROL</span>
                    <span className="showcase-card__num">01</span>
                  </div>
                  <h3>Logic & Control</h3>
                  <div className="showcase-card__media">
                    <img src="/images/products/melsec-fx5u-series_fx5u-image-png.png" alt="PLC" />
                  </div>
                </Link>

                <Link to="/products?category=inverters-vfd-ac-drive" className="showcase-card">
                  <div className="showcase-card__header">
                    <span className="showcase-card__tag">VFD / INVERTER</span>
                    <span className="showcase-card__num">02</span>
                  </div>
                  <h3>Variable Speed</h3>
                  <div className="showcase-card__media">
                    <img src="/images/products/inverters-vfd-ac-drive_a800_a840-png.png" alt="VFD" />
                  </div>
                </Link>

                <Link to="/products?category=human-machine-interfaces-melhmi-got" className="showcase-card">
                  <div className="showcase-card__header">
                    <span className="showcase-card__tag">HMI / INTERFACE</span>
                    <span className="showcase-card__num">03</span>
                  </div>
                  <h3>Operator Display</h3>
                  <div className="showcase-card__media">
                    <img src="/images/products/human-machine-interfaces-melhmi-got_got-hmi_feature-png.png" alt="HMI" />
                  </div>
                </Link>

                <Link to="/products?category=industrial-robots" className="showcase-card">
                  <div className="showcase-card__header">
                    <span className="showcase-card__tag">ROBOTICS / ARMS</span>
                    <span className="showcase-card__num">04</span>
                  </div>
                  <h3>Flexible Robots</h3>
                  <div className="showcase-card__media">
                    <img src="/images/products/industrial-robots_products_media_image1.png" alt="Robot" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="site-shell home-metrics">
          <div className="home-metric">
            <strong>2010</strong>
            <span>Established</span>
          </div>
          <div className="home-metric">
            <strong><AnimatedNumber value={15} suffix="+" /></strong>
            <span>Years of experience</span>
          </div>
          <div className="home-metric">
            <strong><AnimatedNumber value={11} /></strong>
            <span>Product families</span>
          </div>
          <div className="home-metric">
            <strong>IND</strong>
            <span>Pan-India service</span>
          </div>
        </div>
      </section>

      <section className="home-section home-section--capabilities">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <span className="site-kicker">Built around your production</span>
              <h2>One partner from component selection to connected control.</h2>
            </div>
            <p>
              Good automation is more than a list of parts. It is the right architecture, engineered for
              the process and supported through its working life.
            </p>
          </Reveal>

          <div className="capability-grid">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.number} delay={index * 85} className={capability.className}>
                  <SpotlightCard className="capability-card">
                    <div className="capability-card__topline">
                      <span>{capability.number}</span>
                      <Icon size={25} strokeWidth={1.6} />
                    </div>
                    <div className="capability-card__content">
                      <h3>{capability.title}</h3>
                      <p>{capability.copy}</p>
                    </div>
                    <div className="capability-card__meta">
                      {capability.meta.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-section--products">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--actions">
            <div>
              <span className="site-kicker">Core technology</span>
              <h2>Hardware that earns its place on the line.</h2>
            </div>
            <Link to="/products" className="text-link">View full portfolio <ArrowUpRight size={16} /></Link>
          </Reveal>

          <div className="featured-product-grid">
            {FEATURED_PRODUCTS.map((product, index) => (
              <Reveal key={product.number} delay={index * 70}>
                <Link to={`/products?category=${product.category}`} className="featured-product">
                  <SpotlightCard className="featured-product__inner">
                    <div className="featured-product__topline">
                      <span>{product.number}</span>
                      <span>{product.spec}</span>
                    </div>
                    <div className="featured-product__image">
                      <div className="featured-product__image-grid" aria-hidden="true" />
                      <img src={product.image} alt={product.title} loading="lazy" />
                    </div>
                    <div className="featured-product__copy">
                      <span>{product.eyebrow}</span>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </div>
                    <div className="featured-product__arrow"><ArrowUpRight size={17} /></div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--spotlight">
        <div className="site-shell spotlight-v2">
          <Reveal className="spotlight-v2__aside" direction="left">
            <span className="site-kicker site-kicker--light">Automation in focus</span>
            <h2>Engineering ideas for a smarter factory floor.</h2>
            <div className="spotlight-v2__tabs" role="tablist" aria-label="Automation topics">
              {SPOTLIGHTS.map((spotlight, index) => (
                <button
                  key={spotlight.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSlide}
                  className={index === activeSlide ? 'is-active' : ''}
                  onClick={() => setActiveSlide(index)}
                >
                  <span>0{index + 1}</span>
                  {spotlight.label}
                </button>
              ))}
            </div>
            <div className="spotlight-v2__controls">
              <button type="button" onClick={selectPrevious} aria-label="Previous topic"><ChevronLeft size={18} /></button>
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <button type="button" onClick={selectNext} aria-label="Next topic"><ChevronRight size={18} /></button>
            </div>
          </Reveal>

          <Reveal className="spotlight-v2__stage" direction="right">
            <div
              className="spotlight-v2__media"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img key={activeSpotlight.image} src={activeSpotlight.image} alt="" />
              <div className="spotlight-v2__media-overlay" />
              <div className="spotlight-v2__measure spotlight-v2__measure--one">A / 240</div>
              <div className="spotlight-v2__measure spotlight-v2__measure--two">B / 075</div>
            </div>
            <div className="spotlight-v2__content" key={activeSpotlight.id} aria-live="polite">
              <div className="spotlight-v2__content-icon"><ActiveSpotlightIcon size={22} /></div>
              <div>
                <span>{activeSpotlight.label}</span>
                <h3>{activeSpotlight.title}</h3>
                <p>{activeSpotlight.description}</p>
                <Link to="/about">Learn how we work <ArrowRight size={16} /></Link>
              </div>
              <div className="spotlight-v2__stat">
                <strong>{activeSpotlight.stat}</strong>
                <span>{activeSpotlight.statLabel}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section home-section--industries">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <span className="site-kicker">From machine to enterprise</span>
              <h2>Focused on outcomes, fluent in the technology.</h2>
            </div>
            <p>
              We help automation teams improve control, visibility, reliability, and repeatability across
              new machines and existing production environments.
            </p>
          </Reveal>

          <div className="industry-story-grid">
            <Reveal className="industry-story" direction="left">
              <Link to="/about" className="industry-story__link">
                <img src="/images/industries_serve.png" alt="Automated manufacturing applications" loading="lazy" />
                <div className="industry-story__shade" />
                <div className="industry-story__index">01</div>
                <div className="industry-story__copy">
                  <span>Industries we serve</span>
                  <h3>Automation that adapts to the process.</h3>
                  <p>Manufacturing, packaging, process, material handling, and machine building.</p>
                  <strong>Explore applications <ArrowUpRight size={16} /></strong>
                </div>
              </Link>
            </Reveal>
            <Reveal className="industry-story" direction="right" delay={90}>
              <Link to="/about" className="industry-story__link">
                <img src="/images/our_competencies.png" alt="Control systems engineering team" loading="lazy" />
                <div className="industry-story__shade" />
                <div className="industry-story__index">02</div>
                <div className="industry-story__copy">
                  <span>Our competencies</span>
                  <h3>From control panel to connected system.</h3>
                  <p>Selection, architecture, programming support, motion, visualization, and service.</p>
                  <strong>Meet Millennium CS <ArrowUpRight size={16} /></strong>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section home-section--process">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--center">
            <span className="site-kicker">A practical delivery path</span>
            <h2>Clear thinking at every handoff.</h2>
            <p>Four connected stages keep the technical decision-making focused and the implementation moving.</p>
          </Reveal>

          <div className="process-grid">
            {PROCESS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.step} className="process-step" delay={index * 90}>
                  <div className="process-step__icon"><Icon size={21} /></div>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {index < PROCESS.length - 1 && <div className="process-step__line" aria-hidden="true" />}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="home-cta">
            <div className="home-cta__pattern" aria-hidden="true" />
            <div className="home-cta__icon"><Bot size={29} /></div>
            <div className="home-cta__copy">
              <span>Bring us the machine challenge</span>
              <h2>We’ll help define the control solution.</h2>
            </div>
            <ul>
              <li><Check size={14} /> Component selection</li>
              <li><Check size={14} /> Architecture review</li>
              <li><Check size={14} /> Commissioning support</li>
            </ul>
            <Link to="/contact" className="button button--white">
              Talk to an engineer <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
