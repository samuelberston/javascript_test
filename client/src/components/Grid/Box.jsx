import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ index, color, deleteBox }) => (
  <div id="box" style={{ backgroundColor: { color } }}>
    <div id={index} role="button" onClick={deleteBox} onKeyPress={deleteBox} tabIndex={0}>
      X
    </div>
    {index}
  </div>
);

Box.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  deleteBox: PropTypes.func.isRequired,
};

export default Box;
