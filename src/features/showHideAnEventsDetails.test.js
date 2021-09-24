import { shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventWrapper;
    given('the user was viewing the event element for the first time', () => {
    });
    when('the user scrolls down to a particular event', () => {
      EventWrapper = shallow(<Event event = {mockData[0]}/>);
    });
    then('the user will only see some details about the event', () => {
      expect(EventWrapper.find('.expanded')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let EventWrapper;
    given('the user had not clicked the show details button', () => {
      EventWrapper = shallow(<Event event = {mockData[0]}/>);
    });
    and('the details about the event were not showing', () => {
      expect(EventWrapper.find('.expanded')).toHaveLength(0);
    });
    when('the user clicks the show details button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });
    then('the user will see more details about the event', () => {
      expect(EventWrapper.find('.expanded')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let EventWrapper;
    given('the user had clicked the show details button', () => {
      EventWrapper = shallow(<Event event = {mockData[0]}/>);
      EventWrapper.find('.showDetails').simulate('click');
    });
    and('the details about the event were showing', () => {
      expect(EventWrapper.find('.expanded')).toHaveLength(1);
    });
    when('the user clicks the hide details button', () => {
      EventWrapper.find('.hideDetails').simulate('click');
    });
    then('the user will see less details about the event', () => {
      expect(EventWrapper.find('.expanded')).toHaveLength(0);
    });
  });
});