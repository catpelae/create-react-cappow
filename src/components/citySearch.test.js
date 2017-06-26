import React from 'react';
import renderer from 'react-test-renderer';
import CitySearch from './citySearch';

it('renders correctly', () => {
 const tree = renderer.create(
   <CitySearch />
 ).toJSON();
 expect(tree).toMatchSnapshot();
});