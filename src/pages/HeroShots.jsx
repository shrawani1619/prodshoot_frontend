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
    Focus,
    Palette,
    Crown,
    Flame,
    Eye
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

function HeroShots() {
    const features = [
        "Dramatic studio lighting with custom setups",
        "Creative angles that highlight product form",
        "Mood-driven color grading & toning",
        "Smoke, splashes, reflections & special effects",
        "Props & styled compositions",
        "High-resolution for billboards & large format",
        "Multiple crop ratios for web, social & print",
        "Brand-aligned visual storytelling"
    ];

    const shotStyles = [
        {
            icon: <Flame size={22} />,
            title: "Dynamic Action Shots",
            desc: "Capture energy and movement — splashes, explosions of powder, frozen motion — that stop scrollers in their tracks.",
            tag: "HIGH IMPACT"
        },
        {
            icon: <Crown size={22} />,
            title: "Luxury & Premium",
            desc: "Moody, editorial-grade photos with dramatic lighting, reflective surfaces, and textures that scream high-end.",
            tag: "EDITORIAL"
        },
        {
            icon: <Sparkles size={22} />,
            title: "Creative Concepts",
            desc: "Unique, art-directed compositions with props, colors, and themes tailored to your brand personality.",
            tag: "BESPOKE"
        },
        {
            icon: <Focus size={22} />,
            title: "Macro & Detail",
            desc: "Ultra close-up shots revealing textures, craftsmanship, and quality details invisible to the naked eye.",
            tag: "DETAIL"
        },
        {
            icon: <Eye size={22} />,
            title: "Flat Lay Compositions",
            desc: "Beautifully arranged birds-eye compositions perfect for social media, brand pages, and email campaigns.",
            tag: "SOCIAL READY"
        },
        {
            icon: <Palette size={22} />,
            title: "Color Story",
            desc: "Monochromatic or brand-palette driven images where color is the hero — bold, vibrant, and unforgettable.",
            tag: "BRANDING"
        }
    ];


    const process = [
        { step: "01", title: "Discovery Call", desc: "We discuss your brand, target audience, and the emotional impact you want. We study your competitors and identify what will stand out.", icon: <Camera size={24} /> },
        { step: "02", title: "Moodboard & Direction", desc: "Our creative team builds a detailed moodboard with references, color palettes, lighting styles, and composition ideas for your approval.", icon: <Palette size={24} /> },
        { step: "03", title: "Styled & Set", desc: "We source props, build the set, and arrange your products. Every detail — from background texture to prop placement — is intentional.", icon: <Layers size={24} /> },
        { step: "04", title: "The Shoot", desc: "Using precision lighting rigs and high-end equipment, we capture your product from angles designed to evoke desire and attention.", icon: <Image size={24} /> },
        { step: "05", title: "Post & Deliver", desc: "Expert retouching, color grading, and any VFX work. Final images are delivered in all required formats and sizes.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "10,000+", label: "Hero Images Created" },
        { number: "3X", label: "Avg. CTR Increase" },
        { number: "200+", label: "Brands Elevated" },
        { number: "24H", label: "Rush Available" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Sparkles size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            HERO SHOT PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Product Hero<br />Shots That<br />Stop The Scroll
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Dramatic, art-directed product photography designed to be the centerpiece of your brand. These aren't just photos — they're visual statements that command attention and drive desire.
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
                    <img src="/portfolio-watch.png" alt="Hero shot product photography" />
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

            {/* ─── WHAT MAKES A HERO SHOT ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">SCROLL-STOPPING</span>
                        <h2 className="service-section-title display-bold">Not Just a Photo.<br />A Visual Statement.</h2>
                        <p className="service-section-desc">
                            Hero shots are the crown jewel of your product imagery. They're the first image on your homepage, the banner of your ad campaign, and the thumbnail that gets the click. We craft each one with intention.
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
                        <img src="/portfolio-jewelry.png" alt="Hero shot examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SHOT STYLES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Shot Styles</h2>
                    <p>Choose Your Visual Impact</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {shotStyles.map((item, idx) => (
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
                    <p>From Concept To Masterpiece</p>
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
                    <h2>Bespoke Production</h2>
                    <p>Creative Solutions Built For Your Brand</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Quotes for Your Campaign</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Hero shots are high-art for brands. We don't believe in menu-style pricing for lighting-intensive, creative-heavy production. Every shoot is a unique collaboration. Request a custom quote for a bespoke production plan tailored to your SKU count, prop requirements, and creative vision.
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
                    <p>Hero Shots We've Created</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-watch.png', '/portfolio-jewelry.png', '/portfolio-skincare.png', '/portfolio-sneakers.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`Hero shot sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>Hero Shot Specialists</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Art Direction Included", desc: "Every hero shoot includes a dedicated creative director who builds moodboards and guides the entire vision." },
                        { icon: <Clock size={24} />, title: "Studio-Grade Equipment", desc: "Phase One cameras, Broncolor lighting, custom rigs — we use the same gear as major advertising agencies." },
                        { icon: <Star size={24} />, title: "Proven Performance", desc: "Our hero shots deliver an average 3X increase in click-through rates for our clients' ad campaigns." },
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
                                Ready for images that<br />demand attention?
                            </h2>
                            <p>
                                Let's create hero shots that become the face of your brand. From concept to delivery in as fast as 24 hours.
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

export default HeroShots;
