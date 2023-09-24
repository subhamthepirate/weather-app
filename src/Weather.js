// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Store user input

  useEffect(() => {
    // Define your API endpoint here with your API key
    const apiKey = 'b02395bd1d273ead73ecac8a4021dae3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city) {
      axios.get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        className="city"
        type="text"
        placeholder="Enter a city"
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
