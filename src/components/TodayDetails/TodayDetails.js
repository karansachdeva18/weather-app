import React from "react";
import TempCard from "./TempCard";
import "./TodayDetails.styles.scss";

const TodayDetails = ({ hourly, units }) => {
  const renderTodayDetails = () => {
    return hourly.map((hour, index) => {
      return (
        <TempCard
          key={`hours${index}`}
          dt={hour.dt}
          temp={hour.temp}
          weather={hour.weather}
          units={units}
        />
      );
    });
  };
  return (
    <>
      <h2>Today's Weather</h2>
      <div className="today-details-container">{renderTodayDetails()}</div>
    </>
  );
};

export default TodayDetails;
