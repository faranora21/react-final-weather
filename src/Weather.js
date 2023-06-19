import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form id="search-form">
                <input
                  type="text"
                  className="form-control"
                  id="enter-city-input"
                  placeholder="Enter your city..."
                  />
                   <input type="submit" id="submit-button" value="Search" />
                </form>
            </div>
        </div>
        <div className="weather-time">
        <h1>Johor Bahru</h1>
        <ul>
            <li>30 °C | °F</li>
            <li>Sunday 12:48</li>
        </ul>
        </div>
        <div className="col">
            <ul>
                <li>Mostly Cloudy</li>
                <li>Humidity: 17%</li>
                <li>Wind: 20km/h</li>
            </ul>
        </div>
        </div>
    )
}