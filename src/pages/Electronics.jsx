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
    Cpu,
    Smartphone,
    Monitor,
    BatteryCharging,
    Maximize,
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

function Electronics() {
    const showcase = [
        { src: "/portfolio-watch.png", title: "Smart Wearables", category: "Wearables", size: "large" },
        { src: "/lifestyle-photography-hero.png", title: "Smart Home Hub", category: "IoT", size: "small" },
        { src: "/portfolio-jewelry.png", title: "Precision Components", category: "Microtech", size: "small" },
        { src: "/portfolio-sneakers.png", title: "Audio Engineering", category: "Audio", size: "medium" },
        { src: "/amazon-examples.png", title: "Portable Power", category: "Accessories", size: "medium" },
        { src: "/white-bg-hero.png", title: "Core Architecture", category: "Hardware", size: "large" },
    ];

    const stats = [
        { number: "400+", label: "Tech Brands" },
        { number: "2M+", label: "Details Captured" },
        { number: "4K", label: "Studio Standard" },
        { number: "48H", label: "Rapid Delivery" },
    ];

    const pillars = [
        {
            icon: <Cpu size={24} />,
            title: "Micro-Detail Precision",
            desc: "Using ultra-high resolution macro lenses to capture every circuit, port, and texture with microscopic clarity."
        },
        {
            icon: <Monitor size={24} />,
            title: "Reflection Mastery",
            desc: "Expert lighting techniques to control glare on screens, glass, and polished metal surfaces for a flawless premium finish."
        },
        {
            icon: <BatteryCharging size={24} />,
            title: "Functional Stills",
            desc: "We don't just shoot products; we showcase functionality—from glowing indicators to screen interfaces in crisp detail."
        }
    ];

    const ecosystem = [
        "Anti-glare screen photography",
        "Macro-level texture capturing",
        "Color-accurate hardware reproduction",
        "Clean matte & gloss finish control",
        "Functional indicator highlighting",
        "Exploded view storytelling stills",
        "Platform-ready tech specs imagery",
        "Multi-angle port & connector shots"
    ];

    const process = [
        { step: "01", title: "Static Discharge", desc: "Every device is handled with ESD-safe precautions and cleaned of micro-dust particles.", icon: <Zap size={24} /> },
        { step: "02", title: "Surface Polish", desc: "Our technicians use specialist solutions to remove fingerprints and micro-scratches from screens.", icon: <Smartphone size={24} /> },
        { step: "03", title: "Precision Rigging", desc: "Expert mounting for floating effects and perfectly symmetrical hardware angles.", icon: <Maximize size={24} /> },
        { step: "04", title: "Lighting Sculpt", desc: "Custom light paths designed to define silhouettes and highlight material engineering.", icon: <Camera size={24} /> },
        { step: "05", title: "Digital QC", desc: "Advanced retouching to ensure perfect symmetry and color consistency across the range.", icon: <Layers size={24} /> },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Cpu size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            ELECTRONICS & TECH STUDIO
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Complexity<br />Captured In<br />High Resolution
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Where engineering meets art. We provide high-precision visual documentation and cinematic branding for the world's most innovative tech products.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    START A PROJECT
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                TECH PORTFOLIO <ArrowRight size={16} />
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
                    <img src="/portfolio-watch.png" alt="Electronics Tech Photography" />
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
                        <span className="section-label-sm">PRECISION NARRATIVE</span>
                        <h2 className="service-section-title display-bold">High performance deserves high definition.</h2>
                        <p className="service-section-desc">
                            In the tech world, the details are the product. We specialize in highlighting the industrial design and engineering brilliance that sets your innovation apart from the noise.
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
                        <img src="/white-background-photography.png" alt="Electronics Workflow" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Tech Showreel</h2>
                    <p>Visualizing Innovation</p>
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
                    <h2>Engineering</h2>
                    <p>Designed For Modern Tech</p>
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
                    <h2>The Specification</h2>
                    <p>Our Precision Tech Workflow</p>
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
                                Ready to launch<br />your innovation?
                            </h2>
                            <p>
                                Join top-tier global tech brands that trust Prodshoot for their e-commerce and marketing visuals. Precision at scale.
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

export default Electronics;
