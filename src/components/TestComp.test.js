import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComp from './TestComp';

Enzyme.configure({ adapter: new Adapter() });

describe('TestComp', () => {
  it('should show text', () => {
    const wrapper = shallow(<TestComp />);
    const text = wrapper.find('div p');
    expect(text.text()).toBe('Show Me!!!');
  });
  it('should hide text when button is clicked', () => {
    const wrapper = shallow(<TestComp />);
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('div p');
    expect(text.length).toBe(0);
  });
});
