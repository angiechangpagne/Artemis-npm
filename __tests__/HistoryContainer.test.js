import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import HistoryContainer from '../src/containers/HistoryContainer.tsx'
import HistoryBox from '../src/components/HistoryBox.tsx'

configure({ adapter: new Adapter() });

describe('TimeButton components', () => {
  describe('LabeledText', () => {
    let wrapper;
    cont props = {
      timeStamps: [Function],
      isToggle:(i)=> i,
      history: ["hello"],
      queries:['Hello'],
    };

    beforeAll(() => {
      wrapper = shallow(<HistoryContainer {...props} />);
    });

    it('Renders a History child components', () => {
      expect(wrapper.find('#history-past-queries').at(0).children()).toHaveLength(props.queries.length);
    });
  });
});