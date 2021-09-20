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

  updateEvents = (location, count) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => 
          event.location === location
        );
      this.setState({events: locationEvents});
      const numberEvents = locationEvents.slice(0, count - 1);
      this.setState({eventCount: count});
      this.setState({events: numberEvents});
    }); 
  };

  render(){
    return (
      <div className = "App">
        <CitySearch locations = {this.state.locations} updateEvents = {this.updateEvents}/>
        <NumberOfEvents eventCount = {this.state.eventCount} updateEvents = {this.updateEvents}/>
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
