import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { Reveal } from '../components/Motion';
import useSEO from '../hooks/useSEO';

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Engineering line',
    value: '+91 63567 32897',
    href: 'tel:+916356732897',
    note: 'Call or WhatsApp',
  },
  {
    icon: Mail,
    label: 'Project inquiries',
    value: 'info2.millenniumcontrol@gmail.com',
    href: 'mailto:info2.millenniumcontrol@gmail.com',
    note: 'Technical briefs welcome',
  },
  {
    icon: MapPin,
    label: 'Registered office',
    value: 'Royal Industrial Hub, Valvada, Vapi 396105',
    href: 'https://www.google.com/maps/search/?api=1&query=Millennium+Control+System+Royal+Industrial+Hub+Valvada+Vapi+396105',
    note: 'Gujarat, India',
  },
];

export default function Contact() {
  const { categories } = useData();
  const [prepared, setPrepared] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  useSEO({
    title: 'Contact Our Industrial Automation Team | Millennium CS',
    description: 'Talk to Millennium Control System about Mitsubishi Electric PLC, VFD, HMI, servo, motion, robotics, and industrial automation requirements.',
    keywords: 'industrial automation inquiry, Mitsubishi PLC quote, VFD support India, contact Millennium Control System',
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setPrepared(false);
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedCategory = categories.find((category) => category.id === formData.interest)?.name;
    const subject = `Automation inquiry${selectedCategory ? ` — ${selectedCategory}` : ''}`;
    const body = [
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Product / solution: ${selectedCategory || 'General automation requirement'}`,
      '',
      'Requirement:',
      formData.message || 'Please contact me to discuss the application.',
    ].join('\n');

    setPrepared(true);
    window.location.href = `mailto:info2.millenniumcontrol@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-v2">
      <section className="contact-v2__hero">
        <div className="contact-v2__hero-grid" aria-hidden="true" />
        <div className="site-shell contact-v2__hero-inner">
          <Reveal className="contact-v2__hero-copy">
            <span className="site-kicker site-kicker--light">Start with the application</span>
            <h1>Tell us what the machine needs to do.</h1>
            <p>
              Share your control, drive, motion, HMI, or integration requirement. Our team will help
              narrow the right technical path.
            </p>
          </Reveal>
          <Reveal className="contact-v2__hero-note" delay={100} direction="right">
            <Sparkles size={21} />
            <div>
              <span>Useful details</span>
              <p>Machine type, motor rating, I/O count, communication protocol, and desired timeline.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-v2__main">
        <div className="site-shell contact-v2__layout">
          <Reveal className="contact-v2__form-card" direction="left">
            <div className="contact-v2__form-head">
              <div>
                <span>Project brief</span>
                <h2>What can we help you engineer?</h2>
              </div>
              <div className="contact-v2__secure"><ShieldCheck size={16} /> Direct to our team</div>
            </div>

            {prepared && (
              <div className="contact-v2__notice" role="status">
                <CheckCircle2 size={18} /> Your email app should open with a prepared inquiry. Review it, then send when ready.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-v2__form">
              <div className="contact-v2__field-grid">
                <label>
                  <span>Your name *</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={updateField}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>
                <label>
                  <span>Work email *</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  <span>Phone / WhatsApp</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="+91"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label>
                <span>Product or solution</span>
                <select name="interest" value={formData.interest} onChange={updateField}>
                  <option value="">Select a product family</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>Application details</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={updateField}
                  placeholder="Tell us about the machine, current setup, key specifications, and what you want to improve..."
                />
              </label>

              <div className="contact-v2__submit-row">
                <button type="submit" className="button button--primary">
                  Open email draft <Send size={16} />
                </button>
                <p>This prepares an email in your device’s mail app. Nothing is sent automatically.</p>
              </div>
            </form>
          </Reveal>

          <aside className="contact-v2__aside">
            <Reveal className="contact-v2__detail-card" direction="right">
              <span className="site-kicker">Direct contact</span>
              <h2>Reach the right desk.</h2>
              <p>For a faster technical response, include model numbers or a photo of the existing panel where possible.</p>
              <div className="contact-v2__details">
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a key={detail.label} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}>
                      <div className="contact-v2__detail-icon"><Icon size={19} /></div>
                      <div>
                        <span>{detail.label}</span>
                        <strong>{detail.value}</strong>
                        <small>{detail.note}</small>
                      </div>
                      <ArrowRight size={16} />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="contact-v2__availability" direction="right" delay={100}>
              <div><Clock3 size={20} /></div>
              <div>
                <span>Business hours</span>
                <strong>Monday—Saturday</strong>
                <p>09:30—18:30 IST</p>
              </div>
            </Reveal>

            <Reveal className="contact-v2__whatsapp" direction="right" delay={160}>
              <MessageCircle size={23} />
              <div>
                <span>Quick question?</span>
                <strong>Continue on WhatsApp</strong>
              </div>
              <a href="https://wa.me/916356732897" target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
                <ArrowRight size={17} />
              </a>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
