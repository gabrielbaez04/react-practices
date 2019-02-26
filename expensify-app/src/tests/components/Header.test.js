import { shallow } from 'enzyme';
import Header from '../../components/Header';
import React from 'react';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});