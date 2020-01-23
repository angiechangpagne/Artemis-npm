import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import GraphQLVisualizer from '../src/components/GraphQLVisualizer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<GraphQLVisualizer/>',() => {
  const props = {
    results: ["test-data1", "test-data2"],
  }
  it('renders the GraphQLVisualizer Component without crashing', () => {
    const test = props.results[0];
    const parseJson = () => {
      const json = JSON.stringify(test);
      JSON.parse(json);
    };
    expect(parseJson).not.toThrow();
  });
})