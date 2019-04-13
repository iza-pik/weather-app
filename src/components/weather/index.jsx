import React from "react";
import "./weather.css";

const Weather = props => {
  const kelvin = 273.15;
  return (
    <div className="Weather">
      {`Temperature in city: ${(props.data.main.temp - kelvin).toFixed(2)}°C`}
    </div>
  );
};

export default Weather;
