import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
    <Header />
    <Dog name="Saturday" age={16} faveFood="watermelon"/>
    </>
  );
}
