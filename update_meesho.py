import os
import glob

template = """
            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Unboxing To Listing</p>
                </div>

                <div className="process-timeline">
                    {[
                        { step: "01", title: "Ship Your Products", desc: "Pack and ship your products to our studio. We provide pre-paid shipping labels for hassle-free delivery.", icon: <Package size={24} /> },
                        { step: "02", title: "We Plan the Shoot", desc: "Our team reviews marketplace guidelines and plans the perfect shot list for maximum listing performance.", icon: <Camera size={24} /> },
                        { step: "03", title: "Professional Shooting", desc: "Products are styled and photographed in our studio with calibrated lighting for perfect backgrounds.", icon: <Image size={24} /> },
                        { step: "04", title: "Expert Post-Production", desc: "Our retouchers color-correct, remove backgrounds, and optimize every image to exact specifications.", icon: <Layers size={24} /> },
                        { step: "05", title: "Delivery & Review", desc: "Receive your final images within 24-48 hours. Request unlimited revisions until you're 100% satisfied.", icon: <Zap size={24} /> },
                    ].map((step, idx) => (
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
                    <h2>Tailored Solutions</h2>
                    <p>Services Built For Your Brand</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '3rem auto 0', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Custom Production for Every Seller</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We don't believe in one-size-fits-all pricing. Every brand has unique product complexities and listing goals. Whether you have 5 SKUs or 500, we provide a custom production plan that scales with your growth.
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

            {/* ─── EXAMPLE GALLERY ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Sample Work</h2>
                    <p>Listings We've Shot</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-sneakers.png', '/portfolio-skincare.png', '/portfolio-watch.png', '/portfolio-jewelry.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`Product sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Photography Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "Marketplace Compliant", desc: "Our images pass compliance checks on the first try, every time. No listing suppressions." },
                        { icon: <Clock size={24} />, title: "Fast Turnaround", desc: "Need images fast? We offer priority delivery for time-sensitive launches." },
                        { icon: <Star size={24} />, title: "Conversion Focused", desc: "We don't just meet guidelines — we craft images designed to maximize click-through and conversion rates." },
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
                                Ready to dominate<br />your listings?
                            </h2>
                            <p>
                                Ship us your products. We'll deliver high-converting imagery that passes every guideline.
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
"""

files = glob.glob('src/pages/Meesho*.jsx')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if we already added it so we dont double up
    if "<!-- ─── PROCESS ─── -->" in content or "Our Process" in content:
        print(f"Skipping {filepath}, looks like it already has the process sections")
        continue

    # Split right before the footer
    parts = content.split('<Footer />')
    if len(parts) != 2:
        print(f"WARN: Could not find <Footer /> or found multiple in {filepath}")
        continue
        
    new_content = parts[0] + template + '\n            <Footer />' + parts[1]
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Updated {filepath}")
