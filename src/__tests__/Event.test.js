import React from 'react';
import {shallow} from 'enzyme';
import Event from '../Event';
import {mockData} from '../mock-data';

describe('<Event/> component', () => {
  let EventWrapper;
  
  beforeAll(() => {
    EventWrapper = shallow(<Event/>);
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
    expect(EventWrapper.find('.showDetailsButton')).toHaveLength(1);
  });
});