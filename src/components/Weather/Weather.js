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
import React, { lazy, Suspense, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
// import SearchLocation from "../SearchLocation/SearchLocation";
import TemperatureUnits from "../TemperatureUnits/TemperatureUnits";
// import WeatherWidget from "../Weather-widget/WeatherWidget";
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
const SearchLocation = lazy(() => import("../SearchLocation/SearchLocation"));


const WeatherWidget = lazy(() => import("../Weather-widget/WeatherWidget"));

const Weather = () => {
  const [units, setUnits] = useState(getLocalStorage("tempUnit") || "metric");
  const [currentLocation, setLocation] = useState("");
  return (
    <div className='weather-container'>
      <section className='header'>
        <Suspense fallback={<div>Loading...</div>}>
        <SearchLocation setLocation={setLocation} />
        </Suspense>
        <TemperatureUnits setUnits={setUnits} />
      </section>
      <Suspense fallback={<div></div>}>
        <WeatherWidget units={units} currentLocation={currentLocation} />
      </Suspense>
    </div>
  );
};

export default React.memo(Weather);
