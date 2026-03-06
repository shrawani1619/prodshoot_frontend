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
    BarChart3,
    FileText,
    Type,
    PenTool,
    Layout,
    Target,
    Ruler,
    ListChecks
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

function InfographicDesign() {
    const features = [
        "Amazon & Flipkart compliant infographic images",
        "Feature callouts with icons & text overlays",
        "Comparison charts & size guides",
        "Ingredient / material breakdowns",
        "Before & after visuals",
        "Brand-consistent typography & colors",
        "Bilingual text support (English + Hindi)",
        "A+ Content / Enhanced Brand Content ready"
    ];

    const infographicTypes = [
        {
            icon: <ListChecks size={22} />,
            title: "Feature Callouts",
            desc: "Highlight key product features, specs, and USPs with clean icons, arrows, and text placed directly on the product image.",
            tag: "MOST POPULAR"
        },
        {
            icon: <BarChart3 size={22} />,
            title: "Comparison Charts",
            desc: "Side-by-side comparisons against competitors or between your own product variants — a proven conversion booster.",
            tag: "CONVERSION"
        },
        {
            icon: <Ruler size={22} />,
            title: "Size & Dimension Guides",
            desc: "Clear dimensional graphics showing actual sizes, helping reduce return rates and buyer confusion.",
            tag: "REDUCES RETURNS"
        },
        {
            icon: <Layout size={22} />,
            title: "A+ Content Modules",
            desc: "Full-width A+ Content and Enhanced Brand Content layouts with mixed imagery, text, and brand storytelling.",
            tag: "BRAND STORY"
        },
        {
            icon: <PenTool size={22} />,
            title: "Ingredient / Material Cards",
            desc: "Visual breakdowns of what goes into your product — ingredients, materials, certifications — presented beautifully.",
            tag: "TRUST BUILDER"
        },
        {
            icon: <Target size={22} />,
            title: "How-To / Usage Guides",
            desc: "Step-by-step visual instructions showing how to use, assemble, or care for your product. Reduces support queries.",
            tag: "EDUCATIONAL"
        }
    ];


    const process = [
        { step: "01", title: "Product & Brief", desc: "Share your product details, USPs, target audience, and any existing brand guidelines. We study your listing and competitors.", icon: <FileText size={24} /> },
        { step: "02", title: "Content Strategy", desc: "We plan which infographic types will drive the most conversions for your product — feature callouts, comparisons, or how-tos.", icon: <Target size={24} /> },
        { step: "03", title: "Design & Layout", desc: "Our designers create polished layouts with your product photos, icons, text, and brand elements — optimized for mobile viewing.", icon: <PenTool size={24} /> },
        { step: "04", title: "Review & Refine", desc: "You review the designs, suggest edits, and we iterate until every detail is perfect. Unlimited revisions on premium packages.", icon: <Layers size={24} /> },
        { step: "05", title: "Deliver & Upload", desc: "Final files are delivered in marketplace-compliant sizes and formats, ready to upload directly to your product listing.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "15,000+", label: "Infographics Designed" },
        { number: "35%", label: "Avg. Conversion Lift" },
        { number: "400+", label: "Brands Served" },
        { number: "24H", label: "Rush Delivery" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <BarChart3 size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            INFOGRAPHIC DESIGN
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Infographic<br />Images That<br />Sell For You
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Feature callouts, comparison charts, size guides, and A+ Content — we design infographic images that educate shoppers and turn browsers into buyers on every marketplace.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <PenTool size={18} />
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
                    <img src="/amazon-examples.png" alt="Infographic design examples" />
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
                        <h2 className="service-section-title display-bold">Images That Educate<br />And Convert.</h2>
                        <p className="service-section-desc">
                            Shoppers read infographics more than descriptions. Our designs surface your product's key selling points in a visual format that's instant to understand — even on a phone screen.
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
                        <img src="/portfolio-skincare.png" alt="Infographic design examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── INFOGRAPHIC TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Infographic Types</h2>
                    <p>Designs That Drive Results</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {infographicTypes.map((item, idx) => (
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
                    <p>From Brief To Listing-Ready</p>
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
                    <h2>Performance Content</h2>
                    <p>Design Solutions Built For Conversions</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Infographics for Your Listing</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Effective infographic design requires a deep understanding of your product's unique value props and buyer psychology. We design bespoke feature callouts, comparison charts, and size guides tailored to your brand voice. Request a custom quote for a performance-driven design plan that scales with your SKU count.
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
                    <p>Infographic Design Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Marketplace Experts", desc: "We know Amazon, Flipkart, Myntra, and Nykaa guidelines inside out. Every infographic passes compliance first try." },
                        { icon: <Clock size={24} />, title: "Mobile-First Design", desc: "70%+ of shoppers browse on mobile. Every infographic is designed to be legible and impactful on small screens." },
                        { icon: <Star size={24} />, title: "Proven 35% Conversion Lift", desc: "Our infographics consistently deliver a 35% average increase in conversion rates across product categories." },
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
                                Ready to boost your<br />listing conversions?
                            </h2>
                            <p>
                                Let us design infographic images that educate shoppers and drive sales — delivered in 24-48 hours.
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

export default InfographicDesign;
