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

/* ── Unsplash Myntra fashion model photography images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    frontPose:  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    sidePose:   'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    walking:    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    detail:     'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
    studio:     'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80',
    ethnic:     'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
    western:    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    mens:       'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80',
    womens:     'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    accessories:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    catalog:    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    why:        'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=700&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function MyntraFashionModel() {

    const features = [
        'Myntra marketplace-ready images approved on first submission',
        'Professional in-house models with experienced stylists',
        'Front, side, walking, and detail poses — complete catalog coverage',
        'High-resolution 2000×2000 px delivery — zoom-ready for Myntra',
        'Pure white or clean studio backgrounds per Myntra guidelines',
        'Softbox lighting revealing fabric texture, drape, and design detail',
        'Colour-accurate retouching matching physical garment perfectly',
        'JPEG/PNG output, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Fashion Products',
            desc: 'Courier your garments to our studio. We steam, press, and prep every piece with our styling team before the shoot.'
        },
        {
            step: '02',
            icon: <Users size={24} />,
            title: 'Model Selection & Styling',
            desc: 'Our in-house models are selected to match your brand aesthetic. Our stylists perfect every accessory, fit, and fold.'
        },
        {
            step: '03',
            icon: <Camera size={24} />,
            title: 'Professional Studio Shoot',
            desc: 'Our team captures every required pose — front, side, walking, detail, lifestyle — with calibrated softbox lighting.'
        },
        {
            step: '04',
            icon: <Image size={24} />,
            title: 'Image Editing & Delivery',
            desc: "Expert retouching — background removal, colour correction, wrinkle clean-up, delivered in 24–48 hours."
        },
    ];

    const categories = [
        { img: IMGS.mens,        label: "Men's Fashion Photography" },
        { img: IMGS.womens,      label: "Women's Fashion Photography" },
        { img: IMGS.ethnic,      label: 'Ethnic Wear Photography' },
        { img: IMGS.western,     label: 'Western Wear Photography' },
        { img: IMGS.accessories, label: 'Fashion Accessories Photography' },
    ];

    const gallery = [
        { img: IMGS.frontPose,  caption: 'Front Pose' },
        { img: IMGS.sidePose,   caption: 'Side Pose' },
        { img: IMGS.walking,    caption: 'Walking Pose' },
        { img: IMGS.detail,     caption: 'Outfit Detail Shot' },
        { img: IMGS.lifestyle,  caption: 'Lifestyle Fashion' },
        { img: IMGS.studio,     caption: 'Studio Catalog' },
        { img: IMGS.ethnic,     caption: 'Ethnic Wear Shoot' },
        { img: IMGS.catalog,    caption: 'Flat Lay Catalog' },
    ];

    const stats = [
        { number: '22,000+', label: 'Model Shoot SKUs Done' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '45%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Myntra Marketplace Ready',
            desc: 'Every image delivered in exact Myntra spec — correct dimensions, clean backgrounds, and zero watermarks.'
        },
        {
            icon: <Users size={24} />,
            title: 'Professional Model Styling',
            desc: 'Experienced in-house models and stylists ensure every outfit is posed, lit, and presented to its maximum potential.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px output so Myntra shoppers can inspect every fabric and design detail at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Perfect Lighting for Fabric',
            desc: 'Softbox and diffused studio lighting perfectly reveals drape, embroidery, print, and weave texture.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Fashion Catalog Consistency',
            desc: 'Uniform lighting, angles, and post-production across your entire range creates a cohesive, premium brand look.'
        },
    ];

    const testimonials = [
        {
            name: 'Priya Singh', role: "Women's Fashion Brand — Myntra", rating: 5,
            text: "The model shoot quality is absolutely premium. Our dresses and kurtas look like high-fashion editorial shots — CTR jumped 50% on Myntra within a month."
        },
        {
            name: 'Rahul Nair', role: "Men's Apparel Seller", rating: 5,
            text: 'The front and side model poses for our shirts and trousers are exactly what Myntra shoppers expect. Zero rejections and incredible image quality.'
        },
        {
            name: 'Anjali Verma', role: 'Ethnic Wear Brand — Myntra', rating: 5,
            text: 'Our sarees and lehengas have never looked this stunning on a marketplace. The fabric drape, colour accuracy, and model styling are all top-notch.'
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
                            MYNTRA FASHION & MODEL PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Myntra Fashion<br />& Model<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional fashion and model photography designed for Myntra marketplace listings and fashion brands. Studio lighting, expert styling, and catalog-quality images — every outfit, every pose.
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
                            <a href="#model-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Myntra fashion model photography" />
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
            <section className="service-section" id="model-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Fashion Model Portfolio</h2>
                    <p>Studio Poses, Lifestyle Shoots & Catalog Images — Our Work</p>
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

            {/* ─── WHY PROFESSIONAL FASHION MODEL PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Model Photography Wins on Myntra</h2>
                        <p className="service-section-desc">
                            Myntra shoppers expect to see fashion the way it truly looks when worn. Professional models, expert styling, and calibrated studio lighting create the premium impression that drives clicks, reduces returns, and builds brand loyalty.
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
                        <img src={IMGS.why} alt="Professional fashion model photography for Myntra" />
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
                    <p>From Your Garment to a Live Myntra Model Listing</p>
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
                    <p>Specialised Model Shoots for Every Category on Myntra</p>
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
                                <p>Professional models, expert styling, and studio lighting — delivering Myntra-ready fashion images.</p>
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
                    <p>Real Results from Myntra Fashion Brands</p>
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
                                Make Your Fashion<br />Brand Look Premium<br />on Myntra
                            </h2>
                            <p>
                                Send us your garments — our models and studio deliver Myntra-ready images that drive clicks and build brand authority.
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

export default MyntraFashionModel;
