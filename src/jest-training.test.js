import React from 'react';
import MyComponent from './jest-training.js';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('jest training', function() {
	// it('should render', function() {
	// 	const component = renderer.create(
	// 		<MyComponent />
	// 	);
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// });
  //
	// it('should click', function() {
	// 	const spy = jasmine.createSpy();
  //
	// 	const wrapper = shallow(<MyComponent clicked={spy} />);
	// 	wrapper.find('div').simulate('click');
  //
	// 	expect(spy).toHaveBeenCalled();
	// });
});
