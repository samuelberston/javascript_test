import React from 'react';

import css from './Links.module.css';

const Links = () => (
  <div id="links" className={css.linksContainer}>
    <div id="topLine" className={`${css.line} ${css.topLine}`}>
      &nbsp;
    </div>
    <div id="links" className={css.links}>
      <div id="gitHub" className={css.link}>
        <i className="fa fa-github" />
      </div>
      <div id="linkedIn" className={css.link}>
        <i className="fa fa-linkedin-in" />
      </div>
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
