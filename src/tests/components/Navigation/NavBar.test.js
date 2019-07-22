import React from 'react';
import renderer from 'react-test-renderer';
import { NavBar } from '../../../components';

describe('NavBar', () => {
  it('should render correctly', () => {
    const component = renderer.create(<NavBar />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
