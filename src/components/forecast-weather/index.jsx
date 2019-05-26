import React from "react";
import "./forecast-weather.css";
import WeatherCard from "../weather-card";

const ForecastWeather = props => {
  return (
    <div className="forecast-weather">
      <ul>
        <li>{`Weather forecast for ${props.city}:`}</li>
      </ul>
      {props.data.list.map(forecast => (
        <WeatherCard units={props.units} weather={forecast} />
      ))}
    </div>
  );
};

export default ForecastWeather;
