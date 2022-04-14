import React from "react";

export const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameInput,
  handleNumberInput,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handleNameInput} />
        <br />
        Number: <input value={newNumber} onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
