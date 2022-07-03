import  { useCallback, useEffect, useState } from 'react'
import { BASE_URL } from '../constants/API';
import HttpService from '../services/http';
import useLocation from './useLocation';

const useWeather = (currentLocation, units) => {
    const [weather, setWeather] = useState({});
    const { location } = useLocation(currentLocation);


    const weatherData = useCallback(async () => {
        const response = await HttpService.get(
          `${BASE_URL}/onecall?lat=${location.lat}&lon=${location.lon}&units=${units}&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeather(response);
      }, [location, units]);
      useEffect(() => {
         Object.keys(location).length > 0 && weatherData()
      }, [location, units, weatherData])
    return{
        weather, location
    }
}

export default useWeather
