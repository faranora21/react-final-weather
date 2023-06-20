import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
         setWeatherData({
         ready:true,
         temperature: response.data.main.temp,
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
         city: response.data.name,
         description: response.data.weather[0].description,
         date: "Sunday, 12:48"
         });
    } 

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form id="search-form">
                    <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="enter-city-input"
                      placeholder="Enter your city..."
                      />
                       <input className="input-group-text" type="submit" id="submit-button" value="Search" />
                       </div>
                    </form>
                </div>
            </div>
            <div className="weather-time text-center">
            <h1>{weatherData.city}</h1>
            <ul>
                <li> {Math.round(weatherData.temperature)} °C | °F</li>
                <li>{weatherData.date}</li>
            </ul>
            </div>
            <div className="container weather-info">
                <div className="text-capitalize">{weatherData.description}</div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>Wind: {weatherData.wind}km/h</div>
            </div>
            </div>
        )
    } else {
        let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse).catch((e) => console.log(e));

        return "Loading...";
    }
}