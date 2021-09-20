//Create tests for ensuring the textbox element is rendered correctly and for changing the event on the textbox.
import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper, eventCount;
  
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents eventCount = {eventCount} updateEvents = {() => {}}/>);
  });

  test('state when never entered number of events to show is 10', () => {
    expect(NumberOfEventsWrapper.state('query')).toBe(10); 
  });

  test('state when never entered number of events to show is empty string', () => {
    expect(NumberOfEventsWrapper.state('message')).toBe(''); 
  });

  test('render number of events label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsLabel')).toHaveLength(1);
  });

  test('render number of events textbox', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render error message', () => {
    expect(NumberOfEventsWrapper.find('.errorMessage')).toHaveLength(1);
  });

  test('render number of events input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(query);
  });

  test('change query state when enter a valid number of events', () => {
    NumberOfEventsWrapper.setState({query: '2'});
    const eventObject = {target: {value: '3'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe('3');
  });

  test('render error message correctly when enter an invalid number of events => a', () => {
    const eventObject = {target: {value: 'a'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.find('.errorMessage').text()).toEqual('Please enter a valid number');
  });

  test('render error message correctly when enter an invalid number of events => decimal', () => {
    const eventObject = {target: {value: '0.1'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.find('.errorMessage').text()).toEqual('Please enter a valid number');
  });

  test('render error message correctly when enter an invalid number of events => 0', () => {
    const eventObject = {target: {value: '0'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.find('.errorMessage').text()).toEqual('Please enter a valid number');
  });

  test('render error message correctly when enter an invalid number of events => -1', () => {
    const eventObject = {target: {value: '-1'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.find('.errorMessage').text()).toEqual('Please enter a valid number');
  });

  test('change error message state when enter an invalid number of events => a', () => {
    NumberOfEventsWrapper.setState({message: ''});
    const eventObject = {target: {value: 'a'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('message')).toBe('Please enter a valid number');
  });

  test('change error message state when enter an invalid number of events => decimal', () => {
    NumberOfEventsWrapper.setState({message: ''});
    const eventObject = {target: {value: '0.1'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('message')).toBe('Please enter a valid number');
  });

  test('change error message state when enter an invalid number of events => -1', () => {
    NumberOfEventsWrapper.setState({message: ''});
    const eventObject = {target: {value: '-1'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('message')).toBe('Please enter a valid number');
  });

  test('change error message state when enter an invalid number of events => 0', () => {
    NumberOfEventsWrapper.setState({message: ''});
    const eventObject = {target: {value: '0'}};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('message')).toBe('Please enter a valid number');
  });

});