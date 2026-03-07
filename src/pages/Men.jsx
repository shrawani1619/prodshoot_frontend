import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Send,
    Phone,
    CheckCircle2,
    Camera,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    ArrowUpRight,
    Package,
    Shirt,
    User,
    TrendingUp,
    Target,
    Award
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

function Men() {
    const stats = [
        { number: "500+", label: "Men's Brands" },
        { number: "80K+", label: "Garments Shot" },
        { number: "42%", label: "Conversion Uplift" },
        { number: "36H", label: "Turnaround SLA" },
    ];

    const features = [
        "Menswear ghost mannequin & flat lay",
        "Formal suits & tailoring photography",
        "Activewear & sportswear shoots",
        "Casual & streetwear lookbooks",
        "Footwear & accessories styling",
        "Platform-ready (Amazon, Myntra, Flipkart)",
        "Fabric texture & detail macro shots",
        "On-model & ghost mannequin options",
        "Wardrobe steaming & garment prep",
        "Size & fit visualization support"
    ];

    const categories = [
        {
            icon: <Shirt size={28} />,
            title: "Formal & Tailoring",
            desc: "Sharp, precise imaging for suits, blazers, trousers and formal shirts. We bring out the cut, drape and fabric quality that sells premium menswear.",
            tag: "TAILORED PRECISION"
        },
        {
            icon: <Zap size={28} />,
            title: "Activewear & Sports",
            desc: "Dynamic lighting and styling that captures the performance energy of sportswear, gym wear and athleisure collections.",
            tag: "HIGH PERFORMANCE"
        },
        {
            icon: <User size={28} />,
            title: "Casual & Streetwear",
            desc: "Editorial-style lifestyle shoots that position your casual and streetwear line with the cool factor modern consumers demand.",
            tag: "LIFESTYLE EDITORIAL"
        },
        {
            icon: <Award size={28} />,
            title: "Footwear & Accessories",
            desc: "360° detail shots and styled flat lays for shoes, belts, wallets, watches and bags — every accessory told with purpose.",
            tag: "DETAIL MASTERY"
        }
    ];

    const process = [
        { step: "01", title: "Collection Intake", desc: "Your menswear is received, cataloged, and inspected. We tag every piece to ensure zero mix-ups in large-volume shoots.", icon: <Package size={24} /> },
        { step: "02", title: "Garment Prep", desc: "Professional steaming and pressing. Every collar, cuff and crease is perfect before a single frame is captured.", icon: <Shirt size={24} /> },
        { step: "03", title: "Studio Shoot", desc: "Expert lighting tailored to the specific fabric — from wool textures to performance synthetics.", icon: <Camera size={24} /> },
        { step: "04", title: "Post Production", desc: "Ghost mannequin compositing, color grading and retouching to deliver catalog-perfect menswear imagery.", icon: <Layers size={24} /> },
        { step: "05", title: "Multi-Platform Delivery", desc: "Files optimized and exported for every major marketplace and your own e-commerce storefront.", icon: <Zap size={24} /> },
    ];

    const showcase = [
        { src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80", title: "Power Suit Series", category: "Formal", size: "large" },
        { src: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80", title: "Ghost Mannequin Perfection", category: "Ghost Mannequin", size: "small" },
        { src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80", title: "Casual Edit", category: "Streetwear", size: "small" },
        { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", title: "Sneaker Collection", category: "Footwear", size: "medium" },
        { src: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80", title: "Leather Goods", category: "Accessories", size: "medium" },
        { src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80", title: "Activewear Campaign", category: "Sports", size: "large" },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: "Menswear Specialists",
            desc: "Our stylists understand the nuances of men's fashion — from the precise break of a trouser hem to the ideal collar roll on a casual shirt."
        },
        {
            icon: <Clock size={24} />,
            title: "Volume Capacity",
            desc: "Handle seasonal collections of any scale. We operate multi-studio setups designed for high-volume menswear catalogs with fast SLAs."
        },
        {
            icon: <Star size={24} />,
            title: "Platform Compliance",
            desc: "Deep expertise in menswear listing requirements across Amazon, Myntra, Ajio, Flipkart, and all major Indian and global marketplaces."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Conversion Driven",
            desc: "Our clients see measurable uplifts in add-to-cart rates. We know what angles, lighting and styling choices drive menswear purchases online."
        },
        {
            icon: <Target size={24} />,
            title: "Ghost Mannequin Mastery",
            desc: "Invisible mannequin effects that give shape and volume to every garment — the industry gold standard for menswear catalog imagery."
        },
        {
            icon: <Award size={24} />,
            title: "Certified Retouchers",
            desc: "Post-production handled by certified fashion retouchers who maintain color accuracy, fabric truth, and brand visual language."
        }
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <User size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            MEN'S FASHION PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Imagery Built<br />For The<br />Modern Man
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From sharp formal suits to bold streetwear, we craft menswear photography that converts browsers into buyers. Precision styling, ghost mannequin mastery, and platform-ready delivery at scale.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    BOOK MEN'S SHOOT
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                VIEW LOOKBOOK <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="service-hero-image"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80" alt="Men's Fashion Photography" />
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

            {/* ─── FEATURE CHECKLIST ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">MENSWEAR EXPERTISE</span>
                        <h2 className="service-section-title display-bold">Every category of men's fashion, shot to perfection.</h2>
                        <p className="service-section-desc">
                            Men's fashion is about confidence and precision. Our studio captures the exact fit, texture and silhouette your customers need to buy with confidence — reducing returns and building brand loyalty.
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
                        <img src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?auto=format&fit=crop&w=900&q=80" alt="Men's Fashion Catalog" />
                    </motion.div>
                </div>
            </section>

            {/* ─── CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Categories We Cover</h2>
                    <p>Full-Spectrum Men's Fashion Production</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{cat.icon}</div>
                            <span className="section-label-sm" style={{ fontSize: '0.6rem', marginBottom: '0.5rem', display: 'block' }}>{cat.tag}</span>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Men's Lookbook</h2>
                    <p>Premium Menswear Showcases</p>
                </div>

                <div className="portfolio-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {showcase.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`portfolio-item ${item.size || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Production Flow</h2>
                    <p>From Collection Intake To Marketplace-Ready</p>
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

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>The Menswear Photography Standard</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {whyCards.map((item, idx) => (
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

            {/* ─── VOLUME CTA BAND ─── */}
            <section className="service-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>High-Volume Men's Catalog Packages</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Launching a full menswear season? We run dedicated multi-SKU shoots with consistent lighting, backgrounds and styling — delivering your entire catalog in a single production run.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                REQUEST VOLUME QUOTE
                            </motion.div>
                        </Link>
                    </div>
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
                                Ready to shoot your<br />men's collection?
                            </h2>
                            <p>
                                Ship us your menswear. We'll deliver marketplace-ready images that showcase fit, fabric and style — built to convert.
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
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Men;
