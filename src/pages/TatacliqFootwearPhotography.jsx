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

function TatacliqFootwearPhotography() {
    const features = [
        "Side, front, back & sole angle coverage",
        "Pair shots and single-shoe hero images",
        "Pure white & lifestyle background options",
        "Texture and material detail close-ups",
        "Color-accurate rendering for every shade",
        "Size-accurate proportional styling",
        "On-foot lifestyle shots for fashion appeal",
        "Tata CLiQ resolution and format compliant"
    ];

    const process = [
        { step: "01", title: "Send Your Footwear", desc: "Ship your shoes to our studio. We handle all styles — sneakers, heels, boots, sandals, and more.", icon: <Package size={24} /> },
        { step: "02", title: "Shot List Planning", desc: "We create a detailed shot plan covering all required angles, lifestyle setups, and detail shots.", icon: <Camera size={24} /> },
        { step: "03", title: "Studio Photography", desc: "Footwear is propped and lit for maximum shape definition and texture detail in every shot.", icon: <Image size={24} /> },
        { step: "04", title: "Retouching & Edit", desc: "Colour correction, shadow placement, and background removal — each image polished to perfection.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Ready-to-upload files delivered in 24–48 hours. Unlimited revisions until you're satisfied.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "20,000+", label: "Footwear Pairs Shot" },
        { number: "98%", label: "Platform Approval Rate" },
        { number: "30%", label: "Higher Click-Through" },
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
                            TATA CLIQ FOOTWEAR PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Tata CLiQ Footwear<br />Photography That<br />Steps Up Sales
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Shoes sell on visuals. We photograph every pair — sneakers to stilettos — with the precision and premium finish Tata CLiQ shoppers expect. Every angle, texture, and detail captured flawlessly.
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
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Tata CLiQ footwear photography studio" />
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
                        <span className="section-label-sm">FOOTWEAR SPECIALISTS</span>
                        <h2 className="service-section-title display-bold">Every Angle, Every Detail, Every Pair</h2>
                        <p className="service-section-desc">
                            From luxury leather to performance trainers, we shoot footwear that sells. Our studio is equipped with specialised footwear props and lighting setups to make every pair look its absolute best on Tata CLiQ.
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
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80" alt="Tata CLiQ footwear photography samples" />
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
                    <p>Footwear Photography Packages for Every Brand</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Scale Your Footwear Catalog</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            From single-pair launches to 500-SKU catalogs, we tailor our production workflow to your brand's scale and Tata CLiQ delivery timelines — with consistent quality across every image.
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
                    <p>Footwear Listings We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
                        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80',
                        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
                        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`Footwear sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Footwear Photography That Performs</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Expert Footwear Styling", desc: "We use specialist props, shoe shapers, and lighting rigs to ensure every pair looks its best from every angle." },
                        { icon: <Clock size={24} />, title: "Rapid Turnaround", desc: "High-volume shoots delivered fast — ideal for seasonal collections and new style launches." },
                        { icon: <Star size={24} />, title: "Premium Finish", desc: "Every image retouched to a luxury standard that matches Tata CLiQ's curated shopper expectations." },
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
                            <h2 className="display-bold">Ready to elevate your<br />footwear listings?</h2>
                            <p>Ship us your pairs. We'll deliver stunning, Tata CLiQ-ready footwear images that boost clicks and conversions.</p>
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

export default TatacliqFootwearPhotography;
