import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numOfEvents: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEvents: value });
  };

  render() {
    return <div>
      <input
        type="number"
        className="number-input"
        value={this.state.numOfEvents}
        onChange={this.handleInputChanged}
      />
    </div>;
  }
}
export default NumberOfEvents;