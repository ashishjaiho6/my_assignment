import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
