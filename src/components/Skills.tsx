import React from 'react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", level: 85 },
                { name: "C++", level: 80 },
                { name: "HTML/CSS", level: 90 }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", level: 85 },
                { name: "Node.js", level: 70 }
            ]
        },
        {
            title: "Databases & Tools",
            skills: [
                { name: "MySQL", level: 75 },
                { name: "Git", level: 80 },
                { name: "Postman", level: 85 },
                { name: "Vercel", level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-content">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 