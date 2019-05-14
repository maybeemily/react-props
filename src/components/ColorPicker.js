import React from 'react';

export default function ColorPicker() {

  const style1 = {
    height: '30px',
    width: '30px',
    'background-color': 'pink'
  };
  const style2 = {
    height: '30px',
    width: '30px',
    'background-color': 'yellow'
  };
  const style3 = {
    height: '30px',
    width: '30px',
    'background-color': 'powderblue'
  };
  return (
    <ul>
      <li><span style={style1}>PINK</span></li>
      <li><span style={style2}>YELLOW</span></li>
      <li><span style={style3}>BLUE</span></li>
    </ul>
  );

}
