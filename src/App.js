import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {extractLocations, getEvents} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 10
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, eventCount) :
        events.filter((event) => 
          event.location === location
        ).slice(0, eventCount);
      this.setState({events: locationEvents});
      // const numberEvents = locationEvents.slice(0, count);
      this.setState({eventCount: eventCount});
      // this.setState({events: numberEvents});
      console.log('upon loading page');
    }); 
  };

  render(){
    return (
      <div className = "App">
        <CitySearch locations = {this.state.locations} updateEvents = {(location, count) => this.updateEvents(location, count)}/>
        <NumberOfEvents eventCount = {this.state.eventCount} updateEvents = {(location, count) => this.updateEvents(location, count)}/>
        <EventList events = {this.state.events}/>
      </div>
    );
  }

  componentDidMount(){
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted){
        this.setState({events, locations: extractLocations(events)});
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App;
