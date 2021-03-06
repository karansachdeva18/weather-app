import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faCloudBolt,
  faCloudShowersHeavy,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import SearchLocation from "../SearchLocation/SearchLocation";
import TemperatureUnits from "../TemperatureUnits/TemperatureUnits";
import WeatherWidget from "../Weather-widget/WeatherWidget";
import "./Weather.styles.scss";
library.add(
  faCloud,
  faCloudBolt,
  faCloudShowersHeavy,
  faCloudSunRain,
  faSmog,
  faSnowflake,
  faSun
);

const Weather = () => {
  const [units, setUnits] = useState(getLocalStorage("tempUnit") || "metric");
  const [currentLocation, setLocation] = useState("");
  return (
    <div className="weather-container">
      <section className="header">
        <SearchLocation setLocation={setLocation} />

        <TemperatureUnits setUnits={setUnits} />
      </section>
      <WeatherWidget units={units} currentLocation={currentLocation} />
    </div>
  );
};

export default React.memo(Weather);
