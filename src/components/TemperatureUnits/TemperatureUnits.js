import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import "./TemperatureUnits.styles.scss";

const TemperatureUnits = ({ setUnits }) => {
  const [tempUnit, setTempUnit] = useState(
    getLocalStorage("tempUnit") || "metric"
  );
  const handleToggle = (unit) => {
    setTempUnit(unit);
    setUnits(unit);
    setLocalStorage("tempUnit", unit);
  };

  return (
    <div className="toggle-switch">
      <button
        className={tempUnit === "metric" ? " active" : ""}
        onClick={() => handleToggle("metric")}
      >
        <sup>o</sup>C
      </button>
      <h2>|</h2>
      <button
        className={tempUnit === "imperial" ? " active" : ""}
        onClick={() => handleToggle("imperial")}
      >
        <sup>o</sup>F
      </button>
    </div>
  );
};

export default React.memo(TemperatureUnits);
