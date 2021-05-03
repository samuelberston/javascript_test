import React from 'react';

import css from './About.module.css';

const About = () => (
  <div id="about" className={css.about}>
    <div id="intro" className={css.intro}>
      Hi, my name is
    </div>
    <div id="name" className={css.name}>
      Sam Berston
    </div>
    <div id="bio" className={css.bio}>
      I’m a recent graduate of  Northwestern and Hack Reactor’s Advanced Software Engineering
      Immersive  program with experience building full-stack web applications.  I’m currently
      looking for a new opportunity as a software engineer at an awesome tech company.
    </div>
    <button id="getInTouch" className={css.getInTouch} type="button">
      <a href="mailto: samuelberston@gmail.com">
        Get In Touch
      </a>
    </button>
  </div>
);

export default About;
