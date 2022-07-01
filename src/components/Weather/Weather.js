import React, { lazy, Suspense, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import SearchLocation from "../SearchLocation/SearchLocation";
import TemperatureUnits from "../TemperatureUnits/TemperatureUnits";
import "./Weather.styles.scss";

const WeatherWidget = lazy(() => import("../Weather-widget/WeatherWidget"));

const Weather = () => {
  const [location, setLocation] = useState({});
  const [units, setUnits] = useState(getLocalStorage("tempUnit") || "metric");

  return (
    <div className='weather-container'>
      <section className='header'>
        <SearchLocation setLocation={setLocation} />
        <TemperatureUnits setUnits={setUnits} />
      </section>

      {Object.keys(location).length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <WeatherWidget location={location} units={units} />
        </Suspense>
      )}
    </div>
  );
};

export default Weather;
