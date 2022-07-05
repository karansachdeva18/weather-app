import { useCallback, useEffect, useState } from "react";
import { GEOLOCATION_BASE_URL } from "../constants/API";
import HttpService from "../services/http";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const DEFAULT_LOCATION = {
  location: "New Delhi, India",
  lat: 28.7040592,
  lon: 77.10249019999999,
};

const useLocation = (locationName) => {
  const [location, setLocation] = useState({});

  const defaultLocation = useCallback(() => {
    if (getLocalStorage("location")) {
      setLocation(getLocalStorage("location"));
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          await fetchLocationByLatLng(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (err) => {
          console.log(err);
          setLocation(DEFAULT_LOCATION);
        }
      );
    }
  }, []);
  const fetchLocation = useCallback(
    async (searchLocation) => {
      let res = await HttpService.get(
        `${GEOLOCATION_BASE_URL}?address=${searchLocation}&sensor=true&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );
      res = res.results[0];
      const {
        formatted_address,
        geometry: {
          location: { lat, lng: lon },
        },
      } = res;
      const location = { location: formatted_address, lat, lon };
      setLocalStorage("location", location);
      setLocation(location);
    },
    []
  );

  const fetchLocationByLatLng = useCallback(
    async (latitude, longitute) => {
      let res = await HttpService.get(
        `${GEOLOCATION_BASE_URL}?latlng=${latitude},${longitute}&result_type=locality&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );
      res = res.results[0];
      const {
        formatted_address,
        geometry: {
          location: { lat, lng: lon },
        },
      } = res;
      console.log(res)
      const location = { location: formatted_address, lat, lon };
      console.log(location)
      setLocalStorage("location", location);
      setLocation(location);
    },
    []
  );

  useEffect(() => {
    locationName ? fetchLocation(locationName) : defaultLocation();
  }, [locationName, fetchLocation, defaultLocation]);

  return { location };
};

export default useLocation;
