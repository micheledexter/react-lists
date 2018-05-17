import React from 'react';

const NewStarForm = props => (
  <form onSubmit={props.handleSubmitForChild}>
    <input value={props.star.name} onChange={props.handleChangeForChild('name')} placeholder="Star Name" /><br />
    <input value={props.star.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="Diameter" /><br />
    <input type="submit" value="Add New Star" />
  </form>
);

export default NewStarForm;
