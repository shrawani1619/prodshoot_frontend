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

/* ── Unsplash swimwear / fashion images ── */
const IMGS = {
    hero:      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    swimwear1: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    swimwear2: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    beach1:    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80',
    beach2:    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
    flatlay1:  'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
    flatlay2:  'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=600&q=80',
    fabric:    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    resort:    'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&q=80',
};

function FlipkartBikini() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background for product listing compliance',
        'Clear fabric texture, strap detail, and print pattern visibility',
        'High-resolution zoom-ready shots — minimum 2000×2000 px',
        'Ghost mannequin, flat-lay, and model-on shooting styles',
        'Soft diffused lighting for accurate colour and fabric sheen',
        'Colour-accurate post-production matching physical swimwear',
        'JPEG format, sRGB colour profile — no watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Swimwear Products',
            desc: 'Pack and courier your bikini and swimwear sets to our studio. All garments are steamed and prepped before shooting.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio or Model Shoot',
            desc: 'Ghost mannequin, flat-lay, and live model setups with soft diffused fashion lighting to showcase every detail perfectly.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert retouching — background removal, ghost mannequin join, colour grading, and fabric texture sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.swimwear1, label: 'Bikini Photography' },
        { img: IMGS.swimwear2, label: 'Swimwear Photography' },
        { img: IMGS.beach1,    label: 'Beachwear Photography' },
        { img: IMGS.resort,    label: 'Resort Wear Photography' },
        { img: IMGS.beach2,    label: "Women's Fashion Photography" },
    ];

    const gallery = [
        { img: IMGS.swimwear1, caption: 'Front View' },
        { img: IMGS.swimwear2, caption: 'Back View' },
        { img: IMGS.flatlay1,  caption: 'Flat Lay Bikini Set' },
        { img: IMGS.beach1,    caption: 'Model Wearing' },
        { img: IMGS.fabric,    caption: 'Fabric Texture' },
        { img: IMGS.beach2,    caption: 'Lifestyle Beachwear' },
        { img: IMGS.flatlay2,  caption: 'Studio White BG' },
        { img: IMGS.resort,    caption: 'Resort Wear' },
    ];

    const stats = [
        { number: '6,000+',  label: 'Swimwear SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '40%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every file in exact Flipkart spec — correct dimensions, pure white background, and no watermarks or text overlays.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Fabric & Design Visibility',
            desc: 'Print patterns, fabric texture, strap construction, and elastic quality are all captured sharply so buyers feel confident purchasing.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can inspect fabric weave, stitch quality, and print detail at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Professional Fashion Lighting',
            desc: 'Soft diffused studio lighting reproduces true swimwear colour and fabric sheen — no harsh shadows or washed-out tones.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting and retouching across your entire swimwear range creates a polished catalog that drives buyer trust and repeat purchases.'
        },
    ];

    const testimonials = [
        {
            name: 'Priya Kapoor', role: 'Swimwear Brand — Flipkart Seller', rating: 5,
            text: 'The bikini flat-lay shots are absolutely gorgeous. Every fabric detail, print, and strap construction is so sharp. Our add-to-cart rate doubled after switching to Prodshoot.'
        },
        {
            name: 'Neha Singh', role: 'Beachwear Fashion Label', rating: 5,
            text: 'The lifestyle and model shots are stunning — they capture the feel of the beach perfectly. Returns dropped 32% and our brand reviews improved immediately.'
        },
        {
            name: 'Sonal Mehta', role: 'Resort Wear Boutique Owner', rating: 5,
            text: 'Ghost mannequin swimwear is notoriously difficult but Prodshoot nailed every piece. All images passed Flipkart first try and the colour accuracy is outstanding.'
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
                            FLIPKART BIKINI & SWIMWEAR PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Bikini<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional bikini and swimwear photography designed for Flipkart marketplace listings to highlight style, fabric, and fit — ghost mannequin, flat-lay, and model shoots available.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK BIKINI SHOOT
                                </motion.div>
                            </Link>
                            <a href="#bikini-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.swimwear1} alt="Flipkart bikini swimwear photography" />
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
            <section className="service-section" id="bikini-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Swimwear Portfolio</h2>
                    <p>Every Style, Every Angle — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL SWIMWEAR PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Swimwear Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Swimwear buyers rely entirely on visuals to judge fit, fabric, and style. Sharp textures, accurate colours, and professional styling are the difference between a scroll-past and a purchase. We meet every Flipkart requirement.
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
                        <img src={IMGS.beach2} alt="Professional swimwear photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Swimwear Success</p>
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
                    <p>From Your Garments to a Live Flipkart Listing</p>
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

            {/* ─── SWIMWEAR CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Swimwear Categories</h2>
                    <p>Specialised Shoots for Every Swimwear Style</p>
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
                                <p>Ghost mannequin, flat-lay, and model shoots with soft fashion lighting — Flipkart-ready delivery guaranteed.</p>
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
                    <p>Real Results from Real Swimwear Brands</p>
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
                                Make Your Swimwear<br />Products Stand Out<br />on Flipkart
                            </h2>
                            <p>Ship us your swimwear — we deliver Flipkart-ready images that pass every spec check and convert browsers into buyers.</p>
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

export default FlipkartBikini;
