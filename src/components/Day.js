import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../static/DayComponent.css';
import { CloudDrizzle, Sunrise, Sunset, Thermometer, Wind } from 'react-feather';

const Day = ({ day }) => {

    return (
        <>
            <ul>
                <li><Thermometer size={18} />Max {day.tempMax}&#176;C</li>
                <li><Thermometer size={18} />Min {day.tempMin}&#176;C</li>
                <li><CloudDrizzle size={18} /> {day.precip} mm</li>
                <li><Sunrise size={18} /> {day.sunrise.slice(11)}</li>
                <li><Sunset size={18} /> {day.sunset.slice(11)}</li>
                <li><Wind size={18} /> {day.windspeed} mph</li>
            </ul>
        </>
    )
}

export default Day;