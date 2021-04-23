import React from 'react';

import css from './Links.module.css';

const Links = () => (
  <div id="links" className={css.links}>
    <div id="topLine">
      line
    </div>
    <div id="links">
      <div id="gitHub">
        GitHub
      </div>
      <div id="linkedIn">
        LinkedIn
      </div>
      <div id="gmail">
        Gmail
      </div>
    </div>
    <div id="bottomLine">
      line
    </div>
  </div>
);

export default Links;
