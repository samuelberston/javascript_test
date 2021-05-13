import React from 'react';

import Carousel from './Carousel.jsx';

import css from './Projects.module.css';

const localVoiceImgs = [
  {
    url: 'images/lv1.png',
    caption: 'Responsive Google Maps user interface which fetches data from a MySQL db based on user\'s location',
  },
  {
    url: 'images/lv2.png',
    caption: 'Interactive feed which dynamically renders issue cards and allows user to engage in discussion',
  },
  {
    url: 'images/lv3.png',
    caption: 'Reporting form which utilizes Google Civic API to generate list of local representatives',
  },
];

const textifyImgs = [
  {
    url: 'images/textify3.png',
    caption: 'Application system design diagramming data flow, server architecture, database schema, and microservice',
  },
  {
    url: 'images/textify1.jpg',
    caption: 'Interactive user controller panel styled with CSS inspired by Trello',
  },
  {
    url: 'images/textify2.png',
    caption: 'Form connected to Twilio cron microservice',
  },
];

const fecImgs = [
  {
    url: 'images/fec1.png',
    caption: 'Stylish product page with complex React architecture and CSS',
  },
  {
    url: 'images/fec2.png',
    caption: 'Image modal which appears over the Image Galler component',
  },
  {
    url: 'images/fec3.png',
    caption: 'Interactive sticky header which appears after user scrolls away',
  },
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
