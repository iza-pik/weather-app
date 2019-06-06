import React from "react";
import "./current-weather.css";
// import changeUnits from "../../utilities/temperatureService";

const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <ul>
        <li>{`Current weather in ${props.city}:`}</li>
        <li>
          {props.data.main.temp.toFixed(0)}
          {props.units === "metric" ? "°C" : "F"}
        </li>
        <img
          src={`http://openweathermap.org/img/w/${
            props.data.weather[0].icon
          }.png`}
          alt={`${props.data.weather[0].description} in ${props.city}`}
          className="weather-icon"
        />
        <li>{props.data.weather[0].description}</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
