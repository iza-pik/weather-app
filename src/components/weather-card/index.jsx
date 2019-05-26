import React from "react";
import "./weather-card.css";
import * as moment from "moment";
import changeUnits from "../../utilities/temperatureService";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      {/* <h2>{props.weather.main.}</h2> */}
      <div className="weather-card--header">
        {moment(props.weather.dt_txt).calendar()}
      </div>
      <div>
        <ul className="weather-card--list-style">
          <li>{`Temperature: ${props.weather.main.temp.toFixed(0)}${
            props.units === "metric" ? "°C" : "F"
            // changeUnits()
          }`}</li>
          <li>{`Pressure: ${props.weather.main.pressure.toFixed(0)} hPa`}</li>
          <li>{`Humidity: ${props.weather.main.humidity.toFixed(0)}%`}</li>
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
    </div>
  );
};

export default WeatherCard;
