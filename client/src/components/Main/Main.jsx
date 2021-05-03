import React from 'react';

import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience.jsx';
import Contact from './Contact/Contact.jsx';

import css from './Main.module.css';

const Main = () => (
  <div id="main" className={css.main}>
    <About />
    <Projects />
    <Experience />
    <Contact />
  </div>
);

export default Main;
