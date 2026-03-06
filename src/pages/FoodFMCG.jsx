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
    Utensils,
    Coffee,
    Droplet,
    Leaf,
    ThermometerSun,
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

function FoodFMCG() {
    const showcase = [
        { src: "/catalog.png", title: "Gourmet Beverage Line", category: "Beverages", size: "large" },
        { src: "/lifestyle.png", title: "Organic Health Snacks", category: "FMCG", size: "small" },
        { src: "/portfolio-jewelry.png", title: "Premium Chocolate Wrap", category: "Packaging", size: "small" },
        { src: "/amazon-examples.png", title: "Kitchen Essentials", category: "Catalog", size: "medium" },
        { src: "/fashion-lifestyle.png", title: "The Breakfast Series", category: "Campaign", size: "medium" },
        { src: "/lifestyle-photography-hero.png", title: "Culinary Narrative", category: "Commercial", size: "large" },
    ];

    const stats = [
        { number: "200+", label: "FMCG Brands" },
        { number: "15k+", label: "SKUs Shot" },
        { number: "100%", label: "FDA/FSSAI Clean" },
        { number: "24H", label: "Express Delivery" },
    ];

    const pillars = [
        {
            icon: <Utensils size={24} />,
            title: "Pro Food Styling",
            desc: "On-site food stylists who understand the chemistry of appetite. We make products look fresh, juicy, and irresistible."
        },
        {
            icon: <Droplet size={24} />,
            title: "Texture & Detail",
            desc: "Macro-level detail that captures every sprinkle, condensation drop, and crisp edge to evoke sensory appeal."
        },
        {
            icon: <ThermometerSun size={24} />,
            title: "Freshness Control",
            desc: "High-speed flashes and temperature-controlled setups to preserve the integrity of perishable products during the shoot."
        }
    ];

    const ecosystem = [
        "Color-accurate food reproduction",
        "Packaging texture & matte/gloss control",
        "Appetite-driven lighting setups",
        "Shadow & highlight sculpting",
        "Nutritional label legibility focus",
        "Bundle & group-shot arrangements",
        "Clean white-background catalogs",
        "Social-media ready flat lays"
    ];

    const process = [
        { step: "01", title: "Product Intake", desc: "Batch verification and expiration check to ensure only the freshest samples reach the lens.", icon: <Package size={24} /> },
        { step: "02", title: "Styling Prep", desc: "Stylists arrange products to showcase best angles, ingredients, and packaging highlights.", icon: <Utensils size={24} /> },
        { step: "03", title: "Master Lighting", desc: "Bespoke lighting to enhance texture—whether it's the shine of oil or the matte of flour.", icon: <Camera size={24} /> },
        { step: "04", title: "Clean Retouch", desc: "Imperfection removal while maintaining natural food characteristics for organic appeal.", icon: <Layers size={24} /> },
        { step: "05", title: "Batch Output", desc: "Mass-production of assets for entire SKU ranges with consistent color and angle.", icon: <Zap size={24} /> },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Coffee size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            FOOD & FMCG CREATIVE STUDIO
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Visuals That<br />Trigger Your<br />Taste Buds
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Precision lighting meets appetite appeal. We transform everyday consumer goods and gourmet products into high-conversion digital experiences.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    START A BATCH
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                VIEW CATALOG <ArrowRight size={16} />
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
                    <img src="/lifestyle-photography-hero.png" alt="Food & FMCG Product Photography" />
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
                        <span className="section-label-sm">SENSORY BRANDING</span>
                        <h2 className="service-section-title display-bold">In the digital shelf, appeal is everything.</h2>
                        <p className="service-section-desc">
                            We don't just take pictures; we capture the essence of a brand's flavor profile. From the matte texture of artisanal packaging to the crisp snap of a snack, we make it felt.
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
                        <img src="/white-bg-hero.png" alt="Food Catalog Workflow" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Pantry</h2>
                    <p>FMCG Success Stories</p>
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
                    <h2>The Secret Sauce</h2>
                    <p>Why FMCG Giants Choose Us</p>
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
                    <h2>The Production Line</h2>
                    <p>Our FMCG Content Workflow</p>
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
                                Hungry for better<br />brand visuals?
                            </h2>
                            <p>
                                Join the ranks of leading FMCG and food brands that scale their digital presence with Prodshoot's high-speed, high-impact studio.
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

export default FoodFMCG;
