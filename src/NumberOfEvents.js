import React, {Component} from 'react';

class NumberOfEvents extends Component{
  state = {
    query: 1,
    message: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if(isNaN(value) || value < 1){
      this.setState({message: 'Please enter a valid number'});
    }else{
      this.setState({query: value});
    }
  }

  render(){
    return (
      <div className = "NumberOfEvents" >
        <label className = "numberOfEventsLabel">Number of events: </label>
        <span>
          <input type = "number" className = "numberOfEvents" value = {this.state.query} onChange = {this.handleInputChanged}/>
        </span> 
        <span>
          <p className = "errorMessage">{this.state.message}</p>
        </span>
      </div>
    );
  }
}

export default NumberOfEvents;