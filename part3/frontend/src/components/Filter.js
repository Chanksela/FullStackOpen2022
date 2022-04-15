import React from "react";

export const Filter = ({ handleSearchInput, searchInput }) => {
  return (
    <p>
      Type to search:{" "}
      <input type="search" onChange={handleSearchInput} value={searchInput} />
    </p>
  );
};
