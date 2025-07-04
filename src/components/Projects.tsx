import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Zerodha Clone",
            description: "A responsive web clone of Zerodha homepage using HTML, CSS, JavaScript, and React. Optimized for performance and clean UI with modern design principles.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "📈",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Spotify Clone",
            description: "A music streaming UI built using HTML, CSS, JavaScript, and React. Includes play/pause functionality and dynamic content with responsive layout design.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            image: "🎵",
            liveUrl: "#",
            githubUrl: "#"
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
                                <span className="project-emoji">{project.image}</span>
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
                                    <a href={project.githubUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer">
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