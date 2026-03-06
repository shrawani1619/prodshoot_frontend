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
    Cpu,
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

/* ── Unsplash electronics images (free, no auth required) ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    smartphone: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80',
    laptop:     'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    watch:      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    speaker:    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    tablet:     'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80',
    camera:     'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    earbuds:    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
};

function FlipkartElectronics() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background (RGB 255,255,255) for all primary images',
        'Polarised lighting eliminates glare on glass, chrome, and screens',
        'High-resolution zoom-ready shots — minimum 2000×2000 px',
        'Multiple angles: front, side, back, close-up, and set views',
        'Accurate screen colour simulation for display products',
        'Consistent catalog-wide visual style for multi-SKU brands',
        'JPEG format, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Electronics',
            desc: 'Pack and courier your products safely to our studio. We use anti-static handling for all electronic devices.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photography',
            desc: 'Calibrated softbox and polarised lighting rigs capture every detail — ports, buttons, screens, and textures — glare-free.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Editing & Product Retouching',
            desc: 'Expert post-production — background removal, screen compositing, reflection control, and colour accuracy correction.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.smartphone, label: 'Smartphone Photography' },
        { img: IMGS.laptop,     label: 'Laptop Photography' },
        { img: IMGS.headphones, label: 'Accessories Photography' },
        { img: IMGS.watch,      label: 'Smart Gadget Photography' },
        { img: IMGS.speaker,    label: 'Home Electronics Photography' },
    ];

    const gallery = [
        { img: IMGS.smartphone, caption: 'Front View' },
        { img: IMGS.laptop,     caption: 'Side Angle' },
        { img: IMGS.headphones, caption: 'Back View' },
        { img: IMGS.watch,      caption: 'Detail Close-Up' },
        { img: IMGS.speaker,    caption: 'With Packaging' },
        { img: IMGS.tablet,     caption: 'Product Set' },
        { img: IMGS.camera,     caption: 'Studio White BG' },
        { img: IMGS.earbuds,    caption: 'Flat Lay' },
    ];

    const stats = [
        { number: '15,000+', label: 'Electronics SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '41%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Flipkart Marketplace Ready',
            desc: 'Every file delivered in exact Flipkart spec — correct dimensions, pure white background, and no watermarks or text overlays.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can inspect every port, button, and label detail at full zoom.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Lighting for Reflective Surfaces',
            desc: 'Polarised softbox rigs eliminate glare on glass displays, chrome bezels, and glossy plastic — every shot is reflection-free.'
        },
        {
            icon: <Sparkles size={24} />,
            title: 'Clean White Background',
            desc: 'Studio-controlled RGB 255,255,255 backgrounds that meet Flipkart seller guidelines — zero listing rejections guaranteed.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Consistent Catalog Visuals',
            desc: 'Uniform lighting, angles, and post-processing across all your SKUs create a professional, trust-building product catalog.'
        },
    ];

    const testimonials = [
        {
            name: 'Vikram Joshi', role: 'Smartphone Reseller — Flipkart', rating: 5,
            text: 'The phone shots are absolutely stunning — zero screen glare, perfect chrome reflections, and every port detail is razor sharp. Our listings look flagship-quality now.'
        },
        {
            name: 'Nisha Kapoor', role: 'Electronics Accessories Brand', rating: 5,
            text: 'Our headphone and earbuds catalog looks incredible. The product set shots and lifestyle images drove a 44% spike in our add-to-cart rate within the first three weeks.'
        },
        {
            name: 'Aditya Rao', role: 'Laptop & Gadget Distributor', rating: 5,
            text: 'We had 50 SKUs to shoot in 3 days. Prodshoot delivered every single image on time, perfectly consistent, and every one passed Flipkart review on first upload.'
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
                            FLIPKART ELECTRONICS PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Electronics<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional electronics product photography designed for Flipkart marketplace listings. Glare-free, detail-sharp, and fully compliant — every device, every angle.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK ELECTRONICS SHOOT
                                </motion.div>
                            </Link>
                            <a href="#electronics-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart electronics product photography" />
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
            <section className="service-section" id="electronics-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Electronics Portfolio</h2>
                    <p>Every Angle, Every Device — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL ELECTRONICS PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Electronics Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Electronics buyers scrutinise every pixel before purchasing. Glare-free surfaces, sharp port details, and accurate screen colours directly reduce returns and build buyer trust. We meet every Flipkart specification.
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
                        <img src={IMGS.laptop} alt="Professional electronics photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Electronics Success</p>
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
                    <p>From Your Device to a Live Flipkart Listing</p>
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

            {/* ─── ELECTRONICS CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Electronics Categories</h2>
                    <p>Specialised Shoots for Every Device Type</p>
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
                                <p>Dedicated studio setup, polarised glare-free lighting, and Flipkart-compliant delivery for every device.</p>
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
                    <p>Real Results from Real Electronics Brands</p>
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
                                Make Your Electronics<br />Products Look Premium<br />on Flipkart
                            </h2>
                            <p>
                                Ship us your devices — we deliver Flipkart-ready images that pass every spec check and convert browsers into buyers.
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

export default FlipkartElectronics;
