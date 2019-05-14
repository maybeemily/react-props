import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker tests', () => {
  it('renders the color picker', () => {
    const wrapper = shallow(<ColorPicker color="yellow" hex="#f4d742"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
