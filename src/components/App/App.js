import React, { Component } from 'react';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

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
      </div>
    );
  }
}

export default App;
