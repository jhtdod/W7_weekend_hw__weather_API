import React, { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";
import '../static/WeatherContainer.css'

const WeatherContainer = () => {

    const [days, setDays] = useState([]);

    useEffect(() => {
        console.log(window.sessionStorage.getItem('days'))
        if (window.sessionStorage.getItem('days')) {
            setDays(JSON.parse(sessionStorage.getItem('days')))
        } else {
            getDays()
        }
    }, [])

    const getDays = function () {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=55.96&longitude=-3.22&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&windspeed_unit=mph&timezone=Europe%2FLondon')
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

                let item = {
                    date: '',
                    tempMax: '',
                    tempMin: '',
                    precip: '',
                    windspeed: '',
                    sunrise: '',
                    sunset: '',
                    id: ''
                }

                data = []

                for (let i = 0; i < fetchedWeather.date.length; i++) {
                    item = {
                        date: fetchedWeather.date[i],
                        tempMax: fetchedWeather.tempMax[i],
                        tempMin: fetchedWeather.tempMin[i],
                        precip: fetchedWeather.precip[i],
                        windspeed: fetchedWeather.windspeed[i],
                        sunrise: fetchedWeather.sunrise[i],
                        sunset: fetchedWeather.sunset[i],
                        id: i
                    }
                    data.push(item)
                }

                console.log(data)
                window.sessionStorage.setItem('days', JSON.stringify(data));
                setDays(data);
            })
    }

    return (
        <div className="weather-container">
            <header>
                <h1>Weather Forecast</h1>
            </header>
            <h2>Edinburgh</h2>
            <WeatherList days={days} />
            <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>
        </div>
    )
}

export default WeatherContainer;