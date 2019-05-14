import React from 'react';
import PropTypes from 'prop-types';

function ColorPicker({ color, hex }){
  
  const clickHandler = () => {
    console.log(color);
  };

  const style = {
    backgroundColor: hex,
    height: '100px',
    width: '100px'
  };

  return (
    <button style={style} onClick={clickHandler}>{color}</button>
  );
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default ColorPicker;
