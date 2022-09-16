import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: 32,
        errorText: 'Select number from 1 to 32'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });

      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;

    return (
      <div className="numberOfEvents">
        <label>Enter Number of Events</label>
        <input
          type="number"
          className="events-number"
          value={numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;