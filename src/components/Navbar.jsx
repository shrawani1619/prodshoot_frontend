import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Helper functions to check active section
    const isHome = currentPath === '/';
    const isService = currentPath !== '/' && currentPath.startsWith('/services/');
    const isIndustry = currentPath.startsWith('/market-place/');

    // Handle scroll for sticky background effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when path changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [currentPath]);

    const navLinks = [
        { name: 'Home', path: '/', end: true },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            type: 'dropdown',
            active: isService,
            items: [
                { name: 'Product Photography', path: '/services/product-photography' },
                { name: 'Seamless White Background', path: '/services/white-background' },
                { name: 'Hero Shots', path: '/services/hero-shots' },
                { name: 'Lifestyle Photography', path: '/services/lifestyle-photography' },
                { name: '3D Product Renders', path: '/services/3d-renders' },
                { name: 'Infographic Design', path: '/services/infographic-design' },
                { name: 'Hand Modeling', path: '/services/hand-modeling' },
                { name: 'Ghost Mannequin', path: '/services/ghost-mannequin' },
            ]
        },
        {
            name: 'Market Place',
            type: 'dropdown',
            active: isIndustry,
            items: [
                {
                    name: 'Amazon',
                    path: '/market-place/amazon-photography',
                    subItems: [
                        { name: 'Amazon Product Photography', path: '/market-place/amazon-photography' },
                        { name: 'Amazon Footwear Photography', path: '/market-place/amazon-footwear-photography' },
                        { name: 'Amazon Fashion Photography', path: '/market-place/amazon-fashion-photography' },
                        { name: 'Amazon Medical Product Photography', path: '/market-place/amazon-medical-photography' },
                        { name: 'Amazon Electronics Photography', path: '/market-place/amazon-electronics-photography' },
                        { name: 'Amazon Grocery Product Photography', path: '/market-place/amazon-grocery-photography' },
                        { name: 'Amazon Furniture Photography', path: '/market-place/amazon-furniture-photography' },
                        { name: 'Amazon Automotive Product Photography', path: '/market-place/amazon-automotive-photography' },
                        { name: 'Amazon Bikini Photography', path: '/market-place/amazon-bikini-photography' },
                    ]
                },
                {
                    name: 'Flipkart',
                    path: '/market-place/Flipkart',
                    subItems: [
                        { name: 'Flipkart Product Photography', path: '/market-place/Flipkart' },
                        { name: 'Flipkart Footwear Photography', path: '/market-place/flipkart-footwear' },
                        { name: 'Flipkart Fashion Photography', path: '/market-place/flipkart-fashion' },
                        { name: 'Flipkart Medical Photography', path: '/market-place/flipkart-medical' },
                        { name: 'Flipkart Electronics Photography', path: '/market-place/flipkart-electronics' },
                        { name: 'Flipkart Grocery Photography', path: '/market-place/flipkart-grocery' },
                        { name: 'Flipkart Furniture Photography', path: '/market-place/flipkart-furniture' },
                        { name: 'Flipkart Automotive Photography', path: '/market-place/flipkart-automotive' },
                        { name: 'Flipkart Bikini Photography', path: '/market-place/flipkart-bikini' },
                    ]
                },
                {
                    name: 'Myntra',
                    path: '/market-place/Myntra',
                    subItems: [
                        { name: 'Myntra Product Photography', path: '/market-place/Myntra' },
                        { name: 'Myntra Footwear Photography', path: '/market-place/myntra-footwear' },
                        { name: 'Myntra Fashion & Model Photography', path: '/market-place/myntra-fashion-model' },
                        { name: 'Myntra Bikini Photoshoot', path: '/market-place/myntra-bikini' },
                    ]
                },
                {
                    name: 'Meesho',
                    path: '/market-place/Meesho',
                    subItems: [
                        { name: 'Meesho Product Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Footwear Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Fashion Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho E-Commerce Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Electronics Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Furniture Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Automotive Photography', path: '/market-place/Meesho' },
                        { name: 'Meesho Bikini Photography', path: '/market-place/Meesho' },
                    ]
                },
                {
                    name: 'Ajio',
                    path: '/market-place/Ajio',
                    subItems: [
                        { name: 'Ajio Product Photography', path: '/market-place/Ajio' },
                        { name: 'Ajio Footwear Photography', path: '/market-place/Ajio' },
                        { name: 'Ajio Fashion Photography', path: '/market-place/Ajio' },
                        { name: 'Ajio Bikini Photography', path: '/market-place/Ajio' },
                    ]
                },
                {
                    name: 'Tata cliq',
                    path: '/market-place/tatacliq/product-photography',
                    subItems: [
                        { name: 'Tatacliq Product Photography', path: '/market-place/tatacliq/product-photography' },
                        { name: 'Tatacliq Footwear Photography', path: '/market-place/tatacliq/footwear-photography' },
                        { name: 'Tatacliq Fashion Photography', path: '/market-place/tatacliq/fashion-photography' },
                        { name: 'Tatacliq Bikini Photography', path: '/market-place/tatacliq/bikini-photography' },
                        { name: 'Tatacliq E-Commerce Photography', path: '/market-place/tatacliq/ecommerce-photography' },
                        { name: 'Tatacliq Furniture Photography', path: '/market-place/tatacliq/furniture-photography' },
                        { name: 'Tatacliq Cosmetic Photography', path: '/market-place/tatacliq/cosmetic-photography' },
                        { name: 'Tatacliq Medical Photography', path: '/market-place/tatacliq/medical-photography' },
                        { name: 'Tatacliq Electronics Photography', path: '/market-place/tatacliq/electronics-photography' },
                    ]
                },
                {
                    name: 'Etsy',
                    path: '/market-place/etsy/footwear-photography',
                    subItems: [
                        { name: 'Etsy Footwear Photography', path: '/market-place/etsy/footwear-photography' },
                        { name: 'Etsy Fashion Photography', path: '/market-place/etsy/fashion-photography' },
                        { name: 'Etsy Bikini Photography', path: '/market-place/etsy/bikini-photography' },
                        { name: 'Etsy Electronics Photography', path: '/market-place/etsy/electronics-photography' },
                        { name: 'Etsy Furniture Photography', path: '/market-place/etsy/furniture-photography' },
                        { name: 'Etsy Handicraft Photography', path: '/market-place/etsy/handicraft-photography' },
                        { name: 'Etsy E-Commerce Photography', path: '/market-place/etsy/ecommerce-photography' },
                        { name: 'Etsy Freelance Photography', path: '/market-place/etsy/freelancer-photography' },
                    ]
                },
            ]
        },
        {
            name: 'Gender',
            type: 'dropdown',
            items: [
                { name: 'Men', path: '/gender/men' },
                { name: 'Women', path: '/gender/women' },
                { name: 'Kids', path: '/gender/kids' },
            ]
        },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* 1. Left Section - Logo */}
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                        <span className="logo-text">PRODSHOOT</span>
                    </Link>
                </div>

                {/* 2. Center Section - Links */}
                <div className={`nav-center ${isMenuOpen ? 'mobile-open' : ''}`}>
                    {navLinks.map((link, index) => (
                        link.type === 'dropdown' ? (
                            <div className={`nav-item dropdown${link.name === 'Services' ? ' services-dropdown' : ''}`} key={index}>
                                <div className={`nav-link ${link.active ? 'active' : ''}`}>
                                    {link.name} <ChevronDown size={12} className="dropdown-arrow" />
                                </div>
                                <div className="dropdown-menu">
                                    {link.items.map((item, idx) => (
                                        <div key={idx} className="dropdown-group">
                                            <NavLink to={item.path} className="dropdown-item">
                                                {item.name}
                                                {item.subItems && <ChevronDown size={10} style={{ marginLeft: 'auto', opacity: 0.5 }} />}
                                            </NavLink>
                                            {item.subItems && (
                                                <div className="sub-menu">
                                                    {item.subItems.map((sub, sIdx) => (
                                                        <NavLink key={sIdx} to={sub.path} className="sub-item">
                                                            {sub.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={index}
                                to={link.path}
                                end={link.end}
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}

                    {/* Mobile only buttons in the menu */}
                    <div className="mobile-only-actions">
                        <a href="/#contact" className="nav-btn primary-btn">Get a Quote</a>
                        <Link to="/contact" className="nav-btn secondary-btn">Contact</Link>
                    </div>
                </div>

                {/* 3. Right Section - CTAs */}
                <div className="nav-right">
                    <a href="/#contact" className="nav-btn primary-btn quote-btn">
                        <span>Get a Quote</span>
                        <ArrowUpRight size={14} className="btn-icon" />
                    </a>
                    <Link to="/contact" className="nav-btn secondary-btn hide-mobile">
                        Contact
                    </Link>

                    {/* Hamburger Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </nav>
    );
}

export default Navbar;

