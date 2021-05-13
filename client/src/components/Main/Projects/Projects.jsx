import React from 'react';

import Carousel from './Carousel.jsx';

import css from './Projects.module.css';

const localVoiceImgs = [
  'images/lv1.png',
  'images/lv2.png',
  'images/lv3.png',
];

const textifyImgs = [
  'images/textify3.png',
  'images/textify1.jpg',
  'images/textify2.png',
];

const fecImgs = [
  'images/fec1.png',
  'images/fec2.png',
  'images/fec3.png',
];

const Projects = () => (
  <div id="Projects" className={css.projects}>
    <h2>
      Projects
    </h2>
    <div className={`${css.localVoice} ${css.project}`}>
      <div className={css.projectLink}>
        <a type="button" href="https://github.com/samuelberston/local-voice/blob/main/README.md" target="_blank" rel="noreferrer">
          Local Voice
        </a>
      </div>
      <div className={css.text}>
        Local Voice is a location-based web application that displays user-generated issue data and
        allows users to submit issues of their own. Users can interact with the issues in a map view
        as well as a feed, engage in discussion around issues, and alert local officials of issues
        with the Google Civic API.
        <br />
        <br />
        <div className={css.technologies}>
          Technologies: Google Maps API, Google Civic API, React, Nodejs, Express, MySQL,
          Jest/Enzyme/CircleCI
        </div>
      </div>
      <Carousel imgs={localVoiceImgs} />
    </div>
    <div className={`${css.textify} ${css.project}`}>
      <div className={css.projectLink}>
        <a href="https://github.com/samuelberston/Textify-App/blob/main/README.md" target="_blank" rel="noreferrer">
          Textify
        </a>
      </div>
      <div className={css.text}>
        Textify is a single page application that allows users to schedule automated text messages.
        Textify is an MVP project that I built in two days.
        <br />
        <br />
        <div className={css.technologies}>
          Technologies: Twilio API, cron, React, CSS, Nodejs, Express, MySQL
        </div>
      </div>
      <Carousel imgs={textifyImgs} />
    </div>
    <div className={`${css.fec} ${css.project}`}>
      <div className={css.projectLink}>
        <a href="https://github.com/samuelberston/Ecommerce-Site/blob/master/README.md" target="_blank" rel="noreferrer">
          Ecommerce Site
        </a>
      </div>
      <div className={css.text}>
        This modern, user-friendly ecommerce product page was built using complex React architecture
        and REST API.
        <br />
        <br />
        <div className={css.technologies}>
          Technologies: React, CSS modules, Express, Jest/Enzyme/CircleCI
        </div>
      </div>
      <Carousel imgs={fecImgs} />
    </div>

  </div>
);

export default Projects;
