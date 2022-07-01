import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ICONS } from "../../constants/icons";
import { computeDate } from "../../utils/computeDate";
import { computeTemp } from "../../utils/temperature";
import "./DailyStats.styles.scss";

const DailyStats = ({ daily, units }) => {
  const renderDailyStats = () => {
    return daily.map((stats, index) => {
      const { dt, weather, temp } = stats;
      const { day, date } = computeDate(dt);
      return (
        <li key={`daily_${index}`} className='daily-stats-list'>
          <div className='list-items'>
            <strong>{day}</strong>
            <div>{date}</div>
          </div>

          <div className='list-items'>
            <FontAwesomeIcon
              icon={ICONS[weather[0].main]}
              title={weather[0].description}
              size={'2x'}
            />
          </div>
          <div className='list-items'>
            <FontAwesomeIcon
              icon={faArrowDown}
              title={"Min. Temp"}
              className='min-max-icons'
            />
            <span>
              {computeTemp(temp.min)}
              <sup>o</sup>
              {units === "metric" ? "C" : "F"}
            </span>
          </div>
          <div className='list-items'>
            <FontAwesomeIcon
              icon={faArrowUp}
              title={"Max. Temp"}
              className='min-max-icons'
              
            />
            <span>
              {computeTemp(temp.max)}
              <sup>o</sup>
              {units === "metric" ? "C" : "F"}
            </span>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <h2>Next 8 Days Weather</h2>
      <ul className='daily-stats'>{renderDailyStats()}</ul>
    </>
  );
};

export default DailyStats;
