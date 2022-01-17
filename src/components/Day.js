import React from "react";

const Day = ({date, tempMax, tempMin, precip, sunrise, sunset, windspeed}) => {
    return (
        <>
            <h3>{date}</h3>
            <ul>
                <li>Maximum Temperature: {tempMax}</li>
                <li>Minimum Temperature: {tempMin}</li>
                <li>Precipitation: {precip}</li>
                <li>Sunrise: {sunrise}</li>
                <li>Sunset: {sunset}</li>
                <li>Windspeed: {windspeed}</li>
            </ul>
        </>
    )
}

export default Day;