import moment from "moment";
import React, { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";
import '../static/WeatherContainer.css'

const WeatherContainer = () => {

    const [days, setDays] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('days')) {
            setDays(JSON.parse(sessionStorage.getItem('days')));
        } else {
            getDays()
        }
    }, [])

    const getDays = function () {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=55.9533&longitude=-3.1883&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&windspeed_unit=mph&daily=weathercode&hourly=apparent_temperature&timezone=Europe%2FLondon')
            .then(response => response.json())
            .then(data => {

                const fetchedWeather = []

                let start = 0;
                let end = 24;

                for (let i = 0; i < data.daily.time.length; i++) {
                    const item = {
                        date: data.daily.time[i],
                        weatherCode: data.daily.weathercode[i],
                        tempMax: Math.round(data.daily.temperature_2m_max[i]),
                        tempMin: Math.round(data.daily.temperature_2m_min[i]),
                        precip: Math.round(data.daily.precipitation_sum[i] *10)/10,
                        windspeed: Math.round(data.daily.windspeed_10m_max[i]),
                        sunrise: data.daily.sunrise[i],
                        sunset: data.daily.sunset[i],
                        hourlyTemp: data.hourly.apparent_temperature.slice(start, end),
                        id: i
                    }
                    start += 24;
                    end += 24;
                    fetchedWeather.push(item)
                }

                sessionStorage.setItem('days', JSON.stringify(fetchedWeather))
                setDays(fetchedWeather);
            })
    }

    return (
        <>
            <div className="weather-container">
                <header>
                    <h1>Weather Forecast</h1>
                </header>
                <h2>Edinburgh</h2>
                <div className="body">
                    <WeatherList days={days} />
                </div>
            </div >
            <div className="footer">
                <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>
            </div>
        </>
    )
}

export default WeatherContainer;