import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { ICONS } from "../../constants/icons";
import { computeDate } from "../../utils/computeDate";
import { computeTemp } from "../../utils/temperature";

const DailyStatsList = ({ dt, weather, min, max, units }) => {
  const memoComputeDate = useCallback(() => computeDate(dt), [dt]);
  const { day, date } = memoComputeDate(dt);

  return (
    <li className="daily-stats-list">
      <div className="list-items">
        <strong>{day}</strong>
        <div>{date}</div>
      </div>

      <div className="list-items">
        <FontAwesomeIcon
          icon={ICONS(weather[0].main)}
          title={weather[0].description}
          className="weather-icon"
        />
      </div>
      <div className="list-items">
        <FontAwesomeIcon
          icon={faArrowDown}
          title={"Min. Temp"}
          className="min-max-icons"
        />
        <span>
          {computeTemp(min)}
          <sup>o</sup>
          {units === "metric" ? "C" : "F"}
        </span>
      </div>
      <div className="list-items">
        <FontAwesomeIcon
          icon={faArrowUp}
          title={"Max. Temp"}
          className="min-max-icons"
        />
        <span>
          {computeTemp(max)}
          <sup>o</sup>
          {units === "metric" ? "C" : "F"}
        </span>
      </div>
    </li>
  );
};

export default DailyStatsList;
