import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Camera,
    CheckCircle2,
    Package,
    Image,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    Send,
    Phone,
    Sparkles,
    Users,
    Home,
    Sun,
    Coffee,
    Shirt,
    TreePine
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

function LifestylePhotography() {
    const features = [
        "Real-world context & styled environments",
        "Professional models & hand talent",
        "Custom props, sets & backdrops",
        "Natural & artificial lighting mastery",
        "Brand-aligned color grading",
        "Multiple scene variations per product",
        "Social media optimized crops",
        "A+ Content & Enhanced Brand Content ready"
    ];

    const sceneTypes = [
        {
            icon: <Home size={22} />,
            title: "Indoor Lifestyle",
            desc: "Products styled in beautiful interior settings — kitchens, living rooms, bathrooms, desks — shot to feel aspirational yet relatable.",
            tag: "HOME & OFFICE"
        },
        {
            icon: <TreePine size={22} />,
            title: "Outdoor Lifestyle",
            desc: "Natural light photography in parks, streets, cafes, and urban environments that bring your product into the real world.",
            tag: "NATURE & URBAN"
        },
        {
            icon: <Users size={22} />,
            title: "Model Integration",
            desc: "Professional models using, wearing, or interacting with your products — creating authentic human connection.",
            tag: "WITH MODELS"
        },
        {
            icon: <Coffee size={22} />,
            title: "Flat Lay & Table Top",
            desc: "Curated overhead compositions with props and textures that tell a story about your product's world.",
            tag: "STYLED"
        },
        {
            icon: <Shirt size={22} />,
            title: "Fashion & Wearable",
            desc: "On-model fashion photography showing fit, fabric, and styling for apparel, accessories, and jewelry brands.",
            tag: "FASHION"
        },
        {
            icon: <Sun size={22} />,
            title: "Golden Hour & Moody",
            desc: "Warm, atmospheric shots during magic hour or in moody, dramatic lighting for brands that need editorial edge.",
            tag: "EDITORIAL"
        }
    ];


    const process = [
        { step: "01", title: "Brand Deep Dive", desc: "We study your brand identity, audience, and competitors. Who are you speaking to? What feeling should the images evoke?", icon: <Camera size={24} /> },
        { step: "02", title: "Concept & Planning", desc: "Moodboards, location scouting, model casting, prop sourcing. Every visual detail is planned before we pick up a camera.", icon: <Layers size={24} /> },
        { step: "03", title: "Shoot Day", desc: "Our team of photographers, stylists, and assistants execute the vision on set — adjusting in real-time for the best results.", icon: <Image size={24} /> },
        { step: "04", title: "Post-Production", desc: "Color grading, retouching, compositing, and cropping. We deliver polished images that feel editorial but convert like ads.", icon: <Sparkles size={24} /> },
        { step: "05", title: "Deliver & Optimize", desc: "Final images delivered in all sizes needed — hero banners, social carousels, A+ Content, email headers, and more.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "25,000+", label: "Lifestyle Images Shot" },
        { number: "60%", label: "Avg. Engagement Boost" },
        { number: "300+", label: "Brands Styled" },
        { number: "48H", label: "Standard Delivery" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Camera size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            LIFESTYLE PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Lifestyle Product<br />Photography That<br />Tells Your Story
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Products live in the real world — and that's where we photograph them. Context-rich, emotionally resonant lifestyle images that connect your product to your customer's aspirations.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Camera size={18} />
                                    BOOK A SHOOT
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
                    <img src="/lifestyle.png" alt="Lifestyle product photography" />
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
                        <span className="section-label-sm">CONTEXT IS EVERYTHING</span>
                        <h2 className="service-section-title display-bold">Your Product.<br />Their Dream Life.</h2>
                        <p className="service-section-desc">
                            White backgrounds show what a product looks like. Lifestyle photography shows how it feels. We create aspirational scenes that place your product in the world your customer wants to live in.
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
                        <img src="/portfolio-skincare.png" alt="Lifestyle photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SCENE TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Scene Types</h2>
                    <p>How We Bring Products To Life</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {sceneTypes.map((item, idx) => (
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
                    <p>From Brand Story To Visual Magic</p>
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
                    <h2>Styled Narratives</h2>
                    <p>Lifestyle Solutions Built For Brands</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Quotes for Your Story</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Lifestyle photography is about context. We don't believe in menu-style pricing for shoots that require models, locations, and bespoke sets. Every brand has a different story. Request a custom quote for a bespoke production plan tailored to your SKU count, location requirements, and creative vision.
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
                    <p>Lifestyle Shoots We've Done</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-skincare.png', '/portfolio-jewelry.png', '/portfolio-watch.png', '/portfolio-sneakers.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`Lifestyle photography sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>Lifestyle Photography Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Full Creative Team", desc: "Photographers, stylists, prop artists, and models — we assemble the perfect team for every shoot." },
                        { icon: <Clock size={24} />, title: "In-Studio & On-Location", desc: "Our 3,000 sq ft studio or any location of your choice — we bring the same quality everywhere." },
                        { icon: <Star size={24} />, title: "60% More Engagement", desc: "Lifestyle images generate 60% more engagement and higher time-on-page than standard product shots." },
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
                                Ready to tell your<br />product's story?
                            </h2>
                            <p>
                                Let's create lifestyle images that make your customers feel something. From concept to delivery — we handle everything.
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

export default LifestylePhotography;
