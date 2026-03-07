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

function EtsyBikiniPhotography() {
    const features = [
        "Ghost mannequin & flat lay techniques",
        "Model photography for swimwear fit showcase",
        "Studio & tropical lifestyle backgrounds",
        "Detail shots — fabric, straps, hardware",
        "Color-accurate rendering of prints & solids",
        "Front, back & side angle coverage",
        "Etsy listing format & resolution compliant",
        "Consistent imagery across your entire range"
    ];

    const process = [
        { step: "01", title: "Send Your Swimwear", desc: "Ship your bikinis, swimsuits, and beachwear to our studio. We handle all styles — from handmade to designer.", icon: <Package size={24} /> },
        { step: "02", title: "Style Planning", desc: "We plan each shot to showcase fit, fabric quality, and design details that persuade Etsy buyers.", icon: <Camera size={24} /> },
        { step: "03", title: "Studio Photography", desc: "Using specialist swimwear forms and lighting rigs, we capture every piece with maximum visual appeal.", icon: <Image size={24} /> },
        { step: "04", title: "Post-Production", desc: "Full retouching including colour correction, background removal, and detail enhancement.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Etsy-ready files delivered in 24–48 hours with unlimited revisions until you're fully satisfied.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "10,000+", label: "Swimwear Pieces Shot" },
        { number: "97%", label: "Etsy Approval Rate" },
        { number: "38%", label: "Higher Conversion" },
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
                            ETSY BIKINI PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Etsy Bikini<br />Photography That<br />Captures Summer
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Swimwear sells on lifestyle and fit. We photograph every bikini and swimsuit with the vibrant, sun-kissed aesthetic that Etsy buyers love — making your handmade swimwear irresistible online.
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
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80" alt="Etsy bikini photography studio" />
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
                        <span className="section-label-sm">ETSY SWIMWEAR SPECIALISTS</span>
                        <h2 className="service-section-title display-bold">Showcase Fit, Fabric & Craftsmanship</h2>
                        <p className="service-section-desc">
                            From crocheted bikinis to handmade one-pieces, we create swimwear photography that conveys quality, fit, and style. Our studio provides the vibrant, clean imagery that drives Etsy sales.
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
                        <img src="https://images.unsplash.com/photo-1559181567-c3190bbb2b77?w=700&q=80" alt="Etsy bikini photography samples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Handmade To Etsy's Best Sellers</p>
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
                    <p>Swimwear Photography Packages for Every Etsy Seller</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Build a Swimwear Catalog That Sells</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            From single-style launches to full seasonal swimwear collections, we tailor our production workflow to your Etsy shop's scale — delivering consistent, high-converting images every time.
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
                    <p>Etsy Swimwear Listings We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
                        'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=600&q=80',
                        'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
                        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`Etsy bikini sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Swimwear Photography That Performs on Etsy</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Swimwear Styling Expertise", desc: "We use specialist swimwear forms, props, and lighting to showcase every piece in its best light for Etsy shoppers." },
                        { icon: <Clock size={24} />, title: "Fast Seasonal Turnaround", desc: "Perfect for summer launches — we shoot and deliver entire swimwear collections quickly to keep you competitive." },
                        { icon: <Star size={24} />, title: "Vibrant, Accurate Colours", desc: "Our colour calibration ensures your swimwear prints and fabrics look exactly as vivid as they do in person." },
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
                            <h2 className="display-bold">Ready to elevate your<br />Etsy swimwear listings?</h2>
                            <p>Send us your swimwear. We'll deliver vibrant, Etsy-ready images that boost clicks and conversions all season long.</p>
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

export default EtsyBikiniPhotography;
