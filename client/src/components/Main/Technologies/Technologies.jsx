import React from 'react';

import css from './Technologies.module.css';

const Technologies = () => (
  <div id={css.technologies}>
    <h2>
      Technologies
    </h2>
    <div id={css.lists}>
      <div id="frontEnd">
        <ul>
          <h4>
            Front End
          </h4>
          <li>
            ES6/HTML/CSS
          </li>
          <li>
            React
          </li>
          <li>
            Babel
          </li>
          <li>
            Webpack
          </li>
        </ul>
      </div>
      <div id="backEnd">
        <ul>
          <h4>
            Back End
          </h4>
          <li>
            Nodejs
          </li>
          <li>
            Express
          </li>
          <li>
            MySQL
          </li>
          <li>
            MongoDB
          </li>
          <li>
            AWS (EC2, S3, CloudWatch, Route 53)
          </li>
        </ul>
      </div>
      <div id="testingUtilities">
        <ul>
          <h4>
            Testing and Utilities
          </h4>
          <li>
            Jest/Enzyme
          </li>
          <li>
            CircleCI
          </li>
          <li>
            loader.io
          </li>
          <li>
            Chrome Dev Tools
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Technologies;
