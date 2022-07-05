import React from "react";
import "./DailyStats.styles.scss";
import DailyStatsList from "./DailyStatsList";

const DailyStats = ({ daily, units }) => {
  const renderDailyStats = () => {
    return daily.map((stats, index) => {
      const {
        dt,
        weather,
        temp: { min, max },
      } = stats;
      return (
        <DailyStatsList
          key={index}
          dt={dt}
          weather={weather}
          min={min}
          max={max}
          units={units}
        />
      );
    });
  };
  return (
    <>
      <h2>Next 8 Days Weather</h2>
      <ul className="daily-stats">{renderDailyStats()}</ul>
    </>
  );
};

export default DailyStats;
