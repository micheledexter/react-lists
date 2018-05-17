import React, { Component } from 'react';

class NewStar extends Component {
  render() {
    return (
      <p>The star {this.props.star.name} is {this.props.star.diameter} km in diameter.</p>
    );
  }
}

export default NewStar;