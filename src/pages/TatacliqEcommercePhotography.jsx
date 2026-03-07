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

function TatacliqEcommercePhotography() {
    const features = [
        "White background catalog images",
        "Multi-angle product coverage",
        "Infographic & feature callout images",
        "Lifestyle and in-context imagery",
        "Zoom-ready high-resolution files",
        "Consistent visual style across all SKUs",
        "Tata CLiQ image dimension compliance",
        "Fast bulk processing for large catalogs"
    ];

    const process = [
        { step: "01", title: "Ship Your Products", desc: "Send your entire catalog to our studio. We manage intake, inventory tracking, and safe return shipping.", icon: <Package size={24} /> },
        { step: "02", title: "Catalog Planning", desc: "We build a structured shot list for every SKU — ensuring consistency and covering all required angles.", icon: <Camera size={24} /> },
        { step: "03", title: "Bulk Studio Shoot", desc: "Our high-throughput studio setup lets us shoot large catalogs efficiently without sacrificing quality.", icon: <Image size={24} /> },
        { step: "04", title: "Post-Production", desc: "Background removal, colour correction, and consistent retouching across every image in your catalog.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivery", desc: "Structured file delivery with naming conventions ready for Tata CLiQ bulk upload. Revisions included.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "100,000+", label: "E-Commerce SKUs Shot" },
        { number: "99%", label: "Approval Rate" },
        { number: "45%", label: "Avg. Conversion Boost" },
        { number: "24H", label: "Rush Delivery Available" },
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
                            TATA CLIQ E-COMMERCE PHOTOGRAPHY
                        </motion.div>
                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Tata CLiQ E-Commerce<br />Photography at<br />Catalog Scale
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From 5 SKUs to 5,000 — we deliver consistent, high-quality e-commerce photography built for Tata CLiQ's standards and your conversion goals. Efficient, scalable, and always premium.
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
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Tata CLiQ e-commerce photography studio" />
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
                        <span className="section-label-sm">CATALOG PHOTOGRAPHY</span>
                        <h2 className="service-section-title display-bold">Every SKU Photographed to Perfection</h2>
                        <p className="service-section-desc">
                            Tata CLiQ shoppers expect premium visuals even for everyday products. We deliver consistent, conversion-optimised e-commerce images across every category in your catalog — at the speed your business needs.
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
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80" alt="Tata CLiQ e-commerce photography samples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Catalog to Live Listings</p>
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
                    <p>E-Commerce Photography at Any Scale</p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Scalable Production for Every Catalog</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Our high-throughput production workflow handles catalogs of all sizes — with consistent visual quality across every single SKU and delivery timelines that keep your Tata CLiQ store fully stocked with great images.
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
                    <p>E-Commerce Catalogs We've Shot</p>
                </div>
                <div className="sample-gallery">
                    {[
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
                        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
                        'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
                        'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80'
                    ].map((src, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -4 }}>
                            <img src={src} alt={`E-commerce sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>E-Commerce Photography That Scales</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Catalog Consistency", desc: "Every image in your catalog maintains the same visual standard — critical for brand perception on Tata CLiQ." },
                        { icon: <Clock size={24} />, title: "High-Volume Capable", desc: "Our studio handles 100s of SKUs per day without compromising on quality or turnaround time." },
                        { icon: <Star size={24} />, title: "Conversion Optimised", desc: "We don't just follow specs — we craft images designed to maximise product page conversion rates." },
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
                            <h2 className="display-bold">Ready to scale your<br />Tata CLiQ catalog?</h2>
                            <p>Ship us your products. We deliver consistent, premium e-commerce images at the scale your business demands.</p>
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

export default TatacliqEcommercePhotography;
