import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 10 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the user did not specify a number of events to show', () => {
      AppWrapper = mount(<App/>);
    });
    when('the user scrolls down to see the events', () => {
      AppWrapper.update();
    });
    then('the user will see 10 events', () => {
      expect(AppWrapper.find('.event')).toHaveLength(10);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user had not changed a number of events to show', () => {
      AppWrapper = mount(<App/>);
    });
    when('the user types in the number of events', () => {
      AppWrapper.update();
      AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: '3' } });
    });
    then('the user will see the specified number of events', () => {
      expect(AppWrapper.find('.event')).toHaveLength(3);
    });
  });
});