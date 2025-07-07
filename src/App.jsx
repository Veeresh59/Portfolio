import React, { useState, useEffect } from 'react';
import './styles/style.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App">
            {isMobile && <Navbar />}
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Experience /> */}
            <Contact />
        </div>
    );
};

export default App; 