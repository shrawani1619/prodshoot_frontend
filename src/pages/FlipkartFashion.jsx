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
    Lightbulb,
    Sparkles,
    ScanLine,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash fashion images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    mens:       'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80',
    womens:     'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    ethnic:     'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
    kids:       'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    accessories:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    flatlay:    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
    ghost:      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    model:      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
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

function FlipkartFashion() {

    const features = [
        'Flipkart marketplace-ready images delivered first try',
        'Proper studio lighting to reveal fabric texture and drape',
        'High-resolution zoom-ready images — minimum 1000×1000 px',
        'Front, back, detail, flat-lay, and model-on angles covered',
        'Pure white background (RGB 255,255,255) for all main images',
        'Ghost mannequin technique for hollow neck & clean apparel look',
        'Colour-accurate post-production matching physical garment',
        'JPEG format, sRGB colour profile — no watermarks, no borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Fashion Products',
            desc: 'Pack and dispatch your clothing to our studio. We handle every garment with care and steam/press on arrival.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photoshoot',
            desc: 'Our team shoots on ghost mannequin, flat-lay, and live model setups with calibrated softbox lighting.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert retouching — background removal, ghost mannequin join, colour grading, and thread clean-up.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered in 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.mens,        label: "Men's Clothing Photography" },
        { img: IMGS.womens,      label: "Women's Fashion Photography" },
        { img: IMGS.ethnic,      label: 'Ethnic Wear Photography' },
        { img: IMGS.kids,        label: 'Kids Wear Photography' },
        { img: IMGS.accessories, label: 'Accessories Photography' },
    ];

    const gallery = [
        { img: IMGS.mens,        caption: 'Front View' },
        { img: IMGS.womens,      caption: 'Back View' },
        { img: IMGS.flatlay,     caption: 'Folded Product' },
        { img: IMGS.flatlay,     caption: 'Flat Lay' },
        { img: IMGS.model,       caption: 'Model Wearing' },
        { img: IMGS.ethnic,      caption: 'Lifestyle Shoot' },
        { img: IMGS.ghost,       caption: 'Ghost Mannequin' },
        { img: IMGS.accessories, caption: 'Detail Close-Up' },
    ];

    const stats = [
        { number: '25,000+', label: 'Fashion SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '38%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every image delivered in exact Flipkart spec — correct dimensions, white background, and zero watermarks.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Lighting for Fabric Details',
            desc: 'Softbox and diffused studio lighting reveals weave, texture, print, and embroidery with total accuracy.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can inspect stitching, buttons, and fabric at full zoom.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Multiple Product Angles',
            desc: 'Front, back, side, detail, and flat-lay shots give online shoppers a complete picture before buying.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Clean White Background',
            desc: 'Studio-pure RGB 255,255,255 white backgrounds that meet Flipkart guidelines — approved every time.'
        },
    ];

    const testimonials = [
        {
            name: 'Divya Sharma', role: "Women's Fashion Brand — Flipkart", rating: 5,
            text: "Our women's kurta listings looked dull before. After Prodshoot, the images are so crisp and vibrant that our add-to-cart rate doubled in two weeks."
        },
        {
            name: 'Karan Mehta', role: "Men's Clothing Seller", rating: 5,
            text: 'The ghost mannequin shots for our shirts are flawless — every collar, button placket, and pocket detail is razor sharp. Zero rejections on Flipkart upload.'
        },
        {
            name: 'Pooja Iyer', role: 'Ethnic Wear Boutique', rating: 5,
            text: 'The fabric textures and embroidery work in our saree shots look absolutely stunning. Returns dropped by 30% since we switched to Prodshoot.'
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
                            FLIPKART FASHION PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Fashion<br />Photography<br />That Converts
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional fashion photography for Flipkart product listings that increases clicks and conversions. Ghost mannequin, flat-lay, model — every style covered.
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
                            <a href="#fashion-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart fashion product photography" />
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
            <section className="service-section" id="fashion-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Fashion Portfolio</h2>
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

            {/* ─── WHY PROFESSIONAL FASHION PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Fashion Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Fashion buyers make split-second decisions based entirely on images. Sharp details, accurate colour, and clean backgrounds are the difference between a bounce and a purchase. We hit every Flipkart requirement.
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
                        <img src={IMGS.why} alt="Professional fashion photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Fashion Success</p>
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
                    <p>From Your Garment to a Live Flipkart Listing</p>
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
                    <p>Specialised Shoots for Every Clothing Type</p>
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
                                <p>Dedicated studio setup, professional lighting, ghost mannequin or model — delivered Flipkart-ready.</p>
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
                    <p>Real Results from Real Fashion Brands</p>
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
                                Make Your Fashion<br />Products Look Premium<br />on Flipkart
                            </h2>
                            <p>
                                Ship us your garments — we deliver Flipkart-ready images that pass every spec check and turn browsers into buyers.
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

export default FlipkartFashion;
