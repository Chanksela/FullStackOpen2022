import React from "react";
import { Countries } from "./Countries";
import { Country } from "./Country";
export const List = ({ filteredCountries, searchInput }) => {
  return (
    <>
      {searchInput.length === 0 ? (
        ""
      ) : filteredCountries.length <= 10 && filteredCountries.length > 1 ? (
        <Countries filteredCountries={filteredCountries} />
      ) : filteredCountries.length > 10 ? (
        "To many matches, be more specific"
      ) : filteredCountries.length === 1 ? (
        <Country filteredCountries={filteredCountries} />
      ) : (
        ""
      )}
    </>
  );
};
