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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash Myntra-style footwear images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    sneakers:   'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    sports:     'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    heels:      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    sandals:    'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80',
    boots:      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80',
    pair:       'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    topview:    'https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&q=80',
    modelWear:  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&q=80',
    casual:     'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    why:        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=700&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function MyntraFootwear() {

    const features = [
        'Myntra marketplace-ready images delivered on first submission',
        'Crystal-clear product detail visibility — stitching, sole, and sole edge',
        'High-resolution 2000×2000 px — zoom-ready for Myntra shoppers',
        'Front, side, top, pair, and lifestyle angles — full product coverage',
        'Fashion-style lighting with soft shadow rendering for depth',
        'Colour-accurate post-production matching physical product',
        'Clean studio backgrounds meeting Myntra image guidelines',
        'JPEG format, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Footwear',
            desc: 'Pack and courier your shoes to our studio. We handle every pair with care and clean each piece before shooting.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Shoot',
            desc: 'Our team captures every angle — front, side, top, pair, model wear, and lifestyle — with fashion-grade lighting rigs.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert retouching — background cleanup, shadow rendering, colour grading, and sole / upper detail sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Myntra-Ready Delivery',
            desc: "Final images in 24–48 hours. Unlimited revisions until you're 100% satisfied."
        },
    ];

    const categories = [
        { img: IMGS.sneakers,  label: 'Sneakers Photography' },
        { img: IMGS.sports,    label: 'Sports Shoes Photography' },
        { img: IMGS.heels,     label: "Women's Heels Photography" },
        { img: IMGS.sandals,   label: 'Sandals Photography' },
        { img: IMGS.boots,     label: 'Boots Photography' },
    ];

    const gallery = [
        { img: IMGS.sneakers,  caption: 'Front View' },
        { img: IMGS.casual,    caption: 'Side Angle' },
        { img: IMGS.topview,   caption: 'Top View' },
        { img: IMGS.pair,      caption: 'Pair Shot' },
        { img: IMGS.modelWear, caption: 'Model Wearing' },
        { img: IMGS.lifestyle, caption: 'Lifestyle Shot' },
        { img: IMGS.heels,     caption: 'Studio White BG' },
        { img: IMGS.boots,     caption: 'Detail Close-Up' },
    ];

    const stats = [
        { number: '18,000+', label: 'Footwear SKUs Shot' },
        { number: '98%',     label: 'First-Pass Approval' },
        { number: '40%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Myntra Marketplace Ready',
            desc: 'Every image delivered to exact Myntra spec — dimensions, white background, and zero watermarks — approved every time.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Clear Product Detail Visibility',
            desc: 'Every stitch, sole ridge, buckle, and texture captured with macro-level sharpness so buyers inspect with confidence.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px output so Myntra shoppers can zoom into fine footwear detail without any quality loss.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Fashion-Style Lighting Setup',
            desc: 'Studio softboxes and reflectors create the premium fashion look that Myntra shoppers associate with top brands.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting, angles, and retouching across every SKU so your entire collection looks cohesive and professional.'
        },
    ];

    const testimonials = [
        {
            name: 'Neha Joshi', role: "Women's Footwear Brand — Myntra", rating: 5,
            text: "Our heels and sandals looked mediocre in phone photos. After Prodshoot, every pair looks runway-ready. Myntra approved all images on the first upload."
        },
        {
            name: 'Arjun Patel', role: 'Sneakers Retailer — Myntra', rating: 5,
            text: 'The sneaker shots are insanely sharp — every detail of the knit upper and sole unit is visible. Our add-to-cart rate jumped 35% within two weeks.'
        },
        {
            name: 'Meera Kapoor', role: 'Sports Footwear Seller', rating: 5,
            text: 'Fast turnaround, zero rejections, and the lifestyle images they shot for our sports shoes added a whole new dimension to our listings. Highly recommended.'
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
                            MYNTRA FOOTWEAR PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Myntra Footwear<br />Photography<br />That Converts
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional fashion footwear photography optimized for Myntra marketplace listings. Every angle, every detail — delivered Myntra-ready.
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
                    <img src={IMGS.hero} alt="Myntra footwear photography" />
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
                    <p>Every Angle, Every Style — Our Footwear Work</p>
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
                        <h2 className="service-section-title display-bold">Why Professional Footwear Photography Wins on Myntra</h2>
                        <p className="service-section-desc">
                            Footwear buyers zoom into every detail — sole, stitch, buckle, and upper — before adding to cart. Soft shadows, sharp edges, and accurate colour are what build trust and reduce returns. We shoot every pair to Myntra standards.
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
                        <img src={IMGS.why} alt="Professional footwear photography for Myntra" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Myntra Footwear Success</p>
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
                    <p>From Your Shoes to a Live Myntra Listing</p>
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
                    <p>Specialised Shoots for Every Footwear Type on Myntra</p>
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
                                <p>Dedicated studio setup, fashion-grade lighting, model or standalone shots — delivered Myntra-ready.</p>
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
                    <p>Real Results from Myntra Footwear Brands</p>
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
                                Make Your Footwear<br />Products Stand Out<br />on Myntra
                            </h2>
                            <p>
                                Send us your shoes — we deliver Myntra-ready images that meet every guideline and turn browsers into buyers.
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

export default MyntraFootwear;
