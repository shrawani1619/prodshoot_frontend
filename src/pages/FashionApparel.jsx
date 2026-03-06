import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Globe,
    Sparkles,
    Send,
    Phone,
    TrendingUp,
    Scan,
    Box,
    CheckCircle2,
    Zap,
    Camera,
    Shield,
    Clock,
    Star,
    ArrowUpRight,
    Layers,
    Package,
    Image as LucideImage,
    Shirt,
    Scissors,
    UserCircle2
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

function FashionApparel() {
    const showcase = [
        { src: "/portfolio-sneakers.png", title: "Activewear Performance", category: "Footwear", size: "large" },
        { src: "/ghost-examples.png", title: "Ghost Mannequin Mastery", category: "Ghost Mannequin", size: "small" },
        { src: "/fashion-lifestyle.png", title: "Editorial Narrative", category: "Lifestyle", size: "small" },
        { src: "/accessories.png", title: "Luxury Handbags", category: "Accessories", size: "medium" },
        { src: "/portfolio-jewelry.png", title: "Intricate Details", category: "Jewelry", size: "medium" },
        { src: "/lifestyle.png", title: "Brand Campaign", category: "Campaign", size: "large" },
    ];

    const stats = [
        { number: "300+", label: "Fashion Brands" },
        { number: "1M+", label: "Garments Captured" },
        { number: "35%", label: "Return Rate Drop" },
        { number: "48H", label: "Studio SLA" },
    ];

    const pillars = [
        {
            icon: <Shirt size={24} />,
            title: "Fit & Drape Physics",
            desc: "We understand garments. Our stylists ensure every piece falls perfectly, highlighting fabric texture and silhouette accuracy."
        },
        {
            icon: <Scissors size={24} />,
            title: "Ghost Mannequin Perfection",
            desc: "3D invisible mannequin effects that give your clothes form and volume without the distraction of a physical model."
        },
        {
            icon: <UserCircle2 size={24} />,
            title: "Casted Model Casting",
            desc: "Access to our network of professional models. We handle casting, coordination, and styling for full-lookbook shoots."
        }
    ];

    const ecosystem = [
        "Ghost Mannequin (Invisible Mannequin)",
        "Flat Lay & Pin-house photography",
        "High-end fashion retouching",
        "Fabric texture & color matching",
        "Platform-ready (Myntra, Ajio, Amazon)",
        "Lookbook & Editorial campaigns",
        "360° product spins for apparel",
        "Steaming & garment prep included"
    ];

    const process = [
        { step: "01", title: "Garment Log", desc: "Items are received, cataloged, and inspected for any imperfections before prep.", icon: <Package size={24} /> },
        { step: "02", title: "Steam & Prep", desc: "Our on-site stylists steam every garment to remove wrinkles and ensure a showroom-finish.", icon: <Scissors size={24} /> },
        { step: "03", title: "The Shoot", desc: "Expert lighting setups tailored to specific fabrics—from silk sheens to matte cottons.", icon: <Camera size={24} /> },
        { step: "04", title: "Post-Production", desc: "Advanced retouching including shape correction, color grading, and skin work.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "High-res assets delivered in multiple crops for web, social, and marketplace use.", icon: <Zap size={24} /> },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Globe size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            FASHION & APPAREL STUDIO
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Visuals That<br />Wear The<br />Brand DNA
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From high-definition ghost mannequins to cinematic lookbooks. We engineer desire through textile-focused storytelling and precision fit imagery.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    START YOUR SEASON
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
                    <img src="/lifestyle.png" alt="Fashion Apparel Photography" />
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

            {/* ─── PHILOSOPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">EDITORIAL STANDARDS</span>
                        <h2 className="service-section-title display-bold">Reducing returns through visual accuracy.</h2>
                        <p className="service-section-desc">
                            The #1 reason for fashion returns is poor fit representation. We use studio-grade draping techniques to ensure the customer sees exactly how the garment wears in real life.
                        </p>
                        <ul className="feature-checklist">
                            {ecosystem.map((f, i) => (
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
                        <img src="/catalog.png" alt="Fashion Catalog Workflow" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Lookbook</h2>
                    <p>High-End Apparel Showcases</p>
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

            {/* ─── PILLARS (WHY US) ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Expertise</h2>
                    <p>Tailored For Fashion Brands</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {pillars.map((item, idx) => (
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

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Runaway</h2>
                    <p>Our Fashion Content Engine</p>
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
                                Ready for your<br />next collection?
                            </h2>
                            <p>
                                Join top-tier fashion brands that trust Prodshoot for their e-commerce and editorial assets. Fast, scalable, and stunning.
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

export default FashionApparel;
