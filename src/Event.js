import React, {Component} from 'react';

class Event extends Component{
  render(){
    return (
      <div>
        <div className = "title">
          <h1 className = "summary"></h1>
        </div>
        <div className = "line-1">
          <span className = "startTime"></span>
          <span className = "startTimeZone"></span>
        </div>
        <div className = "line-2">
          <span>@</span>
          <span className = "summary"></span>
          <span>|</span>
          <span className = "location"></span>
        </div>
        <button className = "showDetailsButton"/>
      </div>
    );
  }
}

export default Event;