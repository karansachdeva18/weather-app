import React, { lazy, Suspense, useState } from "react";
import useLocation from "../../hooks/useLocation";
import { getLocalStorage } from "../../utils/localStorage";
import SearchLocation from "../SearchLocation/SearchLocation";
import TemperatureUnits from "../TemperatureUnits/TemperatureUnits";
import WeatherWidget from "../Weather-widget/WeatherWidget";
import "./Weather.styles.scss";


const Weather = () => {
  const [units, setUnits] = useState(getLocalStorage("tempUnit") || "metric");
  const [currentLocation, setLocation] =  useState("");
  return (
    <div className='weather-container'>
      <section className='header'>
        <SearchLocation setLocation={setLocation}/>
        <TemperatureUnits setUnits={setUnits} />
      </section>
      <WeatherWidget units={units} currentLocation={currentLocation} />
      
    </div>
  );
};

export default React.memo(Weather);
