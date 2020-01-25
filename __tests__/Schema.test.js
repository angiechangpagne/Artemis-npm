import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import Schema from '../src/components/Schema.tsx';
import { isMainThread } from 'worker_threads';

configure({ adapter: new Adapter() });

describe('TimeButton components',() => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      url: "hello",
      queries: [],
    };

    beforeAll(() => {
      wrapper = shallow(<Schema {...props} />);
    });

  it('Renders a <div>', () => {
      expect(wrapper.type()).toEqual('div');
  });
 
  it('displays h3 SCHEMA properly', () => {
    expect(wrapper.contains(<h3>SCHEMA</h3>)).toEqual(true);
  });
  it('renders 3 divs', () => {
    expect(wrapper.find('div')).toHaveLength(3);
    });
  });
});