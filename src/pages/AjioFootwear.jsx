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

/* ── Unsplash Ajio-style premium footwear images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    sneakers:   'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    casual:     'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    formal:     'https://images.unsplash.com/photo-1614252234498-9e1c05e7b8d3?w=600&q=80',
    sandals:    'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80',
    heels:      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    sports:     'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    pair:       'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    topview:    'https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
    texture:    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
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

function AjioFootwear() {

    const features = [
        'Ajio marketplace-ready images approved on first submission',
        'Premium fashion catalog style matching Ajio brand standards',
        'High-resolution 2000×2000 px delivery — zoom-ready for shoppers',
        'Front, side, top, pair, lifestyle, and texture — full coverage',
        'Minimal clean backgrounds — pure white and light grey options',
        'Professional lighting that captures sole, upper, and material detail',
        'Colour-accurate retouching matching physical product perfectly',
        'JPEG format, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Footwear Products',
            desc: 'Pack and courier your shoes to our studio. We clean and prep every pair before the shoot begins.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photoshoot',
            desc: 'Our team captures every angle — front, side, top, pair, lifestyle, and close-up — with premium fashion lighting rigs.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert retouching — background cleanup, shadow rendering, colour grading, and sole and upper detail sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Delivery of Ajio-Ready Images',
            desc: "Final images delivered in 24–48 hours. Unlimited revisions until you're 100% satisfied."
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
        { img: IMGS.casual,    caption: 'Side Angle' },
        { img: IMGS.topview,   caption: 'Top View' },
        { img: IMGS.pair,      caption: 'Pair Shot' },
        { img: IMGS.lifestyle, caption: 'Lifestyle — Model Wearing' },
        { img: IMGS.texture,   caption: 'Material Texture Close-Up' },
        { img: IMGS.formal,    caption: 'Studio White BG' },
        { img: IMGS.heels,     caption: 'Detail Shot' },
    ];

    const stats = [
        { number: '15,000+', label: 'Footwear SKUs Shot' },
        { number: '98%',     label: 'First-Pass Approval' },
        { number: '39%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Ajio Marketplace Ready',
            desc: 'Every image delivered to exact Ajio spec — correct dimensions, minimal backgrounds, and zero watermarks — approved every time.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Premium Fashion Catalog Style',
            desc: "Ajio demands a premium aesthetic. Our footwear shoots deliver the editorial quality that elevates your brand on the platform."
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px so Ajio shoppers can zoom into stitching, sole ridges, buckles, and material at full quality.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Professional Lighting for Details',
            desc: 'Softbox and directional studio lighting highlights every surface detail — knit uppers, leather grain, rubber sole, and metal hardware.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Consistent Fashion Brand Visuals',
            desc: 'Uniform lighting, angles, and post-production across every SKU ensures your catalogue looks cohesive and premium on Ajio.'
        },
    ];

    const testimonials = [
        {
            name: 'Priya Nair', role: "Women's Footwear Brand — Ajio", rating: 5,
            text: "Our heels and sandals looked average in basic phone photos. Prodshoot transformed every pair into premium Ajio-worthy images. CTR went up 40% immediately."
        },
        {
            name: 'Aryan Mehta', role: 'Sneaker Retailer — Ajio', rating: 5,
            text: 'The sneaker shots are ultra-sharp — knit detail, sole profile, and toe box all crystal clear. Zero rejections and the lifestyle shots added incredible value.'
        },
        {
            name: 'Simran Kaur', role: 'Formal Shoes Brand — Ajio', rating: 5,
            text: 'Fast turnaround and perfect colour accuracy. Our leather oxfords look exactly as premium as they are. Returns dropped 25% since switching to Prodshoot.'
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
                            AJIO FOOTWEAR PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Ajio Footwear<br />Photography<br />That Converts
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Premium footwear photography designed for Ajio fashion marketplace listings. Every angle, every detail — soft lighting, minimal backgrounds, delivered Ajio-ready.
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
                            <a href="#ajio-footwear-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Ajio footwear product photography" />
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
            <section className="service-section" id="ajio-footwear-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Footwear Portfolio</h2>
                    <p>Every Angle, Every Style — Our Ajio Footwear Work</p>
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
                        <h2 className="service-section-title display-bold">Why Professional Footwear Photography Wins on Ajio</h2>
                        <p className="service-section-desc">
                            Ajio shoppers browse premium fashion footwear and make decisions entirely based on image quality. Sharp sole profiles, accurate colour, and clean minimal backgrounds are what stop the scroll. We deliver every image to Ajio's exacting standards.
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
                        <img src={IMGS.why} alt="Professional Ajio footwear photography" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Ajio Footwear Success</p>
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
                    <p>From Your Shoes to a Live Ajio Listing</p>
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
                    <p>Specialised Shoots for Every Footwear Type on Ajio</p>
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
                                <p>Premium studio setup, fashion-grade lighting, and expert post-production — delivered Ajio-ready.</p>
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
                    <p>Real Results from Ajio Footwear Brands</p>
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
                                Make Your Footwear<br />Products Look Premium<br />on Ajio
                            </h2>
                            <p>
                                Send us your shoes — we deliver Ajio-ready images that match the platform's premium aesthetic and turn browsers into buyers.
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

export default AjioFootwear;
