import React from 'react';
import renderer from 'react-test-renderer';
import {SingleItem} from '../components/single-item';

it(`renders correctly`, () => {
  const tree = renderer.create(<SingleItem task="test" index={1} />);
  expect(tree).toMatchSnapshot();
});
