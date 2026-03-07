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
    Heart,
    TrendingUp,
    Target,
    Award,
    Scissors
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

function Women() {
    const stats = [
        { number: "700+", label: "Women's Brands" },
        { number: "1.2M+", label: "Garments Captured" },
        { number: "38%", label: "Return Rate Drop" },
        { number: "48H", label: "Studio SLA" },
    ];

    const features = [
        "Ghost mannequin & flat lay for womenswear",
        "Ethnic wear — sarees, lehengas, kurtas",
        "Western wear — dresses, tops, co-ords",
        "Lingerie & intimate apparel photography",
        "Bridal & occasion wear editorials",
        "Footwear, bags & accessories styling",
        "On-model with casted female talent",
        "Fabric drape, texture & color accuracy",
        "Platform-ready (Amazon, Myntra, Nykaa Fashion)",
        "Size-inclusive styling & visualization"
    ];

    const categories = [
        {
            icon: <Heart size={28} />,
            title: "Ethnic & Traditional",
            desc: "From intricate embroidered lehengas to elegant saree draping — we understand the visual language of Indian ethnic fashion and capture every detail with reverence.",
            tag: "ETHNIC HERITAGE"
        },
        {
            icon: <Sparkles size={28} />,
            title: "Western & Contemporary",
            desc: "Clean, editorial photography for dresses, co-ords, tops and Western collections. Styled to reflect current trends and seasonal aesthetics.",
            tag: "MODERN FASHION"
        },
        {
            icon: <Scissors size={28} />,
            title: "Lingerie & Intimates",
            desc: "Tasteful, elegant photography for lingerie and intimate wear using professional female stylists and ethical, comfortable shoot environments.",
            tag: "DELICATE CRAFT"
        },
        {
            icon: <Award size={28} />,
            title: "Bridal & Occasion",
            desc: "High-end editorial shoots for bridal, festive and occasion wear. Cinematic lighting and storytelling that captures the emotion of these collections.",
            tag: "PREMIUM EDITORIAL"
        }
    ];

    const process = [
        { step: "01", title: "Collection Intake", desc: "Your womenswear is received, cataloged by category and logged with meticulous care to protect delicate garments.", icon: <Package size={24} /> },
        { step: "02", title: "Styling & Drape", desc: "Our specialist female stylists steam, pin and drape every garment to achieve the ideal silhouette and fit for camera.", icon: <Scissors size={24} /> },
        { step: "03", title: "Precision Shoot", desc: "Lighting systems calibrated for delicate fabrics — chiffon, silk, organza, georgette. Every material is treated with expertise.", icon: <Camera size={24} /> },
        { step: "04", title: "Post Production", desc: "Ghost mannequin compositing, skin retouching, color grading. All edits preserve fabric truth and brand aesthetic.", icon: <Layers size={24} /> },
        { step: "05", title: "Multi-Platform Delivery", desc: "Assets exported to spec for Myntra, Amazon, Ajio, Nykaa Fashion and your direct website — all from one shoot.", icon: <Zap size={24} /> },
    ];

    const showcase = [
        { src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80", title: "Ethnic Collection", category: "Ethnic Wear", size: "large" },
        { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80", title: "Ghost Mannequin", category: "Western Wear", size: "small" },
        { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80", title: "Contemporary Edit", category: "Lifestyle", size: "small" },
        { src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", title: "Jewelry & Accessories", category: "Accessories", size: "medium" },
        { src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", title: "Bags & Clutches", category: "Handbags", size: "medium" },
        { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", title: "Bridal Campaign", category: "Bridal", size: "large" },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: "Female-Led Styling Team",
            desc: "Our womenswear styling is led by experienced female fashion professionals who understand fit, proportion and the sensitivities of each garment category."
        },
        {
            icon: <Clock size={24} />,
            title: "Ethnic Wear Specialists",
            desc: "Dedicated ethnic fashion specialists on our team who know how to properly drape sarees, style lehengas and showcase the embroidery work that makes pieces unique."
        },
        {
            icon: <Star size={24} />,
            title: "Size-Inclusive Approach",
            desc: "We support size-inclusive shooting across plus-size, petite and standard sizing — ensuring your brand speaks to every customer."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Trend-Responsive Production",
            desc: "Our creative team monitors seasonal fashion trends so your images are always current, aesthetically aligned with what consumers expect to see right now."
        },
        {
            icon: <Target size={24} />,
            title: "Nykaa & Myntra Compliance",
            desc: "Deep knowledge of women's fashion listing requirements for India's largest platforms — from Myntra's lookbook guidelines to Nykaa Fashion's aesthetic standards."
        },
        {
            icon: <Heart size={24} />,
            title: "Delicate Garment Care",
            desc: "Premium garments handled with white-glove care. Our studio environment is designed to protect your most valuable and delicate fashion pieces."
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
                            <Heart size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            WOMEN'S FASHION PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Fashion That<br />Speaks To<br />Every Woman
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From traditional ethnic ensembles to bold contemporary looks — we craft women's fashion imagery that celebrates style, drives discovery and converts browsers into loyal customers.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    BOOK WOMEN'S SHOOT
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
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" alt="Women's Fashion Photography" />
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
                        <span className="section-label-sm">WOMENSWEAR EXPERTISE</span>
                        <h2 className="service-section-title display-bold">Every category of women's fashion, elevated.</h2>
                        <p className="service-section-desc">
                            Women's fashion photography demands an intimate understanding of each garment — how it moves, how it drapes, and what story it tells. Our team delivers imagery that builds emotional connection and drives purchase confidence.
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
                        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80" alt="Women's Fashion Catalog" />
                    </motion.div>
                </div>
            </section>

            {/* ─── CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Categories We Cover</h2>
                    <p>Complete Women's Fashion Production Studio</p>
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
                    <h2>The Women's Lookbook</h2>
                    <p>Premium Womenswear Showcases</p>
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
                    <p>From Garment Intake To Platform-Ready Assets</p>
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
                    <p>The Womenswear Photography Standard</p>
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

            {/* ─── ETHNIC WEAR BAND ─── */}
            <section className="service-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ethnic Wear Specialisation</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            India's largest and most specialised ethnic womenswear photography studio. We shoot sarees, lehengas, anarkalis, kurta sets and bridal collections — at scale, with precision, and with deep cultural understanding.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                ENQUIRE ABOUT ETHNIC SHOOT
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
                                Ready to elevate your<br />women's collection?
                            </h2>
                            <p>
                                Ship us your womenswear. We'll deliver imagery that tells your brand story, celebrates your designs and drives real sales.
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

export default Women;
