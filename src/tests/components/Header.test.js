import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should header render correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();


  // ********* TESTING WITH react-test-renderer ***************
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  // ********* TESTING by find element and text with shallow from enzyme ***************
  // const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');
});