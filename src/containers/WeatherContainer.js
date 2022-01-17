import React, { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";

const WeatherContainer = () => {
    
    const [days, setDays] = useState([]);

    useEffect(() => {
        getDays()
    }, [days])

    const getDays = function(){
        fetch('https://api.open-meteo.com/v1/forecast?latitude=55.96&longitude=-3.22&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&timezone=Europe%2FLondon')
        .then(response => response.json())
        .then(data => {
            const fetchedWeather = {
                date: data.daily.time,
                tempMax: data.daily.temperature_2m_max,
                tempMin: data.daily.temperature_2m_min,
                precip: data.daily.precipitation_sum,
                windspeed: data.daily.windspeed_10m_max,
                sunrise: data.daily.sunrise,
                sunset: data.daily.sunset
        }

        for (let i = 0; i < fetchedWeather.date.length; i++){
            days[i] = {
                date: fetchedWeather.date[i],
                tempMax: fetchedWeather.tempMax[i],
                tempMin: fetchedWeather.tempMin[i],
                precip: fetchedWeather.precip[i],
                windspeed: fetchedWeather.windspeed[i],
                sunrise: fetchedWeather.sunrise[i],
                sunset: fetchedWeather.sunset[i],
                id: i
            }   
        }
        
        setDays(days);
    })}
    
    return(
        <>
            <header>
                <h1>5-Day Forecast</h1>
            </header>
            <h2>Cityname</h2>
            <div className="forecast-days">
                <WeatherList days={days}/>
            </div>
        </>
    )
}

export default WeatherContainer;