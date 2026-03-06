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

/* ── Unsplash grocery / food product images ── */
const IMGS = {
    hero:      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    packaged:  'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=600&q=80',
    snacks:    'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80',
    beverage:  'https://images.unsplash.com/photo-1534353473418-4cfa2c56fd38?w=600&q=80',
    spices:    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    grains:    'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
    oil:       'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    flatlay:   'https://images.unsplash.com/photo-1543168256-418811576931?w=600&q=80',
    multipack: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?w=600&q=80',
};

function FlipkartGrocery() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background (RGB 255,255,255) for all primary images',
        'Crystal-clear packaging label and ingredient list visibility',
        'High-resolution zoom-ready shots — minimum 2000×2000 px',
        'Multiple angles: front, side, top, detail, and multi-pack views',
        'Professional lighting that makes colour-coded packaging pop',
        'Accurate colour reproduction matching physical product packaging',
        'JPEG format, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Grocery Products',
            desc: 'Pack and courier your products to our studio. We handle every item carefully and maintain food-grade hygiene protocols.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photoshoot',
            desc: 'Our team shoots every angle with softbox lighting rigs optimised to highlight packaging design, label clarity, and product colour.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert post-production — background removal, colour accuracy, shadow rendering, and label sharpening for every pack.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.packaged,  label: 'Packaged Food Photography' },
        { img: IMGS.snacks,    label: 'Snacks & Biscuit Photography' },
        { img: IMGS.beverage,  label: 'Beverage Product Photography' },
        { img: IMGS.spices,    label: 'Spices & Masala Photography' },
        { img: IMGS.grains,    label: 'Grain & Pulse Packaging Photography' },
    ];

    const gallery = [
        { img: IMGS.packaged,  caption: 'Front View' },
        { img: IMGS.beverage,  caption: 'Side Angle' },
        { img: IMGS.spices,    caption: 'Packaging Detail' },
        { img: IMGS.snacks,    caption: 'With Ingredients' },
        { img: IMGS.multipack, caption: 'Multi-Pack Shot' },
        { img: IMGS.flatlay,   caption: 'Flat Lay Setup' },
        { img: IMGS.grains,    caption: 'Studio White BG' },
        { img: IMGS.oil,       caption: 'Bottle & Jar Shoot' },
    ];

    const stats = [
        { number: '12,000+', label: 'Grocery SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '36%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every file delivered in exact Flipkart spec — correct dimensions, pure white background, and no text overlays or watermarks.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Clear Packaging & Label Visibility',
            desc: 'Packaging labels, ingredient lists, MRP, and certifications are all razor-sharp so buyers can read every detail before purchasing.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can inspect packaging text, expiry details, and nutritional information at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Professional Lighting for Packaging',
            desc: 'Softbox diffused lighting eliminates harsh reflections on foil packs, plastic bottles, and glossy cartons — every product gleams.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Clean White Background',
            desc: 'Studio-controlled RGB 255,255,255 backgrounds that meet Flipkart seller guidelines — zero listing rejections guaranteed.'
        },
    ];

    const testimonials = [
        {
            name: 'Sanjay Gupta', role: 'FMCG Brand — Flipkart Seller', rating: 5,
            text: 'Our snack and biscuit listings looked completely amateur before Prodshoot. Now every pack looks like a premium product. Conversions went up 38% in the first month.'
        },
        {
            name: 'Meena Sharma', role: 'Spices & Masala Distributor', rating: 5,
            text: 'The spice packet shots are incredible — every colour, every label, every certification mark is perfectly sharp. Zero rejections and our search rank improved significantly.'
        },
        {
            name: 'Rajesh Kumar', role: 'Organic Food Brand Owner', rating: 5,
            text: 'We had 80 grocery SKUs to shoot in one week. Prodshoot delivered every image on time, perfectly consistent, and every single one passed Flipkart review first try.'
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
                            FLIPKART GROCERY PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Grocery<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional grocery product photography optimized for Flipkart marketplace listings. Label-sharp, colour-accurate, and fully compliant — every pack, every angle.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK GROCERY SHOOT
                                </motion.div>
                            </Link>
                            <a href="#grocery-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart grocery product photography" />
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
            <section className="service-section" id="grocery-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Grocery Product Portfolio</h2>
                    <p>Every Pack, Every Angle — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL GROCERY PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Grocery Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Grocery buyers need to read labels, verify brands, and trust what they see before adding to cart. Sharp packaging detail, accurate colours, and clean backgrounds directly reduce returns and increase repeat purchases.
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
                        <img src={IMGS.flatlay} alt="Professional grocery product photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Grocery Success</p>
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
                    <p>From Your Products to a Live Flipkart Listing</p>
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

            {/* ─── GROCERY CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Grocery Categories</h2>
                    <p>Specialised Shoots for Every Food Product Type</p>
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
                                <p>Dedicated studio setup, label-sharp lighting, and Flipkart-compliant delivery for every food product.</p>
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
                    <p>Real Results from Real Grocery Brands</p>
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
                                Make Your Grocery<br />Products Look Attractive<br />on Flipkart
                            </h2>
                            <p>
                                Ship us your products — we deliver Flipkart-ready images that pass every spec check and turn browsers into repeat buyers.
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

export default FlipkartGrocery;
