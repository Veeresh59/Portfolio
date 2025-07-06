import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Zerodha Clone",
            description: "A responsive web clone of Zerodha homepage using HTML, CSS, JavaScript, and React. Features modern UI design, responsive layout, and interactive elements. Optimized for performance and clean code structure.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://zerodha-clone.vercel.app",
            githubUrl: "https://github.com/Veeresh59/zerodha-clone"
        },
        {
            title: "Spotify Clone",
            description: "A music streaming UI built using HTML, CSS, JavaScript, and React. Includes play/pause functionality, music player controls, and responsive design. Features dynamic content and modern interface.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://spotify-clone.vercel.app",
            githubUrl: "https://github.com/Veeresh59/spotify-clone"
        },
        {
            title: "Weather App",
            description: "Interactive weather application using HTML, CSS, JavaScript, and React. Features real-time weather data, location-based forecasts, and responsive design. Includes temperature conversion and weather icons.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://weather-app.vercel.app",
            githubUrl: "https://github.com/Veeresh59/weather-app"
        },
        {
            title: "Todo List App",
            description: "Task management application built with HTML, CSS, JavaScript, and React. Features add, edit, delete tasks, local storage persistence, and responsive design. Clean and intuitive user interface.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://todo-app.vercel.app",
            githubUrl: "https://github.com/Veeresh59/todo-app"
        },
        {
            title: "Calculator App",
            description: "Modern calculator application with HTML, CSS, JavaScript, and React. Features basic arithmetic operations, responsive design, and clean interface. Includes keyboard support and error handling.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://calculator-app.vercel.app",
            githubUrl: "https://github.com/Veeresh59/calculator-app"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing skills and projects. Built with HTML, CSS, JavaScript, and React. Features responsive design, smooth animations, contact form, and modern UI/UX principles.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
            liveUrl: "https://veeresh-portfolio.vercel.app",
            githubUrl: "https://github.com/Veeresh59/portfolio-website"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '8px 8px 0 0',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.githubUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 