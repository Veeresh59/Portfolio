import React from 'react';
import './styles/style.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar />
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