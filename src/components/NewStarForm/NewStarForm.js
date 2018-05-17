import React, { Component } from 'react';

class NewStarForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmitForChild}>
        <input value={this.props.star.name} onChange={this.props.handleChangeForChild('name')} placeholder="Star Name" /><br />
        <input value={this.props.star.diameter} onChange={this.props.handleChangeForChild('diameter')} placeholder="Diameter" /><br />
        <input type="submit" value="Add New Star" />
      </form>
    );
  }
}

export default NewStarForm;
