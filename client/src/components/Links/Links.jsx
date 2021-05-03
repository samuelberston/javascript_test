import React from 'react';

import css from './Links.module.css';

const Links = () => (
  <div id="links" className={css.linksContainer}>
    <div id="topLine" className={`${css.line} ${css.topLine}`}>
      &nbsp;
    </div>
    <div id="links" className={css.links}>
      <a id="gitHub" className={css.link} href="https://github.com/samuelberston" target="_blank" rel="noreferrer">
        <i className="fa fa-github" />
      </a>
      <a id="linkedIn" className={css.link} href="https://www.linkedin.com/in/samberston/" target="_blank" rel="noreferrer">
        <i className="fa fa-linkedin-in" />
      </a>
      <div id="gmail" className={css.link}>
        <i className="fa fa-envelope-square" />
      </div>
    </div>
    <div id="bottomLine" className={`${css.line} ${css.bottomLine}`}>
      &nbsp;
    </div>
  </div>
);

export default Links;
