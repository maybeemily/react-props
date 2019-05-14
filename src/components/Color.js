import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  const style = {
    'background-color' : hex 
  };

  return (
    <ul>
      <li>Color Name: <span style={style}>{name ? name : hex}</span></li>
      <li>Color Hex: {hex}</li>
      <li>Color RGB: {rgb}</li>
    </ul>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired
};

export default Color;
