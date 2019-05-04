import React from "react";
import "./current-weather.css";

const CurrentWeather = props => {
  return (
    <div className="Weather">
      <ul>
        <li>{`Temperature in ${props.city}:`}</li>
        <li>{`${props.data.main.temp.toFixed(2)}°C`}</li>
      </ul>
      <img
        src={`http://openweathermap.org/img/w/${
          props.data.weather[0].icon
        }.png`}
        alt={`${props.data.weather[0].description} in ${props.city}`}
        className="weather-icon"
      />
    </div>
  );
};

export default CurrentWeather;
