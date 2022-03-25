import React from "react";
import { useState } from "react";
import { Weather } from "./Weather";

export const Countries = ({ filteredCountries }) => {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");

  const handleClick = (e) => {
    setShow(!show);
    setKey(e.target.id);
  };

  return (
    <>
      <div>
        {filteredCountries.map(
          (country, i) =>
            !show && (
              <p key={i}>
                {console.log()}
                {country.name.common}{" "}
                <button id={i} onClick={handleClick}>
                  Show
                </button>
              </p>
            )
        )}{" "}
        {show && (
          <div>
            <div key={filteredCountries[key].name.official}>
              <h1>{filteredCountries[key].name.common}</h1>
              <p>Capital: {filteredCountries[key].capital}</p>
              <p>Area: {filteredCountries[key].area}</p>
              <h4>Languages:</h4>
              {Object.values(filteredCountries[key].languages).map(
                (param, i) => (
                  <ul key={i}>
                    <li>{param}</li>
                  </ul>
                )
              )}
              <img src={filteredCountries[key].flags.png} alt="country_flag" />
            </div>
            <Weather city={filteredCountries[key].capital} />
          </div>
        )}
      </div>
    </>
  );
};
