import React from 'react';

import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Technologies from './Technologies/Technologies.jsx';
import Contact from './Contact/Contact.jsx';

import css from './Main.module.css';

const Main = () => (
  <div id="main" className={css.main}>
    <About />
    <Technologies />
    <Projects />
    <Contact />
  </div>
);

export default Main;
