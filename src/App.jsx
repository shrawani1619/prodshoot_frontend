import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Camera,
  Package,
  Sparkles,
  Aperture,
  Layers,
  CheckCircle2,
  Send,
  Star,
  Clock,
  Shield,
  Zap,
  RefreshCw,
  Truck,
  Plus,
  Minus,
  Mail,
  Phone,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Site Images
const HERO_IMAGE = "/hero.png";
const CATALOG_IMAGE = "/catalog.png";
const LIFESTYLE_IMAGE = "/lifestyle.png";
const PORTFOLIO = [
  { src: "/portfolio-sneakers.png", category: "Footwear", title: "Premium Sneaker Shoot", size: "large" },
  { src: "/portfolio-skincare.png", category: "Beauty", title: "Skincare Collection", size: "small" },
  { src: "/portfolio-watch.png", category: "Accessories", title: "Luxury Watch Photography", size: "small" },
  { src: "/portfolio-jewelry.png", category: "Jewelry", title: "Fine Jewelry Editorial", size: "tall" },
  { src: "/hero.png", category: "Accessories", title: "Product Flat Lay", size: "small" },
  { src: "/lifestyle.png", category: "Beauty", title: "Brand Identity", size: "small" },
  { src: "/amazon-examples.png", category: "Footwear", title: "Studio Performance", size: "small" },
  { src: "/portfolio-skincare.png", category: "Beauty", title: "Luxe Textures", size: "small" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// FAQ Component
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="faq-question">
        <span>{question}</span>
        <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('All');

  const faqs = [
    {
      question: "How does the ship-to-shoot process work?",
      answer: "Simply pack your products securely and ship them to our studio. We receive, catalog, and photograph each item according to your selected package. Once the shoot is complete, we ship them right back to you."
    },
    {
      question: "What is the typical turnaround time?",
      answer: "Our standard turnaround is 48 hours from the time we receive your products. Rush options are available for 24-hour delivery. Large bulk orders may take 3-5 business days."
    },
    {
      question: "Do you offer re-shoots if I'm not satisfied?",
      answer: "Absolutely. We offer free re-shoots if the images don't meet your expectations. Our goal is 100% satisfaction, and we'll work with you until every image is perfect."
    },
    {
      question: "What platforms are your images optimized for?",
      answer: "We deliver images optimized for Amazon, Shopify, WooCommerce, Flipkart, Myntra, and all major marketplaces. Each platform has specific requirements, and we ensure full compliance."
    },
    {
      question: "Can you handle bulk orders for large catalogs?",
      answer: "Yes! We regularly handle bulk orders of 100+ SKUs. We offer volume discounts and dedicated project managers for large catalog shoots. Contact us for a custom quote."
    },
    {
      question: "What types of products do you photograph?",
      answer: "We photograph everything — fashion & apparel, electronics, beauty & skincare, food & beverages, jewelry, home decor, and more. If it's a product, we can shoot it."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, Aura Skincare",
      text: "Prodshoot transformed our product imagery. Our conversion rate jumped 40% after switching to their photos. The white-background shots are crisp and the lifestyle images tell our brand story perfectly.",
      rating: 5
    },
    {
      name: "Rahul Mehta",
      role: "CEO, UrbanStep Footwear",
      text: "We've worked with 5 studios before Prodshoot. None come close. The 48-hour turnaround is real, the quality is consistently premium, and their team actually understands e-commerce.",
      rating: 5
    },
    {
      name: "Ananya Gupta",
      role: "Brand Manager, Luxe Watches",
      text: "The dark, moody product shots they did for our watch collection were magazine-quality. Our Amazon listing views tripled within a month. Can't recommend them enough.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    { icon: <Clock size={24} />, title: "48H Turnaround", desc: "Industry-fastest delivery. Get your sales-ready images in just 2 business days." },
    { icon: <Shield size={24} />, title: "Insured Shipping", desc: "Every product is fully insured during transit. Ship with zero worry." },
    { icon: <RefreshCw size={24} />, title: "Free Re-Shoots", desc: "Not happy? We'll re-shoot at no extra cost until you're 100% satisfied." },
    { icon: <Zap size={24} />, title: "Platform Optimized", desc: "Images formatted perfectly for Amazon, Shopify, Flipkart & all marketplaces." },
    { icon: <Truck size={24} />, title: "Ship-to-Shoot", desc: "Just mail us your products. We handle everything from styling to delivery." },
    { icon: <Star size={24} />, title: "500+ Brands Trust Us", desc: "From startups to enterprise D2C brands, we're the go-to photography partner." }
  ];

  const filteredPortfolio = activePortfolioFilter === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activePortfolioFilter);

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="grid-container">
        {/* ═══════════════════════════════════════════
            SECTION 1: HERO
        ═══════════════════════════════════════════ */}
        <motion.div
          className="hero-text-col"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <Aperture size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            PRODUCT PHOTOGRAPHY SERVICE
          </motion.div>
          <motion.h1 className="display-bold hero-title" variants={fadeUp}>
            We Shoot <br /> Your Products. <br /> You Scale.
          </motion.h1>
          <motion.p className="hero-desc" variants={fadeUp}>
            Prodshoot is a professional product photography studio for D2C brands &amp; marketplace sellers. Ship us your products — we deliver stunning, sales-ready images.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <img src={HERO_IMAGE} alt="Professional product photography studio setup" />
        </motion.div>

        <motion.div
          className="stats-col"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="stats-grid">
            <motion.div className="stat-box" variants={fadeUp}>
              <span className="stat-number">2M+</span>
              <span className="stat-label">Photos Shot</span>
            </motion.div>
            <motion.div className="stat-box" variants={fadeUp}>
              <span className="stat-number">500+</span>
              <span className="stat-label">Brands Served</span>
            </motion.div>
            <motion.div className="stat-box" variants={fadeUp}>
              <span className="stat-number">48H</span>
              <span className="stat-label">Turnaround</span>
            </motion.div>
          </div>

          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cta-pill"
              variants={fadeUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="cta-icon-circle">
                  <Camera size={18} />
                </div>
                BOOK A SHOOT
              </div>
              <ArrowUpRight size={22} />
            </motion.div>
          </Link>
        </motion.div>

        {/* ═══════════════════════════════════════════
            SECTION 2: TRUST BAR
        ═══════════════════════════════════════════ */}
        <div className="trust-bar">
          {['Trusted by 500+ Brands', 'Amazon Compliant', '48-Hour Delivery', 'Free Re-shoots', 'Secure Shipping'].map((item, i) => (
            <div className="trust-item" key={i}>
              <span className="trust-dot" />
              {item}
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 3: SERVICES
        ═══════════════════════════════════════════ */}
        <div className="section-heading" id="services">
          <h2>Our Services</h2>
          <p>What We Shoot For You</p>
        </div>

        <motion.div
          className="bento-image-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
        >
          <img src={CATALOG_IMAGE} alt="Product photography workspace" />
          <div className="bento-image-overlay">
            <h2>Catalog Photography</h2>
            <p>We shoot clean, high-converting product photos for your e-commerce store.</p>
            <a href="#portfolio" className="portfolio-btn">SEE OUR WORK →</a>
          </div>
        </motion.div>

        <motion.div
          style={{ gridColumn: 'span 6' }}
          className="bento-card primary-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="card-label" style={{ color: 'rgba(255,255,255,0.6)' }}>CUSTOM PRODUCTION</span>
              <ArrowUpRight size={15} color="rgba(255,255,255,0.5)" />
            </div>
            <span className="card-price" style={{ color: 'white', WebkitTextFillColor: 'white' }}>Tailored Solutions</span>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="card-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Every brand has unique needs. We provide custom photography and creative direction tailored specificially to your product's DNA and marketplace goals.
            </p>
            <div className="tag-row">
              {['Custom Sets', 'Model Casting', 'Prop Styling', 'Brand Narrative'].map((tag, i) => (
                <span key={i} className="pill-tag" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            SECTION 4: HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>Your Shoot, Simplified</p>
        </div>

        <div className="feature-list-col">
          {[
            { icon: <Package size={20} />, title: "YOU SHIP, WE SHOOT", desc: "Mail us your products. Our photography team plans the shoot, styles, and captures everything for you." },
            { icon: <Sparkles size={20} />, title: "SHOT FOR SALES", desc: "We don't just make pretty photos — every image is crafted to convert browsers into buyers." },
            { icon: <Layers size={20} />, title: "EXPERT RETOUCHING", desc: "Our post-production team color-corrects, retouches, and delivers pixel-perfect final files." },
            { icon: <CheckCircle2 size={20} />, title: "PLATFORM OPTIMIZED", desc: "We format & size your images to meet Amazon, Shopify, and marketplace requirements." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="dark-item"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                  <span className="section-label">{item.title}</span>
                </div>
                <p>{item.desc}</p>
              </div>
              <ArrowUpRight size={20} color="var(--text-muted)" />
            </motion.div>
          ))}
        </div>

        <div className="lifestyle-col">
          <img src={LIFESTYLE_IMAGE} alt="Behind the scenes photographer shooting products" />
          <div className="lifestyle-overlay">
            <h2>Your Product, <br /> Our Lens</h2>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 5: PORTFOLIO GALLERY
        ═══════════════════════════════════════════ */}
        <div className="section-heading" id="portfolio">
          <h2>Portfolio</h2>
          <p>Our Recent Work</p>
        </div>

        <div className="portfolio-filters">
          {['All', 'Footwear', 'Beauty', 'Accessories', 'Jewelry'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activePortfolioFilter === filter ? 'active' : ''}`}
              onClick={() => setActivePortfolioFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          <AnimatePresence mode="wait">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.title}
                className={`portfolio-item ${item.size || ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="portfolio-image-wrap">
                  <img src={item.src} alt={item.title} />
                  <div className="portfolio-hover-overlay">
                    <div className="portfolio-view-icon">
                      <ArrowUpRight size={22} />
                    </div>
                    <div className="portfolio-meta">
                      <span className="portfolio-category">{item.category}</span>
                      <span className="portfolio-title">{item.title}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 6: WHY CHOOSE US
        ═══════════════════════════════════════════ */}
        <div className="section-heading" id="about">
          <h2>Why Prodshoot</h2>
          <p>Built For E-Commerce Brands</p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              className="why-card"
              whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 7: TESTIMONIALS
        ═══════════════════════════════════════════ */}
        <div className="section-heading">
          <h2>Testimonials</h2>
          <p>What Our Clients Say</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <Quote size={20} className="quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 8: FAQ
        ═══════════════════════════════════════════ */}
        <div className="section-heading">
          <h2>FAQ</h2>
          <p>Common Questions</p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === idx}
                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
              />
            ))}
          </div>
          <div className="faq-side">
            <div className="faq-cta-card">
              <h3>Still have questions?</h3>
              <p>Our team is ready to help. Reach out and we'll get back to you within a few hours.</p>
              <Link to="/contact" className="faq-cta-btn" style={{ textDecoration: 'none' }}>
                <Mail size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            SECTION 9: BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <motion.div
          className="bottom-cta"
          id="contact"
          whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
        >
          <div className="bottom-cta-glow" />
          <div className="bottom-cta-content">
            <h2 className="display-bold">
              Ready to elevate<br />your product imagery?
            </h2>
            <p>
              Ship us your products. We'll handle the styling, shooting, and retouching. Get sales-ready images in 48 hours.
            </p>
          </div>
          <div className="bottom-cta-actions">
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="cta-primary-btn"
              >
                <Send size={18} />
                GET STARTED
              </motion.div>
            </Link>
            <motion.a
              href="tel:+919356917424"
              whileHover={{ scale: 1.03 }}
              className="cta-secondary-btn"
            >
              <Phone size={16} />
              CALL US
            </motion.a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
