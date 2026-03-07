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

function MeeshoPhotography() {
    const features = [
        "Optimal product placement in frame",
        "Pure white background (RGB 255,255,255)",
        "Minimum 2-3 angles per product",
        "1000x1000px resolution for zoom",
        "No logos or stamps on images",
        "Vibrant color correction",
        "Ghost mannequin for apparel if needed",
        "Ready-to-upload JPEG files"
    ];

    const process = [
        { step: "01", title: "Ship Your Products", desc: "Send your inventory to our studio. We handle everything from unboxing to item tracking.", icon: <Package size={24} /> },
        { step: "02", title: "Styling & Setup", desc: "Our stylists prepare each product to look its best, following Meesho's clean aesthetic guidelines.", icon: <Camera size={24} /> },
        { step: "03", title: "High-Res Photography", desc: "We use professional-grade sensors and lighting to capture every detail clearly.", icon: <Image size={24} /> },
        { step: "04", title: "Expert Retouching", desc: "Background removal, color grading, and texture enhancement by our post-production team.", icon: <Layers size={24} /> },
        { step: "05", title: "Rapid Delivery", desc: "Final e-commerce assets delivered within 48 hours for immediate catalog upload.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "35,000+", label: "Meesho Listings Shot" },
        { number: "100%", label: "Guideline Compliance" },
        { number: "35%", label: "Avg. Sale Increase" },
        { number: "48H", label: "Standard Delivery" },
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
                            MEESHO PHOTOGRAPHY SERVICE
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Maximize Sales on<br />Meesho with Elite<br />Product Visuals
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Stop the scroll with professional Meesho-ready images. We specialize in high-volume, low-cost photography that doesn't compromise on quality, helping D2C brands dominate the Meesho marketplace.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Camera size={18} />
                                    GET A QUOTE
                                </motion.div>
                            </Link>
                            <a href="#custom-quote" className="cta-secondary-btn">
                                VIEW SERVICES <ArrowRight size={16} />
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
                    <img src="/lifestyle.png" alt="Meesho product photography studio" />
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
                        <span className="section-label-sm">CONVERSION FOCUSED</span>
                        <h2 className="service-section-title display-bold">Meesho-ready Catalogs in One Click</h2>
                        <p className="service-section-desc">
                            Meesho's specific image requirements for file size and background consistency are handled automatically by our team. We ensure your products are perfectly lit, accurately colored, and set on the standard pure white background.
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
                        <img src="/catalog.png" alt="Meesho product catalog" />
                    </motion.div>
                </div>
            </section>

            
            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Unboxing To Listing</p>
                </div>

                <div className="process-timeline">
                    {[
                        { step: "01", title: "Ship Your Products", desc: "Pack and ship your products to our studio. We provide pre-paid shipping labels for hassle-free delivery.", icon: <Package size={24} /> },
                        { step: "02", title: "We Plan the Shoot", desc: "Our team reviews marketplace guidelines and plans the perfect shot list for maximum listing performance.", icon: <Camera size={24} /> },
                        { step: "03", title: "Professional Shooting", desc: "Products are styled and photographed in our studio with calibrated lighting for perfect backgrounds.", icon: <Image size={24} /> },
                        { step: "04", title: "Expert Post-Production", desc: "Our retouchers color-correct, remove backgrounds, and optimize every image to exact specifications.", icon: <Layers size={24} /> },
                        { step: "05", title: "Delivery & Review", desc: "Receive your final images within 24-48 hours. Request unlimited revisions until you're 100% satisfied.", icon: <Zap size={24} /> },
                    ].map((step, idx) => (
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
                    <h2>Tailored Solutions</h2>
                    <p>Services Built For Your Brand</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Production for Every Seller</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We don't believe in one-size-fits-all pricing. Every brand has unique product complexities and listing goals. Whether you have 5 SKUs or 500, we provide a custom production plan that scales with your growth.
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

            {/* ─── EXAMPLE GALLERY ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Sample Work</h2>
                    <p>Listings We've Shot</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-sneakers.png', '/portfolio-skincare.png', '/portfolio-watch.png', '/portfolio-jewelry.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`Product sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Photography Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Marketplace Compliant", desc: "Our images pass compliance checks on the first try, every time. No listing suppressions." },
                        { icon: <Clock size={24} />, title: "Fast Turnaround", desc: "Need images fast? We offer priority delivery for time-sensitive launches." },
                        { icon: <Star size={24} />, title: "Conversion Focused", desc: "We don't just meet guidelines — we craft images designed to maximize click-through and conversion rates." },
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
                                Ready to dominate<br />your listings?
                            </h2>
                            <p>
                                Ship us your products. We'll deliver high-converting imagery that passes every guideline.
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

export default MeeshoPhotography;
