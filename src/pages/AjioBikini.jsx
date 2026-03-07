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

/* ── Unsplash Ajio-style premium swimwear / bikini images ── */
const IMGS = {
    hero:       'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
    frontPose:  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    backPose:   'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
    lifestyle:  'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80',
    fabric:     'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=600&q=80',
    flatlay:    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    fullBody:   'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&q=80',
    beachwear:  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    resort:     'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    swimwear:   'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
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

function AjioBikini() {

    const features = [
        'Ajio marketplace-ready images approved on first submission',
        'Premium editorial swimwear photography with professional models',
        'Front, back, full-body, flat-lay, and lifestyle angles — full coverage',
        'High-resolution 2000×2000 px — zoom-ready for Ajio shoppers',
        'Soft studio lighting that flatters fabric colour and design detail',
        'Accurate colour retouching matching physical swimwear perfectly',
        'Minimal backgrounds — pure white and light grey per Ajio guidelines',
        'JPEG/PNG output, sRGB colour profile — zero watermarks or borders',
    ];

    const process = [
        {
            step: '01',
            icon: <Package size={24} />,
            title: 'Send Your Swimwear Products',
            desc: 'Courier your bikini and swimwear collection to our studio. We prep every piece before the shoot.'
        },
        {
            step: '02',
            icon: <Users size={24} />,
            title: 'Professional Model Photoshoot',
            desc: 'Our fashion models and stylists present every piece with editorial poses and composition suited to Ajio.'
        },
        {
            step: '03',
            icon: <Image size={24} />,
            title: 'Image Editing & Retouching',
            desc: 'Expert post-production — background cleanup, skin retouching, colour grading, and fabric detail enhancement.'
        },
        {
            step: '04',
            icon: <Zap size={24} />,
            title: 'Delivery of Ajio-Ready Images',
            desc: "Final images delivered in 24–48 hours. Unlimited revisions until you're completely satisfied."
        },
    ];

    const categories = [
        { img: IMGS.frontPose,  label: 'Bikini Photography' },
        { img: IMGS.lifestyle,  label: 'Swimwear Photography' },
        { img: IMGS.beachwear,  label: 'Beachwear Photography' },
        { img: IMGS.resort,     label: 'Resort Wear Photography' },
    ];

    const gallery = [
        { img: IMGS.frontPose, caption: 'Model — Front View' },
        { img: IMGS.backPose,  caption: 'Back View Pose' },
        { img: IMGS.lifestyle, caption: 'Lifestyle Beachwear' },
        { img: IMGS.fabric,    caption: 'Fabric Texture Close-Up' },
        { img: IMGS.flatlay,   caption: 'Flat Lay Bikini Set' },
        { img: IMGS.fullBody,  caption: 'Full-Body Studio Shot' },
        { img: IMGS.swimwear,  caption: 'Designer Swimwear' },
        { img: IMGS.resort,    caption: 'Resort Wear Shoot' },
    ];

    const stats = [
        { number: '8,000+',  label: 'Swimwear SKUs Shot' },
        { number: '99%',     label: 'First-Pass Approval' },
        { number: '43%',     label: 'Avg. Conversion Boost' },
        { number: '48H',     label: 'Max Delivery Time' },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: 'Ajio Marketplace Suitable',
            desc: 'Every image meets Ajio specifications — correct dimensions, minimal backgrounds, and zero watermarks — approved first time.'
        },
        {
            icon: <Users size={24} />,
            title: 'Premium Editorial Fashion Visuals',
            desc: 'Professional models and stylists deliver the editorial swimwear look that matches the Ajio premium fashion experience.'
        },
        {
            icon: <Lightbulb size={24} />,
            title: 'Fabric Clarity & Colour Accuracy',
            desc: 'Soft diffused studio lighting accurately captures fabric colour, print, cut, and texture — reducing returns significantly.'
        },
        {
            icon: <Maximize2 size={24} />,
            title: 'High Resolution Product Images',
            desc: 'Minimum 2000×2000 px delivery so Ajio shoppers can inspect every detail of your swimwear at full zoom quality.'
        },
        {
            icon: <Layers size={24} />,
            title: 'Consistent Fashion Catalog Look',
            desc: 'Uniform lighting, poses, and post-production across your entire swimwear range for a cohesive premium brand presence.'
        },
    ];

    const testimonials = [
        {
            name: 'Riya Malhotra', role: 'Swimwear Brand — Ajio', rating: 5,
            text: "Our bikini collection has never looked this premium. Prodshoot nailed the Ajio editorial aesthetic — soft light, clean background, and stunning model poses. Sales doubled."
        },
        {
            name: 'Sneha Verma', role: 'Beachwear Designer — Ajio', rating: 5,
            text: 'The lifestyle and studio shots are absolutely stunning. The model styling and lighting created exactly the premium look our resort wear brand needed on Ajio.'
        },
        {
            name: 'Ananya Singh', role: "Women's Fashion Seller — Ajio", rating: 5,
            text: 'Fast turnaround, zero rejections, and perfect colour accuracy for our swimwear range. Returns dropped considerably since we switched to Prodshoot.'
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
                            AJIO BIKINI PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Ajio Bikini<br />& Swimwear<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Premium swimwear and bikini photography designed for Ajio fashion marketplace listings. Editorial model shoots, soft lighting, and minimal backgrounds — delivered Ajio-ready.
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
                            <a href="#ajio-bikini-gallery" className="cta-secondary-btn">
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
                    <img src={IMGS.hero} alt="Ajio bikini and swimwear photography" />
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
            <section className="service-section" id="ajio-bikini-gallery">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Swimwear Fashion Portfolio</h2>
                    <p>Model Shoots, Flat Lay & Lifestyle — Our Ajio Swimwear Work</p>
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
                        <h2 className="service-section-title display-bold">Why Professional Photography Wins for Swimwear on Ajio</h2>
                        <p className="service-section-desc">
                            Swimwear is one of the most visually demanding categories on Ajio. Buyers make instant decisions based on image quality — colour accuracy, pose, and lighting determine the click. We deliver catalog images that meet every Ajio standard, first upload every time.
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
                        <img src={IMGS.why} alt="Professional Ajio swimwear photography" />
                    </motion.div>
                </div>
            </section>

            {/* ─── WHY CARDS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>What You Get</h2>
                    <p>Every Image Built for Ajio Swimwear Success</p>
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
                    <p>From Your Swimwear Collection to a Live Ajio Listing</p>
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

            {/* ─── SWIMWEAR CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Swimwear Categories</h2>
                    <p>Specialised Fashion Shoots for Every Style on Ajio</p>
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
                                <p>Professional models, editorial lighting, and expert post-production — every image delivered Ajio-ready.</p>
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
                    <p>Real Results from Ajio Swimwear Brands</p>
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
                                Make Your Swimwear<br />Products Look Premium<br />on Ajio
                            </h2>
                            <p>
                                Send us your collection — our fashion models and studio deliver Ajio-ready images that drive clicks and build brand authority.
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

export default AjioBikini;
