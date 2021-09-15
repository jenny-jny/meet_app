import React from 'react';
import {shallow} from 'enzyme';
import Event from '../Event';
import {mockData} from '../mock-data';

describe('<Event/> component', () => {
  let EventWrapper;
  
  beforeAll(() => {
    EventWrapper = shallow(<Event event = {mockData[0]}/>);
  });

  test('state when never clicked on show details button is false', () => {
    expect(EventWrapper.state('details')).toBe(false); 
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(2);
  });

  test('render event start time', () => {
    expect(EventWrapper.find('.startTime')).toHaveLength(1);
  });

  test('render event start time timezone', () => {
    expect(EventWrapper.find('.startTimeZone')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render show details button', () => {
    EventWrapper.setState({details: false});
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('render "About event" sub-heading', () => {
    EventWrapper.setState({details: true});
    expect(EventWrapper.find('.aboutEvent')).toHaveLength(1);
  });

  test('render google calendar link', () => {
    EventWrapper.setState({details: true});
    expect(EventWrapper.find('.googleCalendar')).toHaveLength(1);
  });

  test('render event description', () => {
    EventWrapper.setState({details: true});
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('render hide details button', () => {
    EventWrapper.setState({details: true});
    expect(EventWrapper.find('.hideDetails')).toHaveLength(1);
  });

  test('change state when click on show details button', () => {
    EventWrapper.setState({details: false});
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('details')).toBe(true); 
  });

  test('change state when click on hide details button', () => {
    EventWrapper.setState({details: true});
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.state('details')).toBe(false); 
  });

  test('clicking on show details button should expand extra details', () => {
    EventWrapper.setState({details: false});
    EventWrapper.find('.showDetails').simulate('click'); 
    expect(EventWrapper.find('.showDetails')).toHaveLength(0);
    expect(EventWrapper.find('.expanded')).toHaveLength(1);
  });

  test('clicking on hide details button should collapse extra details', () => {
    EventWrapper.setState({details: true});
    EventWrapper.find('.hideDetails').simulate('click'); 
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
    expect(EventWrapper.find('.expanded')).toHaveLength(0);
  });
});