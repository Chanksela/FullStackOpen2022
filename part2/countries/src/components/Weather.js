import axios from "axios";
import React, { useEffect, useState } from "react";

export const Weather = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

  useEffect(
    () => axios.get(weatherURL).then((res) => setCurrentWeather(res.data)),
    [weatherURL]
  );
  let iconID;

  currentWeather.length === 0 ? (
    <></>
  ) : (
    (iconID = currentWeather.weather[0].icon)
  );

  const iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  return (
    <div>
      <h2>Weather in {city}</h2>
      {console.log(currentWeather?.main)}
      <p>Temperature: {currentWeather?.main?.temp}</p>
      {currentWeather.length === 0 ? (
        ""
      ) : (
        <img src={iconURL} alt="weather_icon" />
      )}
      <p>Wind: {currentWeather?.wind?.speed}</p>
    </div>
  );
};
