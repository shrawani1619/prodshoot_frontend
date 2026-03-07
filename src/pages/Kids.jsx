import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Send,
    Phone,
    CheckCircle2,
    Camera,
    Layers,
    Zap,
    Shield,
    Clock,
    Star,
    ArrowUpRight,
    Package,
    Shirt,
    Sun,
    TrendingUp,
    Heart,
    Award,
    Smile
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

function Kids() {
    const stats = [
        { number: "200+", label: "Kids Brands" },
        { number: "50K+", label: "Pieces Photographed" },
        { number: "44%", label: "Conversion Uplift" },
        { number: "48H", label: "Studio SLA" },
    ];

    const features = [
        "Ghost mannequin & flat lay for kids' wear",
        "Infant & toddler clothing photography",
        "Boys & girls fashion collections",
        "School wear & uniform photography",
        "Ethnic wear — kids' lehengas, sherwanis",
        "Activewear & sportswear for children",
        "Footwear, bags & accessories for kids",
        "Platform-ready (Amazon, Flipkart, FirstCry)",
        "Size range: Newborn to 14 years",
        "Bright, vibrant styling for maximum appeal"
    ];

    const categories = [
        {
            icon: <Sun size={28} />,
            title: "Infant & Toddler",
            desc: "Soft, warm photography for the youngest ranges — rompers, onesies, baby sets and newborn collections styled with tender care and the right colour palette to attract parents.",
            tag: "0–3 YEARS"
        },
        {
            icon: <Smile size={28} />,
            title: "Boys' Fashion",
            desc: "Energetic, playful imagery for boys' collections — from casual tees and shorts to formal occasion wear and ethnic festive outfits for the young gentleman.",
            tag: "BOYS' COLLECTION"
        },
        {
            icon: <Heart size={28} />,
            title: "Girls' Fashion",
            desc: "Vibrant, joyful photography for girls' collections — from frocks and dresses to ethnic sets, princess wear, and the full range of contemporary girls' fashion.",
            tag: "GIRLS' COLLECTION"
        },
        {
            icon: <Award size={28} />,
            title: "Ethnic & Occasion",
            desc: "Festive and occasion wear for kids — sherwanis, lehengas, dhoti sets and party dresses photographed to bring out the intricate detailing parents value most.",
            tag: "FESTIVE SPECIAL"
        }
    ];

    const process = [
        { step: "01", title: "Collection Intake", desc: "Kids' garments are received, sorted by age range and size, and cataloged for seamless production tracking.", icon: <Package size={24} /> },
        { step: "02", title: "Styling & Prep", desc: "Specialist children's fashion stylists prepare every garment — steaming, pinning and preparing props and flat lay setups.", icon: <Shirt size={24} /> },
        { step: "03", title: "Bright Studio Shoot", desc: "Warm, vibrant lighting setups optimized for children's fashion — bringing out colours and textures that parents respond to.", icon: <Camera size={24} /> },
        { step: "04", title: "Post Production", desc: "Ghost mannequin effects, vibrant color grading and retouching ensuring every image is joyful, accurate and brand-consistent.", icon: <Layers size={24} /> },
        { step: "05", title: "Platform Delivery", desc: "Platform-compliant assets for FirstCry, Amazon Baby, Flipkart Kids, Myntra and your DTC storefront — delivered on time.", icon: <Zap size={24} /> },
    ];

    const showcase = [
        { src: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80", title: "Festive Collection", category: "Ethnic Kids", size: "large" },
        { src: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80", title: "Boys' Collection", category: "Boys' Wear", size: "small" },
        { src: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=800&q=80", title: "Girls' Collection", category: "Girls' Wear", size: "small" },
        { src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80", title: "Kids' Sneakers", category: "Footwear", size: "medium" },
        { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", title: "School Bags", category: "Accessories", size: "medium" },
        { src: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800&q=80", title: "Seasonal Campaign", category: "Campaign", size: "large" },
    ];

    const whyCards = [
        {
            icon: <Shield size={24} />,
            title: "Kids' Specialist Stylists",
            desc: "Our dedicated children's fashion team understands the unique requirements of every age bracket — from newborn proportions to teen fits."
        },
        {
            icon: <Clock size={24} />,
            title: "High-Volume Capacity",
            desc: "Process hundreds of SKUs per day across toddler, kids and teen age ranges. Our studio is built to handle large kids' fashion catalogs efficiently."
        },
        {
            icon: <Star size={24} />,
            title: "FirstCry & Amazon Baby Compliant",
            desc: "Expert knowledge of children's product listing specifications for India's leading kids' and baby platforms — from FirstCry to Amazon Baby to Hopscotch."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Vibrant & Parent-Targeted",
            desc: "We understand that parents are the buyer. Our visual style is warm, vibrant and trust-building — the exact aesthetic that drives purchase decisions in kids' fashion."
        },
        {
            icon: <Heart size={24} />,
            title: "Ethnic & Festive Expertise",
            desc: "Dedicated expertise in Indian children's ethnic fashion — sherwanis, lehengas, kurta sets and festive occasion wear captured with the care these pieces deserve."
        },
        {
            icon: <Sun size={24} />,
            title: "Age-Range Visual Language",
            desc: "Distinct visual treatment per age category — soft pastels for infants, playful brights for toddlers, and stylish contemporary aesthetics for tweens and teens."
        }
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Sun size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            KIDS' FASHION PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Joyful Imagery<br />For The<br />Little Ones
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            From newborn onesies to teen occasion wear — we create vibrant, parent-targeted kids' fashion photography that captures the essence of childhood and drives confident purchase decisions.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Sparkles size={18} />
                                    BOOK KIDS' SHOOT
                                </motion.div>
                            </Link>
                            <a href="#showcase" className="cta-secondary-btn">
                                VIEW LOOKBOOK <ArrowRight size={16} />
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
                    <img src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80" alt="Kids' Fashion Photography" />
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

            {/* ─── FEATURE CHECKLIST ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">KIDS' FASHION EXPERTISE</span>
                        <h2 className="service-section-title display-bold">Every age range covered with specialist care.</h2>
                        <p className="service-section-desc">
                            Kids' fashion photography is a unique discipline — parents are the buyers and their trust is built through warm, accurate, vibrant imagery. We deliver photography that sells the story of childhood alongside the garment.
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
                        <img src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80" alt="Kids' Fashion Catalog" />
                    </motion.div>
                </div>
            </section>

            {/* ─── CATEGORIES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Age Groups We Cover</h2>
                    <p>From Newborn To Teen — Complete Kids' Production</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{cat.icon}</div>
                            <span className="section-label-sm" style={{ fontSize: '0.6rem', marginBottom: '0.5rem', display: 'block' }}>{cat.tag}</span>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── SHOWCASE GALLERY ─── */}
            <section className="service-section" id="showcase">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Kids' Lookbook</h2>
                    <p>Vibrant Children's Fashion Showcases</p>
                </div>

                <div className="portfolio-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {showcase.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`portfolio-item ${item.size || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="portfolio-image-wrap">
                                <img src={item.src} alt={item.title} />
                                <div className="portfolio-hover-overlay">
                                    <div className="portfolio-view-icon">
                                        <ArrowUpRight size={22} />
                                    </div>
                                    <div className="portfolio-meta">
                                        <span className="portfolio-category">{item.category}</span>
                                        <span className="portfolio-title">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>The Production Flow</h2>
                    <p>From Collection Intake To Platform-Ready Assets</p>
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

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>India's Leading Kids' Fashion Photography Studio</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {whyCards.map((item, idx) => (
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

            {/* ─── FESTIVE BAND ─── */}
            <section className="service-section">
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <div className="bottom-cta" style={{ background: 'rgba(168, 85, 247, 0.03)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                        <h3 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Festive & Seasonal Collections</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            Planning your Diwali, Eid or Christmas kids' collection? We run dedicated seasonal shoots with high-volume capacity, consistent styling and fast delivery — so you can be live before the festive rush.
                        </p>
                        <Link to="/contact" style={{ display: 'inline-block' }}>
                            <motion.div
                                className="cta-primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ padding: '1rem 2.5rem' }}
                            >
                                PLAN FESTIVE SHOOT
                            </motion.div>
                        </Link>
                    </div>
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
                                Ready to shoot your<br />kids' collection?
                            </h2>
                            <p>
                                Ship us your children's fashion. We'll deliver platform-ready imagery that parents trust and that drives real conversions.
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
                                    GET STARTED
                                </motion.div>
                            </Link>
                            <motion.a
                                href="tel:+919356917424"
                                whileHover={{ scale: 1.03 }}
                                className="cta-secondary-btn"
                            >
                                <Phone size={16} />
                                CALL US
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Kids;
