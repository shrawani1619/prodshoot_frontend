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

function TatacliqCosmeticPhotography() {
    const features = [
        "Premium beauty flat-lay compositions",
        "Macro detail shots for textures & formulas",
        "Ingredient and formula hero shots",
        "In-use model application shots",
        "Swatch and shade range photography",
        "Minimalist luxury aesthetic styling",
        "Before & after concept imagery",
        "Tata CLiQ beauty category compliant"
    ];

    const process = [
        { step: "01", title: "Send Your Products", desc: "Ship your cosmetics and beauty products to our climate-controlled studio — we handle all categories with care.", icon: <Package size={24} /> },
        { step: "02", title: "Beauty Styling", desc: "Our beauty photography specialists plan each setup — from minimalist flat-lays to model application shots.", icon: <Camera size={24} /> },
        { step: "03", title: "Precision Shoot", desc: "Macro lenses and precision lighting capture every texture, finish, and formula detail with stunning clarity.", icon: <Image size={24} /> },
        { step: "04", title: "Beauty Retouching", desc: "Specialist beauty retouching that enhances product appeal while maintaining accurate colour and formula representation.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Upload-ready beauty images within 48 hours. Revisions and shade corrections included as standard.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "15,000+", label: "Beauty Products Shot" },
        { number: "98%", label: "Platform Approval Rate" },
        { number: "50%", label: "Higher Add-to-Cart" },
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
                            TATA CLIQ COSMETIC PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Tata CLiQ Cosmetic<br />Photography That<br />Sells Beauty
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Beauty products sell on sensory appeal. We create cosmetic photography that communicates texture, glow, and luxury — making your skincare, makeup, and beauty brands irresistible on Tata CLiQ.
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
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Tata CLiQ cosmetic photography studio" />
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
                        <span className="section-label-sm">BEAUTY PHOTOGRAPHY SPECIALISTS</span>
                        <h2 className="service-section-title display-bold">Cosmetic Photography That Makes Buyers Feel It</h2>
                        <p className="service-section-desc">
                            Beauty shoppers on Tata CLiQ expect luxury visuals that communicate product quality before they buy. We create images that do exactly that — from macro texture shots to lifestyle application imagery that drives conversions.
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
                        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80" alt="Tata CLiQ cosmetic photography samples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Formula to Listing</p>
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
                    <p>Beauty Photography for Every Brand</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Beauty Production Packages</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Whether you're an indie beauty brand launching on Tata CLiQ or an established cosmetics company expanding your digital presence, we create photography that matches your brand aesthetic and platform requirements.
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
                    <p>Beauty Listings We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
                        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
                        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
                        'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`Cosmetic sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Beauty Photography That Sells</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Beauty Specialists", desc: "Our photographers specialise in beauty and cosmetics — they know exactly how to make formulas, textures, and packaging shine." },
                        { icon: <Clock size={24} />, title: "Shade Accuracy", desc: "We calibrate our colour reproduction process to ensure every shade renders accurately across all screens and devices." },
                        { icon: <Star size={24} />, title: "Luxury Aesthetic", desc: "We create the premium, editorial-quality visuals that Tata CLiQ's beauty shoppers expect from the brands they love." },
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
                            <h2 className="display-bold">Ready to make your<br />beauty brand shine?</h2>
                            <p>Send us your products. We'll create cosmetic photography that makes Tata CLiQ shoppers fall in love with your brand.</p>
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

export default TatacliqCosmeticPhotography;
