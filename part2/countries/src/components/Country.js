import React from "react";
import { Weather } from "./Weather";
export const Country = ({ filteredCountries, searchInput }) => {
  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.name.common}>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <h4>Languages:</h4>
          {Object.values(country.languages).map((val) => (
            <ul key={val}>
              <li>{val}</li>
            </ul>
          ))}
          <img src={country.flags.png} alt="country_flag" />
          <Weather city={country.capital} />
        </div>
      ))}
    </div>
  );
};
