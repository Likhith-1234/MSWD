import React from "react";

const PersonForm = ({
  onSubmit,
  handleNameChange,
  handleNumberChange,
  nameValue,
  numberValue,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Person Name: </label>
      <input onChange={handleNameChange} value={nameValue} />
    </div>
    <div>
      <label>Person Number: </label>
      <input type="tel" onChange={handleNumberChange} value={numberValue} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

export default PersonForm;