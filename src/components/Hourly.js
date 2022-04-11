import React, { useState } from 'react'

const Hourly = () => {

    const [weather, setWeather] = useState([])

    // const hourlyWeather = function () {
    //     fetch('https://api.open-meteo.com/v1/forecast?latitude=55.9533&longitude=-3.1883&hourly=apparent_temperature&timezone=Europe%2FLondon')
    //         .then(response => response.json())
    //         .then(data => { 

    //         })
    // }


    return (
        <div>Hourly</div>
    )
}

export default Hourly;