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
    eventCount: 10,
    currentLocation: 'all'
  }

  updateEvents = (location, count) => {
    getEvents().then((events) => {
      const eventsToShow = (location === 'all') ?
        events :
        events.filter((event) => 
          event.location === location
        );
      eventsToShow.slice(0, count);
      this.setState({
        events: eventsToShow,
        eventCount: count,
        currentLocation: location
      });
      console.log('upon loading page');
    }); 
  };

  updateNumberOfEvents(count){
    this.setState({eventCount: count});
    const {currentLocation} = this.state;
    this.updateEvents(currentLocation, count);
  }

  componentDidMount(){
    const {eventCount} = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted){
        this.setState({events: events.slice(0, eventCount), locations: extractLocations(events)});
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    return (
      <div className = "App">
        <CitySearch locations = {this.state.locations} updateEvents = {(location, count) => this.updateEvents(location, count)}/>
        <NumberOfEvents updateNumberOfEvents = {this.updateNumberOfEvents}/>
        <EventList events = {this.state.events}/>
      </div>
    );
  }
}

export default App;
