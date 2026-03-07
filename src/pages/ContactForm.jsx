import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send,
    CheckCircle2,
    Aperture,
    ArrowLeft,
    Phone,
    Mail,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomSelect from '../components/CustomSelect';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');

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
        <div className="page-wrapper dark-theme">
            <Navbar />

            <section className="form-page-container">
                <div className="form-page-inner">
                    <motion.div
                        className="form-header"
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <motion.div className="hero-badge" variants={fadeUp} style={{ margin: '0 auto 1.5rem' }}>
                            <Aperture size={10} style={{ display: 'inline', marginRight: '6px' }} />
                            GET IN TOUCH
                        </motion.div>
                        <motion.h1 className="display-bold" variants={fadeUp}>
                            Let's Build Something<br />Intelligent
                        </motion.h1>
                        <motion.p className="form-subtitle" variants={fadeUp}>
                            Our production architects are ready to engineer your visual assets.<br />Reach out for a consultation.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="centered-form-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    className="success-state-centered"
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="success-icon-circle-large">
                                        <CheckCircle2 size={64} />
                                    </div>
                                    <h2>Message Sent!</h2>
                                    <p>Our team at prodshoot.co.in will review your inquiry and get back to you within 12 hours. We're excited to learn more about your brand.</p>
                                    <button className="cta-secondary-btn" onClick={() => setStatus('idle')}>SEND ANOTHER</button>
                                </motion.div>
                            ) : (
                                <form className="dedicated-contact-form" onSubmit={handleSubmit} key="form">
                                    <div className="form-section-label">PERSONAL DETAILS</div>
                                    <div className="form-row">
                                        <div className="form-group-dedicated">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group-dedicated">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group-dedicated">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group-dedicated">
                                            <CustomSelect
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="Select Service Type"
                                                options={[
                                                    { value: 'Commercial Photography', label: 'Commercial Photography' },
                                                    { value: '3D Product Modeling', label: '3D Product Modeling' },
                                                    { value: 'Packaging Design', label: 'Packaging Design' },
                                                    { value: 'Partnership Inquiry', label: 'Partnership Inquiry' },
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-section-label">YOUR PROJECT</div>
                                    <div className="form-group-dedicated">
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="Tell us about your requirements..."
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="form-footer">
                                        <p className="form-security-note">
                                            Secure 256-bit encrypted transmission.
                                        </p>
                                        <button
                                            className="cta-primary-btn form-submit-btn"
                                            type="submit"
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                "SENDING..."
                                            ) : (
                                                <>SEND MESSAGE <Send size={18} style={{ marginLeft: '8px' }} /></>
                                            )}
                                        </button>
                                    </div>

                                    {status === 'error' && (
                                        <p className="error-msg-dedicated">Failed to send. Please contact us on click@prodshoot.co.in directly.</p>
                                    )}
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="form-quick-info">
                        <div className="quick-info-item">
                            <Mail size={16} />
                            <span>click@prodshoot.co.in</span>
                        </div>
                        <div className="quick-info-item">
                            <Phone size={16} />
                            <span>+91 93569 17424</span>
                        </div>
                        <div className="quick-info-item">
                            <Globe size={16} />
                            <span>prodshoot.co.in</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ContactForm;
