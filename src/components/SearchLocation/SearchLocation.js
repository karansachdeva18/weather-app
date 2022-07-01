import React, { useEffect, useState } from "react";
import HttpService from "../../services/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,  } from "@fortawesome/free-solid-svg-icons";
import "./SearchLocation.styles.scss";
import { GEOLOCATION_BASE_URL } from "../../constants/API";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";


const defaultLocation =  (setLocation) => {
  if (getLocalStorage("location")) {
    setLocation(getLocalStorage("location"));
  } else if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log(position)
        let res = await fetchLocationByLatLng(position.coords.latitude, position.coords.longitude)
        setLocation(res);
      },
      (err) => {
        console.log(err);
        setLocation({
          "location":"Delhi, India","lat":28.7040592,"lon":77.10249019999999
        });
      }
    );
  }
};
const fetchLocation = async (searchLocation) => {
  let res = await HttpService.get(
    `${GEOLOCATION_BASE_URL}?address=${searchLocation}&sensor=true&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  res = res.results[0]
  const {formatted_address, geometry:{location: {lat, lng:lon}}} =res;
  const location = {location: formatted_address, lat, lon}
  setLocalStorage('location',location)
    return location
};
const fetchLocationByLatLng = async (latitude, longitute) =>{
  let res = await HttpService.get(
    `${GEOLOCATION_BASE_URL}?latlng=${latitude},${longitute}&result_type=locality&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  res = res.results[0]
  const {formatted_address, geometry:{location: {lat, lng:lon}}} =res;
  const location = {location: formatted_address, lat, lon}
  setLocalStorage('location',location)
  return location
}


const SearchLocation = ({ setLocation }) => {
  const [searchLocation, setSearchLocation] = useState("");
 useEffect(() => {
   defaultLocation(setLocation)
 }, [])
  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchLocation) {
      let location =  await fetchLocation(searchLocation)
      setLocation(location);
      setSearchLocation("");
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={searchLocation}
          placeholder={"Search City..."}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button type='submit'>
          <FontAwesomeIcon title='Search' icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
};

export default SearchLocation;
