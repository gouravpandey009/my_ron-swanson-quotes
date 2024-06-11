import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../title';

Enzyme.configure({adapter: new Adapter()});

test('title renders correctly', () => {
  const component = shallow(<Title />)
  expect(component).toMatchSnapshot();
})