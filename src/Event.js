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
      <div>
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-default-info">
          {event.start.dateTime} {event.start.timeZone} {event.location}
        </p>
        {this.state.show && (
          <>
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
          </>
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