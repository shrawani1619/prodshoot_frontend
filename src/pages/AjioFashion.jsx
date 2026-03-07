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
    Users,
    Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash Ajio-style premium fashion images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    frontPose:  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    backPose:   'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    fullBody:   'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    fabricDetail:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80',
    flatlay:    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    jacket:     'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    ethnic:     'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
    mens:       'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80',
    womens:     'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80',
    western:    'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80',
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

function AjioFashion() {

    const features = [
        'Ajio marketplace-ready images approved on first submission',
        'Premium editorial model-based shoots matching Ajio brand standards',
        'Front, back, side, full-body, and flat-lay — complete angle coverage',
        'High-resolution 2000×2000 px delivery — zoom-ready for shoppers',
        'Minimal backgrounds — pure white and light grey per Ajio guidelines',
        'Softbox lighting that reveals fabric texture, drape, and detail',
        'Colour-accurate retouching matching physical garment perfectly',
        'JPEG/PNG output, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Fashion Products',
            desc: 'Courier your garments to our studio. We steam, press, and style every piece before the shoot.'
        },
        {
            step: '02',
            icon: <Users size={24} />,
            title: 'Professional Studio Shoot with Models',
            desc: 'Our in-house models and stylists present each outfit in the right pose and composition for Ajio listings.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert retouching — background cleanup, colour grading, thread removal, and label sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Delivery of Ajio-Ready Images',
            desc: "Final images delivered in 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.mens,        label: "Men's Fashion Photography" },
        { img: IMGS.womens,      label: "Women's Fashion Photography" },
        { img: IMGS.ethnic,      label: 'Ethnic Wear Photography' },
        { img: IMGS.western,     label: 'Western Wear Photography' },
        { img: IMGS.accessories, label: 'Accessories Photography' },
    ];

    const gallery = [
        { img: IMGS.frontPose,   caption: 'Model — Front Pose' },
        { img: IMGS.backPose,    caption: 'Side & Back Pose' },
        { img: IMGS.fullBody,    caption: 'Full-Body Fashion' },
        { img: IMGS.fabricDetail,caption: 'Fabric Detail Close-Up' },
        { img: IMGS.lifestyle,   caption: 'Lifestyle Fashion' },
        { img: IMGS.flatlay,     caption: 'Flat Lay Layout' },
        { img: IMGS.jacket,      caption: 'Studio White BG' },
        { img: IMGS.ethnic,      caption: 'Ethnic Wear Shoot' },
    ];

    const stats = [
        { number: '20,000+', label: 'Ajio SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '42%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Ajio Marketplace Ready',
            desc: 'Every image delivered to exact Ajio spec — correct dimensions, minimal backgrounds, zero watermarks — approved every time.'
        },
        {
            icon: <Users size={24} />,
            title: 'Premium Model-Based Visuals',
            desc: 'In-house models and experienced stylists present every garment with editorial quality that matches Ajio buyer expectations.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so Ajio shoppers can inspect every fabric detail, stitch, and finish at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Editorial Fashion Lighting',
            desc: 'Softbox and diffused studio lighting creates the clean, premium look that Ajio fashion buyers expect from top brands.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting, pose angles, and post-production across your entire SKU range for a cohesive premium brand look.'
        },
    ];

    const testimonials = [
        {
            name: 'Kavya Reddy', role: "Women's Fashion Brand — Ajio", rating: 5,
            text: "Prodshoot completely transformed our Ajio listings. Our dresses and co-ord sets look absolutely editorial — CTR jumped 44% in the first three weeks."
        },
        {
            name: 'Vikram Sinha', role: "Men's Apparel Seller — Ajio", rating: 5,
            text: 'The shirt and chino model shots are sharp, clean, and perfectly match the premium aesthetic Ajio expects. Zero rejections across our entire catalogue.'
        },
        {
            name: 'Deepa Nair', role: 'Ethnic Wear Brand — Ajio', rating: 5,
            text: 'Our kurta and saree collections have never looked this good. The colour accuracy and fabric texture in every image drove a 30% drop in return rates.'
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
                            AJIO FASHION PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Ajio Fashion<br />Photography<br />That Converts
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Premium fashion photography designed for Ajio marketplace product listings. Model shoots, editorial lighting, and minimal backgrounds — every image built to Ajio standards.
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
                            <a href="#ajio-fashion-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Ajio fashion photography" />
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
            <section className="service-section" id="ajio-fashion-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Ajio Fashion Portfolio</h2>
                    <p>Model Shoots, Flat Lay & Editorial — Our Work</p>
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

            {/* ─── WHY PROFESSIONAL ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Fashion Photography Wins on Ajio</h2>
                        <p className="service-section-desc">
                            Ajio positions itself as a premium fashion destination. Editorial-quality images outperform basic product shots by a wide margin. We deliver images that match the Ajio aesthetic — minimal, sharp, and premium — every single time.
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
                        <img src={IMGS.why} alt="Professional Ajio fashion photography" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Ajio Fashion Success</p>
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
                    <p>From Your Garment to a Live Ajio Listing</p>
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
                    <p>Specialised Shoots for Every Style on Ajio</p>
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
                                <p>Premium models, editorial lighting, and expert post-production — delivered Ajio-ready.</p>
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
                    <p>Real Results from Ajio Fashion Brands</p>
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
                                Make Your Fashion<br />Products Look Premium<br />on Ajio
                            </h2>
                            <p>
                                Ship us your garments — we deliver Ajio-ready images that match the platform's editorial aesthetic and turn browsers into buyers.
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

export default AjioFashion;
