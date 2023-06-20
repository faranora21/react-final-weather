import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
return (
<div className="WeatherInfo">
<div className="weather-time text-center">
<h1>{props.data.city}</h1>
  <WeatherTemperature celsius={props.data.temperature} />
    <div><FormattedDate date={props.data.date} /></div>
</div>
<div className="container weather-info">
    <div className="text-capitalize">{props.data.description}</div>
    <div>Humidity: {props.data.humidity}%</div>
    <div>Wind: {props.data.wind}km/h</div>
</div>
</div>
);
}