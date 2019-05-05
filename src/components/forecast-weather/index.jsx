import React from "react";
import "./forecast-weather.css";
import WeatherCard from "../weather-card";

const ForecastWeather = props => {
  return (
    <div className="ForecastWeather">
      <ul>
        <li>{`Weather in ${props.city}:`}</li>
      </ul>
      {props.data.list.map(forecast => (
        <WeatherCard weather={forecast} />
      ))}
    </div>
  );
};

export default ForecastWeather;
