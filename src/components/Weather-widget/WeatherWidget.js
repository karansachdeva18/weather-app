import React from "react";
import useWeather from "../../hooks/useWeather";
import "./WeatherWidget.styles.scss";
import LocationDetails from '../LocationDetails/LocationDetails';
import TodayDetails from '../TodayDetails/TodayDetails';
import DailyStats from '../DailyStats/DailyStats';
import CurrentTemp from '../CurrentTemp/CurrentTemp';
import CurrentStats from '../CurrentStats/CurrentStats';


// const LocationDetails = lazy(() =>
//   import("../LocationDetails/LocationDetails")
// );
// const TodayDetails = lazy(() => import("../TodayDetails/TodayDetails"));
// const TodayDetails = lazy(() => import("../DailyStats/DailyStats"));
// const CurrentTemp = lazy(() => import("../CurrentTemp/CurrentTemp"));
// const CurrentStats = lazy(() => import("../CurrentStats/CurrentStats"));

const WeatherWidget = ({ currentLocation, units }) => {
  const {weather:{current, hourly, daily}, location:{location}} = useWeather(currentLocation, units)
  return (
    <>
      {current && Object.keys(current).length > 0 && (
        <section className='weather-details'>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <LocationDetails 
            location={location}
              date={current.dt}
            />
            <section className='current-details'>
              <CurrentTemp
                temp={current.temp}
                weather={current.weather}
                units={units}
              />
              <CurrentStats weather={current} units={units} />
            </section>
            <TodayDetails hourly={hourly.slice(1, 25)} units={units} />
            <DailyStats daily={daily} units={units} />
          {/* </Suspense> */}
        </section>
      )}
    </>
  );
};

export default WeatherWidget;
