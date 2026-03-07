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

function TatacliqMedicalPhotography() {
    const features = [
        "Clinical white background product shots",
        "Detailed close-ups of medical components",
        "Packaging and labelling compliance imagery",
        "In-use context and lifestyle setups",
        "Multi-angle coverage for complex devices",
        "Scale reference imagery for accurate sizing",
        "Professional, trust-building aesthetic",
        "Tata CLiQ health & medical category compliant"
    ];

    const process = [
        { step: "01", title: "Product Intake", desc: "Ship your medical products with full packaging. We handle all health category items with appropriate care protocols.", icon: <Package size={24} /> },
        { step: "02", title: "Technical Planning", desc: "We plan angle coverage and lighting setups specific to your product type — devices, supplements, equipment, or wellness products.", icon: <Camera size={24} /> },
        { step: "03", title: "Precision Photography", desc: "Medical products require technical precision. Our photographers ensure every component and detail is captured with clarity.", icon: <Image size={24} /> },
        { step: "04", title: "Post-Production", desc: "Clean, clinical retouching that builds trust and highlights product features without misrepresentation.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Platform-ready files within 48 hours. All images reviewed for platform compliance before delivery.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "5,000+", label: "Medical Products Shot" },
        { number: "99%", label: "Platform Approval Rate" },
        { number: "35%", label: "Higher Trust Score" },
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
                            TATA CLIQ MEDICAL PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Tata CLiQ Medical<br />Photography That<br />Builds Trust
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Medical and health products demand precision, clarity, and trust in every image. We create photography that meets Tata CLiQ's stringent health category standards while communicating the quality and safety of your products.
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
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Tata CLiQ medical photography studio" />
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
                        <span className="section-label-sm">MEDICAL PHOTOGRAPHY EXPERTS</span>
                        <h2 className="service-section-title display-bold">Clinical Precision, Platform Compliance</h2>
                        <p className="service-section-desc">
                            Health and medical product buyers make high-stakes purchasing decisions. Clear, accurate, trust-building imagery is essential. We create photography that communicates product quality and safety — helping your listings convert with confidence.
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
                        <img src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=700&q=80" alt="Tata CLiQ medical photography samples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Product to Trusted Listing</p>
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
                    <p>Medical Photography for Every Health Brand</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Medical Product Photography</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            From medical devices and supplements to wellness equipment and diagnostics, we create photography packages tailored to your product category and Tata CLiQ's health section requirements.
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
                    <p>Medical Products We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80',
                        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
                        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
                        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`Medical product sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Medical Photography That Builds Confidence</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Compliance Focused", desc: "We understand the content restrictions in health & medical categories and ensure every image meets platform guidelines." },
                        { icon: <Clock size={24} />, title: "Technical Accuracy", desc: "Our photographers are trained to represent medical products with precision — no misleading compositions or scale distortions." },
                        { icon: <Star size={24} />, title: "Trust-Building Visuals", desc: "Clean, clinical, and professional imagery that communicates quality and safety — increasing buyer confidence and conversions." },
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
                            <h2 className="display-bold">Ready to build trust with<br />your medical listings?</h2>
                            <p>Send us your products. We'll deliver clinical-quality photography that earns buyer confidence on Tata CLiQ.</p>
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

export default TatacliqMedicalPhotography;
