import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SearchLocation.styles.scss";

const SearchLocation = ({setLocation}) => {
  const [searchLocation, setSearchLocation] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchLocation) {
      setLocation(searchLocation)
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
