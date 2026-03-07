import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ArrowRight,
    Clock,
    User,
    Tag,
    ChevronRight,
    TrendingUp,
    Calendar,
    ArrowUpRight,
    ArrowDown,
    Share2,
    Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
    "All Stories",
    "Photography",
    "E-commerce",
    "Amazon",
    "Marketing",
    "Strategy"
];

const blogPosts = [
    {
        id: 1,
        title: "The Architecture of a High-Converting Amazon Listing",
        excerpt: "Why some products explode while others vanish. We break down the visual psychology of 2024's top 1% sellers.",
        category: "Amazon",
        author: "Pradeep Wagh",
        date: "Oct 15, 2024",
        readTime: "12 min",
        image: "/amazon-examples.png",
        featured: true,
        stats: "4.8k Reads"
    },
    {
        id: 2,
        title: "Mastering the 'Invisible' Lighting Technique",
        excerpt: "How to use bounce and negative fill to create product depth without visible glare or harsh shadows.",
        category: "Photography",
        author: "Studio Lead",
        date: "Oct 12, 2024",
        readTime: "6 min",
        image: "/portfolio-watch.png",
        stats: "2.1k Reads"
    },
    {
        id: 3,
        title: "CGI vs Traditional: The ROI of 3D Product Renders",
        excerpt: "When to stop shooting and start rendering. A cost-benefit analysis for scaling brands.",
        category: "Strategy",
        author: "Alex Chen",
        date: "Oct 10, 2024",
        readTime: "9 min",
        image: "/portfolio-skincare.png",
        stats: "3.5k Reads"
    },
    {
        id: 4,
        title: "Color Theory for Global D2C Expansion",
        excerpt: "How color perception changes across borders and how to adjust your palette for international buyers.",
        category: "Marketing",
        author: "Elena G.",
        date: "Oct 08, 2024",
        readTime: "7 min",
        image: "/fashion-lifestyle.png",
        stats: "1.2k Reads"
    },
    {
        id: 5,
        title: "The Rapid Catalog: Shooting 100 SKUs in 48 Hours",
        excerpt: "Efficiency workflows for high-volume inventory without sacrificing the premium aesthetic.",
        category: "Strategy",
        author: "Production Team",
        date: "Oct 05, 2024",
        readTime: "5 min",
        image: "/catalog.png",
        stats: "900 Reads"
    },
    {
        id: 6,
        title: "Infographics: Turning Specifications into Sales",
        excerpt: "How to visualize technical USP's so clearly that your customer doesn't even need to read the description.",
        category: "Marketing",
        author: "Design Lead",
        date: "Oct 02, 2024",
        readTime: "8 min",
        image: "/portfolio-jewelry.png",
        stats: "1.8k Reads"
    }
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All Stories");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const catMatch = selectedCategory === "All Stories" || post.category === selectedCategory;
        const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return catMatch && searchMatch;
    });

    const trendingPosts = blogPosts.slice(1, 4);

    return (
        <div className="blog-v2-wrapper">
            <Navbar />

            {/* --- IMMERSIVE HERO --- */}
            <section className="blog-v2-hero">
                <div className="hero-noise-overlay" />
                <div className="hero-gradient-orb" />

                <div className="hero-container">
                    <motion.div
                        className="hero-left-content"
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.div className="eyebrow-pill" variants={fadeUp}>
                            <TrendingUp size={14} />
                            <span>THE EDITORIAL</span>
                        </motion.div>
                        <motion.h1 className="hero-big-title display-bold" variants={fadeUp}>
                            Insights for the <br />
                            <span className="text-gradient">Modern Brand.</span>
                        </motion.h1>
                        <motion.p className="hero-desc" variants={fadeUp}>
                            Deep dives into visual storytelling, logistics, and scaling your e-commerce conversion rates through elite-tier assets.
                        </motion.p>

                        <motion.div className="hero-actions" variants={fadeUp}>
                            <div className="v2-search-bar">
                                <Search size={18} />
                                <input
                                    type="text"
                                    placeholder="Search the archive..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-right-visual"
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="featured-mag-wrap">
                            <div className="mag-image">
                                <img src="/amazon-hero.png" alt="Featured Story" />
                                <div className="mag-overlay" />
                            </div>
                            <div className="mag-details">
                                <span className="mag-cat">{blogPosts[0].category}</span>
                                <h2>{blogPosts[0].title}</h2>
                                <Link to={`/blog/${blogPosts[0].id}`} className="mag-btn">
                                    READ FULL STORY <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="scroll-hint">
                    <span>EXPLORE ARCHIVE</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown size={14} />
                    </motion.div>
                </div>
            </section>

            {/* --- NAVIGATION & FILTER --- */}
            <nav className="blog-v2-nav">
                <div className="nav-inner">
                    <div className="category-scroller">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                                {selectedCategory === cat && (
                                    <motion.div className="btn-line" layoutId="btnLine" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* --- MAIN CONTENT GRID --- */}
            <main className="blog-v2-main">
                <div className="layout-grid">
                    {/* LEFT: MAIN ARTICLES */}
                    <div className="main-articles-col">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, idx) => (
                                <motion.article
                                    key={post.id}
                                    className="v2-post-card"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    layout
                                >
                                    <div className="card-media">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <div className="card-hover-info">
                                            <div className="hover-action">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-header">
                                            <span className="post-cat-v2">{post.category}</span>
                                            <span className="post-reads">{post.stats}</span>
                                        </div>
                                        <h3 className="display-bold">{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className="card-footer">
                                            <div className="author-wrap">
                                                <div className="author-avatar" />
                                                <div className="author-name">
                                                    <span>{post.author}</span>
                                                    <small>{post.date}</small>
                                                </div>
                                            </div>
                                            <Link to={`/blog/${post.id}`} className="read-arrow">
                                                <ArrowRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>

                        {filteredPosts.length === 0 && (
                            <div className="v2-empty">
                                <h3>The archive is silent.</h3>
                                <p>Try searching for something else or browse all stories.</p>
                                <button onClick={() => { setSelectedCategory("All Stories"); setSearchQuery(""); }}>
                                    RESET ARCHIVE
                                </button>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: SIDEBAR */}
                    <aside className="blog-v2-sidebar">
                        <div className="side-widget trending-widget">
                            <h4 className="widget-title">TRENDING NOW</h4>
                            <div className="trending-list">
                                {trendingPosts.map((post, i) => (
                                    <Link key={i} to={`/blog/${post.id}`} className="trending-item">
                                        <span className="rank">0{i + 1}</span>
                                        <div className="trend-content">
                                            <h5>{post.title}</h5>
                                            <span>{post.readTime} reading time</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="side-widget newsletter-widget">
                            <div className="newsletter-v2-card">
                                <h3>Curated for the C-Suite.</h3>
                                <p>Monthly strategy, no fluff. Just what's working on Amazon right now.</p>
                                <div className="side-input">
                                    <input type="email" placeholder="Email address" />
                                    <button><ArrowRight size={18} /></button>
                                </div>
                                <div className="newsletter-benefit">
                                    <Clock size={12} />
                                    <span>Sent last Tuesday of every month.</span>
                                </div>
                            </div>
                        </div>

                        <div className="side-widget tag-widget">
                            <h4 className="widget-title">POPULAR TAGS</h4>
                            <div className="tags-flex">
                                {["Conversion", "Lighting", "3D CGI", "D2C", "Logistics", "Pricing"].map((tag, i) => (
                                    <div key={i} className="v2-tag">#{tag}</div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* --- FOOTER CTA --- */}
            <section className="blog-v2-cta">
                <div className="cta-v2-container">
                    <div className="cta-v2-bg">
                        <img src="/hero.png" alt="Background" />
                        <div className="cta-v2-overlay" />
                    </div>
                    <div className="cta-v2-content">
                        <h2>Ready to tell <br />your brand's story?</h2>
                        <p>Join 200+ elite scale-ups using our assets to dominate their niche.</p>
                        <div className="cta-v2-btns">
                            <Link to="/contact" className="v2-btn-primary">
                                START A PROJECT <ArrowUpRight size={18} />
                            </Link>
                            <Link to="/portfolio" className="v2-btn-text">
                                VIEW CASE STUDIES <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;
