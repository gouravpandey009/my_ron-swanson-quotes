import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuoteContainer from '../quote_container';

Enzyme.configure({adapter: new Adapter()});

test('quote container renders correctly', () => {
  const component = shallow(<QuoteContainer />)
  expect(component).toMatchSnapshot();
})
