import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always interested in new opportunities and exciting projects. 
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <strong>Email:</strong>
                                    <a href="mailto:veereshhiremath6465@gmail.com">veereshhiremath6465@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
                                <div>
                                    <strong>Phone:</strong>
                                    <a href="tel:+918123922421">+91 8123922421</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <strong>Location:</strong>
                                    <span>India</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">💼</span>
                                <div>
                                    <strong>Available for:</strong>
                                    <span>Internships, Freelance, Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="mailto:veereshhiremath6465@gmail.com" className="social-link">
                                <span>📧</span> Email
                            </a>
                            <a href="https://linkedin.com/in/veeresh-hiremath-924748281/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>📱</span> LinkedIn
                            </a>
                            <a href="https://github.com/Veeresh59" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>🐙</span> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 