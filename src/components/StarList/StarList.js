import React, { Component } from 'react';

class StarList extends Component {
  render() {
    return (
      <div>
        <p>This is the star list</p>
        <ul>
          {this.props.starList.map((star, i) => <li key={i}>The star {star.name} is {star.diameter} km in diameter.</li>)}
        </ul>
      </div>
    );
  }
}

export default StarList;