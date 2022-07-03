import React, { useMemo } from 'react'
import useLocation from '../../hooks/useLocation';
import { computeDate } from '../../utils/computeDate';
import './Location.styles.scss'

const LocationDetails = ({ date}) => {
    const showDate =  useMemo(()=>computeDate(date, true),[date])
    const {location:{location}} = useLocation();
    return (
        <section className="location-details">
            <h1>{location}</h1>
            <div>{showDate}</div> 
        </section>
    )
}

export default (LocationDetails);
