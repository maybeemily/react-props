import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, weight, faveFood }) {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Weight: {weight ? weight : 'unknown'}</li>
      <li>Favorite Food: {faveFood ? faveFood : 'unknown'}</li>
    </ul>
  );

}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string,
  faveFood: PropTypes.string
};

export default Dog;
