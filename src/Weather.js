import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Johor Bahru</h1>
        <ul>
            <li>30 °C | °F</li>
            <li>Sunday 12:48</li>
        </ul>
        </div>
        <div className="container weather-info">
            <div>Mostly Cloudy</div>
            <div>Humidity: 17%</div>
            <div>Wind: 20km/h</div>
        </div>
        </div>
    )
}