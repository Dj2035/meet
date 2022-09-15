import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontSize = '12px';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: this.fontSize,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

export { InfoAlert };

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

export { ErrorAlert };