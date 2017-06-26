import React, { Component } from 'react';
import logo from './img/sun-logo.png';
import './App.css';
import CityWeatherCard from './components/cityWeatherCard';
import CitySearch from './components/citySearch';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      citiesWeather: []};

    this.handleUpdateWeather = this.handleUpdateWeather.bind(this);
  };

  handleUpdateWeather(citiesWeather) {
    this.setState({
      citiesWeather
    });
  }

  render() {
    const {citiesWeather} = this.state;
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CappoW</h1>
          <h2>A comparative weather app</h2>
        </div>

        <div className="App-intro">

          <CitySearch onUpdateWeather={ this.handleUpdateWeather }/>

          <div className="weatherComponents">
            {citiesWeather && citiesWeather.map(city => 
              <CityWeatherCard key={ city.name } city={ city.name } weather={ city } />
            )} 
          </div>

        </div>

      </div>
    );
  }
}

export default App;
