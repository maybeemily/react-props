import React from 'react';
import ColorPicker from './ColorPicker';
import AnotherColorPicker from './AnotherColorPicker';

export default function App() {
  const colorArray = ['red', 'blue', 'yellow'];

  return (
    <>
    <AnotherColorPicker colors = { colorArray } />
    <ColorPicker color="yellow" hex="#f4d742"/>
    <ColorPicker color="pink" hex="#fc46bc"/>
    <ColorPicker color="leaf green" hex="#b7ea35"/>
    </>
  );
}
