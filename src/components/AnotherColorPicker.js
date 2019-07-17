import React from 'react';
import PropTypes from 'prop-types';

function AnotherColorPicker({ colors }) {
  
  const clickHandler = event => {
    console.log(event.target.textContent);
  };

  const buttons = colors.map(color => {
    return <button key={color} style={{ backgroundColor: color, height: '100px', width: '100px' }} onClick={clickHandler}>{color}</button>;
  });

  return (
    <>
    { buttons }
    </>
  );
}

AnotherColorPicker.propTypes = {
  colors: PropTypes.array.isRequired
};

export default AnotherColorPicker;
