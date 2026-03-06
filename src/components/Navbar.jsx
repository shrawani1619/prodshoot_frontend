import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    // Helper functions to check active section
    const isHome = currentPath === '/';
    const isService = currentPath.startsWith('/services/');
    const isIndustry = currentPath.startsWith('/market-place/');

    return (
        <nav className="pill-nav">
            <Link to="/" className="pill-link brand-pill">PRODSHOOT</Link>

            <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? "pill-link active" : "pill-link"}
            >
                Home
            </NavLink>

            <div className="nav-item">
                <div className={`pill-link ${isService ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                    Services <ChevronDown size={11} />
                </div>
                <div className="dropdown-menu">
                    <NavLink to="/services/product-photography" className="dropdown-item">Product Photography</NavLink>
                    <NavLink to="/services/white-background" className="dropdown-item">Seamless White Background</NavLink>
                    <NavLink to="/services/hero-shots" className="dropdown-item">Hero Shots</NavLink>
                    <NavLink to="/services/lifestyle-photography" className="dropdown-item">Lifestyle Photography</NavLink>
                    <NavLink to="/services/3d-renders" className="dropdown-item">3D Product Renders</NavLink>
                    <NavLink to="/services/infographic-design" className="dropdown-item">Infographic Design</NavLink>
                    <NavLink to="/services/hand-modeling" className="dropdown-item">Hand Modeling</NavLink>
                    <NavLink to="/services/ghost-mannequin" className="dropdown-item">Ghost Mannequin</NavLink>
                </div>
            </div>

            <div className="nav-item">
                <div className={`pill-link ${isIndustry ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                    Market Place <ChevronDown size={11} />
                </div>
                <div className="dropdown-menu">
                    <NavLink to="/market-place/Amazon" className="dropdown-item">Amazon</NavLink>
                    <NavLink to="/market-place/Flipkart" className="dropdown-item">Flipkart</NavLink>
                    <NavLink to="/market-place/Myntra" className="dropdown-item">Myntra</NavLink>
                    <NavLink to="/market-place/Meesho" className="dropdown-item">Meesho</NavLink>
                    <NavLink to="/market-place/Ajio" className="dropdown-item">Ajio</NavLink>
                    <NavLink to="/market-place/Tata cliq" className="dropdown-item">Tata cliq</NavLink>
                    <NavLink to="/market-place/Etsy" className="dropdown-item">Etsy</NavLink>
                </div>
            </div>

            <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? "pill-link active" : "pill-link"}
            >
                Portfolio
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "pill-link active" : "pill-link"}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "pill-link active" : "pill-link"}
                style={{ border: '1px solid rgba(168, 85, 247, 0.4)' }}
            >
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;
