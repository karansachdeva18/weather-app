import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/API";
import HttpService from "../../services/http";
import "./WeatherWidget.styles.scss";
// import LocationDetails from '../LocationDetails/LocationDetails';
// import CurrentTemp from '../CurrentTemp/CurrentTemp';
// import CurrentStats from '../CurrentStats/CurrentStats';
// import TodayDetails from '../TodayDetails/TodayDetails';
// import DailyStats from '../DailyStats/DailyStats'

const LocationDetails = lazy(() =>
  import("../LocationDetails/LocationDetails")
);
const TodayDetails = lazy(() => import("../TodayDetails/TodayDetails"));
const DailyStats = lazy(() => import("../DailyStats/DailyStats"));
const CurrentTemp = lazy(() => import("../CurrentTemp/CurrentTemp"));
const CurrentStats = lazy(() => import("../CurrentStats/CurrentStats"));

const WeatherWidget = ({ location, units }) => {
  const [weather, setWeather] = useState({});
  const weatherData = useCallback(async() => {
      const response = await HttpService.get(
        `${BASE_URL}/onecall?lat=${location.lat}&lon=${location.lon}&units=${units}&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeather(response);
    
  }, [location, units]);

  useEffect(() => {
    console.log("useEffect");
    location && weatherData();
  }, [location, units]);

  return (
    <>
      {Object.keys(weather).length > 0 && (
        <section className='weather-details'>
          <Suspense fallback={<div>Loading...</div>}>
            <LocationDetails
              location={location.location}
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
      ) }
    </>
  );
};

export default WeatherWidget;
