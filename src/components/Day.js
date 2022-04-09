import React from "react";
import '../static/DayComponent.css';
import { CloudDrizzle, Sunrise, Sunset, Thermometer, Wind } from 'react-feather';

const Day = ({ date, tempMax, tempMin, precip, sunrise, sunset, windspeed }) => {


    return (
        <div className="day">
            <h3>{date}</h3>
            <ul>
                <li><Thermometer size={18}/>Max {tempMax}&#176;C</li>
                <li><Thermometer size={18}/>Min {tempMin}&#176;C</li>
                <li><CloudDrizzle size={18}/> {precip} mm</li>
                <li><Sunrise size={18}/> {sunrise.slice(11)}</li>
                <li><Sunset size={18}/> {sunset.slice(11)}</li>
                <li><Wind size={18}/> {windspeed} mph</li>
            </ul>
        </div>
    )
}

export default Day;