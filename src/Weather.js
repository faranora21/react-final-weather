import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
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
         date: new Date(response.data.dt * 1000),
         });
    } 

    function search(){
        let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse).catch((e) => console.log(e));
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse).catch((e) => console.log(e));
    }

    function handleCityChange(event){
       setCity(event.target.value);
    } 

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} id="search-form">
                    <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="enter-city-input"
                      placeholder="Enter your city..."
                      onChange={handleCityChange}
                      />
                       <input className="input-group-text" type="submit" id="submit-button" value="Search" />
                       </div>
                    </form>
                </div>
            </div>
            <WeatherInfo data={weatherData}/>
           
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}