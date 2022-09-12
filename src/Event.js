import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false
  };

  toggleEventDetails = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <div className="event-default-info">
          <h3 className="event-location">{event.location}</h3>
          <p className="event-data">
            Start: {event.start.dateTime} - Time zone: {event.start.timeZone}
          </p>
        </div>
        {this.state.show && (
          <div className="event__Details">
            <h2 className="event-about-title">About event:</h2>
            <a
              href={event.htmlLink}
              target="_blank"
              rel="noreferrer"
              className="event-htmlLink"
            >
              See details on Google Calendar
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        )}

        {!this.state.show ? (
          <button
            className="event-showDetails-btn"
            onClick={this.toggleEventDetails}
          >
            Show Details
          </button>
        ) : (
          <button
            className="event-hideDetails-btn"
            onClick={this.toggleEventDetails}
          >
            Hide Details
          </button>
        )}

      </div>
    );
  }
}
export default Event;