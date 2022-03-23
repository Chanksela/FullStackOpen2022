import React from "react";

export const Persons = ({ filteredArray }) => {
  return (
    <>
      {" "}
      {filteredArray.map((val) => (
        <p key={val.name}>
          {val.name} {val.number}{" "}
        </p>
      ))}
    </>
  );
};
