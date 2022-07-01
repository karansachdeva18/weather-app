import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ICONS } from '../../constants/icons'
import { getTime } from '../../utils/computeDate'
import { computeTemp } from '../../utils/temperature'

const TempCard = ({dt, temp, weather, units}) => {
    return (
        <div className="temp-card">
            <div>{getTime(dt)}</div>
            <FontAwesomeIcon icon={ICONS[weather[0].main]} title={weather[0].description} />
            <div>{computeTemp(temp)} <sup>o</sup>{units === 'metric' ? "C" : "F"}</div>
        </div>
    )
}

export default TempCard
