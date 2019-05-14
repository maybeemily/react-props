import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color test', () => {
  it('renders the color', () => {
    const wrapper = shallow(<Color hex="#c6f470" rgb="(198, 244, 112)" />);
    expect(wrapper).toMatchSnapshot();
  });
});
