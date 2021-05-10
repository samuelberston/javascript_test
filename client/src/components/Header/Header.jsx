import React from 'react';

import css from './Header.module.css';

const Header = () => (
  <nav id="header" className={css.header}>
    <div id="about" className={css.module} role="button" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} onKeyPress={() => {}} tabIndex={0}>
      About
    </div>
    <div id="technologies" className={css.module} role="button" onClick={() => { window.scrollTo({ top: 900, behavior: 'smooth' }); }} onKeyPress={() => {}} tabIndex={0}>
      Technologies
    </div>
    <div id="projects" className={css.module} role="button" onClick={() => { window.scrollTo({ top: 1650, behavior: 'smooth' }); }} onKeyPress={() => {}} tabIndex={0}>
      Projects
    </div>
    <div id="contact" className={css.module} role="button" onClick={() => { window.scrollTo({ top: 3200, behavior: 'smooth' }); }} onKeyPress={() => {}} tabIndex={0}>
      Contact
    </div>
    <a id={css.resume} className={css.module} href="https://www.linkedin.com/in/samberston/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB2itc4BGrbWkzmLTD4Tjs4U2eDL6KiJ0Ts,1635455824308)/" target="_blank" rel="noreferrer">
      Resume
    </a>
  </nav>
);

export default Header;
