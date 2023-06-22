import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
return (
<div className="WeatherInfo">
<div className="weather-time text-center">
<div className="row">
    <div className="col-3">
    <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="currentIcon"
          />
    </div>
    <div className="col-6">
      <div className="weather-time">
    <h1>{props.data.city}</h1>
  <WeatherTemperature celsius={props.data.temperature} />
  <div><FormattedDate date={props.data.date} /></div>
  </div>
  </div>
  </div>
</div>
<div className="container weather-info">
    <div className="text-capitalize">{props.data.description}</div>
    <div>Humidity: {props.data.humidity}%</div>
    <div>Wind: {props.data.wind}km/h</div>
</div>
</div>
);
}