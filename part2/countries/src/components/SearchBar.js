import React from "react";

export const SearchBar = ({ searchInput, handleSearch }) => {
  return (
    <div>
      {" "}
      Search:{" "}
      <input type="search" value={searchInput} onChange={handleSearch} />
    </div>
  );
};
