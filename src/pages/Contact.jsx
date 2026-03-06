import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    MessageSquare,
    Globe,
    ExternalLink,
    Sparkles,
    Instagram,
    Linkedin,
    Twitter
} from 'lucide-react';
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

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Contact error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* ─── HERO ─── */}
            <section className="service-hero" style={{ minHeight: '60vh', padding: '12rem 2rem 4rem' }}>
                <div className="service-hero-content" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div className="hero-badge" style={{ margin: '0 auto 1.5rem' }} variants={fadeUp}>
                            <MessageSquare size={10} style={{ display: 'inline', marginRight: '6px' }} />
                            CONTACT US
                        </motion.div>
                        <motion.h1 className="display-bold" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem' }} variants={fadeUp}>
                            Let's start your<br />next visual story.
                        </motion.h1>
                        <motion.p className="service-hero-desc" variants={fadeUp}>
                            Have a project in mind or just want to chat? Reach out to us. We typically respond within 12 hours.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── CONTACT SECTION ─── */}
            <section className="service-section" style={{ paddingTop: 0 }}>
                <div className="service-section-grid" style={{ gap: '4rem', gridTemplateColumns: '1fr 1.2fr' }}>

                    {/* INFO SIDE */}
                    <div className="contact-info-col">
                        <div className="section-label-sm">GET IN TOUCH</div>
                        <h2 className="display-bold" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Always open for creative ventures.</h2>

                        <div className="contact-methods">
                            <motion.div className="contact-method-card" whileHover={{ x: 10 }}>
                                <div className="contact-icon-box"><Mail size={24} /></div>
                                <div className="contact-text-box">
                                    <span>Email us</span>
                                    <h3>sales@damsole.com</h3>
                                    <p>Official support & inquiries</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-method-card" whileHover={{ x: 10 }}>
                                <div className="contact-icon-box"><Phone size={24} /></div>
                                <div className="contact-text-box">
                                    <span>Call us</span>
                                    <h3>+91 9356917424</h3>
                                    <p>Mon - Sat, 10am - 8pm IST</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-method-card" whileHover={{ x: 10 }}>
                                <div className="contact-icon-box"><MapPin size={24} /></div>
                                <div className="contact-text-box">
                                    <span>Visit us</span>
                                    <h3>Mumbai, India</h3>
                                    <p>Studio 42, Creatives Hub</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="social-links-row" style={{ marginTop: '3rem' }}>
                            <a href="#" className="social-link-btn"><Instagram size={20} /></a>
                            <a href="#" className="social-link-btn"><Linkedin size={20} /></a>
                            <a href="#" className="social-link-btn"><Twitter size={20} /></a>
                            <a href="https://aidamsole.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" title="Visit Aidamsole">
                                <Globe size={20} />
                            </a>
                        </div>
                    </div>

                    {/* FORM SIDE */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {status === 'success' ? (
                            <div className="success-state">
                                <div className="success-icon-circle">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2>Message Sent!</h2>
                                <p>Thank you for reaching out. We will get back to you shortly.</p>
                                <button className="cta-secondary-btn" onClick={() => setStatus('idle')}>SEND ANOTHER</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="hello@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select name="subject" value={formData.subject} onChange={handleChange} required>
                                            <option value="">Select a subject</option>
                                            <option value="Product Photography">Product Photography</option>
                                            <option value="3D Renders">3D Renders</option>
                                            <option value="Bulk Order">Bulk Order</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="General Query">General Query</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        placeholder="Tell us about your project or inquiry..."
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    className="cta-primary-btn"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                    type="submit"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <span className="loader-dots">Sending<span>.</span><span>.</span><span>.</span></span>
                                    ) : (
                                        <>
                                            <Send size={18} /> SEND MESSAGE
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="error-msg">Something went wrong. Please try again or email us directly.</p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ─── MAP / STUDIO INFO ─── */}
            <section className="service-section">
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="studio-location-banner">
                        <div className="location-content">
                            <h2 className="display-bold">Our Global Headquarters</h2>
                            <p>Located in the heart of Mumbai's creative district.</p>
                            <div className="location-badge">
                                <MapPin size={16} /> GOOGLE MAPS <ArrowUpRight size={14} />
                            </div>
                        </div>
                        <div className="location-visual">
                            <div className="map-placeholder">
                                {/* This would be an iframe or dynamic map */}
                                <div className="studio-info-overlay">
                                    <h4>Prodshoot Studio</h4>
                                    <p>Open 24/7 for production</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
