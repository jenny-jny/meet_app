import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import {mockData} from '../mock-data';
import {extractLocations, getEvents} from '../api';

describe('<App/> component', () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App/>);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App/> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App/>);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App/>);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async() => {
    const AppWrapper = mount(<App/>);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData); //extracted locations from mock data
    CitySearchWrapper.setState({suggestions: locations}); //CitySearch component suggestions state equals to extracted locations
    const suggestions = CitySearchWrapper.state('suggestions'); 
    const selectedIndex = Math.floor(Math.random() * (suggestions.length)); //returns an integer between 0 (inclusive) to 2 (exclusive)
    const selectedCity = suggestions[selectedIndex]; //selected location in suggestions state
    await CitySearchWrapper.instance().handleItemClicked(selectedCity); //expected to have async code that fetches the full list of events in selected location
    const allEvents = await getEvents(); //api function to get all events asynchronously
    const eventsToShow = allEvents.filter(event => event.location === selectedCity); //filter all events to match selected location
    expect(AppWrapper.state('events')).toEqual(eventsToShow); //events state equal to all events in selected location
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async() => {
    const AppWrapper = mount(<App/>);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  // test('App passes "eventCount" state as a prop to NumberOfEvents', () => {
  //   const AppWrapper = mount(<App/>);
  //   const AppEventCountState = AppWrapper.state('eventCount');
  //   expect(AppEventCountState).not.toEqual(undefined);
  //   expect(AppWrapper.find(NumberOfEvents).props().eventCount).toEqual(AppEventCountState);
  //   AppWrapper.unmount();
  // });

  test('get list of events matching the number of events entered by the user', async() => {
    const AppWrapper = mount(<App/>);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    let eventCount = mockData.length;
    eventCount = {target: {value: eventCount}};
    NumberOfEventsWrapper.setState({query: eventCount}); //NumberOfEvents component query state equals to mockData length
    const query = NumberOfEventsWrapper.state('query'); 
    await NumberOfEventsWrapper.instance().handleInputChanged(query); //expected to have async code that fetches entered event count
    const allEvents = await getEvents(); //api function to get all events asynchronously
    const eventsToShow = allEvents.slice(0, query.target.value); //filter all events to match entered event count
    // expect(AppWrapper.state('events').length).toEqual(eventsToShow.length); //eventCount state equal to entered event count
    expect(AppWrapper.state('eventCount')).toEqual(eventsToShow.length);
    AppWrapper.unmount();
  });
});