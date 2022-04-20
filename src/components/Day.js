import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../static/DayComponent.css';
import { CloudDrizzle, Sunrise, Sunset, Thermometer, Wind } from 'react-feather';
import Icon from "./Icon";
import moment from "moment";

const Day = ({ day }) => {

    return (
        <div className="weather-stats">
            {/* <h3>
                {moment().format('ddd Do') === moment(day.date).format('ddd Do') ?
                    'Today ' + moment(day.date).format('ddd Do') :
                    moment(day.date).format('dddd Do')
                }</h3> */}
            <Icon weatherCode={day.weatherCode} keyInput={"icon"} /> <Icon weatherCode={day.weatherCode} keyInput={"description"} />
            <ul>
                <li><Thermometer size={18} /> max temperature {day.tempMax}&#176;C</li>
                <li><Thermometer size={18} /> min temperature {day.tempMin}&#176;C</li>
                <li><CloudDrizzle size={18} /> precipitation {day.precip} mm</li>
                <li><Sunrise size={18} /> sunrise {day.sunrise.slice(11)}</li>
                <li><Sunset size={18} /> sunset {day.sunset.slice(11)}</li>
                <li><Wind size={18} /> windspeed {day.windspeed} mph</li>
            </ul>
        </div>
    )
}

export default Day;