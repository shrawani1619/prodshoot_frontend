import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Camera,
    CheckCircle2,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    Send,
    Phone,
    Box,
    RotateCcw,
    Palette,
    Monitor,
    Lightbulb,
    Gem,
    Move3d
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

function ThreeDRenders() {
    const features = [
        "Photorealistic 3D product renders",
        "360° interactive spin views",
        "Exploded / cutaway views showing internals",
        "Custom materials, textures & finishes",
        "Any environment — studio, lifestyle, abstract",
        "Unlimited color & material variations",
        "No physical prototype needed",
        "Animation-ready 3D assets"
    ];

    const renderTypes = [
        {
            icon: <Box size={22} />,
            title: "Product Visualization",
            desc: "Photorealistic still renders that are indistinguishable from real photography — perfect for launches before production.",
            tag: "HERO RENDER"
        },
        {
            icon: <RotateCcw size={22} />,
            title: "360° Spin",
            desc: "Interactive 360-degree product spins that let customers examine every angle. Embedded directly on your product page.",
            tag: "INTERACTIVE"
        },
        {
            icon: <Move3d size={22} />,
            title: "Exploded Views",
            desc: "Show internal components, layers, and mechanisms with technical exploded-view renders that build trust and communicate quality.",
            tag: "TECHNICAL"
        },
        {
            icon: <Palette size={22} />,
            title: "Color & Material Variants",
            desc: "Generate every SKU color and material option from a single 3D model — no need to photograph each variation.",
            tag: "VARIANTS"
        },
        {
            icon: <Monitor size={22} />,
            title: "Lifestyle CGI Scenes",
            desc: "Place your 3D product in any virtual environment — living rooms, offices, outdoors — without a physical photoshoot.",
            tag: "CGI SCENES"
        },
        {
            icon: <Lightbulb size={22} />,
            title: "Product Animations",
            desc: "Short looping animations showing product features, assembly, or usage — ideal for social media and ads.",
            tag: "MOTION"
        }
    ];


    const process = [
        { step: "01", title: "Reference & Brief", desc: "Send us your product, CAD files, sketches, or even just photos. We'll discuss angles, materials, and the look you're going for.", icon: <Camera size={24} /> },
        { step: "02", title: "3D Modeling", desc: "Our artists build a precise 3D model of your product, matching every curve, edge, and proportion to the real thing.", icon: <Box size={24} /> },
        { step: "03", title: "Materials & Textures", desc: "We apply photorealistic materials — metals, plastics, glass, fabric, leather — with accurate reflections and surface detail.", icon: <Gem size={24} /> },
        { step: "04", title: "Lighting & Scene", desc: "Custom studio or environment lighting is set up to match your brand aesthetic, creating depth, shadows, and atmosphere.", icon: <Lightbulb size={24} /> },
        { step: "05", title: "Render & Deliver", desc: "Final renders are output at ultra-high resolution, color-graded, and delivered in all formats you need — ready to publish.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "5,000+", label: "Products Rendered" },
        { number: "∞", label: "Color Variants Possible" },
        { number: "0", label: "Physical Samples Needed" },
        { number: "3 Days", label: "Avg. Delivery" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Box size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            3D PRODUCT RENDERS
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Photorealistic 3D<br />Product Renders<br />That Convert
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            No physical prototype? No problem. We create photorealistic 3D renders that look indistinguishable from real photography — with infinite flexibility for angles, colors, and environments.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Box size={18} />
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
                    <img src="/portfolio-watch.png" alt="3D product render example" />
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
                        <span className="section-label-sm">BEYOND PHOTOGRAPHY</span>
                        <h2 className="service-section-title display-bold">Better Than a Photo.<br />More Flexible Too.</h2>
                        <p className="service-section-desc">
                            3D renders give you the fidelity of professional photography with the flexibility of digital. Change colors, materials, angles, or environments in minutes — without reshipping or reshooting.
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
                        <img src="/amazon-examples.png" alt="3D render examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── RENDER TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Render Types</h2>
                    <p>What We Can Create For You</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {renderTypes.map((item, idx) => (
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
                    <p>From Reference To Render</p>
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
                    <h2>Virtual Production</h2>
                    <p>3D Solutions Built For Brands</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Quotes for Your 3D Assets</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            3D rendering complexity varies by product geometry, material intricacy, and required environment detail. We don't believe in menu-style pricing for technical 3D visualization. Every model is a data-driven masterpiece. Request a custom quote for a bespoke production plan tailored to your technical specs and creative vision.
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

            {/* ─── SAMPLE GALLERY ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Sample Work</h2>
                    <p>3D Renders We've Created</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-watch.png', '/portfolio-sneakers.png', '/portfolio-skincare.png', '/portfolio-jewelry.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`3D render sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>3D Visualization Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "No Samples Needed", desc: "Send us CAD files, sketches, or even reference photos — we build accurate 3D models without needing a physical product." },
                        { icon: <Clock size={24} />, title: "Infinite Flexibility", desc: "Change colors, materials, angles, or backgrounds anytime. No reshooting, no reshipping — just a quick re-render." },
                        { icon: <Star size={24} />, title: "Pixel-Perfect Quality", desc: "Our renders are indistinguishable from real photography. Many clients mix 3D and photo — and no one can tell." },
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
                                Ready for renders that<br />look better than reality?
                            </h2>
                            <p>
                                Send us your product details and we'll create stunning 3D renders — no physical prototype required.
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

export default ThreeDRenders;
