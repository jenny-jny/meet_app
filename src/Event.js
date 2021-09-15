import React, {Component} from 'react';

class Event extends Component{
  state = {
    details: false
  }

  handleShowDetailsClicked(){
    this.setState({details: true});
  }

  handleHideDetailsClicked(){
    this.setState({details: false});
  }

  render(){
    const {event} = this.props;
    return (
      <>
        <div className = "collapsed">
          <div className = "title">
            <h1 className = "summary">{event.summary}</h1>
          </div>
          <div className = "line1">
            <span className = "startTime">{event.start.dateTime}</span>
            <span className = "startTimeZone">{event.start.timeZone}</span>
          </div>
          <div className = "line2">
            <span>@</span>
            <span className = "summary">{event.summary}</span>
            <span>|</span>
            <span className = "location">{event.location}</span>
          </div>
          {this.state.details === false &&
            <button className = "showDetails" onClick = {() => this.handleShowDetailsClicked()}>show details</button>
          } 
        </div>
        {this.state.details === true && 
          <div className = "expanded">
            <h2 className = "aboutEvent">About event: </h2>
            <link className = "googleCalendar" href = {event.htmlLink}>See details on Google Calendar</link>
            <p className = "description">{event.description}</p>
            <button className = "hideDetails" onClick = {() => this.handleHideDetailsClicked()}>hide details</button>
          </div>
        }
      </>
    );
  }
}

export default Event;