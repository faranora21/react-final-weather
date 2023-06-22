import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
         setWeatherData({
         ready:true,
         coordinates: response.data.coordinates,
         temperature: response.data.temperature.current,
         humidity: response.data.temperature.humidity,
         wind: response.data.wind.speed,
         city: response.data.city,
         description: response.data.condition.description,
         date: new Date(response.data.time * 1000),
         iconUrl: response.data.condition.icon_url,
         });
    } 

    function search(){
        let apiKey = "d2210b1aacbt02b56cbd90afd6o43f8e";
        let units = "metric"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse).catch((e) => console.log(e));
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
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
            <hr />
           <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}