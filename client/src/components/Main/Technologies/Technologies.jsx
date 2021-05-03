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
            jQuery
          </li>
          <li>
            Babel
          </li>
          <li>
            Webpack
          </li>
          <li>
            Google Maps API
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
            REST API
          </li>
          <li>
            MySQL
          </li>
          <li>
            MongoDB
          </li>
          <li>
            AWS (EC2, S3, CloudWatch)
          </li>
          <li>
            NGINX
          </li>
          <li>
            Twilio
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
            Mocha/Chai
          </li>
          <li>
            CircleCI
          </li>
          <li>
            Git
          </li>
          <li>
            loader.io
          </li>
          <li>
            Chrome Dev Tools
          </li>
          <li>
            k6/InfluxDB/Grafana
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Technologies;
