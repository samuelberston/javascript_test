import React from 'react';

import css from './Header.module.css';

const Header = () => (
  <nav id="header" className={css.header}>
    <div id="about" className={css.module}>
      About
    </div>
    <div id="projects" className={css.module}>
      Projects
    </div>
    <div id="experience" className={css.module}>
      Experience
    </div>
    <div id="contact" className={css.module}>
      Contact
    </div>
    <div id={css.resume} className={css.module}>
      Resume
    </div>
  </nav>
);

export default Header;
