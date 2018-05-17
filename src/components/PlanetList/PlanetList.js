import React from 'react';

const PlanetList = props => (
  <div>
    <p>SWAPI Planet List</p>
    <ul>
      {props.planetList.map((planet, i) => <li key={i}>The planet {planet.name} is {planet.diameter} km in diameter.</li>)}
    </ul>
  </div>
);

export default PlanetList;