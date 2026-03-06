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
    Shirt,
    Scissors,
    Eye,
    Maximize2,
    RotateCcw,
    Sparkles,
    UserX
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

function GhostMannequin() {
    const features = [
        "Invisible mannequin / neck joint compositing",
        "3D hollow-man effect for garments",
        "Inside label & tag visibility",
        "Front, back, and side views",
        "Flat lay & folded alternatives included",
        "Color-accurate fabric reproduction",
        "Wrinkle-free steaming & prep",
        "Batch consistency across full collections"
    ];

    const garmentTypes = [
        {
            icon: <Shirt size={22} />,
            title: "T-Shirts & Tops",
            desc: "Crew necks, V-necks, polo shirts, blouses — photographed to show shape, drape, and neckline detail on an invisible form.",
            tag: "TOPS"
        },
        {
            icon: <Scissors size={22} />,
            title: "Jackets & Outerwear",
            desc: "Blazers, coats, hoodies, and puffer jackets with interior lining visible — showcasing structure and fit.",
            tag: "OUTERWEAR"
        },
        {
            icon: <Maximize2 size={22} />,
            title: "Dresses & Gowns",
            desc: "Full-length dresses, cocktail dresses, and gowns displayed on invisible mannequins showing silhouette and drape.",
            tag: "DRESSES"
        },
        {
            icon: <Eye size={22} />,
            title: "Trousers & Bottoms",
            desc: "Jeans, trousers, shorts, and skirts with waistband detail, pocket styling, and natural fall visible.",
            tag: "BOTTOMS"
        },
        {
            icon: <RotateCcw size={22} />,
            title: "Activewear & Sports",
            desc: "Performance fabrics, sports bras, leggings, and gym wear that need to show stretch, fit, and material quality.",
            tag: "ACTIVEWEAR"
        },
        {
            icon: <Sparkles size={22} />,
            title: "Lingerie & Swimwear",
            desc: "Delicate fabrics photographed with care — showing construction, straps, and details without a visible mannequin.",
            tag: "DELICATES"
        }
    ];


    const process = [
        { step: "01", title: "Ship Your Garments", desc: "Send your garments to our studio. We provide pre-paid shipping labels and handle everything with care — wrinkle-free guarantee.", icon: <Camera size={24} /> },
        { step: "02", title: "Steam & Prep", desc: "Every garment is professionally steamed, lint-rolled, and styled on our mannequins to ensure a crisp, wrinkle-free appearance.", icon: <Sparkles size={24} /> },
        { step: "03", title: "Mannequin Shoot", desc: "We photograph each garment on our adjustable mannequins from multiple angles — front, back, inside-out for the neck joint effect.", icon: <Shirt size={24} /> },
        { step: "04", title: "Ghost Compositing", desc: "Our retouchers remove the mannequin, composite the interior view, and create the seamless invisible model effect.", icon: <Layers size={24} /> },
        { step: "05", title: "Deliver", desc: "Final images with pure white background, consistent sizing, and marketplace-ready formatting — delivered in 48 hours.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "30,000+", label: "Garments Photographed" },
        { number: "100%", label: "Mannequin Removal" },
        { number: "200+", label: "Fashion Brands" },
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
                            <UserX size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            GHOST MANNEQUIN PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Ghost Mannequin<br />Photography For<br />Fashion Brands
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional invisible mannequin photography that shows your garments' shape, fit, and construction — without any visible mannequin. The industry standard for apparel e-commerce.
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
                    <img src="/portfolio-sneakers.png" alt="Ghost mannequin photography" />
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
                        <span className="section-label-sm">INVISIBLE MANNEQUIN</span>
                        <h2 className="service-section-title display-bold">Show The Fit.<br />Hide The Mannequin.</h2>
                        <p className="service-section-desc">
                            Ghost mannequin (hollow-man) photography gives your garments a 3D, worn shape while keeping the focus entirely on the clothing. We shoot, composite, and deliver images that make your apparel look its absolute best.
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
                        <img src="/amazon-examples.png" alt="Ghost mannequin examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── GARMENT TYPES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Garment Types</h2>
                    <p>What We Shoot On Ghost Mannequins</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {garmentTypes.map((item, idx) => (
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
                    <p>From Garment To Invisible Model</p>
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
                    <p>Apparel Solutions Built For Brands</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Quotes for Your Collection</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            A high-end fashion collection requires high-end technical execution. We don't believe in standard pricing for garments with complex textures and fits. Whether it's a single masterpiece or a thousand-piece seasonal range, we provide custom pricing that fits your project's technical scope and volume.
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
                    <p>Ghost Mannequin Specialists</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Seamless Compositing", desc: "Our retouchers specialize in neck-joint compositing and invisible mannequin removal — pixel-perfect every time." },
                        { icon: <Clock size={24} />, title: "Volume Ready", desc: "We handle 20 to 2,000 garments per batch with consistent quality. Perfect for seasonal launches and full catalog shoots." },
                        { icon: <Star size={24} />, title: "Fashion Industry Trusted", desc: "200+ fashion brands rely on us for their apparel photography — from D2C startups to established fashion houses." },
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
                                Ready for invisible<br />mannequin photography?
                            </h2>
                            <p>
                                Ship us your garments. We'll deliver professional ghost mannequin images — ready for your store in 48 hours.
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

export default GhostMannequin;
