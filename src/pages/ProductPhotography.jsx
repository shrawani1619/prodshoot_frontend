import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Camera,
    CheckCircle2,
    Package,
    Image,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    Send,
    Phone,
    RotateCcw,
    Factory,
    Shirt,
    Aperture,
    Monitor,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const CATEGORIES = ['All', 'Fashion', 'Footwear', 'Electronics', 'Beauty Products', 'Furniture'];

const PORTFOLIO_ITEMS = [
    { src: '/portfolio-sneakers.png', category: 'Footwear', title: 'Sneaker Editorial' },
    { src: '/portfolio-skincare.png', category: 'Beauty Products', title: 'Skincare Range' },
    { src: '/portfolio-watch.png', category: 'Electronics', title: 'Luxury Watch' },
    { src: '/portfolio-jewelry.png', category: 'Fashion', title: 'Fine Jewelry' },
];

function ProductPhotography() {
    const [activeFilter, setActiveFilter] = useState('All');

    const features = [
        "Studio-grade product photography on white or styled BG",
        "On-model fashion & ghost mannequin shoots",
        "Industrial & B2B catalog photography",
        "Interactive 360° spin photography",
        "Amazon, Flipkart & Myntra compliant images",
        "Professional lighting, props & set design",
        "Expert color grading & background removal",
        "48–72 hour standard delivery"
    ];

    const serviceTypes = [
        {
            icon: <Camera size={22} />,
            title: "Product Photography",
            desc: "Clean studio shots on white or styled backgrounds. Every angle covered for maximum marketplace performance.",
            tag: "CATALOG"
        },
        {
            icon: <Shirt size={22} />,
            title: "Fashion & Model Photography",
            desc: "On-model shoots with professional casting, styling, and art direction. Ghost mannequin also available.",
            tag: "FASHION"
        },
        {
            icon: <Factory size={22} />,
            title: "Industrial Photography",
            desc: "Heavy machinery, tools, and B2B products shot for catalogs, trade media, and corporate websites.",
            tag: "B2B"
        },
        {
            icon: <RotateCcw size={22} />,
            title: "360° Product Photography",
            desc: "Interactive spin photography that lets customers inspect every angle — reducing returns and boosting confidence.",
            tag: "360°"
        },
        {
            icon: <Aperture size={22} />,
            title: "Hero Shots & Lifestyle",
            desc: "Aspirational, context-rich imagery that places your product in the world your customer wants to live in.",
            tag: "LIFESTYLE"
        },
        {
            icon: <Monitor size={22} />,
            title: "Infographic & A+ Content",
            desc: "Feature callout images, comparison charts, and enhanced brand content designed to drive conversions.",
            tag: "MARKETING"
        }
    ];

    const process = [
        { step: "01", title: "Send Your Product", desc: "Ship your products to our studio. We provide a pre-paid shipping label and catalog every item on arrival.", icon: <Package size={24} /> },
        { step: "02", title: "Photoshoot & Styling", desc: "Our team styles your product with professional props, backdrops, and precision lighting setups tailored to your brand.", icon: <Camera size={24} /> },
        { step: "03", title: "Professional Editing", desc: "Expert retouchers color-correct, remove backgrounds, and enhance every image to pixel-perfect quality.", icon: <Image size={24} /> },
        { step: "04", title: "Delivery of Final Images", desc: "Receive high-resolution, platform-ready images in your inbox within 24–72 hours. Unlimited revisions included.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "4000+", label: "Clients Served" },
        { number: "24–72H", label: "Fast Delivery" },
        { number: "100%", label: "Marketplace Ready" },
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Founder, Aura Skincare",
            text: "Prodshoot transformed our product imagery. Our conversion rate jumped 40% after switching to their photos. The white-background shots are crisp and the lifestyle images tell our brand story perfectly.",
            rating: 5,
            avatar: "P"
        },
        {
            name: "Rahul Mehta",
            role: "CEO, UrbanStep Footwear",
            text: "We've worked with 5 studios before Prodshoot. None come close. The 48-hour turnaround is real, the quality is consistently premium, and their team actually understands e-commerce.",
            rating: 5,
            avatar: "R"
        },
        {
            name: "Ananya Gupta",
            role: "Brand Manager, Luxe Watches",
            text: "The dark, moody product shots they did for our watch collection were magazine-quality. Our Amazon listing views tripled within a month. Can't recommend them enough.",
            rating: 5,
            avatar: "A"
        }
    ];

    const filteredPortfolio = activeFilter === 'All'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter(p => p.category === activeFilter);

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Camera size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            PRODUCT PHOTOGRAPHY SERVICE
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Professional Product<br />Photography<br />That Sells
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Studio-grade product imagery for D2C brands, marketplace sellers, and e-commerce stores. Ship us your products — we deliver images that convert browsers into buyers.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Camera size={18} />
                                    BOOK A SHOOT
                                </motion.div>
                            </Link>
                            <Link to="/portfolio" className="cta-secondary-btn">
                                VIEW PORTFOLIO <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="service-hero-image"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src="/hero.png" alt="Professional product photography studio" />
                </motion.div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="service-stats-bar">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className="service-stat"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <span className="service-stat-number">{stat.number}</span>
                        <span className="service-stat-label">{stat.label}</span>
                    </motion.div>
                ))}
            </section>

            {/* ─── WHAT YOU GET ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHAT WE DELIVER</span>
                        <h2 className="service-section-title display-bold">Every Image Built To Convert</h2>
                        <p className="service-section-desc">
                            We don't just make pretty photos — every image is crafted with your marketplace performance in mind. From white-background catalog shots to full lifestyle productions, we cover every angle your brand needs.
                        </p>
                        <ul className="feature-checklist">
                            {features.map((f, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <CheckCircle2 size={16} />
                                    <span>{f}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        className="service-section-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/catalog.png" alt="Professional product photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SERVICE TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Services</h2>
                    <p>Every Type of Product Photography, Under One Roof</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {serviceTypes.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div className="why-icon">{item.icon}</div>
                                <span style={{
                                    fontSize: '0.55rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    color: 'var(--accent)',
                                    background: 'rgba(168, 85, 247, 0.1)',
                                    padding: '4px 10px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(168, 85, 247, 0.15)'
                                }}>{item.tag}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>Simple, Streamlined, Stress-Free</p>
                </div>

                <div className="process-timeline">
                    {process.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="process-step"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                        >
                            <div className="process-step-number">{step.step}</div>
                            <div className="process-step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── PORTFOLIO ─── */}
            <section className="service-section" id="portfolio">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Portfolio</h2>
                    <p>Our Recent Work</p>
                </div>

                {/* Category Filters */}
                <div className="portfolio-filters" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem 2rem' }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="sample-gallery">
                    <AnimatePresence mode="popLayout">
                        {filteredPortfolio.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                className="sample-item"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -4 }}
                                layout
                            >
                                <img src={item.src} alt={item.title} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* ─── CUSTOM SOLUTIONS ─── */}
            <section className="service-section" id="custom-quote">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Tailored Solutions</h2>
                    <p>Photography Built For Your Brand</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Production for Every Brand</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We don't believe in one-size-fits-all pricing. Every brand has unique product complexities and visual goals. Whether you have 5 SKUs or 500, we provide a custom production plan that scales with your growth.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                REQUEST A CUSTOM QUOTE
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>Product Photography Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Professional Lighting & Editing", desc: "Industry-leading lighting setups and post-production deliver flawless, marketplace-approved images every time." },
                        { icon: <Clock size={24} />, title: "24–72 Hour Delivery", desc: "Speed matters in e-commerce. We deliver production-ready images in as little as 24 hours with rush options." },
                        { icon: <Star size={24} />, title: "Affordable Premium Quality", desc: "Premium quality doesn't have to cost a premium. Transparent, competitive pricing with no hidden fees and free re-shoots." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Testimonials</h2>
                    <p>What Our Clients Say</p>
                </div>

                <div className="testimonials-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />
                                ))}
                            </div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.avatar}</div>
                                <div>
                                    <span className="author-name">{t.name}</span>
                                    <span className="author-role">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── BOTTOM CTA ─── */}
            <section className="service-section" id="contact">
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <motion.div
                        className="bottom-cta"
                        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
                    >
                        <div className="bottom-cta-glow" />
                        <div className="bottom-cta-content">
                            <h2 className="display-bold">
                                Ready to make your<br />products look premium?
                            </h2>
                            <p>
                                Ship us your products. We'll handle the styling, shooting, and retouching. Get marketplace-ready images in 24–72 hours.
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
                                    BOOK A SHOOT
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
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductPhotography;
