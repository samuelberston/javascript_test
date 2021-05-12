import React from 'react';
import PropTypes from 'prop-types';

import css from './ProjectModal.module.css';

const ProjectModal = ({ url, clicked, exitModal }) => (
  <div id="ProjectModal" className={`${css.modal} ${clicked ? css.modalShow : ''}`}>
    <button type="button" onClick={exitModal}>
      X
    </button>
    <img src={url} alt="" />
  </div>
);

ProjectModal.propTypes = {
  url: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  exitModal: PropTypes.func.isRequired,
};

export default ProjectModal;
