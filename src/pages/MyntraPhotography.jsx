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
    Sparkles,
    ScanLine,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash Myntra-style fashion images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    modelFront: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    modelBack:  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    sidePose:   'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    flatlay:    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    folded:     'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    ethnic:     'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
    jacket:     'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    mens:       'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80',
    womens:     'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80',
    footwear:   'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    accessories:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    why:        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function MyntraPhotography() {

    const features = [
        'Myntra marketplace-ready images approved on first submission',
        'Professional model-based fashion shoots with studio lighting',
        'Ghost mannequin and flat-lay options for every garment type',
        'Front, back, side, and detail angles — complete product coverage',
        'Pure white background (RGB 255,255,255) for primary listing images',
        'Colour-accurate retouching matching physical fabric and print',
        'High-resolution 2000×2000 px delivery — zoom-ready for Myntra',
        'JPEG/PNG output, sRGB profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Fashion Products',
            desc: 'Courier your garments to our studio. We steam, press, and prep every piece before the shoot begins.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio / Model Shoot',
            desc: 'Our team shoots on live models, ghost mannequins, and flat-lay rigs with calibrated softbox lighting.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert post-production — background removal, colour grading, wrinkle retouching, and label sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Myntra-Ready Image Delivery',
            desc: "Receive final images in 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.mens,        label: "Men's Fashion Photography" },
        { img: IMGS.womens,      label: "Women's Fashion Photography" },
        { img: IMGS.ethnic,      label: 'Ethnic Wear Photography' },
        { img: IMGS.footwear,    label: 'Footwear Photography' },
        { img: IMGS.accessories, label: 'Fashion Accessories Photography' },
    ];

    const gallery = [
        { img: IMGS.modelFront, caption: 'Model — Front Pose' },
        { img: IMGS.modelBack,  caption: 'Model — Back View' },
        { img: IMGS.sidePose,   caption: 'Side Pose' },
        { img: IMGS.flatlay,    caption: 'Flat Lay' },
        { img: IMGS.folded,     caption: 'Folded Product' },
        { img: IMGS.lifestyle,  caption: 'Lifestyle Shoot' },
        { img: IMGS.jacket,     caption: 'Studio White BG' },
        { img: IMGS.ethnic,     caption: 'Ethnic Wear' },
    ];

    const stats = [
        { number: '28,000+', label: 'Myntra SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '42%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Myntra Marketplace Ready',
            desc: 'Every image delivered to exact Myntra specs — correct dimensions, white background, and zero watermarks.'
        },
        {
            icon: <Users size={24} />,
            title: 'Professional Model Shoots',
            desc: 'In-house models and experienced stylists ensure every outfit is presented at its absolute best.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Fabric & Design Visibility',
            desc: 'Diffused softbox lighting reveals weave, texture, print, embroidery, and stitching with total accuracy.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so Myntra shoppers can inspect every detail at full zoom.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting, pose angles, and post-production across your entire SKU range for a premium brand look.'
        },
    ];

    const testimonials = [
        {
            name: 'Anika Sinha', role: "Women's Fashion Brand — Myntra", rating: 5,
            text: "Prodshoot transformed our Myntra listings. The model shots are magazine-quality yet fully compliant. Our CTR went up 45% in the first month alone."
        },
        {
            name: 'Rohan Verma', role: "Men's Apparel Seller", rating: 5,
            text: 'The studio team nailed our shirt and trouser shoots — perfect fold, crisp collar, and clean white background every single time. Zero rejections.'
        },
        {
            name: 'Sunita Rao', role: 'Ethnic Wear Boutique — Myntra', rating: 5,
            text: 'Our saree and lehenga images look absolutely stunning. The fabric colours are 100% accurate to the physical product. Returns dropped significantly.'
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
                            MYNTRA PHOTOGRAPHY SERVICE
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Myntra Product<br />Photography<br />That Sells
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional fashion and apparel photography designed specifically for Myntra marketplace listings. Model shoots, ghost mannequin, and flat-lay — every style covered.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK FASHION SHOOT
                                </motion.div>
                            </Link>
                            <a href="#myntra-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Myntra fashion product photography" />
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

            {/* ─── GALLERY ─── */}
            <section className="service-section" id="myntra-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Myntra Fashion Portfolio</h2>
                    <p>Model Shoots, Flat Lay & Studio Styles — Our Work</p>
                </div>

                <div className="sample-gallery">
                    {gallery.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            whileHover={{ y: -4 }}
                            style={{ position: 'relative' }}
                        >
                            <img src={item.img} alt={item.caption} />
                            <div className="flipkart-cat-label">
                                <span>{item.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY PROFESSIONAL MYNTRA PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Photography Wins on Myntra</h2>
                        <p className="service-section-desc">
                            Myntra shoppers browse hundreds of listings in seconds. Crisp model shots, accurate colour, and clean studio backgrounds are what stop the scroll and drive the click. We meet every Myntra image guideline — first upload, every time.
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
                        <img src={IMGS.why} alt="Professional Myntra fashion photography" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Myntra Fashion Success</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {whyCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
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
                    <p>From Your Garment to a Live Myntra Listing</p>
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

            {/* ─── FASHION CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Fashion Categories</h2>
                    <p>Specialised Shoots for Every Style on Myntra</p>
                </div>

                <div className="flipkart-services-grid">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="flipkart-service-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -5, borderColor: 'var(--border-hover)' }}
                        >
                            <div className="flipkart-service-img">
                                <img src={cat.img} alt={cat.label} />
                            </div>
                            <div className="flipkart-service-body">
                                <h3>{cat.label}</h3>
                                <p>Dedicated model or studio setup, professional lighting, and post-production — delivered Myntra-ready.</p>
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
                    <p>Real Results from Real Myntra Fashion Brands</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
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
                    <motion.div
                        className="bottom-cta"
                        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}
                    >
                        <div className="bottom-cta-glow" />
                        <div className="bottom-cta-content">
                            <h2 className="display-bold">
                                Make Your Fashion<br />Products Look Premium<br />on Myntra
                            </h2>
                            <p>
                                Ship us your garments — we deliver Myntra-ready images that meet every spec and turn browsers into buyers.
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
                                    BOOK PHOTOSHOOT
                                </motion.div>
                            </Link>
                            <motion.a
                                href="tel:+919356917424"
                                whileHover={{ scale: 1.03 }}
                                className="cta-secondary-btn"
                            >
                                <Phone size={16} />
                                CONTACT US
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default MyntraPhotography;
