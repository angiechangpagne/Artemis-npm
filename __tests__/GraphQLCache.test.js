import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render } from 'enzyme';
import GraphQLCache from '../src/components/ApolloGraphQLCache';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

desribe('<GraphQLCache />', () => {
  it('renders the GraphQLCache Component without crashing', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.find('div').length).toEqual(3);
  });
  
  it('renders the cache h3 tag', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.contains(<h3>CACHE</h3>)).toEqual(true);
  })

  it('renders the proper cache data', () => {
    const cache = shallow(<GraphQLCache />);
    expect(cache.find('cache-data')).toEqual({});
  })
})