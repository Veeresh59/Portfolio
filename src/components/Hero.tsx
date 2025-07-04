import React from 'react';

const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="highlight">Veeresh Hiremath</span></h1>
                    <h2>Aspiring Full Stack Developer</h2>
                    <p>Passionate about building responsive web applications using React, JavaScript, and modern tools.</p>
                    <div className="hero-buttons">
                        <button 
                            className="btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button 
                            className="btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img 
                        src={process.env.PUBLIC_URL + '/veeresh-image.jpg'} 
                        alt="Veeresh Hiremath" 
                        style={{
                            width: '360px',
                            height: '360px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            border: '4px solid #3b82f6'
                        }}
                    />
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero; 