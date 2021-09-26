import React, {Component} from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component{
  state = {
    query: 10,
    infoText: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({infoText: true});
    if(isNaN(value) || value < 0 || value === '0' || (value + '').includes('.')){
      this.setState({infoText: 'Please enter a valid number'});
    }else{
      this.setState({query: value, infoText: ''});
      this.props.updateNumberOfEvents(value);
      console.log('number input changed');
    }
  }

  render(){
    return (
      <div className = "NumberOfEvents" >
        <label className = "numberOfEventsLabel">Number of events: </label>
        <div>
          <input type = "text" className = "numberOfEvents" value = {this.state.query} onChange = {e => this.handleInputChanged(e)}/>
        </div> 
        <ErrorAlert text = {this.state.infoText}/>
      </div>
    );
  }
}

export default NumberOfEvents;