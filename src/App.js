import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {WarningAlert} from './Alert';
import EventList from './EventList';
import {extractLocations, getAccessToken, checkToken, getEvents} from './api';
import {ResponsiveContainer, CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';

class App extends Component {
  state = {
    showWelcomeScreen: undefined,
    infoText: undefined,
    events: [],
    locations: [],
    eventCount: 10,
    currentLocation: 'all'
  };

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
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map(location => {
      const number = events.filter(event => event.location === location).length;
      const city = location.split(', ').shift();
      return {city, number};
    });
    return data;
  };

  async componentDidMount(){
    this.mounted = true;
    const {eventCount} = this.state;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({showWelcomeScreen: !(code || isTokenValid)});
    if((code || isTokenValid) && this.mounted){
      getEvents().then((events) => {
        if(this.mounted){
          this.setState({events: events.slice(0, eventCount), locations: extractLocations(events)});
        }
      });
    }
    if(!navigator.onLine){
      this.setState({infoText: 'Offline: events loaded from cache and may not be up to date'});
    }else{
      this.setState({infoText: ''});
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    // if(this.state.showWelcomeScreen === undefined) return <div className = "App"/>
    const {locations, events, infoText, showWelcomeScreen} = this.state;
    return (
      <div className = "App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch locations = {locations} updateEvents = {(location, count) => this.updateEvents(location, count)}/>
        <NumberOfEvents updateNumberOfEvents = {(newCount) => this.updateNumberOfEvents(newCount)}/>
        <WarningAlert text = {infoText}/>
        <h4>Events in each city</h4>
        <ResponsiveContainer height = {400}>
          <ScatterChart margin = {{top: 20, right: 20, left: 20, bottom: 20}}>
            <CartesianGrid/>
            <XAxis type = "category" dataKey = "city" name = "city"/>
            <YAxis type = "number" dataKey = "number" name = "number of events" allowDecimals = {false}/>
            <Tooltip cursor = {{strokeDasharray: '3 3'}}/>
            <Scatter data = {this.getData()} fill = "#8884d8"/>
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events = {events}/>
        <WelcomeScreen showWelcomeScreen = {showWelcomeScreen} getAccessToken = {() => getAccessToken()}/>
        {console.log(events)}
      </div>
    );
  }
}

export default App;