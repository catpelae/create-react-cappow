import React, { Component } from 'react';
import './citySearch.css'


function requestCityWeather(city) {
  return (
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=e72ef41a4cce709e8a85b48e02bf22b7')  
      .then(function(response) {
        return response.json()
      })
  )    
}


function handleError (e) {
  console.log(e);
}



function handleRequests(cityArray, updateWeatherState) {

  let numCities = cityArray.length;

    if(numCities < 1) {
      alert('Please type in at least 1 city to get weather forsecast or 2 cities to compare.');
      return;
    }
 
    Promise.all(cityArray.map((city) => (
      requestCityWeather(city)
        .catch(handleError)
    )))
    .then(updateWeatherState)
}

class CitySearch extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      inputCities: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInputChange(event) {
    this.setState({inputCities: event.target.value});
  }

  handleSubmit(event) {
    let cityArray = this.state.inputCities.trim().split(',');
    cityArray = cityArray.filter(function(entry) { return /\S/.test(entry); });
    
    handleRequests(cityArray, this.props.onUpdateWeather);
    
    event.preventDefault();
  }



  render() {
    return (
      <form className="CitySearch-main" onSubmit={ this.handleSubmit }>
        <label className="CitySearch-label"> Type in cities to compare separated by commas</label>
        <input className="CitySearch-input form-control" 
          placeholder="Paris, Bogota"
          type="text"
          value={ this.state.inputCities }
          onChange={ this.handleInputChange }
          />
        <input className="CitySearch-button" type="submit" value="Submit" />
      </form>
    )  
  }
}


export default CitySearch;