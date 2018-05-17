import React, { Component } from 'react';
import axios from 'axios';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList';

const emptyStar = { name: '', diameter: '' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Menkar', diameter: 123834600 },
        { name: 'Kochab', diameter: 58522283 },
        { name: 'Hadar', diameter: 13158098 },
      ],
      star: emptyStar,
      planetList: [],
    }
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      star: {
        ...this.state.star,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      starList: [this.state.star, ...this.state.starList],
      star: emptyStar
    });
  };

  componentDidMount() {
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (nextUrl) => {
    axios({
      method: 'GET',
      url: nextUrl
    }).then(response => {
      this.setState({
        planetList: [...this.state.planetList, ...response.data.results],
      });
      if (response.data.next) {
        this.getPlanets(response.data.next);
      }
    }).catch(error => {
      console.log(`ERROR during GET to swapi:: ${error}`);
    });
  }

  render() {

    return (
      <div>
        <Introduction />
        <NewStar star={this.state.star} />
        <NewStarForm
          star={this.state.star}
          handleChangeForChild={this.handleChangeFor}
          handleSubmitForChild={this.handleSubmit}
        />
        <StarList starList={this.state.starList} />
        <PlanetList planetList={this.state.planetList} />
      </div>
    );
  }
}

export default App;
