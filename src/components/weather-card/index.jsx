import React from "react";
import "./weather-card.css";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      <p>{props.weather.main.pressure}</p>
    </div>
  );
};

export default WeatherCard;
