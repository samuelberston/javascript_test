import React from 'react';

import css from './Projects.module.css';

const Projects = () => (
  <div id="Projects" className={css.projects}>
    <h2>
      Projects
    </h2>
    <div className={css.localVoice}>
      <a className={css.localVoiceLink} type="button" href="https://github.com/samuelberston/local-voice/blob/main/README.md" target="_blank" rel="noreferrer">
        Local Voice
      </a>
      Local Voice is a location-based web application that displays user-generated issue data and
      allows users to submit issues of their own. Users can interact with the issues in a map view
      as well as a feed, and engage in discussion around issues.
      Users can also alert local officials of issues.
      <br />
      Technologies: Google Maps API, Google Civic API, ES6, React, Nodejs, Express, MySQL,
      Jest/Enzyme/CircleCI
      <div id="images">
        <img src="https://media-exp1.licdn.com/dms/image/C562DAQGB59TGk5I8Ww/profile-treasury-image-shrink_800_800/0/1618297098474?e=1620162000&v=beta&t=jCV2RMWbfK1cMYLEn6CG9q-KudA5WbL0DSFHC2r3vHk" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C562DAQFHUzR2F_OEFA/profile-treasury-image-shrink_800_800/0/1618297068161?e=1620162000&v=beta&t=fyQ2Gkj48H4zCojeheX0152LkhlXZ83jqGCa97EzezY" alt="" />
      </div>
    </div>
    <div className={css.textify}>
      <a className={css.textifyLink} href="https://github.com/samuelberston/Textify-App/blob/main/README.md" target="_blank" rel="noreferrer">
        Textify
      </a>
      Textify is a single page application that allows users to schedule automated text messages.
      Textify is an MVP project that I built in two days.
      Technologies: Twilio API, cron, React, CSS, Nodejs, Express, MySQL
    </div>
  </div>
);

export default Projects;
