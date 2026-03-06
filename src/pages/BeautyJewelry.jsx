import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Globe,
    Sparkles,
    Send,
    Phone,
    CheckCircle2,
    Zap,
    Camera,
    ArrowUpRight,
    Layers,
    Package,
    Gem,
    Stars,
    Droplets,
    Eye,
    Maximize2,
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

function BeautyJewelry() {
    const showcase = [
        { src: "/portfolio-jewelry.png", title: "Luxury Diamond Suite", category: "Jewelry", size: "large" },
        { src: "/lifestyle-photography-hero.png", title: "Serum Texture Study", category: "Beauty", size: "small" },
        { src: "/amazon-examples.png", title: "Organic Skincare Line", category: "Skincare", size: "small" },
        { src: "/portfolio-watch.png", title: "Heritage Chronograph", category: "Fine Watches", size: "medium" },
        { src: "/lifestyle.png", title: "Golden Hour Glow", category: "Campaign", size: "medium" },
        { src: "/fashion-lifestyle.png", title: "The Royal Collection", category: "Luxury", size: "large" },
    ];

    const stats = [
        { number: "250+", label: "Luxury Brands" },
        { number: "5M+", label: "Sparkles Captured" },
        { number: "100%", label: "Detail Precision" },
        { number: "48H", label: "Studio SLA" },
    ];

    const pillars = [
        {
            icon: <Gem size={24} />,
            title: "Macro-Jewelry Optics",
            desc: "Bespoke macro setups that capture the internal fire of gemstones and the microscopic hallmarks of fine metalwork."
        },
        {
            icon: <Droplets size={24} />,
            title: "Texture Swatches",
            desc: "Cinematic capture of creams, oils, and powders. We showcase the viscosity and finish of beauty products with tactile realism."
        },
        {
            icon: <Stars size={24} />,
            title: "Spectral Lighting",
            desc: "Sophisticated light sculpting designed to create 'star-burst' effects on diamonds and a flawless glow on cosmetic packaging."
        }
    ];

    const ecosystem = [
        "High-definition gemstone macro shots",
        "Cosmetic texture & smear photography",
        "Perfect skin-tone model coordination",
        "Anti-reflection metal polishing",
        "Focus stacking for edge-to-edge sharpness",
        "Luxury lifestyle set design",
        "Platform-ready beauty assets",
        "Watch & jewelry movement video stills"
    ];

    const process = [
        { step: "01", title: "Sonic Cleaning", desc: "Every piece of jewelry is ultrasonically cleaned to ensure zero dust or smudge interference.", icon: <Zap size={24} /> },
        { step: "02", title: "Texture Prep", desc: "Beauty products are swatched and styled using professional techniques to ensure perfect texture display.", icon: <Droplets size={24} /> },
        { step: "03", title: "Light Sculpting", desc: "Bespoke lighting paths created for every stone and surface to maximize brilliance.", icon: <Camera size={24} /> },
        { step: "04", title: "Luxe Retouching", desc: "Precision retouching for metal smoothing, stone clarity, and skin perfection.", icon: <Layers size={24} /> },
        { step: "05", title: "Asset Delivery", desc: "Premium, high-res delivery in multiple formats for web, social, and print campaigns.", icon: <Stars size={24} /> },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Gem size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            BEAUTY & JEWELRY ATELIER
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            The Alchemy<br />Of Light<br />And Luxury
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From the microscopic brilliance of a diamond to the silky texture of a luxury serum. We create evocative visuals that define the essence of prestige.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    START YOUR CAMPAIGN
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                VIEW ATELIER <ArrowRight size={16} />
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
                    <img src="/portfolio-jewelry.png" alt="Beauty & Jewelry Photography" />
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
                        <span className="section-label-sm">PRESTIGE STANDARDS</span>
                        <h2 className="service-section-title display-bold">Crafting desire through precision optics.</h2>
                        <p className="service-section-desc">
                            In luxury, the infinitesimal matters. We utilize focus-stacking and bespoke light polarization to ensure every facet of gems and every shimmer of cosmetics is captured with absolute fidelity.
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
                        <img src="/lifestyle-photography-hero.png" alt="Beauty Workflow" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Gallery</h2>
                    <p>Luxury Visual Documentation</p>
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
                    <h2>Pillars of Luxury</h2>
                    <p>Techniques from the World's Best</p>
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
                    <h2>The Preparation</h2>
                    <p>Our Precision Luxury Workflow</p>
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
                                Elevate Your<br />Prestige Presence
                            </h2>
                            <p>
                                Join elite beauty and jewelry brands that trust Prodshoot for their most critical marketing and e-commerce assets. Perfect visuals, delivered.
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

export default BeautyJewelry;
