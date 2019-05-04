import React, { Component } from "react";
import "./App.css";
import InputField from "./components/input-field";
import Form from "./components/form";
import Button from "./components/button";
import CurrentWeather from "./components/current-weather";
import { API_KEY } from "./constants";
import ForecastWeather from "./components/forecast-weather";

class App extends Component {
  state = {
    city: "",
    loading: false,
    error: null,
    weatherData: null,
    units: "metric",
    currentWeather: true,
    forecastWeather: true
  };
  onChange = event => {
    // console.log(event.target);
    this.setState({
      [event.target.name || event.target.id]: event.target.value,
      error: null
    });
  };
  onChangeCheckbox = event => {
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true, currentCity: this.state.city });
    if (this.state.currentWeather)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        }&appid=${API_KEY}&units=${this.state.units}`
      )
        .then(response => {
          if (!response.ok) {
            return response
              .json()
              .then(json => this.setState({ error: json, loading: false }));
          }
          return response.json();
        })
        .then(json => {
          this.setState({ weatherData: json, loading: false });
        });
    if (this.state.forecastWeather)
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          this.state.city
        }&appid=${API_KEY}&units=${this.state.units}`
      )
        .then(response => {
          if (!response.ok) {
            return response
              .json()
              .then(json => this.setState({ error: json, loading: false }));
          }
          return response.json();
        })
        .then(json => {
          this.setState({ forecastData: json, loading: false });
        });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Check today's weather</h1>
          <img src="https://bit.ly/2UhPg06" alt="sunny" className="logo" />
        </header>
        <Form className="input-form" onSubmit={this.onSubmit}>
          <label>City:</label>
          <InputField
            placeholder="Enter city"
            type="text"
            id="city"
            value={this.state.city}
            onChange={this.onChange}
          />
          <InputField
            label="Current Weather"
            id="currentWeather"
            checked={this.state.currentWeather}
            type="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <InputField
            label="Weather Forecast"
            id="forecastWeather"
            checked={this.state.forecastWeather}
            type="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <InputField
            label="Metric units"
            name="units"
            value="metric"
            id="metric"
            checked={"metric" === this.state.units}
            type="radio"
            onChange={this.onChange}
          />
          <InputField
            label="Imperial units"
            name="units"
            value="imperial"
            id="imperial"
            checked={"imperial" === this.state.units}
            type="radio"
            onChange={this.onChange}
          />
          <Button
            disabled={
              this.state.loading ||
              !this.state.city ||
              (!this.state.currentWeather && !this.state.forecastWeather)
            }
            type="submit"
            className="submit-button"
          >
            {this.state.loading ? "Loading..." : "Submit"}
          </Button>
        </Form>
        {this.state.error && <p>Oops! Something's wrong!</p>}
        {this.state.weatherData && (
          <CurrentWeather
            city={this.state.currentCity}
            data={this.state.weatherData}
          />
        )}

        {this.state.forecastData && (
          <ForecastWeather
            city={this.state.currentCity}
            data={this.state.forecastData}
          />
        )}
      </div>
    );
  }
}

export default App;
