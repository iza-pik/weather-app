import React from "react";
import "./weather-card.css";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      {/* <h2>{props.weather.main.}</h2> */}
      <ul>
        <li>{`Temperature: ${props.weather.main.temp.toFixed(0)}`}</li>
        <li>{`Pressure: ${props.weather.main.pressure.toFixed(0)} hPa`}</li>
        <img
          src={`http://openweathermap.org/img/w/${
            props.weather.weather[0].icon
          }.png`}
          alt={`${props.weather.weather[0].description} in ${props.city}`}
          className="weather-icon"
        />
        <li>{props.weather.weather[0].description}</li>
      </ul>
    </div>
  );
};

export default WeatherCard;
