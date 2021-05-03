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
    <a id={css.resume} className={css.module} href="https://www.linkedin.com/in/samberston/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB2itc4BGrbWkzmLTD4Tjs4U2eDL6KiJ0Ts,1635455824308)/" target="_blank" rel="noreferrer">
      Resume
    </a>
  </nav>
);

export default Header;
