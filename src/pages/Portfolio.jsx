import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpRight,
    Camera,
    Sparkles,
    Filter,
    Aperture
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PORTFOLIO = [
    { src: "/portfolio-sneakers.png", category: "Footwear", title: "Premium Sneaker Shoot", size: "large" },
    { src: "/portfolio-skincare.png", category: "Beauty", title: "Skincare Collection", size: "small" },
    { src: "/portfolio-watch.png", category: "Accessories", title: "Luxury Watch Photography", size: "small" },
    { src: "/portfolio-jewelry.png", category: "Jewelry", title: "Fine Jewelry Editorial", size: "tall" },
    { src: "/hero.png", category: "Accessories", title: "Product Flat Lay", size: "small" },
    { src: "/lifestyle.png", category: "Beauty", title: "Brand Identity", size: "small" },
    { src: "/amazon-examples.png", category: "Footwear", title: "Studio Performance", size: "small" },
    { src: "/portfolio-skincare.png", category: "Beauty", title: "Luxe Textures", size: "small" },
    { src: "/catalog.png", category: "Catalog", title: "Commercial Series", size: "medium" },
    { src: "/fashion-lifestyle.png", category: "Fashion", title: "The Runway Walk", size: "large" },
];

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Footwear', 'Beauty', 'Accessories', 'Jewelry', 'Fashion', 'Catalog'];

    const filteredItems = activeFilter === 'All'
        ? PORTFOLIO
        : PORTFOLIO.filter(item => item.category === activeFilter);

    return (
        <div className="page-wrapper">
            <Navbar />

            <section className="service-hero" style={{ minHeight: '40vh', padding: '12rem 2rem 4rem' }}>
                <div className="service-hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="hero-badge" style={{ margin: '0 auto 1.5rem' }}>
                            <Aperture size={10} style={{ display: 'inline', marginRight: '6px' }} />
                            THE EXHIBITION
                        </div>
                        <h1 className="display-bold" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Our Work speaks<br />for itself.</h1>
                        <p className="service-hero-desc">
                            A curated selection of our high-conversion visual assets for world-leading brands.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-section" style={{ paddingTop: 0 }}>
                <div className="portfolio-filters" style={{ marginBottom: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={`${item.title}-${idx}`}
                                layout
                                className={`portfolio-item ${item.size || ''}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Portfolio;
