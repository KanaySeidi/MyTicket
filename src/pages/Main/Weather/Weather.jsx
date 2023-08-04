import React, { useState } from "react";
import weth from "./Weather.module.css";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "4330a086dc93be4e0e1a52e96978cade";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <>
      <div className={weth.section}>
        <div className={weth.container}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className={weth.inp}
            />
            <button className={weth.subBut} type="submit">
              Get Weather
            </button>
          </form>
        </div>
        {weatherData && (
          <div className={weth.resultBox}>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
