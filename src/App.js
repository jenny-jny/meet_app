import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {WarningAlert} from './Alert';
import EventList from './EventList';
import {extractLocations, getAccessToken, checkToken, getEvents} from './api';

class App extends Component {
  state = {
    showWelcomeScreen: undefined,
    infoText: undefined,
    events: [],
    locations: [],
    eventCount: 10,
    currentLocation: 'all'
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

  setWarningMessage = () => {
    this.setState({infoText: 'Offline: events loaded from cache and may not be up to date'});
  }

  async componentDidMount(){
    this.mounted = true;
    const {eventCount} = this.state;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({showWelcomeScreen: !(code | isTokenValid)});
    if((code || isTokenValid) && this.mounted){
      getEvents().then((events) => {
        if(this.mounted){
          this.setState({events: events.slice(0, eventCount), locations: extractLocations(events)});
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    if(this.state.showWelcomeScreen === undefined) return <div className = "App"/>
    return (
      <div className = "App">
        <CitySearch locations = {this.state.locations} updateEvents = {(location, count) => this.updateEvents(location, count)}/>
        <NumberOfEvents updateNumberOfEvents = {(newCount) => this.updateNumberOfEvents(newCount)}/>
        {!navigator.onLine && 
          <WarningAlert text = {() => this.setWarningMessage()}/>
        }
        <EventList events = {this.state.events}/>
        <WelcomeScreen showWelcomeScreen = {this.state.showWelcomeScreen} getAccessToken = {() => getAccessToken()}/>
      </div>
    );
  }
}

export default App;
