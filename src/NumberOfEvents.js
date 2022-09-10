import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value < 1 || value > 32) {
      this.setState({ numberOfEvents: value });
    } else {
      this.setState({ numberOfEvents: value });
      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;

    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="events-number"
          value={numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <label>Enter Number of Events</label>
      </div>
    );
  }
}
export default NumberOfEvents;