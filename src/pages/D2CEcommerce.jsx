import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    Image as LucideImage
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

function D2CEcommerce() {
    const showcase = [
        { src: "/portfolio-sneakers.png", title: "Premium Footwear", category: "Apparel", size: "large" },
        { src: "/portfolio-skincare.png", title: "Organic Beauty", category: "Skincare", size: "small" },
        { src: "/portfolio-watch.png", title: "Luxury Timepieces", category: "Accessories", size: "small" },
        { src: "/catalog.png", title: "E-comm Catalog", category: "Catalog", size: "medium" },
        { src: "/portfolio-jewelry.png", title: "Fine Jewelry", category: "Accessories", size: "medium" },
        { src: "/lifestyle.png", title: "Brand Narrative", category: "Lifestyle", size: "large" },
    ];

    const stats = [
        { number: "500+", label: "D2C Brands Served" },
        { number: "2M+", label: "Images Delivered" },
        { number: "40%", label: "Conversion Lift" },
        { number: "48H", label: "Studio SLA" },
    ];

    const pillars = [
        {
            icon: <TrendingUp size={24} />,
            title: "Conversion Engineering",
            desc: "Every pixel is placed with intent. We don't just shoot products; we design visual systems that drive clicks and sales."
        },
        {
            icon: <Scan size={24} />,
            title: "Marketplace Compliance",
            desc: "Native optimization for Amazon, Shopify, Nykaa & more. We know every rule, so your listings never get suppressed."
        },
        {
            icon: <Box size={24} />,
            title: "Rapid Content Engine",
            desc: "Our 'Ship-to-Shoot' workflow delivers sales-ready assets in 48 hours. Scale your catalogue at the speed of social commerce."
        }
    ];

    const ecosystem = [
        "Amazon A+ Content compliant",
        "Nykaa & Myntra marketplace ready",
        "Optimized for Shopify & WooCommerce",
        "Social-first crops for Instagram & Meta",
        "High-res output for print & outdoor",
        "Uniform lighting for brand consistency",
        "Bulk SKU processing efficiency",
        "Conversion-tested compositions"
    ];

    const process = [
        { step: "01", title: "Ship Your Products", desc: "Send your entire SKU range to our central studio. We catalog and prep items for shooting.", icon: <Package size={24} /> },
        { step: "02", title: "Creative Blueprint", desc: "We align with your brand guidelines to ensure every shot matches your brand's unique visual DNA.", icon: <Camera size={24} /> },
        { step: "03", title: "Production", desc: "Our specialized ecommerce teams shoot catalog, lifestyle, and hero shots simultaneously.", icon: <LucideImage size={24} /> },
        { step: "04", title: "Post-Production", desc: "Automated and manual QC ensures pixel-perfect retouching and compliance with all channel rules.", icon: <Layers size={24} /> },
        { step: "05", title: "Go Live", desc: "Download platform-optimized assets within 48 hours and start scaling your D2C growth.", icon: <Zap size={24} /> },
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
                            THE D2C CONTENT ENGINE
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Powering The Vision<br />Of Modern D2C<br />E-Commerce
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Visuals that speak louder than words. We create the visual infrastructure for the world's most ambitious brands, engineering desire through cinematic product storytelling.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    START GROWING
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                VIEW SHOWCASE <ArrowRight size={16} />
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
                    <img src="/hero.png" alt="D2C Product Photography" />
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

            {/* ─── MANIFESTO ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">OUR PHILOSOPHY</span>
                        <h2 className="service-section-title display-bold">In the economy of attention, clarity is the ultimate luxury.</h2>
                        <p className="service-section-desc">
                            We don't just capture products; we immortalize them. In the fast-paced world of digital commerce, your visuals are your first, and often only, chance to make a connection. We ensure it's unforgettable.
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
                        <img src="/amazon-examples.png" alt="D2C E-commerce ecosystem" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Results</h2>
                    <p>Driving Growth For Industry Leaders</p>
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
                    <h2>The Pillars</h2>
                    <p>Why D2C Leaders Choose Us</p>
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
                    <h2>The Engine</h2>
                    <p>Our Native D2C Workflow</p>
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
                                Ready to scale<br />your D2C brand?
                            </h2>
                            <p>
                                Join 500+ brands that use Prodshoot as their off-site creative department. High-converting assets, delivered at scale.
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

export default D2CEcommerce;
