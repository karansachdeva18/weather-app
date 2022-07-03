import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/API";
import useLocation from "../../hooks/useLocation";
import useWeather from "../../hooks/useWeather";
import HttpService from "../../services/http";
import "./WeatherWidget.styles.scss";

const LocationDetails = lazy(() =>
  import("../LocationDetails/LocationDetails")
);
const TodayDetails = lazy(() => import("../TodayDetails/TodayDetails"));
const DailyStats = lazy(() => import("../DailyStats/DailyStats"));
const CurrentTemp = lazy(() => import("../CurrentTemp/CurrentTemp"));
const CurrentStats = lazy(() => import("../CurrentStats/CurrentStats"));

const WeatherWidget = ({ currentLocation, units }) => {
  const {weather} = useWeather(currentLocation, units)

  return (
    <>
      {weather && Object.keys(weather).length > 0 && (
        <section className='weather-details'>
          <Suspense fallback={<div>Loading...</div>}>
            <LocationDetails
              date={weather.current.dt}
            />
            <section className='current-details'>
              <CurrentTemp
                temp={weather.current.temp}
                weather={weather.current.weather}
                units={units}
              />
              <CurrentStats weather={weather.current} units={units} />
            </section>
            <TodayDetails hourly={weather.hourly.slice(1, 25)} units={units} />
            <DailyStats daily={weather.daily} units={units} />
          </Suspense>
        </section>
      )}
    </>
  );
};

export default WeatherWidget;
