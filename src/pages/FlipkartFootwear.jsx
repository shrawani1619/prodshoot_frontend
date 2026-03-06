import React from 'react';
import { motion } from 'framer-motion';
import {
    Camera,
    CheckCircle2,
    Package,
    Image,
    Layers,
    Zap,
    Shield,
    Star,
    ArrowRight,
    Send,
    Phone,
    Aperture,
    Maximize2,
    ScanLine,
    Droplets,
    Lightbulb,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash footwear images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    sneakers:   'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    formal:     'https://images.unsplash.com/photo-1614252234498-9e1c05e7b8d3?w=600&q=80',
    sandals:    'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80',
    sports:     'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    heels:      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    pair:       'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    topview:    'https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
    why:        'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=700&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function FlipkartFootwear() {

    const features = [
        'Pure white background (RGB 255,255,255) for all Flipkart listings',
        'High-resolution zoom-ready images — minimum 1000×1000 px',
        'Multiple angles: front, side, top, pair & detail shots',
        'Professional lighting with natural shadow rendering',
        'Marketplace-compliant images approved on first upload',
        'Lifestyle footwear shots for A+ Content & brand story',
        'JPEG format, sRGB colour profile, no watermarks',
        'Same-day retouching and colour correction available',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Footwear',
            desc: 'Pack and ship your shoes to our studio. We handle every pair with care and provide fast turnaround.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Shoot',
            desc: 'Our team photographs every angle — front, side, top, pair, and lifestyle — with calibrated lighting rigs.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Retouching & Colour Correction',
            desc: 'Expert post-production: background removal, shadow rendering, colour grading, and sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Delivery',
            desc: "Receive final images within 24–48 hours. Unlimited revisions until you're 100% satisfied."
        },
    ];

    const categories = [
        { img: IMGS.sneakers, label: 'Sneakers Photography' },
        { img: IMGS.formal,   label: 'Formal Shoes Photography' },
        { img: IMGS.sandals,  label: 'Sandals Photography' },
        { img: IMGS.sports,   label: 'Sports Shoes Photography' },
        { img: IMGS.heels,    label: "Women's Heels Photography" },
    ];

    const gallery = [
        { img: IMGS.sneakers,  caption: 'Front View' },
        { img: IMGS.sports,    caption: 'Side Angle' },
        { img: IMGS.topview,   caption: 'Top View' },
        { img: IMGS.pair,      caption: 'Pair Shot' },
        { img: IMGS.lifestyle, caption: 'Lifestyle Shot' },
        { img: IMGS.formal,    caption: 'Detail Close-Up' },
        { img: IMGS.sandals,   caption: 'Studio White BG' },
        { img: IMGS.heels,     caption: 'Angle Flat-Lay' },
    ];

    const stats = [
        { number: '20,000+', label: 'Footwear SKUs Shot' },
        { number: '98%',     label: 'First-Pass Approval' },
        { number: '40%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Droplets size={24} />,
            title: 'Pure White Background',
            desc: 'Studio-clean RGB 255,255,255 white — the only background Flipkart accepts for primary product images.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'Zoom-Ready Resolution',
            desc: 'Every shot delivered at 2000×2000 px minimum so buyers can zoom in on stitching, texture, and sole detail.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Multiple Angles',
            desc: 'Front, side, top, pair, and detail views give online shoppers the confidence to add to cart.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Professional Lighting',
            desc: 'Calibrated softbox rigs eliminate harsh reflections and capture true colour and material texture.'
        },
        {
            icon: <Shield size={24} />,
            title: 'Marketplace Compliant',
            desc: 'Every file is named, sized, and formatted to Flipkart seller specifications — zero rejections guaranteed.'
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
                            FLIPKART FOOTWEAR PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Footwear<br />Photography<br />That Sells
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional footwear photography designed for Flipkart product listings. White background, multi-angle, zoom-ready — every spec met, every time.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK FOOTWEAR SHOOT
                                </motion.div>
                            </Link>
                            <a href="#footwear-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart footwear product photography" />
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
            <section className="service-section" id="footwear-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Footwear Portfolio</h2>
                    <p>Every Angle, Every Style — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL FOOTWEAR PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Footwear Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Footwear buyers rely entirely on images. Sharp angles, accurate colour, and clean backgrounds are the difference between a scroll-past and an add-to-cart. We nail every spec Flipkart requires.
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
                        <img src={IMGS.why} alt="Professional footwear photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Success</p>
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
                    <p>From Your Doorstep to Flipkart Listing</p>
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

            {/* ─── FOOTWEAR CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Footwear Categories</h2>
                    <p>Specialised Shoots for Every Footwear Type</p>
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
                                <p>Dedicated studio setup, professional lighting, and marketplace-compliant delivery for every pair.</p>
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
                    <p>Real Results from Real Footwear Brands</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        {
                            name: 'Rohit Malhotra', role: 'Sneaker Brand — Flipkart Seller', rating: 5,
                            text: 'The white background shots are flawless. Every image passed Flipkart review on first upload and our CTR jumped 42% in the first month.'
                        },
                        {
                            name: 'Sneha Patel', role: "Women's Footwear Seller", rating: 5,
                            text: 'The heel shots are stunning — every texture, buckle, and finish is perfectly captured. Returns dropped significantly after the new images went live.'
                        },
                        {
                            name: 'Arun Verma', role: 'Sports Shoes Distributor', rating: 5,
                            text: 'Fast turnaround, great communication, and the images look incredible. The lifestyle shots especially drove our conversion rates through the roof.'
                        },
                    ].map((t, idx) => (
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
                                Make Your Footwear<br />Products Stand Out<br />on Flipkart
                            </h2>
                            <p>
                                Ship us your shoes — we deliver Flipkart-ready images that pass every spec check and convert browsers into buyers.
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

export default FlipkartFootwear;
