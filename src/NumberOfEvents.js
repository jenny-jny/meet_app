import React, {Component} from 'react';

class NumberOfEvents extends Component{
  state = {
    query: 10,
    message: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if(isNaN(value) || value < 0 || value === '0' || (value + '').includes('.')){
      this.setState({message: 'Please enter a valid number'});
    }else{
      this.setState({query: value});
      this.props.updateEvents('all', value);
    }
  }

  render(){
    return (
      <div className = "NumberOfEvents" >
        <label className = "numberOfEventsLabel">Number of events: </label>
        <span >
          <input type = "text" className = "numberOfEvents" value = {this.state.query} onChange = {e => this.handleInputChanged(e)}/>
        </span> 
        <span>
          <p className = "errorMessage">{this.state.message}</p>
        </span>
      </div>
    );
  }
}

export default NumberOfEvents;