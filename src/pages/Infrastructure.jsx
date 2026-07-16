import { useState, useRef, useEffect, useCallback } from "react";
import {
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  Factory,
  Layers,
  Settings,
  Cpu,
  ArrowRight,
  Building2,
  Zap,
  Shield,
} from "lucide-react";
import useSEO from "../hooks/useSEO";

/* ── FACILITY DATA ─────────────────────────────────────────────────────── */
const FACILITIES = [
  {
    id: "nashik",
    icon: <Building2 size={22} strokeWidth={1.8} />,
    label: "01",
    title: "Nashik Main Plant",
    subtitle: "Head Office & Primary Manufacturing Hub",
    area: "25,000 sq. ft.",
    capacity: "High-Volume Production",
    description:
      "Our flagship plant located in Nashik houses our primary production lines for Mitsubishi VFD, PLC, and HMI assembly. Equipped with state-of-the-art machinery and a skilled workforce of engineers and technicians.",
    tags: ["ISO Compliant", "ESD Protected", "Climate Controlled"],
    images: [
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/Nashik-Main-Plant-768x512.webp",
        alt: "Nashik Main Plant – Front View",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/Office-infrastructure2-768x512.webp",
        alt: "Office Infrastructure",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/Office-infrastructure-768x512.webp",
        alt: "Office Setup",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/Manufctuing-Facility-768x512.webp",
        alt: "Manufacturing Facility",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/Manufcting-facility-1-768x431.webp",
        alt: "Production Floor",
      },
    ],
  },
  {
    id: "fabrication",
    icon: <Factory size={22} strokeWidth={1.8} />,
    label: "02",
    title: "Fabrication Factory",
    subtitle: "Panel & Enclosure Manufacturing Unit",
    area: "18,000 sq. ft.",
    capacity: "Custom Fabrication",
    description:
      "Dedicated fabrication unit specialising in control panel manufacturing, sheet metal enclosures, and custom wiring harnesses. This facility handles precision engineering for complex automation projects.",
    tags: ["CNC Machining", "Powder Coating", "Precision Welding"],
    images: [
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.41-PM-2-768x576.jpeg",
        alt: "Fabrication Shop Floor",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.41-PM-1-768x576.jpeg",
        alt: "Welding Station",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.40-PM-768x576.jpeg",
        alt: "Panel Assembly",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.48-PM-2-768x576.jpeg",
        alt: "Quality Inspection",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.41-PM-768x576.jpeg",
        alt: "Finished Panels",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-11-at-4.34.42-PM-1-768x576.jpeg",
        alt: "Enclosure Assembly",
      },
    ],
  },
  {
    id: "pune",
    icon: <Layers size={22} strokeWidth={1.8} />,
    label: "03",
    title: "Pune Factory",
    subtitle: "Assembly & Testing Centre – Chakan MIDC",
    area: "12,000 sq. ft.",
    capacity: "Assembly & Testing",
    description:
      "Strategically located in Chakan MIDC, Pune, this facility serves the automotive and industrial belt of Maharashtra. It focuses on PLC assembly, servo drive integration, and end-to-end testing before dispatch.",
    tags: ["Testing Lab", "Servo Integration", "PLC Assembly"],
    images: [
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-11-at-5.30.42-PM-1-768x1024.webp",
        alt: "Pune Factory Interior",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-11.25.12-AM-2-1-768x1024.webp",
        alt: "PLC Assembly Line",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-11.25.20-AM-2-1-768x1024.webp",
        alt: "Testing Station",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-11.25.19-AM-1-1-768x1024.webp",
        alt: "Control Cabinet Wiring",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-11.25.14-AM-1-768x1024.webp",
        alt: "Dispatch Area",
      },
    ],
  },
  {
    id: "ambad",
    icon: <Settings size={22} strokeWidth={1.8} />,
    label: "04",
    title: "Ambad Factory",
    subtitle: "Service & Repair Workshop – Nashik",
    area: "8,000 sq. ft.",
    capacity: "Service & Repair",
    description:
      "Our Ambad service centre provides after-sales support, repair, and refurbishment of Mitsubishi drives, PLCs, and automation equipment. A team of certified engineers ensures fast turnaround and zero-compromise quality.",
    tags: ["After-Sales Service", "Repair & Refurb", "Certified Engineers"],
    images: [
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/70-1.jpg",
        alt: "Ambad Factory Floor",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/69-1.jpg",
        alt: "Service Workshop",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/68-1.jpg",
        alt: "Component Testing",
      },
      {
        src: "https://teknocrats.com/wp-content/uploads/2025/04/72-768x621.png",
        alt: "Repair Station",
      },
    ],
  },
];

const STATS = [
  { icon: <Factory size={28} strokeWidth={1.6} />, number: "4", label: "Production Facilities" },
  { icon: <Zap size={28} strokeWidth={1.6} />, number: "63,000+", label: "Sq. Ft. Total Area" },
  { icon: <Cpu size={28} strokeWidth={1.6} />, number: "15+", label: "Years of Excellence" },
  { icon: <Shield size={28} strokeWidth={1.6} />, number: "ISO", label: "Compliant Operations" },
];

/* ── IMAGE CAROUSEL COMPONENT ──────────────────────────────────────────── */
function FacilityCarousel({ images, facilityId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const trackRef = useRef(null);

  // How many slides visible per view (responsive)
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handler = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const maxIndex = Math.max(0, images.length - visibleCount);

  const goTo = useCallback(
    (idx) => {
      if (isTransitioning) return;
      const clamped = Math.min(Math.max(idx, 0), maxIndex);
      setIsTransitioning(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning, maxIndex]
  );

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  const openLightbox = (i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lbPrev = () => setLightboxIndex((p) => (p - 1 + images.length) % images.length);
  const lbNext = () => setLightboxIndex((p) => (p + 1) % images.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  const slideWidthPct = 100 / visibleCount;

  return (
    <>
      <div className="infra-carousel">
        <div className="infra-carousel-viewport" ref={trackRef}>
          <div
            className="infra-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * slideWidthPct}%)`,
              transition: isTransitioning ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
              width: `${(images.length / visibleCount) * 100}%`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="infra-carousel-slide"
                style={{ width: `${slideWidthPct / (images.length / visibleCount)}%` }}
                onClick={() => openLightbox(i)}
              >
                <div className="infra-carousel-img-wrap">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="infra-carousel-img"
                    loading={i === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='280' viewBox='0 0 400 280'%3E%3Crect fill='%23e2e8f0' width='400' height='280'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="infra-carousel-overlay">
                    <span className="infra-carousel-zoom">&#x26F6; View</span>
                  </div>
                </div>
                <p className="infra-carousel-caption">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          className="infra-carousel-btn infra-carousel-btn--prev"
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label="Previous images"
          id={`carousel-prev-${facilityId}`}
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>
        <button
          className="infra-carousel-btn infra-carousel-btn--next"
          onClick={next}
          disabled={currentIndex >= maxIndex}
          aria-label="Next images"
          id={`carousel-next-${facilityId}`}
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div className="infra-carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`infra-carousel-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              id={`carousel-dot-${facilityId}-${i}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="infra-lightbox" onClick={closeLightbox} id={`lightbox-${facilityId}`}>
          <div className="infra-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="infra-lightbox-close" onClick={closeLightbox} id={`lightbox-close-${facilityId}`}>
              ✕
            </button>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="infra-lightbox-img"
            />
            <p className="infra-lightbox-caption">{images[lightboxIndex].alt}</p>
            <button
              className="infra-lightbox-nav infra-lightbox-nav--prev"
              onClick={lbPrev}
              id={`lightbox-prev-${facilityId}`}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="infra-lightbox-nav infra-lightbox-nav--next"
              onClick={lbNext}
              id={`lightbox-next-${facilityId}`}
            >
              <ChevronRight size={28} />
            </button>
            <div className="infra-lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── MAIN PAGE COMPONENT ────────────────────────────────────────────────── */
export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);

  useSEO({
    title: "Infrastructure | Millennium Control System – Manufacturing Facilities",
    description:
      "Explore Millennium Control System's world-class manufacturing and service infrastructure – Nashik Main Plant, Fabrication Factory, Pune Chakan Factory, and Ambad Service Centre.",
    keywords:
      "Millennium Control System infrastructure, Nashik factory, Pune MIDC factory, Ambad service centre, Fabrication facility, automation manufacturing",
  });

  return (
    <div className="infra-page">
      {/* ── HERO ── */}
      <section className="infra-hero" id="infra-hero">
        <div className="infra-hero-bg" />
        <div className="infra-hero-grid-pattern" />
        <div className="infra-hero-content">
          <span className="infra-hero-eyebrow">
            <Factory size={14} strokeWidth={2} /> World-Class Manufacturing
          </span>
          <h1 className="infra-hero-title">Our Infrastructure</h1>
          <p className="infra-hero-desc">
            Four strategically located facilities across India, built to deliver precision engineering,
            high-volume production, and superior after-sales service.
          </p>
          <div className="infra-hero-pills">
            {["Nashik Main Plant", "Fabrication Factory", "Pune Factory", "Ambad Service"].map((name, i) => (
              <a
                key={name}
                href={`#facility-${FACILITIES[i].id}`}
                className="infra-hero-pill"
                id={`hero-pill-${FACILITIES[i].id}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="infra-hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="infra-stats-bar" id="infra-stats">
        <div className="infra-container">
          <div className="infra-stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="infra-stat-item">
                <div className="infra-stat-icon">{s.icon}</div>
                <div className="infra-stat-text">
                  <span className="infra-stat-num">{s.number}</span>
                  <span className="infra-stat-lbl">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY NAV TABS ── */}
      <nav className="infra-tab-nav" id="infra-tabs" aria-label="Facility navigation">
        <div className="infra-container">
          <div className="infra-tabs-row">
            {FACILITIES.map((f, i) => (
              <a
                key={f.id}
                href={`#facility-${f.id}`}
                className={`infra-tab ${activeTab === i ? "active" : ""}`}
                id={`tab-${f.id}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="infra-tab-icon">{f.icon}</span>
                <span className="infra-tab-label">{f.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── FACILITY SECTIONS ── */}
      {FACILITIES.map((facility, idx) => (
        <section
          key={facility.id}
          id={`facility-${facility.id}`}
          className={`infra-facility-section ${idx % 2 === 1 ? "infra-facility-alt" : ""}`}
          onMouseEnter={() => setActiveTab(idx)}
        >
          <div className="infra-container">
            {/* Section header */}
            <div className="infra-facility-header">
              <div className="infra-facility-label-col">
                <div className="infra-facility-num-badge">
                  <span>{facility.label}</span>
                </div>
                <div className="infra-facility-icon-badge">{facility.icon}</div>
              </div>
              <div className="infra-facility-title-col">
                <span className="infra-facility-subtitle">{facility.subtitle}</span>
                <h2 className="infra-facility-title">{facility.title}</h2>
                <div className="infra-facility-divider" />
              </div>
              <div className="infra-facility-meta-col">
                <div className="infra-facility-meta-item">
                  <span className="infra-meta-label">Area</span>
                  <span className="infra-meta-val">{facility.area}</span>
                </div>
                <div className="infra-facility-meta-item">
                  <span className="infra-meta-label">Capacity</span>
                  <span className="infra-meta-val">{facility.capacity}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="infra-facility-desc">{facility.description}</p>

            {/* Tags */}
            <div className="infra-facility-tags">
              {facility.tags.map((tag) => (
                <span key={tag} className="infra-facility-tag">
                  <span className="infra-tag-dot" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Image Carousel */}
            <FacilityCarousel images={facility.images} facilityId={facility.id} />
          </div>
        </section>
      ))}

      {/* ── CTA SECTION ── */}
      <section className="infra-cta-section" id="infra-cta">
        <div className="infra-container">
          <div className="infra-cta-card">
            <div className="infra-cta-glow" />
            <div className="infra-cta-left">
              <span className="infra-cta-eyebrow">Get In Touch</span>
              <h2 className="infra-cta-title">Interested in Our Capabilities?</h2>
              <p className="infra-cta-desc">
                Schedule a facility visit or speak with our team about your automation and control system requirements.
              </p>
            </div>
            <div className="infra-cta-right">
              <a href="/contact" className="infra-cta-btn-primary" id="infra-cta-contact">
                Request a Visit <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="tel:07942656614" className="infra-cta-btn-secondary" id="infra-cta-phone">
                <Phone size={15} strokeWidth={2} /> 079-42656614
              </a>
            </div>
          </div>

          {/* Address cards */}
          <div className="infra-address-grid">
            <div className="infra-address-card">
              <div className="infra-address-icon"><MapPin size={18} strokeWidth={2} /></div>
              <div>
                <h4 className="infra-address-title">Nashik Main Plant & HQ</h4>
                <p className="infra-address-text">Nashik, Maharashtra, India</p>
                <p className="infra-address-text">📞 +91 79426 56614</p>
              </div>
            </div>
            <div className="infra-address-card">
              <div className="infra-address-icon"><MapPin size={18} strokeWidth={2} /></div>
              <div>
                <h4 className="infra-address-title">Pune Factory – Chakan MIDC</h4>
                <p className="infra-address-text">Gat No. 773, Chakan MIDC, Pune – 410501</p>
                <p className="infra-address-text">📞 +91 93072 86656</p>
              </div>
            </div>
            <div className="infra-address-card">
              <div className="infra-address-icon"><MapPin size={18} strokeWidth={2} /></div>
              <div>
                <h4 className="infra-address-title">Fabrication Factory</h4>
                <p className="infra-address-text">Nashik Industrial Area, Maharashtra</p>
              </div>
            </div>
            <div className="infra-address-card">
              <div className="infra-address-icon"><MapPin size={18} strokeWidth={2} /></div>
              <div>
                <h4 className="infra-address-title">Ambad Service Centre</h4>
                <p className="infra-address-text">Nashik – Ambad Industrial Belt, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
