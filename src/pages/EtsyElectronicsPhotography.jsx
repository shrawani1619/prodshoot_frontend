import React from 'react';
import { motion } from 'framer-motion';
import {
    Camera, CheckCircle2, Package, Image, Layers, Zap,
    Shield, Clock, Star, ArrowRight, Send, Phone
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

function EtsyElectronicsPhotography() {
    const features = [
        "Multi-angle device and gadget coverage",
        "Screen-on & screen-off shots",
        "Pure white & contextual lifestyle backgrounds",
        "Detail shots — ports, buttons, textures",
        "Accurate colour & material rendering",
        "Scale references and size comparisons",
        "Handmade & DIY electronics specialisation",
        "Etsy listing format & resolution compliant"
    ];

    const process = [
        { step: "01", title: "Send Your Products", desc: "Ship your electronics, gadgets, or DIY tech items to our studio. We handle all sizes and categories safely.", icon: <Package size={24} /> },
        { step: "02", title: "Shot List Planning", desc: "We plan a comprehensive shot list covering all angles, detail close-ups, and lifestyle context shots for Etsy.", icon: <Camera size={24} /> },
        { step: "03", title: "Studio Photography", desc: "Using precision lighting rigs and calibrated setups, we capture every device looking clean, sharp, and desirable.", icon: <Image size={24} /> },
        { step: "04", title: "Post-Production", desc: "Screen replacement, background cleanup, and colour grading for images that meet Etsy's highest standards.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Etsy-ready files delivered in 24–48 hours with unlimited revisions until you're fully satisfied.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "18,000+", label: "Electronics Shot" },
        { number: "98%", label: "Etsy Approval Rate" },
        { number: "33%", label: "Higher Click-Through" },
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
                            ETSY ELECTRONICS PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Etsy Electronics<br />Photography That<br />Powers Sales
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Tech products demand precision photography. We capture every gadget, device, and handcrafted electronic item with the sharp, clean imagery that Etsy buyers need to click "Add to Cart" with confidence.
                        </motion.p>
                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div className="cta-primary-btn" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                                    <Camera size={18} />GET A QUOTE
                                </motion.div>
                            </Link>
                            <a href="#custom-quote" className="cta-secondary-btn">
                                VIEW SERVICES <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div className="service-hero-image"
                    initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Etsy electronics photography studio" />
                </motion.div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="service-stats-bar">
                {stats.map((stat, idx) => (
                    <motion.div key={idx} className="service-stat"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                        <span className="service-stat-number">{stat.number}</span>
                        <span className="service-stat-label">{stat.label}</span>
                    </motion.div>
                ))}
            </section>

            {/* ─── WHAT YOU GET ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">ETSY ELECTRONICS SPECIALISTS</span>
                        <h2 className="service-section-title display-bold">Sharp, Clean Images That Build Buyer Trust</h2>
                        <p className="service-section-desc">
                            From handmade circuit boards to DIY audio gear and custom gadgets, we create electronics photography that communicates quality, precision, and innovation — giving Etsy buyers the confidence to purchase.
                        </p>
                        <ul className="feature-checklist">
                            {features.map((f, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                                    <CheckCircle2 size={16} /><span>{f}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div className="service-section-image"
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=80" alt="Etsy electronics photography samples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Your Workshop To Etsy's Best Sellers</p>
                </div>
                <div className="process-timeline">
                    {process.map((step, idx) => (
                        <motion.div key={idx} className="process-step"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.12 }}>
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
                    <p>Electronics Photography Packages for Every Etsy Seller</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Build a Tech Catalog That Converts</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            From a single DIY gadget to a full range of handcrafted tech products, we create consistent, high-quality photography that builds trust and drives Etsy sales at any volume.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div className="cta-primary-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem' }}>
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
                    <p>Etsy Electronics Listings We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
                        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
                        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80',
                        'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`Etsy electronics sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Electronics Photography That Performs on Etsy</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Technical Precision", desc: "We understand electronics — from capturing circuit detail to presenting clean UI screens that showcase function and quality." },
                        { icon: <Clock size={24} />, title: "Fast Turnaround", desc: "Quick delivery keeps your Etsy shop stocked with fresh, high-quality listings ready to attract buyers immediately." },
                        { icon: <Star size={24} />, title: "Trust-Building Imagery", desc: "Our clean, detailed photography eliminates buyer hesitation and increases purchase confidence for complex tech products." },
                    ].map((item, idx) => (
                        <motion.div key={idx} className="why-card"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}>
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
                    <motion.div className="bottom-cta" whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                        <div className="bottom-cta-glow" />
                        <div className="bottom-cta-content">
                            <h2 className="display-bold">Ready to power up your<br />Etsy electronics listings?</h2>
                            <p>Send us your products. We'll deliver sharp, professional images that convert Etsy browsers into buyers.</p>
                        </div>
                        <div className="bottom-cta-actions">
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="cta-primary-btn">
                                    <Send size={18} />GET STARTED
                                </motion.div>
                            </Link>
                            <motion.a href="tel:+919356917424" whileHover={{ scale: 1.03 }} className="cta-secondary-btn">
                                <Phone size={16} />CALL US
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default EtsyElectronicsPhotography;
