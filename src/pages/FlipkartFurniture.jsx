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

/* ── Unsplash furniture images ── */
const IMGS = {
    hero:    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    sofa:    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    chair:   'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    dining:  'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
    bed:     'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
    office:  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    cabinet: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80',
    texture: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    room:    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80',
};

function FlipkartFurniture() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background or minimal interior setup for hero shots',
        'Clear visibility of material grain, upholstery texture, and finish',
        'High-resolution zoom-ready shots — minimum 2000×2000 px',
        'Multiple angles: front, side, detail, lifestyle, and wide shots',
        'Balanced natural-shadow lighting for large product dimensions',
        'Accurate colour reproduction for fabric, wood, and metal finishes',
        'JPEG format, sRGB colour profile — zero watermarks or overlays',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Products or Arrange Pickup',
            desc: 'Ship smaller furniture pieces to our studio or schedule our team for an on-site shoot at your warehouse or showroom.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio or Lifestyle Shoot',
            desc: 'Large-format softbox rigs and precision positioning capture every dimension — front, side, detail, and styled room setup.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Colour Correction',
            desc: 'Expert post-production — background removal, shadow rendering, colour grading, and texture sharpening for every piece.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 48–72 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.sofa,    label: 'Sofa Photography' },
        { img: IMGS.chair,   label: 'Chair Photography' },
        { img: IMGS.dining,  label: 'Dining Table Photography' },
        { img: IMGS.bed,     label: 'Bedroom Furniture Photography' },
        { img: IMGS.office,  label: 'Office Furniture Photography' },
    ];

    const gallery = [
        { img: IMGS.sofa,    caption: 'Front View' },
        { img: IMGS.chair,   caption: 'Side Angle' },
        { img: IMGS.texture, caption: 'Material Detail' },
        { img: IMGS.room,    caption: 'Lifestyle Room Setup' },
        { img: IMGS.dining,  caption: 'Full Product Wide Shot' },
        { img: IMGS.bed,     caption: 'Multiple Pieces' },
        { img: IMGS.office,  caption: 'Studio White BG' },
        { img: IMGS.cabinet, caption: 'Cabinet & Storage' },
    ];

    const stats = [
        { number: '8,000+',  label: 'Furniture SKUs Shot' },
        { number: '98%',     label: 'First-Pass Approval' },
        { number: '33%',     label: 'Avg. Conversion Boost' },
        { number: '72H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every file in exact Flipkart spec — correct dimensions, clean background, and no text overlays or watermarks.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Material & Texture Clarity',
            desc: 'Wood grain, fabric weave, metal polish, and leather grain are all captured with precision so buyers know exactly what they are buying.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px so buyers can inspect joinery, upholstery stitching, and surface finish at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Lighting for Large Products',
            desc: 'Large-format softbox and strip light rigs eliminate harsh shadows and create the even, flattering light that makes furniture look premium.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting, camera heights, and post-processing across all your SKUs builds a professional, trust-driving product catalog.'
        },
    ];

    const testimonials = [
        {
            name: 'Arjun Malhotra', role: 'Furniture Brand — Flipkart Seller', rating: 5,
            text: 'Our sofa and dining set listings look absolutely premium now. The material texture shots are so sharp that our return rate dropped by 28% — customers know exactly what they are getting.'
        },
        {
            name: 'Sunita Reddy', role: 'Home Décor & Furniture Retailer', rating: 5,
            text: 'The lifestyle room setup images are stunning. Buyers can visualise the furniture in their own home. Our click-through rate doubled within two weeks of updating the images.'
        },
        {
            name: 'Deepak Sharma', role: 'Office Furniture Manufacturer', rating: 5,
            text: 'We needed 120 SKUs photographed with complete consistency. Prodshoot delivered every single image on time, perfectly matched, and all passed Flipkart review on first upload.'
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
                            FLIPKART FURNITURE PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Furniture<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional furniture photography designed for Flipkart marketplace listings to highlight design, material, and quality — every piece, every angle, every detail.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK FURNITURE SHOOT
                                </motion.div>
                            </Link>
                            <a href="#furniture-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart furniture product photography" />
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
            <section className="service-section" id="furniture-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Furniture Portfolio</h2>
                    <p>Every Piece, Every Angle — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL FURNITURE PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Furniture Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Furniture is a high-consideration purchase. Buyers study every grain, seam, and shadow before committing. Sharp material details, accurate colour, and lifestyle context directly reduce returns and build buyer confidence.
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
                        <img src={IMGS.room} alt="Professional furniture photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Furniture Success</p>
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
                    <p>From Your Showroom to a Live Flipkart Listing</p>
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

            {/* ─── FURNITURE CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Furniture Categories</h2>
                    <p>Specialised Shoots for Every Furniture Type</p>
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
                                <p>Large-format studio setup, balanced natural-shadow lighting, and Flipkart-compliant delivery for every piece.</p>
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
                    <p>Real Results from Real Furniture Brands</p>
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
                                Make Your Furniture<br />Products Stand Out<br />on Flipkart
                            </h2>
                            <p>
                                Send us your pieces — we deliver Flipkart-ready images that pass every spec check and give buyers the confidence to purchase.
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

export default FlipkartFurniture;
