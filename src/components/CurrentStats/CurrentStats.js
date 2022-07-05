import React from "react";
import { getTime } from "../../utils/computeDate";
import { computeTemp } from "../../utils/temperature";
import "./CurrentStats.styles.scss";

const CurrentStats = ({ weather, units }) => {
  const { humidity, pressure, wind_speed, feels_like, sunrise, sunset } =
    weather;
  return (
    <section className="current-stats-container">
      <div>
        <h4>{humidity}%</h4>
        <p>Humidity</p>
      </div>
      <div>
        <h4>{pressure}hPA</h4>
        <p>Pressure</p>
      </div>
      <div>
        <h4>{wind_speed} m/s</h4>
        <p>Wind Speed</p>
      </div>
      <div>
        <h4>
          {computeTemp(feels_like)} <sup>o</sup>{" "}
          {units === "metric" ? "C" : "F"}
        </h4>
        <p>Feels Like</p>
      </div>
      <div>
        <h4>{getTime(sunrise)}</h4>
        <p>Sunrise</p>
      </div>
      <div>
        <h4>{getTime(sunset)}</h4>
        <p>Sunset</p>
      </div>
    </section>
  );
};

export default CurrentStats;
