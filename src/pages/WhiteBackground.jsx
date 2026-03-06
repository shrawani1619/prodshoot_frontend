import React from 'react';
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
    Eye,
    Palette,
    Target,
    Maximize2,
    Droplets
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

function WhiteBackground() {
    const features = [
        "Pure RGB 255,255,255 white background",
        "Multiple angles — front, back, sides, 45°, detail close-ups",
        "Color-accurate calibrated lighting",
        "Ghost mannequin / invisible model for apparel",
        "Natural & consistent soft shadow options",
        "Precision clipping paths included",
        "High-res output (up to 4000x4000px)",
        "Batch consistency across 100s of SKUs"
    ];

    const useCases = [
        {
            icon: <Target size={22} />,
            title: "E-commerce Stores",
            desc: "Clean product listings for Shopify, WooCommerce, and custom stores that increase buyer confidence."
        },
        {
            icon: <Eye size={22} />,
            title: "Marketplace Listings",
            desc: "Amazon, Flipkart, Meesho — white backgrounds are mandatory for marketplace compliance."
        },
        {
            icon: <Palette size={22} />,
            title: "Catalogs & Lookbooks",
            desc: "Uniform backgrounds for digital and print catalogs that give your brand a premium, cohesive feel."
        },
        {
            icon: <Maximize2 size={22} />,
            title: "Social Media Ads",
            desc: "Isolated product images that are easy to composite into banners, carousels, and sponsored ads."
        },
        {
            icon: <Layers size={22} />,
            title: "Wholesale & B2B",
            desc: "Professional product sheets for buyers, distributors, and retail partners."
        },
        {
            icon: <Droplets size={22} />,
            title: "Brand Guidelines",
            desc: "Consistent product imagery that aligns with brand standards and asset libraries."
        }
    ];

    const packages = [
        {
            name: "ESSENTIAL",
            price: "₹999",
            per: "per image",
            desc: "Basic white background isolation for single products",
            features: ["Pure white background", "1 angle per product", "Basic retouching", "2000x2000px output", "72-hour delivery", "1 revision"],
            popular: false
        },
        {
            name: "STANDARD",
            price: "₹2,999",
            per: "per product",
            desc: "Multi-angle white background shoot — most popular",
            features: ["Pure white background", "5 angles per product", "Advanced retouching", "4000x4000px output", "Clipping paths included", "48-hour delivery", "3 revisions", "Natural shadow option"],
            popular: true
        },
        {
            name: "BULK",
            price: "₹1,499",
            per: "per product (min 20)",
            desc: "Volume pricing for large catalogs and SKU libraries",
            features: ["Pure white background", "5 angles per product", "Premium retouching", "4000x4000px output", "Clipping paths included", "Batch color consistency", "Dedicated retoucher", "Priority delivery", "Unlimited revisions"],
            popular: false
        }
    ];

    const process = [
        { step: "01", title: "Send Your Products", desc: "Ship your products to our studio with our pre-paid labels, or bring them in person. We handle everything from here.", icon: <Package size={24} /> },
        { step: "02", title: "Styled & Lit", desc: "Our stylists position each product precisely. We use calibrated daylight-balanced lighting for true-to-life colors.", icon: <Camera size={24} /> },
        { step: "03", title: "Shot on White", desc: "Each product is photographed from multiple angles on our infinity-curve seamless backdrop for that perfect float look.", icon: <Image size={24} /> },
        { step: "04", title: "Retouched to Perfection", desc: "Backgrounds are cleaned to pure white, colors corrected, blemishes removed, and images cropped to your specifications.", icon: <Layers size={24} /> },
        { step: "05", title: "Delivered Ready", desc: "Final files delivered in your preferred format, resolution, and aspect ratio — ready to upload to any platform.", icon: <Zap size={24} /> },
    ];

    const stats = [
        { number: "1M+", label: "White BG Images Delivered" },
        { number: "100%", label: "Pure White Guarantee" },
        { number: "500+", label: "Brands Trust Us" },
        { number: "48H", label: "Standard Delivery" },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.div className="hero-badge" variants={fadeUp}>
                            <Camera size={10} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                            WHITE BACKGROUND PHOTOGRAPHY
                        </motion.div>

                        <motion.h1 className="service-hero-title display-bold" variants={fadeUp}>
                            Seamless White<br />Background<br />Photography
                        </motion.h1>

                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Pixel-perfect white background product images that make your products pop. Every image is shot, retouched, and delivered to meet the strictest marketplace and e-commerce standards.
                        </motion.p>

                        <motion.div className="service-hero-actions" variants={fadeUp}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="cta-primary-btn"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Camera size={18} />
                                    GET A QUOTE
                                </motion.div>
                            </Link>
                            <a href="#packages" className="cta-secondary-btn">
                                VIEW PRICING <ArrowRight size={16} />
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
                    <img src="/portfolio-sneakers.png" alt="White background product photography" />
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

            {/* ─── WHAT YOU GET ─── */}
            <section className="service-section">
                <div className="service-section-grid">
                    <div className="service-section-text">
                        <span className="section-label-sm">PIXEL PERFECT</span>
                        <h2 className="service-section-title display-bold">Pure White. Zero Compromise.</h2>
                        <p className="service-section-desc">
                            A true white background isn't just "close to white" — it's RGB 255,255,255 on every pixel. We use calibrated lighting, precision retouching, and quality checks to guarantee backgrounds that pass any compliance test.
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
                        <img src="/amazon-examples.png" alt="White background product examples" />
                    </motion.div>
                </div>
            </section>

            {/* ─── USE CASES ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Use Cases</h2>
                    <p>Where White Backgrounds Shine</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 2rem' }}>
                    {useCases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <div className="why-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── PROCESS ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Our Process</h2>
                    <p>From Product To Perfect Image</p>
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

            {/* ─── PRICING PACKAGES ─── */}
            <section className="service-section" id="packages">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Pricing</h2>
                    <p>White Background Packages</p>
                </div>

                <div className="pricing-grid">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            className={`pricing-card ${pkg.popular ? 'pricing-popular' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                            whileHover={{ y: -6 }}
                        >
                            {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
                            <span className="pricing-plan-name">{pkg.name}</span>
                            <div className="pricing-amount">
                                <span className="pricing-price">{pkg.price}</span>
                                <span className="pricing-per">{pkg.per}</span>
                            </div>
                            <p className="pricing-desc">{pkg.desc}</p>
                            <ul className="pricing-features">
                                {pkg.features.map((f, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={14} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" style={{ textDecoration: 'none', display: 'flex', width: '100%', marginTop: 'auto' }}>
                                <motion.div
                                    className={pkg.popular ? 'cta-primary-btn' : 'cta-secondary-btn'}
                                    style={{ width: '100%', justifyContent: 'center' }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {pkg.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── SAMPLE GALLERY ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Sample Work</h2>
                    <p>White Background Photography</p>
                </div>

                <div className="sample-gallery">
                    {['/portfolio-sneakers.png', '/portfolio-skincare.png', '/portfolio-watch.png', '/portfolio-jewelry.png'].map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="sample-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <img src={src} alt={`White background product sample ${idx + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section className="service-section">
                <div className="section-heading" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2>Why Prodshoot</h2>
                    <p>White Background Specialists</p>
                </div>

                <div className="why-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    {[
                        { icon: <Shield size={24} />, title: "100% White Guarantee", desc: "Every image passes our RGB 255,255,255 quality check. If it's not pure white, we reshoot — free." },
                        { icon: <Clock size={24} />, title: "Batch Consistency", desc: "Whether it's 10 products or 1,000 — every image has the same lighting, shadows, and white balance." },
                        { icon: <Star size={24} />, title: "Platform Ready", desc: "Images formatted and sized for Amazon, Flipkart, Shopify, Myntra, Nykaa, and every major platform." },
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
                                Need clean white<br />background images?
                            </h2>
                            <p>
                                Ship us your products. We'll deliver pixel-perfect white background images ready for any platform — in 48 hours or less.
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

export default WhiteBackground;
