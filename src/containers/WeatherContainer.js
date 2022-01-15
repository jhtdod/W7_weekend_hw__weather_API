import React, { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";

const WeatherContainer = () => {
    
    const [days, setDays] = useState({
        day: [],
        tempMax: [],
        tempMin: [],
        precip: [],
        windspeed: [],
        sunrise: [],
        sunset: []
    });

    useEffect(() => {
        getDays()
    }, [])

    const getDays = function(){
        fetch('https://api.open-meteo.com/v1/forecast?latitude=55.96&longitude=-3.22&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&timezone=Europe%2FLondon')
        .then(response => response.json())
        .then(data => setDays({
            day: data.daily.time,
            tempMax: data.daily.temperature_2m_max,
            tempMin: data.daily.temperature_2m_min,
            precip: data.daily.precipitation_sum,
            windspeed: data.daily.windspeed_10m_max,
            sunrise: data.daily.sunrise,
            sunset: data.daily.sunset
        }))
    }
    console.log(days);
    
    return(
        <>
            <header>
                <h1>5-Day Forecast</h1>
                <div className="buttons">
                    <button>London</button>
                    <button>Edinburgh</button>
                    <button>Paris</button>
                </div>
            </header>
            <h2>Cityname</h2>
            <div className="forecast-days">
                <WeatherList days={days}/>
            </div>
        </>
    )
}

export default WeatherContainer;