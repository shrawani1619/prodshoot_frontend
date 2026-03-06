import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Camera,
    CheckCircle2,
    Package,
    Image,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    ArrowRight,
    Send,
    Phone,
    TrendingUp,
    Award,
    Maximize2,
    Droplets,
    ScanLine,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash product photography images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    ecommerce:  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    fashion:    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    jewellery:  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    electronics:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    studio:     'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    beauty:     'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    kitchen:    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    catalog:    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    baslider:   'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

/* ─── Before / After Slider ─── */
function BeforeAfterSlider() {
    const [pos, setPos] = useState(50);
    const containerRef = useRef(null);
    const dragging = useRef(false);

    const updatePos = (clientX) => {
        const rect = containerRef.current.getBoundingClientRect();
        const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
        setPos(pct);
    };

    return (
        <div className="flipkart-ba-wrapper">
            <div
                ref={containerRef}
                className="flipkart-ba-container"
                onMouseMove={(e) => dragging.current && updatePos(e.clientX)}
                onMouseUp={() => { dragging.current = false; }}
                onMouseLeave={() => { dragging.current = false; }}
                onTouchMove={(e) => updatePos(e.touches[0].clientX)}
            >
                {/* After — base layer */}
                <div className="flipkart-ba-after">
                    <img src={IMGS.catalog} alt="Professional Flipkart-ready photo" />
                    <span className="flipkart-ba-label flipkart-ba-right">AFTER — Professional</span>
                </div>

                {/* Before — clipped */}
                <div className="flipkart-ba-before" style={{ width: `${pos}%` }}>
                    <img src={IMGS.baslider} alt="Before — standard photo" />
                    <span className="flipkart-ba-label flipkart-ba-left">BEFORE — Standard</span>
                </div>

                {/* Handle */}
                <div
                    className="flipkart-ba-handle"
                    style={{ left: `${pos}%` }}
                    onMouseDown={() => { dragging.current = true; }}
                    onTouchStart={() => { dragging.current = true; }}
                >
                    <div className="flipkart-ba-circle">
                        <ArrowRight size={10} style={{ transform: 'rotate(180deg)' }} />
                        <ArrowRight size={10} />
                    </div>
                </div>
            </div>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '1rem' }}>
                Drag the slider · See the difference professional photography makes
            </p>
        </div>
    );
}

function FlipkartPhotography() {

    const requirements = [
        { icon: <Droplets size={20} />, title: 'Pure White Background', desc: "RGB 255,255,255 clean white — Flipkart's primary image mandate for all product listings." },
        { icon: <Maximize2 size={20} />, title: 'High Resolution', desc: 'Minimum 1000×1000 px with zoom-ready sharpness for detailed product inspection.' },
        { icon: <ScanLine size={20} />, title: 'Multiple Angles', desc: 'Front, back, side, and detail shots giving buyers a full 360° product view.' },
        { icon: <Zap size={20} />, title: 'Zoom-Ready Quality', desc: 'Crisp macro detail that holds up at 4× zoom — zero compression artifacts.' },
        { icon: <Shield size={20} />, title: 'No Watermarks', desc: 'Clean, watermark-free images fully compliant with Flipkart seller guidelines.' },
    ];

    const services = [
        { img: IMGS.ecommerce,  title: 'E-Commerce Product Photography', desc: 'Studio-white backgrounds with full compliance to Flipkart image standards for every category.' },
        { img: IMGS.fashion,    title: 'Fashion & Apparel Photography', desc: 'Ghost mannequin, flat-lay, and model shots for clothing, kurtas, sarees, and more.' },
        { img: IMGS.jewellery,  title: 'Jewellery Photography', desc: 'Macro-precision ring, necklace, and earring photography with flawless retouching.' },
        { img: IMGS.electronics,title: 'Electronics Product Shoot', desc: 'Multi-angle technical shots with glare-free lighting for phones, gadgets, and appliances.' },
        { img: IMGS.lifestyle,  title: 'Lifestyle Product Photography', desc: 'In-context lifestyle imagery that tells your brand story and builds buyer trust.' },
    ];

    const benefits = [
        { icon: <CheckCircle2 size={20} />, text: 'Marketplace-ready images on first delivery' },
        { icon: <Zap size={20} />, text: 'Faster product listing approval' },
        { icon: <TrendingUp size={20} />, text: 'Higher conversion rates & fewer returns' },
        { icon: <Layers size={20} />, text: 'Consistent catalog visuals across all SKUs' },
        { icon: <Award size={20} />, text: 'Affordable per-product pricing' },
    ];

    const process = [
        { step: '01', icon: <Package size={24} />, title: 'Send Your Product', desc: 'Ship your products to our studio. We provide secure handling and fast turnaround.' },
        { step: '02', icon: <Camera size={24} />, title: 'Professional Photoshoot', desc: 'Our team shoots every angle with calibrated studio lighting for perfect results.' },
        { step: '03', icon: <Image size={24} />, title: 'Image Editing & Retouching', desc: 'Expert post-production — background removal, colour grading, and precision sharpening.' },
        { step: '04', icon: <Zap size={24} />, title: 'Receive Flipkart-Ready Images', desc: "Delivery in 24–48 hours. Unlimited revisions until you're 100% satisfied." },
    ];

    const categories = [
        { label: 'Fashion',       img: IMGS.fashion },
        { label: 'Footwear',      img: IMGS.studio },
        { label: 'Electronics',   img: IMGS.electronics },
        { label: 'Beauty Products',img: IMGS.beauty },
        { label: 'Home & Kitchen', img: IMGS.kitchen },
    ];

    const testimonials = [
        {
            name: 'Rahul Sharma', role: 'Flipkart Seller — Footwear', rating: 5,
            text: 'Our CTR jumped 38% after switching to Prodshoot. The images are crisp, compliant, and delivered faster than any other studio we have used.'
        },
        {
            name: 'Priya Mehta', role: 'Fashion Brand Owner', rating: 5,
            text: 'The fashion shots are stunning. Ghost mannequin execution is flawless and every image passes Flipkart review on the first upload.'
        },
        {
            name: 'Amit Kapoor', role: 'Electronics Reseller', rating: 5,
            text: 'Technical product photography is hard to get right. Prodshoot nailed glare-free multi-angle shots for all our gadgets. Highly recommended.'
        },
    ];

    const stats = [
        { number: '30,000+', label: 'Flipkart Listings Shot' },
        { number: '98.5%', label: 'First-Pass Approval' },
        { number: '35%', label: 'Avg. Conversion Boost' },
        { number: '48H', label: 'Max Delivery Time' },
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
                            FLIPKART PHOTOGRAPHY SERVICE
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Ready<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional images designed to increase your product sales on Flipkart and other marketplaces. Compliant, crisp, and conversion-optimised.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    START PHOTOSHOOT
                                </motion.div>
                            </Link>
                            <a href="#flipkart-portfolio" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart product photography studio" />
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

            {/* ─── BEFORE / AFTER ─── */}
            <section className="service-section">
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="section-heading">
                        <h2>Before &amp; After</h2>
                        <p>See the difference professional photography makes</p>
                    </div>
                    <BeforeAfterSlider />
                </div>
            </section>

            {/* ─── FLIPKART REQUIREMENTS ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">PLATFORM COMPLIANT</span>
                        <h2 className="service-section-title display-bold">Flipkart Image Requirements We Always Meet</h2>
                        <p className="service-section-desc">
                            We know every specification so your listings never get rejected. From pure-white backgrounds to zoom-ready resolution — fully covered.
                        </p>
                        <ul className="feature-checklist">
                            {requirements.map((r, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <CheckCircle2 size={16} />
                                    <span><strong>{r.title}</strong> — {r.desc}</span>
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
                        <img src={IMGS.ecommerce} alt="Flipkart image requirements" />
                    </motion.div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Services</h2>
                    <p>End-to-End Marketplace Photography</p>
                </div>

                <div className="flipkart-services-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="flipkart-service-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -5, borderColor: 'var(--border-hover)' }}
                        >
                            <div className="flipkart-service-img">
                                <img src={s.img} alt={s.title} />
                            </div>
                            <div className="flipkart-service-body">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <Link to="/contact" className="flipkart-learn-more">
                                    Learn More <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── SELLER BENEFITS ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <motion.div
                        className="service-section-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={IMGS.catalog} alt="Flipkart seller benefits" />
                    </motion.div>
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY CHOOSE US</span>
                        <h2 className="service-section-title display-bold">Why Flipkart Sellers Choose Our Photography</h2>
                        <ul className="feature-checklist">
                            {benefits.map((b, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    {b.icon}
                                    <span>{b.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <Link to="/contact" style={{ textDecoration: 'none', marginTop: '2rem', display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                GET A FREE QUOTE <ArrowUpRight size={18} />
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>How It Works</h2>
                    <p>Four Simple Steps to Flipkart-Ready Images</p>
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

            {/* ─── CATEGORY SHOWCASE ─── */}
            <section className="service-section" id="flipkart-portfolio">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Category Showcase</h2>
                    <p>Work Across Every Product Category</p>
                </div>

                <div className="sample-gallery">
                    {categories.map((c, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -4 }}
                            style={{ position: 'relative' }}
                        >
                            <img src={c.img} alt={c.label} />
                            <div className="flipkart-cat-label">
                                <span>{c.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Us</h2>
                    <p>Flipkart Photography Experts</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: '98.5% Approval Rate', desc: 'Our images pass Flipkart compliance checks on the first try. No rejections, no listing delays.' },
                        { icon: <Clock size={24} />, title: '24–48H Turnaround', desc: 'Need images fast? We offer same-day and next-day delivery for time-sensitive product launches.' },
                        { icon: <Star size={24} />, title: 'Conversion Focused', desc: "We don't just meet guidelines — we craft images designed to maximise click-through and sales." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── TESTIMONIALS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Client Stories</h2>
                    <p>What Flipkart Sellers Say</p>
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
                                    <Star key={si} size={14} fill="#a855f7" color="#a855f7" />
                                ))}
                            </div>
                            <p className="why-card" style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.text}"</p>
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
                                Boost Your Flipkart Sales<br />with Professional Photography
                            </h2>
                            <p>
                                Ship us your products — we deliver Flipkart-ready images that pass every guideline and convert browsers into buyers.
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

export default FlipkartPhotography;
