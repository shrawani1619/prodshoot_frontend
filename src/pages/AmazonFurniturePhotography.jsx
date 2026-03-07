import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Camera,
    CheckCircle2,
    Package,
    Image,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    ArrowRight,
    Send,
    Phone
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

function AmazonFurniturePhotography() {
    const features = [
        "Large-format studio setups",
        "Multiple angle coverage (front, side, 45°)",
        "Amazon-compliant pure white backgrounds",
        "Texture macro shots of wood, fabric & metal",
        "Lifestyle room-set context images",
        "Scale visualization with common objects",
        "Assembly component photography",
        "Color-accurate finish representation"
    ];

    const process = [
        { step: "01", title: "Ship Your Furniture", desc: "Send us your furniture items. We handle everything from palletized shipping to professional assembly.", icon: <Package size={24} /> },
        { step: "02", title: "Assembly & Prep", desc: "Our team assembles and polishes every piece, ensuring it looks flawless and structurally perfect for the shoot.", icon: <Camera size={24} /> },
        { step: "03", title: "High-Angle Shooting", desc: "Using large-scale studio lighting, we capture the shape and scale of your furniture from the most flattering angles.", icon: <Image size={24} /> },
        { step: "04", title: "Detail Retouching", desc: "Our editors remove minor wood grain imperfections, smooth fabric wrinkles, and perfect the lighting.", icon: <Layers size={24} /> },
        { step: "05", title: "Marketplace Ready", desc: "Optimized, high-res images ready for Amazon's Home & Kitchen and Furniture categories.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "5,000+", label: "Furniture Pieces Shot" },
        { number: "15+", label: "Furniture Brands" },
        { number: "100%", label: "Category Compliance" },
        { number: "72H", label: "Furniture Turnaround" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Camera size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            AMAZON FURNITURE SPECIALISTS
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Amazon Furniture<br />Photography That<br />Shows Scale
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Furniture is about comfort and quality. We provide professional furniture photography that captures the scale, materials, and build quality of your pieces with stunning clarity.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Camera size={18} />
                                    START FURNITURE SHOOT
                                </motion.div>
                            </Link>
                            <a href="#custom-quote" className="cta-secondary-btn">
                                FURNITURE SERVICES <ArrowRight size={16} />
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
                    <img src="/hero.png" alt="Amazon furniture photography" />
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
                        <span className="section-label-sm">FURNITURE EXPERTISE</span>
                        <h2 className="service-section-title display-bold">High-End Real Estate For Your Listings</h2>
                        <p className="service-section-desc">
                            In the Furniture category, customers need to visualize pieces in their own space. We focus on wide-angle shots to show scale and macro shots to show finish, ensuring your customers understand exactly what they're buying.
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
                        <img src="/hero.png" alt="Amazon furniture collection" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Furniture Workflow</h2>
                    <p>Assembly To Listing Perfection</p>
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

            {/* ─── CUSTOM SOLUTIONS ─── */}
            <section className="service-section" id="custom-quote">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Furniture Solutions</h2>
                    <p>Visualizing Comfort & Quality</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Lifestyle Room Set Rendering</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We offer professional lifestyle room settings and virtual staging for furniture items, helping customers see how your products look in a real home environment without the cost of high-end set builds.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                REQUEST FURNITURE QUOTE
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>The Furniture Photography Standard</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Full Assembly Support", desc: "Our team handles complex assembly, so your furniture looks structurally perfect and showroom-ready." },
                        { icon: <Clock size={24} />, title: "Palletized Shipping Care", desc: "Large-scale logistics expertise to receive and handle bulk furniture shipments safely." },
                        { icon: <Star size={24} />, title: "Material Texture Focus", desc: "Specialized lighting for wood grains, metal finishes, and textile textures to show quality." },
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
                                Ready to scale your<br />furniture brand?
                            </h2>
                            <p>
                                Ship us your furniture pieces. We'll deliver Amazon-ready images that showcase quality, scale, and design.
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

export default AmazonFurniturePhotography;
