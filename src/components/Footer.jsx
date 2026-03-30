import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-main">
                    <div className="footer-col footer-brand-col">
                        <Link to="/" className="footer-brand" style={{ textDecoration: 'none' }}>
                            <img src="/logo.png" alt="Prodshoot Logo" className="logo-img" />
                        </Link>
                        <p className="footer-tagline">Professional product photography studio for D2C brands and marketplace sellers worldwide.</p>
                        <div className="footer-socials">
                            <a href="#" className="social-link"><Instagram size={18} /></a>
                            <a href="#" className="social-link"><Twitter size={18} /></a>
                            <a href="#" className="social-link"><Linkedin size={18} /></a>
                            <a href="mailto:click@prodshoot.co.in" className="social-link"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <Link to="/services/product-photography">Product Photography</Link>
                        <Link to="/services/white-background">White Background</Link>
                        <Link to="/services/hero-shots">Hero Shots</Link>
                        <Link to="/services/lifestyle-photography">Lifestyle Shoots</Link>
                        <Link to="/services/3d-renders">3D Renders</Link>
                        <Link to="/services/infographic-design">Infographic Design</Link>
                        <Link to="/services/hand-modeling">Hand Modeling</Link>
                        <Link to="/services/ghost-mannequin">Ghost Mannequin</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Market Place</h4>
                        <Link to="/market-place/amazon-photography">Amazon</Link>
                        <Link to="/market-place/Flipkart">Flipkart</Link>
                        <Link to="/market-place/Myntra">Myntra</Link>
                        <Link to="/market-place/Meesho">Meesho</Link>
                        <Link to="/market-place/Ajio">Ajio</Link>
                        <Link to="/market-place/tatacliq/product-photography">Tata cliq</Link>
                        <Link to="/market-place/etsy/footwear-photography">Etsy</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/">Prodshoot</Link>
                        <Link to="/blogs">Blog</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="mailto:click@prodshoot.co.in" className="footer-contact-item" style={{ textDecoration: 'none' }}>
                            <Mail size={14} />
                            <span>click@prodshoot.co.in</span>
                        </a>
                        <a href="tel:+919356917424" className="footer-contact-item" style={{ textDecoration: 'none' }}>
                            <Phone size={14} />
                            <span>+91 93569 17424</span>
                        </a>
                        <div className="footer-contact-item">
                            <MapPin size={14} />
                            <span>Prodshoot Studio, No. 104 Madhuban Complex, Manchar 410503</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Prodshoot — Professional Product Photography Studio. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/contact">Privacy Policy</Link>
                        <Link to="/contact">Terms of Service</Link>
                        <Link to="/contact">Shipping Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
