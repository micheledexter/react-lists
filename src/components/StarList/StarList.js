import React from 'react';

const StarList = props => (
  <div>
    <p>This is the star list</p>
    <ul>
      {props.starList.map((star, i) => <li key={i}>The star {star.name} is {star.diameter} km in diameter.</li>)}
    </ul>
  </div>
);

export default StarList;