import React from 'react'
import { computeDate } from '../../utils/computeDate';
import './Location.styles.scss'

const LocationDetails = ({location, date}) => {
    console.log(location)
    return (
        <section className="location-details">
            <h1>{location}</h1>
            <div>{computeDate(date, true)}</div> 
        </section>
    )
}

export default LocationDetails;
