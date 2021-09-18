import React from 'react';
import {shallow} from 'enzyme';
import CitySearch from '../CitySearch';
import {mockData} from '../mock-data';
import {extractLocations} from '../api';

describe('<CitySearch/> component', () => {
  let locations, CitySearchWrapper;

  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations = {locations} updateEvents = {() => {}}/>);
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('render a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    CitySearchWrapper.setState({query: 'Munich'});
    const eventObject = {target: {value: 'Berlin'}};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    CitySearchWrapper.setState({suggestions: locations});
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for(let i = 1; i < suggestions.length; i += 1){
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestions list match the query when changed', () => {
    CitySearchWrapper.setState({query: '', suggestions: []}); //initialize state
    CitySearchWrapper.find('.city').simulate('change', {target: {value: 'Berlin'}}); //set query state to Berlin
    const query = CitySearchWrapper.state('query');
    const filteredLocations = locations.filter((location) => { 
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1; //location filtered match query location
    });
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations); //suggestions state equal to filtered location
  });

  test('selecting a suggestion should change query state', () => {
    CitySearchWrapper.setState({query: 'Berlin'}); //initialize query state to Berlin
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at([0]).simulate('click'); //simulate click event at first suggestion list item
    expect(CitySearchWrapper.state('query')).toBe(suggestions[0]); //expect query state to equal first object in suggestions state
  });

  test("selecting CitySearch input reveals the suggestions list", () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({display: 'none'});
  });
});