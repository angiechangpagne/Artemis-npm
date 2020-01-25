import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';


import TimeButton from '../src/components/TimeButton.tsx';

configure({ adapter: new Adapter() });

describe('TimeButton components', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = { 
      timeStamp: { format: () => "1:12:12"},
      history: [],
      index: 1,
    };

    beforeAll(() => {
      wrapper = shallow(<TimeButton {...props} />);
    });

    it('Renders a <div>', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it('displays a time properly', () => {
      expect(wrapper.find('button')).toHaveLength(1);
      expect(wrapper.find('button').at(0).props().children).toEqual('1:12:12');
      expect(wrapper.find('button').at(0).props().className).toEqual('time-button');
    })
  });
});