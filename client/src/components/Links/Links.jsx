import React from 'react';

import css from './Links.module.css';

const Links = () => (
  <div id="links" className={css.linksContainer}>
    <div id="topLine" className={`${css.line} ${css.topLine}`}>
      &nbsp;
    </div>
    <div id="links" className={css.links}>
      <div id="gitHub" className={css.link}>
        GitHub
      </div>
      <div id="linkedIn" className={css.link}>
        LinkedIn
      </div>
      <div id="gmail" className={css.link}>
        Gmail
      </div>
    </div>
    <div id="bottomLine" className={`${css.line} ${css.bottomLine}`}>
      &nbsp;
    </div>
  </div>
);

export default Links;
