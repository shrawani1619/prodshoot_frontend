import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Globe,
    Sparkles,
    Send,
    Phone,
    CheckCircle2,
    Zap,
    Camera,
    Shield,
    Users,
    Target,
    Heart,
    Award,
    Clock,
    Aperture
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

function About() {
    const values = [
        {
            icon: <Target size={24} />,
            title: "Conversion First",
            desc: "We don't just take pretty photos. We engineer visual assets designed to stop the scroll and drive the 'Add to Cart' button."
        },
        {
            icon: <Zap size={24} />,
            title: "Speed as a Feature",
            desc: "In the fast-paced world of e-commerce, time is money. Our 48-hour turnaround ensures your products are live before the trend fades."
        },
        {
            icon: <Heart size={24} />,
            title: "Client Obsessed",
            desc: "Your success is our metric. We offer free re-shoots and dedicated project managers to ensure every asset is exactly what you envisioned."
        }
    ];

    const stats = [
        { number: "500+", label: "Brands Served" },
        { number: "2M+", label: "Photos Delivered" },
        { number: "100+", label: "Studio Experts" },
        { number: "98%", label: "Client Retention" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Users size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            THE STUDIO BEHIND THE BRANDS
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            We Believe<br />Every Product<br />Has A Story.
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Prodshoot is a specialized visual content engine built for the modern D2C era. We bridge the gap between high-end commercial photography and the speed of e-commerce.
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    className="service-hero-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <img src="/hero.png" alt="Prodshoot Studio Team" />
                </motion.div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="service-stats-bar" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
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

            {/* ─── OUR STORY ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">OUR MISSION</span>
                        <h2 className="service-section-title display-bold">Empowering the next billion-dollar brands.</h2>
                        <p className="service-section-desc">
                            Founded in 2021, Prodshoot was born out of a simple frustration: the traditional photography agency model was too slow and too expensive for the D2C world.
                        </p>
                        <p className="service-section-desc">
                            We built a proprietary 'Ship-to-Shoot' workflow that allows brands to simply mail us their products and receive world-class, marketplace-ready assets within 48 hours. No set-up costs, no complex contracts—just pure visual performance.
                        </p>
                    </div>
                    <motion.div
                        className="service-section-image"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/catalog.png" alt="Production Workflow" />
                    </motion.div>
                </div>
            </section>

            {/* ─── CORE VALUES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Philosophy</h2>
                    <p>What Drives Every Shot</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {values.map((item, idx) => (
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

            {/* ─── STUDIO VISION ─── */}
            <section className="service-section">
                <div className="service-section-grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', alignItems: 'center' }}>
                    <motion.div
                        className="service-section-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src="/lifestyle.png" alt="Creative Studio" style={{ borderRadius: '40px' }} />
                    </motion.div>
                    <div className="service-section-text">
                        <div className="pillar-row">
                            <div className="pillar-point">
                                <Award className="pillar-icon" size={24} />
                            </div>
                            <div className="pillar-content">
                                <h3>Global Standards</h3>
                                <p>Our studio in Mumbai is equipped with Phase One and Hasselblad systems, the gold standard of fashion and product imagery.</p>
                            </div>
                        </div>
                        <div className="pillar-row">
                            <div className="pillar-point">
                                <Shield className="pillar-icon" size={24} />
                            </div>
                            <div className="pillar-content">
                                <h3>Data Security</h3>
                                <p>Your pre-launch products are safe with us. We handle prototype photography under strict NDAs for the world's leading brands.</p>
                            </div>
                        </div>
                        <div className="pillar-row">
                            <div className="pillar-point">
                                <Clock className="pillar-icon" size={24} />
                            </div>
                            <div className="pillar-content">
                                <h3>24/7 Production</h3>
                                <p>Our post-production engine never sleeps, ensuring that whether you're in NY or Mumbai, your assets are in your inbox on time.</p>
                            </div>
                        </div>
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
                                Work with the<br />Best in the Business
                            </h2>
                            <p>
                                Join the 500+ brands that have scaled their revenue with our high-impact visual systems. Your story deserves to be told properly.
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

export default About;
