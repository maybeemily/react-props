import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog tests', () => {
  it('renders a dog', () => {
    const wrapper = shallow(<Dog name="Saturday" age={16} weight="15 lbs"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
