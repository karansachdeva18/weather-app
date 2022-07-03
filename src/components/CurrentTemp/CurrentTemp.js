import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from '../../constants/icons';
import { computeTemp } from '../../utils/temperature';
import './CurrentTemp.styles.scss'

const CurrentTemp = ({temp, weather, units}) => {
    console.log(temp)
    return (
        <section className="current-temp-container">
            <FontAwesomeIcon icon={ICONS(weather[0].main)} className="cloud-icon" title={weather[0].description}/>
            <section className="current-temp">
                <div className="temp">{computeTemp(temp)}<sup>o</sup>{units === 'metric' ? "C" : "F"}</div>
                <div className="description">{weather[0].description}</div>
            </section>

        </section>
    )
}

export default CurrentTemp
