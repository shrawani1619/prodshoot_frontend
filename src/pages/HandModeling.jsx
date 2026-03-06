import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    Send,
    Phone,
    Camera,
    Hand,
    Gem,
    Watch,
    Smartphone,
    Palette,
    Sparkles,
    Heart
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

function HandModeling() {
    const features = [
        "Professional hand models — diverse skin tones",
        "Product-in-use demonstration shots",
        "Scale reference — show real-world product size",
        "Nail & skin prep for flawless hands",
        "Multiple hand positions & grip styles",
        "Both studio & lifestyle backgrounds",
        "Consistent lighting across full sets",
        "Retouching for seamless, editorial finish"
    ];

    const productTypes = [
        {
            icon: <Gem size={22} />,
            title: "Jewelry & Accessories",
            desc: "Rings, bracelets, necklaces, and earrings worn naturally — showing fit, sparkle, and scale on real skin.",
            tag: "JEWELRY"
        },
        {
            icon: <Sparkles size={22} />,
            title: "Beauty & Skincare",
            desc: "Creams, serums, and cosmetics held, applied, or dispensed — demonstrating texture, packaging, and usage.",
            tag: "BEAUTY"
        },
        {
            icon: <Smartphone size={22} />,
            title: "Tech & Gadgets",
            desc: "Phones, earbuds, smartwatches, and accessories held in-hand to show ergonomics, size, and real-world use.",
            tag: "ELECTRONICS"
        },
        {
            icon: <Watch size={22} />,
            title: "Watches & Wearables",
            desc: "On-wrist photography with styled hands, showing watch faces, bands, and fit on different wrist sizes.",
            tag: "WATCHES"
        },
        {
            icon: <Heart size={22} />,
            title: "Food & Beverages",
            desc: "Holding, pouring, tasting, or unwrapping food products — creating appetite appeal and human connection.",
            tag: "FOOD & DRINK"
        },
        {
            icon: <Palette size={22} />,
            title: "Stationery & Small Items",
            desc: "Pens, cards, notebooks, tools — anything that benefits from a hand providing scale and usage context.",
            tag: "LIFESTYLE"
        }
    ];


    const process = [
        { step: "01", title: "Brief & Casting", desc: "We discuss your product, audience, and vibe. Then we cast the right hand model — matching skin tone, nail style, and hand shape to your brand.", icon: <Camera size={24} /> },
        { step: "02", title: "Prep & Styling", desc: "Models undergo professional nail prep and skin care. Props, backgrounds, and lighting are set up to match the creative direction.", icon: <Sparkles size={24} /> },
        { step: "03", title: "The Shoot", desc: "Multiple angles, grip styles, and compositions are captured. We shoot both close-ups and wider contextual frames.", icon: <Hand size={24} /> },
        { step: "04", title: "Post-Production", desc: "Expert retouching smoothens skin, perfects nails, removes blemishes, and ensures the product is the hero of every frame.", icon: <Layers size={24} /> },
        { step: "05", title: "Deliver", desc: "Final images delivered in all required sizes and formats — marketplace-ready, social-ready, and print-ready.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "8,000+", label: "Hand Model Images" },
        { number: "50+", label: "Vetted Hand Models" },
        { number: "45%", label: "Engagement Increase" },
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
                            <Hand size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            HAND MODELING PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Hand Model<br />Photography That<br />Feels Real
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional hand models holding, wearing, and using your products — adding human connection, scale reference, and usage context that flat product shots simply can't deliver.
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
                    <img src="/portfolio-jewelry.png" alt="Hand modeling photography" />
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
                        <span className="section-label-sm">HUMAN TOUCH</span>
                        <h2 className="service-section-title display-bold">Products Come Alive<br />In Human Hands.</h2>
                        <p className="service-section-desc">
                            Shoppers want to imagine holding your product. Hand modeling bridges the gap between a photo and a purchase — adding context, scale, and emotional connection that drives conversions.
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
                        <img src="/portfolio-watch.png" alt="Hand modeling examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PRODUCT TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Product Types</h2>
                    <p>What We Shoot With Hand Models</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {productTypes.map((item, idx) => (
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
                    <p>From Casting To Final Image</p>
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
                    <h2>Tailored Production</h2>
                    <p>Hand Modeling Solutions Built For Brands</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Quotes for Your Campaign</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Hand modeling isn't just about hands; it's about the right match for your brand voice. From diverse skin tones to specialized grip styles, we cast hand models and design scenes that resonate with your specific audience. Request a custom quote for a bespoke production plan tailored to your SKU count and creative needs.
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

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>Hand Modeling Specialists</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Vetted Model Roster", desc: "50+ professional hand models with diverse skin tones, hand sizes, and nail styles — we match the right model to your brand." },
                        { icon: <Clock size={24} />, title: "Prep Included", desc: "Professional manicure, skin prep, and styling are included in every shoot — no extra charges, no surprises." },
                        { icon: <Star size={24} />, title: "45% More Engagement", desc: "Products shown in-hand consistently generate 45% more engagement and higher purchase intent than standalone shots." },
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
                                Add the human<br />touch to your products?
                            </h2>
                            <p>
                                Professional hand models, styled shoots, and premium retouching — delivered in 48 hours or less.
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

export default HandModeling;
