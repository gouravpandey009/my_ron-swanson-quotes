import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { QuoteRow } from '../quote_row';

Enzyme.configure({adapter: new Adapter()});

test('quote row renders correctly', () => {
  const component = shallow(<QuoteRow />);
  expect(component).toMatchSnapshot();
})
