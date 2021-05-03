import React from 'react';

import css from './Contact.module.css';

const Contact = () => (
  <div id={css.contact}>
    <h2>
      Contact
    </h2>
    <div className={css.text}>
      Have an open role? I would love to chat.
    </div>
    <button id="getInTouch" className={css.getInTouch} type="button">
      <a href="mailto: samuelberston@gmail.com">
        Get In Touch
      </a>
    </button>
  </div>
);

export default Contact;
