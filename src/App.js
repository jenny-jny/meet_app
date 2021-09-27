import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {WarningAlert} from './Alert';
import EventList from './EventList';
import {extractLocations, getEvents} from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 10,
    currentLocation: 'all',
    infoText: undefined
  }

  updateEvents = (location, count) => {
    getEvents().then((events) => {
      let eventsToShow = (location === 'all') ?
        events :
        events.filter((event) => 
          event.location === location
        );
      const {eventCount} = this.state;
      if(count === -1){
        count = eventCount;
      }
      eventsToShow = eventsToShow.slice(0, count);
      this.setState({
        events: eventsToShow,
        eventCount: count,
        currentLocation: location
      });
      console.log('location and number of events updated ' + location + ' | ' + count);
    }); 
  };

  updateNumberOfEvents = newCount => {
    const {currentLocation} = this.state;
    this.updateEvents(currentLocation, newCount);
    console.log('number of events updated');
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
        <NumberOfEvents updateNumberOfEvents = {(newCount) => this.updateNumberOfEvents(newCount)}/>
        {!navigator.onLine && this.setState({infoText: 'Offline: events loaded from cache and may not be up to date'}) && 
          <WarningAlert text = {this.state.infoText}/>
        }
        <EventList events = {this.state.events}/>
      </div>
    );
  }
}

export default App;
