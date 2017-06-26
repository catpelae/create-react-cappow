import React, { Component } from 'react';
import './cityWeatherCard.css'



class CityWeatherCard extends Component {

  render ()  {
    const {city, weather} = this.props;
    return (
      <div className="weatherCardContainer">
        <div className="weatherCard">
          <div className="cityName">{city}</div>
          {weather.weather.map((text, index) => (
            <div key={index}>
              <div className="weatherIconText">
                <img src={'http://openweathermap.org/img/w/' + text.icon + '.png'} alt="Weather Icon" />
                <span>{text.main}</span>
              </div>
              <div className="cityTemp">
                <span>{ weather.main.temp }</span>
              </div>
              <div className="weatherDesc">{ text.description }</div>
              
            </div>
          ))}
          <div className="extras">
            <span>Press: { weather.main.pressure }</span>
            <span>Hum: { weather.main.humidity }</span>
          </div>
        </div>
      </div>
    )

  }
}




export default CityWeatherCard;