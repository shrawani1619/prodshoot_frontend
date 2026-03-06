import React from 'react';
import { motion } from 'framer-motion';
import {
    Camera,
    CheckCircle2,
    Package,
    Image,
    Zap,
    Shield,
    Star,
    ArrowRight,
    Send,
    Phone,
    Aperture,
    Maximize2,
    Lightbulb,
    ScanLine,
    Layers,
    Sparkles,
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

/* ── Unsplash automotive product images ── */
const IMGS = {
    hero:     'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    helmet:   'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80',
    tools:    'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
    carlight: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    bikeacc:  'https://images.unsplash.com/photo-1558980394-0a06c4631733?w=600&q=80',
    interior: 'https://images.unsplash.com/photo-1548703892-85c7a5b7e2f0?w=600&q=80',
    parts:    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
    flatlay:  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80',
    caracc:   'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
};

function FlipkartAutomotive() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background (RGB 255,255,255) for all primary images',
        'Polarised lighting eliminates glare on chrome, metal, and glass',
        'High-resolution zoom-ready shots — minimum 2000×2000 px',
        'Multiple angles: front, side, close-up, packaging, and set views',
        'Accurate colour reproduction for metallic and rubber surfaces',
        'Consistent catalog-wide visual style for multi-SKU automotive brands',
        'JPEG format, sRGB colour profile — zero watermarks or text overlays',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Automotive Products',
            desc: 'Pack and courier your products to our studio. We handle every item with care — from small accessories to large parts.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photoshoot',
            desc: 'Calibrated polarised lighting rigs capture chrome, rubber, and metallic surfaces without glare — every bolt and brand detail sharp.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Retouching',
            desc: 'Expert post-production — background removal, reflection control, colour accuracy, and surface detail sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.caracc,   label: 'Car Accessories Photography' },
        { img: IMGS.bikeacc,  label: 'Bike Accessories Photography' },
        { img: IMGS.helmet,   label: 'Helmet Photography' },
        { img: IMGS.parts,    label: 'Spare Parts Photography' },
        { img: IMGS.tools,    label: 'Automotive Tools Photography' },
    ];

    const gallery = [
        { img: IMGS.helmet,   caption: 'Front View' },
        { img: IMGS.caracc,   caption: 'Side Angle' },
        { img: IMGS.tools,    caption: 'Detail Close-Up' },
        { img: IMGS.carlight, caption: 'With Packaging' },
        { img: IMGS.bikeacc,  caption: 'Accessories Set' },
        { img: IMGS.flatlay,  caption: 'Flat Lay' },
        { img: IMGS.interior, caption: 'Car Interior Acc.' },
        { img: IMGS.parts,    caption: 'Studio White BG' },
    ];

    const stats = [
        { number: '9,000+',  label: 'Automotive SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '34%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every file in exact Flipkart spec — correct dimensions, pure white background, and no text overlays or watermarks.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Clear Product Detail Visibility',
            desc: 'Part numbers, brand logos, thread pitches, and surface finishes are all captured with precision to build buyer trust.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can inspect every fitting detail, label, and surface texture at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Lighting for Metallic Surfaces',
            desc: 'Polarised softbox rigs eliminate harsh reflections on chrome, brushed aluminium, and glossy plastic automotive products.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting and post-processing across all your SKUs builds a professional automotive catalog that drives buyer confidence.'
        },
    ];

    const testimonials = [
        {
            name: 'Rahul Tiwari', role: 'Car Accessories Brand — Flipkart', rating: 5,
            text: 'The chrome accessory shots are immaculate — zero glare, perfect reflections, every part number visible. Our listings look OEM-quality. Conversions up 36% in the first month.'
        },
        {
            name: 'Suresh Pillai', role: 'Bike Accessories Distributor', rating: 5,
            text: 'Getting helmet and visor shots without reflection was always our nightmare. Prodshoot solved it completely. Every product looks premium and every image passed Flipkart first try.'
        },
        {
            name: 'Manish Gupta', role: 'Automotive Spare Parts Seller', rating: 5,
            text: 'We had 200 SKUs of spare parts to shoot in one week. Every image came back perfectly consistent, label-sharp, and Flipkart-ready. Exceptional quality and turnaround.'
        },
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
                            FLIPKART AUTOMOTIVE PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Automotive<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional photography for automotive parts and accessories optimized for Flipkart marketplace listings. Glare-free, detail-sharp, and fully compliant — every product, every angle.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK AUTOMOTIVE SHOOT
                                </motion.div>
                            </Link>
                            <a href="#automotive-gallery" className="cta-secondary-btn">
                                VIEW PORTFOLIO <ArrowRight size={16} />
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
                    <img src={IMGS.hero} alt="Flipkart automotive product photography" />
                </motion.div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="service-stats-bar">
                {stats.map((stat, idx) => (
                    <motion.div key={idx} className="service-stat"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    >
                        <span className="service-stat-number">{stat.number}</span>
                        <span className="service-stat-label">{stat.label}</span>
                    </motion.div>
                ))}
            </section>

            {/* ─── GALLERY ─── */}
            <section className="service-section" id="automotive-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Automotive Portfolio</h2>
                    <p>Every Product, Every Angle — Gallery of Our Work</p>
                </div>
                <div className="sample-gallery">
                    {gallery.map((item, idx) => (
                        <motion.div key={idx} className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                            whileHover={{ y: -4 }} style={{ position: 'relative' }}
                        >
                            <img src={item.img} alt={item.caption} />
                            <div className="flipkart-cat-label"><span>{item.caption}</span></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY PROFESSIONAL AUTOMOTIVE PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Automotive Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Automotive buyers need to verify fitment, finish, and brand before purchasing. Sharp part details, glare-free metallic surfaces, and accurate colours directly reduce returns and build buyer trust.
                        </p>
                        <ul className="feature-checklist">
                            {features.map((f, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                >
                                    <CheckCircle2 size={16} /><span>{f}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div className="service-section-image"
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}
                    >
                        <img src={IMGS.tools} alt="Professional automotive photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Automotive Success</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {whyCards.map((card, idx) => (
                        <motion.div key={idx} className="why-card"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Your Products to a Live Flipkart Listing</p>
                </div>
                <div className="process-timeline">
                    {process.map((step, idx) => (
                        <motion.div key={idx} className="process-step"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.12 }}
                        >
                            <div className="process-step-number">{step.step}</div>
                            <div className="process-step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── AUTOMOTIVE CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Automotive Categories</h2>
                    <p>Specialised Shoots for Every Automotive Product Type</p>
                </div>
                <div className="flipkart-services-grid">
                    {categories.map((cat, idx) => (
                        <motion.div key={idx} className="flipkart-service-card"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -5, borderColor: 'var(--border-hover)' }}
                        >
                            <div className="flipkart-service-img">
                                <img src={cat.img} alt={cat.label} />
                            </div>
                            <div className="flipkart-service-body">
                                <h3>{cat.label}</h3>
                                <p>Polarised glare-free studio setup with Flipkart-compliant delivery for every automotive product.</p>
                                <Link to="/contact" className="flipkart-learn-more">
                                    Get a Quote <Aperture size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What Sellers Say</h2>
                    <p>Real Results from Real Automotive Brands</p>
                </div>
                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {testimonials.map((t, idx) => (
                        <motion.div key={idx} className="why-card"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                                {Array.from({ length: t.rating }).map((_, si) => (
                                    <Star key={si} size={14} fill="var(--primary)" color="var(--primary)" />
                                ))}
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, var(--primary-deep), var(--accent-warm))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)' }}>{t.name}</strong>
                                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.role}</span>
                                </div>
                            </div>
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
                            <h2 className="display-bold">
                                Make Your Automotive<br />Products Stand Out<br />on Flipkart
                            </h2>
                            <p>Ship us your products — we deliver Flipkart-ready images that pass every spec check and convert browsers into buyers.</p>
                        </div>
                        <div className="bottom-cta-actions">
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="cta-primary-btn">
                                    <Send size={18} />BOOK PHOTOSHOOT
                                </motion.div>
                            </Link>
                            <motion.a href="tel:+919356917424" whileHover={{ scale: 1.03 }} className="cta-secondary-btn">
                                <Phone size={16} />CONTACT US
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FlipkartAutomotive;
