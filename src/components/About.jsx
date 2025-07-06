import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm currently pursuing my B.E. in Information Science at BLDE Engineering College, Vijayapura. 
                            My academic journey has provided me with a strong foundation in computer science principles 
                            and front-end development methodologies.
                        </p>
                        <p>
                            Through my coursework and self-study, I've developed expertise in HTML, CSS, JavaScript, and React. 
                            I'm passionate about creating intuitive user interfaces and responsive web applications that provide 
                            exceptional user experiences. I love turning design concepts into functional, interactive websites.
                        </p>
                        <div className="about-details">
                            <div className="detail-item">
                                <strong>Degree:</strong> B.E. Information Science
                            </div>
                            <div className="detail-item">
                                <strong>Institution:</strong> BLDE Engineering College, Vijayapura
                            </div>
                            <div className="detail-item">
                                <strong>CGPA:</strong> 7.23
                            </div>
                            <div className="detail-item">
                                <strong>Graduation:</strong> 2025
                            </div>
                            <div className="detail-item">
                                <strong>Field of Study:</strong> Information Science & Engineering
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img 
                            src="https://img.icons8.com/?size=100&id=42437&format=png&color=000000" 
                            alt="Graduation Cap" 
                            style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'contain',
                                display: 'block',
                                margin: '0 auto',
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.10))'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 