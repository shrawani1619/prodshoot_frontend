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
    Microscope,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── Unsplash medical/healthcare images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    device:     'https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=600&q=80',
    surgical:   'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=80',
    healthcare: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    kit:        'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
    packaging:  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    flatlay:    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    label:      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    detail:     'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80',
    why:        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function FlipkartMedical() {

    const features = [
        'Flipkart marketplace-ready images — approved on first upload',
        'Pure white background (RGB 255,255,255) for all primary images',
        'Accurate colour reproduction for medical product labelling',
        'High-resolution zoom-ready shots — minimum 1000×1000 px',
        'Multiple angles: front, side, top, detail, and packaging views',
        'Professional lighting that eliminates glare on plastic and metal',
        'Close-up shots revealing serial numbers, labels, and graduations',
        'JPEG format, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Medical Products',
            desc: 'Pack and courier your products to our studio. We handle every item with care and maintain hygiene protocols.'
        },
        {
            step: '02',
            icon: <Camera size={24} />,
            title: 'Professional Studio Photoshoot',
            desc: 'Our team shoots every angle with calibrated lighting rigs designed to eliminate glare on glass, metal, and plastic surfaces.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Retouching',
            desc: 'Expert post-production — background removal, colour accuracy correction, shadow rendering, and label sharpening.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Flipkart-Ready Image Delivery',
            desc: "Final images delivered within 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.device,     label: 'Medical Device Photography' },
        { img: IMGS.surgical,   label: 'Surgical Instrument Photography' },
        { img: IMGS.healthcare, label: 'Healthcare Product Photography' },
        { img: IMGS.kit,        label: 'Medical Kit Photography' },
        { img: IMGS.packaging,  label: 'Medical Packaging Photography' },
    ];

    const gallery = [
        { img: IMGS.device,     caption: 'Front View' },
        { img: IMGS.surgical,   caption: 'Side Angle' },
        { img: IMGS.detail,     caption: 'Detail Close-Up' },
        { img: IMGS.packaging,  caption: 'Packaging Shot' },
        { img: IMGS.healthcare, caption: 'Product Set' },
        { img: IMGS.flatlay,    caption: 'Medical Flat Lay' },
        { img: IMGS.label,      caption: 'Label Detail' },
        { img: IMGS.kit,        caption: 'Kit Contents' },
    ];

    const stats = [
        { number: '10,000+', label: 'Medical SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '32%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Marketplace Ready Images',
            desc: 'Every file delivered in exact Flipkart spec — correct dimensions, pure white background, and no watermarks or borders.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Clean White Background',
            desc: 'Studio-controlled RGB 255,255,255 backgrounds that meet Flipkart seller guidelines — zero listing rejections guaranteed.'
        },
        {
            icon: <ScanLine size={24} />,
            title: 'Accurate Colour & Detail',
            desc: 'Calibrated colour grading ensures product labels, dosage markings, and branding colours are reproduced with total accuracy.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution & Zoom-Ready',
            desc: 'Minimum 2000×2000 px delivery so buyers can read labels, inspect serial numbers, and zoom into product graduations.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Professional Lighting Setup',
            desc: 'Diffused polarised lighting eliminates harsh reflections on glossy medical packaging, instruments, and blister packs.'
        },
    ];

    const testimonials = [
        {
            name: 'Dr. Suresh Nair', role: 'Medical Equipment Seller — Flipkart', rating: 5,
            text: 'Our BP monitor and thermometer listings look incredibly professional. Every detail — dial markings, cuff texture, LCD display — is crystal clear. Zero rejections on upload.'
        },
        {
            name: 'Anita Bose', role: 'Healthcare Products Distributor', rating: 5,
            text: 'The packaging shots are outstanding. Labels are perfectly sharp and colour-accurate. Our product detail page views increased by 45% within the first month.'
        },
        {
            name: 'Rajan Pillai', role: 'Surgical Instruments Wholesaler', rating: 5,
            text: 'Shooting stainless steel instruments without glare is extremely difficult. Prodshoot nailed it. The polarised lighting setup is exceptional — every instrument gleams perfectly.'
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
                            FLIPKART MEDICAL PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Flipkart Medical<br />Product<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Professional photography for medical and healthcare products optimized for Flipkart marketplace listings. Glare-free, label-accurate, and fully compliant.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Send size={18} />
                                    BOOK MEDICAL SHOOT
                                </motion.div>
                            </Link>
                            <a href="#medical-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Flipkart medical product photography" />
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
            <section className="service-section" id="medical-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Medical Product Portfolio</h2>
                    <p>Every Angle, Every Product — Gallery of Our Work</p>
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

            {/* ─── WHY PROFESSIONAL MEDICAL PHOTOGRAPHY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">WHY IT MATTERS</span>
                        <h2 className="service-section-title display-bold">Why Professional Medical Product Photography Wins on Flipkart</h2>
                        <p className="service-section-desc">
                            Healthcare buyers need to trust what they see before purchasing. Sharp label details, glare-free surfaces, and accurate colours directly reduce returns and build buyer confidence. We meet every Flipkart specification.
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
                        <img src={IMGS.why} alt="Professional medical product photography examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Flipkart Healthcare Success</p>
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

            {/* ─── MEDICAL CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Medical Product Categories</h2>
                    <p>Specialised Shoots for Every Healthcare Product Type</p>
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
                                <p>Dedicated studio setup, glare-free polarised lighting, and marketplace-compliant delivery for every product.</p>
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
                    <p>Real Results from Real Healthcare Brands</p>
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
                                Show Your Medical<br />Products Professionally<br />on Flipkart
                            </h2>
                            <p>
                                Ship us your healthcare products — we deliver Flipkart-ready images that pass every spec check and build buyer confidence.
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

export default FlipkartMedical;
