import React from 'react';

import css from './Projects.module.css';

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
        as well as a feed, and engage in discussion around issues.
        Users can also alert local officials of issues.
        <br />
        Technologies: Google Maps API, Google Civic API, ES6, React, Nodejs, Express, MySQL,
        Jest/Enzyme/CircleCI
      </div>
      <div id={css.imgs} className={css.localVoiceImgs}>
        <img src="https://media-exp1.licdn.com/dms/image/C562DAQGB59TGk5I8Ww/profile-treasury-image-shrink_800_800/0/1618297098474?e=1620853200&v=beta&t=ghZRB0zdH1MZ24ICO3h1aa2p-k_MzTrIwz8ALsqYiWo" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C562DAQFHUzR2F_OEFA/profile-treasury-image-shrink_800_800/0/1618297068161?e=1620853200&v=beta&t=5E74rWhUseTl_WsDGbsgYbOco_juQO6ejFlmaGTj9lI" alt="" />
	</div>
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
        Technologies: Twilio API, cron, React, CSS, Nodejs, Express, MySQL
      </div>
      <div id={css.imgs} className={css.textifyImgs}>
	        <img src="https://media-exp1.licdn.com/dms/image/C562DAQEZkb-B2ZXB1A/profile-treasury-image-shrink_800_800/0/1618297338375?e=1620853200&v=beta&t=xlAT36VKwhwsPedaGNH3UmyvQ-3lvGA9O-c2xip-xC4" alt="" />
        <img src="https://media-exp1.licdn.com/dms/image/C562DAQGsEAV0FjNg2g/profile-treasury-image-shrink_800_800/0/1618297302706?e=1620853200&v=beta&t=JCjgUwo94gIj1SFw7NIS2Wp44jAwuGvYObPwstPapxc" alt="" />
      </div>
    </div>
  </div>
);

export default Projects;
