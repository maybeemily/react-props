import React from 'react';
import { shallow } from 'enzyme';
import AnotherColorPicker from './AnotherColorPicker';

describe('Color Picker tests', () => {
  it('renders the color picker', () => {
    const colorArray = ['red', 'blue', 'yellow'];
    const wrapper = shallow(<AnotherColorPicker colors = { colorArray }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
