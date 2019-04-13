import React, { Component } from "react";
import "./App.css";
import InputField from "./components/input-field";
import Form from "./components/form";
import Button from "./components/button";
import Weather from "./components/weather";
import { API_KEY } from "./constants";

class App extends Component {
  state = {
    city: "",
    loading: false,
    error: null,
    weatherData: null
  };
  onChange = event => {
    // console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value, error: null });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&appid=${API_KEY}`
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
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Check today's weather</h1>
          <img src="https://bit.ly/2UhPg06" alt="sunny" />
        </header>
        <Form className="input-form" onSubmit={this.onSubmit}>
          <InputField
            placeholder="Enter city"
            type="text"
            id="city"
            value={this.state.city}
            onChange={this.onChange}
          />
          <Button
            disabled={this.state.loading}
            type="submit"
            className="submit-button"
          >
            {this.state.loading ? "Loading..." : "Submit"}
          </Button>
        </Form>
        {this.state.error && <p>Oops! Something's wrong!</p>}
        {this.state.weatherData && <Weather data={this.state.weatherData} />}
      </div>
    );
  }
}

export default App;
