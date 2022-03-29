import React from "react";

export const Persons = ({ filteredArray, handleDelete }) => {
  return (
    <>
      {" "}
      {filteredArray.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </p>
      ))}
    </>
  );
};
