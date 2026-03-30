import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X, ArrowUpRight, Home, Info, Camera, ShoppingBag, Users, BookOpen, MessageSquare } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [expandedGroup, setExpandedGroup] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const timeoutRef = useRef(null);
    const location = useLocation();
    const currentPath = location.pathname;

    const isHome = currentPath === '/';
    const isService = currentPath !== '/' && currentPath.startsWith('/services/');
    const isIndustry = currentPath.startsWith('/market-place/');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close everything on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setExpandedGroup(null);
    }, [currentPath]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const handleMouseEnter = (name) => {
        if (window.innerWidth > 1024) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setActiveDropdown(name);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 1024) {
            timeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
        }
    };

    const toggleDropdown = (name) => {
        if (window.innerWidth <= 1024) {
            setActiveDropdown(activeDropdown === name ? null : name);
            setExpandedGroup(null);
        }
    };

    const toggleGroup = (name, e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            setExpandedGroup(expandedGroup === name ? null : name);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setExpandedGroup(null);
    };

    const navLinks = [
        { name: 'Home', path: '/', end: true, icon: Home },
        { name: 'About', path: '/about', icon: Info },
        {
            name: 'Services',
            type: 'dropdown',
            active: isService,
            icon: Camera,
            items: [
                { name: 'Product Photography', path: '/services/product-photography' },
                { name: 'White Background', path: '/services/white-background' },
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
            icon: ShoppingBag,
            items: [
                {
                    name: 'Amazon', path: '/market-place/amazon-photography',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/amazon-photography' },
                        { name: 'Footwear Photography', path: '/market-place/amazon-footwear-photography' },
                        { name: 'Fashion Photography', path: '/market-place/amazon-fashion-photography' },
                        { name: 'Medical Product', path: '/market-place/amazon-medical-photography' },
                        { name: 'Electronics', path: '/market-place/amazon-electronics-photography' },
                        { name: 'Grocery Product', path: '/market-place/amazon-grocery-photography' },
                        { name: 'Furniture', path: '/market-place/amazon-furniture-photography' },
                        { name: 'Automotive', path: '/market-place/amazon-automotive-photography' },
                        { name: 'Bikini', path: '/market-place/amazon-bikini-photography' },
                    ]
                },
                {
                    name: 'Flipkart', path: '/market-place/Flipkart',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/Flipkart' },
                        { name: 'Footwear', path: '/market-place/flipkart-footwear' },
                        { name: 'Fashion', path: '/market-place/flipkart-fashion' },
                        { name: 'Medical', path: '/market-place/flipkart-medical' },
                        { name: 'Electronics', path: '/market-place/flipkart-electronics' },
                        { name: 'Grocery', path: '/market-place/flipkart-grocery' },
                        { name: 'Furniture', path: '/market-place/flipkart-furniture' },
                        { name: 'Automotive', path: '/market-place/flipkart-automotive' },
                        { name: 'Bikini', path: '/market-place/flipkart-bikini' },
                    ]
                },
                {
                    name: 'Myntra', path: '/market-place/Myntra',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/Myntra' },
                        { name: 'Footwear', path: '/market-place/myntra-footwear' },
                        { name: 'Fashion & Model', path: '/market-place/myntra-fashion-model' },
                        { name: 'Bikini Photoshoot', path: '/market-place/myntra-bikini' },
                    ]
                },
                {
                    name: 'Meesho', path: '/market-place/Meesho',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/Meesho' },
                        { name: 'Footwear', path: '/market-place/meesho-footwear' },
                        { name: 'Fashion', path: '/market-place/meesho-fashion' },
                        { name: 'E-Commerce', path: '/market-place/meesho-ecommerce' },
                        { name: 'Electronics', path: '/market-place/meesho-electronics' },
                        { name: 'Furniture', path: '/market-place/meesho-furniture' },
                        { name: 'Automotive', path: '/market-place/meesho-automotive' },
                        { name: 'Bikini', path: '/market-place/meesho-bikini' },
                    ]
                },
                {
                    name: 'Ajio', path: '/market-place/Ajio',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/Ajio' },
                        { name: 'Footwear', path: '/market-place/ajio-footwear' },
                        { name: 'Fashion', path: '/market-place/ajio-fashion' },
                        { name: 'Bikini', path: '/market-place/ajio-bikini' },
                    ]
                },
                {
                    name: 'Tata Cliq', path: '/market-place/tatacliq/product-photography',
                    subItems: [
                        { name: 'Product Photography', path: '/market-place/tatacliq/product-photography' },
                        { name: 'Footwear', path: '/market-place/tatacliq/footwear-photography' },
                        { name: 'Fashion', path: '/market-place/tatacliq/fashion-photography' },
                        { name: 'Bikini', path: '/market-place/tatacliq/bikini-photography' },
                        { name: 'E-Commerce', path: '/market-place/tatacliq/ecommerce-photography' },
                        { name: 'Furniture', path: '/market-place/tatacliq/furniture-photography' },
                        { name: 'Cosmetic', path: '/market-place/tatacliq/cosmetic-photography' },
                        { name: 'Medical', path: '/market-place/tatacliq/medical-photography' },
                        { name: 'Electronics', path: '/market-place/tatacliq/electronics-photography' },
                    ]
                },
                {
                    name: 'Etsy', path: '/market-place/etsy/footwear-photography',
                    subItems: [
                        { name: 'Footwear', path: '/market-place/etsy/footwear-photography' },
                        { name: 'Fashion', path: '/market-place/etsy/fashion-photography' },
                        { name: 'Bikini', path: '/market-place/etsy/bikini-photography' },
                        { name: 'Electronics', path: '/market-place/etsy/electronics-photography' },
                        { name: 'Furniture', path: '/market-place/etsy/furniture-photography' },
                        { name: 'Handicraft', path: '/market-place/etsy/handicraft-photography' },
                        { name: 'E-Commerce', path: '/market-place/etsy/ecommerce-photography' },
                        { name: 'Freelance', path: '/market-place/etsy/freelancer-photography' },
                    ]
                },
            ]
        },
        {
            name: 'Gender',
            type: 'dropdown',
            icon: Users,
            items: [
                { name: 'Men', path: '/gender/men' },
                { name: 'Women', path: '/gender/women' },
                { name: 'Kids', path: '/gender/kids' },
            ]
        },
        { name: 'Blogs', path: '/blogs', icon: BookOpen },
        { name: 'Contact', path: '/contact', icon: MessageSquare },
    ];

    return (
        <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                        <img src="/logo.png" alt="Prodshoot Logo" className="logo-img" />
                    </Link>
                </div>

                {/* Desktop Navbar Center (Hidden on Mobile) */}
                <div className="nav-center-desktop">
                    {navLinks.map((link, index) => (
                        link.type === 'dropdown' ? (
                            <div
                                key={index}
                                className={`nav-item dropdown ${activeDropdown === link.name ? 'is-active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`nav-link ${link.active || activeDropdown === link.name ? 'active' : ''}`}>
                                    <span>{link.name}</span>
                                    <ChevronDown size={14} className="dropdown-arrow" />
                                </div>
                                <div className={`dropdown-menu ${activeDropdown === link.name ? 'show' : ''}`}>
                                    {link.items.map((item, idx) => (
                                        <div key={idx} className="dropdown-group">
                                            {item.subItems ? (
                                                <div className="dropdown-group-container">
                                                    <div className="dropdown-item parent-link">
                                                        <span>{item.name}</span>
                                                        <ChevronRight size={12} />
                                                    </div>
                                                    <div className="sub-menu-desktop">
                                                        {item.subItems.map((sub, sIdx) => (
                                                            <Link key={sIdx} to={sub.path} className="sub-item" onClick={closeMenu}>
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={item.path} className="dropdown-item" onClick={closeMenu}>
                                                    {item.name}
                                                </Link>
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
                </div>

                {/* Mobile Drawer (Controlled by isMenuOpen) */}
                <div className={`nav-center-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-drawer-header">
                        <Link to="/" className="nav-logo" onClick={closeMenu}>
                            <img src="/logo.png" alt="Prodshoot" className="logo-img" />
                        </Link>
                        <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
                            <X size={22} />
                        </button>
                    </div>

                    <div className="mobile-nav-content">
                        {navLinks.map((link, index) => (
                            <div key={index} className={`mobile-nav-row ${activeDropdown === link.name ? 'expanded' : ''}`}>
                                {link.type === 'dropdown' ? (
                                    <>
                                        <div className="mobile-nav-link" onClick={() => toggleDropdown(link.name)}>
                                            <div className="link-main">
                                                {link.icon && <link.icon size={20} className="icon" />}
                                                <span>{link.name}</span>
                                            </div>
                                            <ChevronDown size={18} className={`arrow ${activeDropdown === link.name ? 'rotated' : ''}`} />
                                        </div>
                                        
                                        <div className="mobile-accordion-content">
                                            {link.items.map((item, idx) => (
                                                <div key={idx} className={`mobile-sub-row ${expandedGroup === item.name ? 'expanded' : ''}`}>
                                                    {item.subItems ? (
                                                        <>
                                                            <div className="mobile-sub-link" onClick={(e) => toggleGroup(item.name, e)}>
                                                                <span>{item.name}</span>
                                                                <ChevronDown size={16} className={`arrow ${expandedGroup === item.name ? 'rotated' : ''}`} />
                                                            </div>
                                                            <div className="mobile-sub-accordion-content">
                                                                {item.subItems.map((sub, sIdx) => (
                                                                    <Link key={sIdx} to={sub.path} className="mobile-nested-link" onClick={closeMenu}>
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <Link to={item.path} className="mobile-sub-link" onClick={closeMenu}>
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link.path} className="mobile-nav-link" onClick={closeMenu}>
                                        <div className="link-main">
                                            {link.icon && <link.icon size={20} className="icon" />}
                                            <span>{link.name}</span>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mobile-drawer-footer">
                        <Link to="/contact" className="mobile-btn-primary" onClick={closeMenu}>
                            Get a Quote <ArrowUpRight size={18} />
                        </Link>
                        <a href="tel:+919356917424" className="mobile-btn-glass" onClick={closeMenu}>
                            Call Support
                        </a>
                    </div>
                </div>

                {/* Right CTAs */}
                <div className="nav-right">
                    <div className="desktop-actions">
                        <a href="/#contact" className="nav-btn primary-btn quote-btn">
                            <span>Get a Quote</span>
                            <ArrowUpRight size={14} className="btn-icon" />
                        </a>
                        <Link to="/contact" className="nav-btn secondary-btn">
                            Contact
                        </Link>
                    </div>
                    
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Overlay */}
            <div className={`nav-overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu} />
        </nav>
    );
}

export default Navbar;
