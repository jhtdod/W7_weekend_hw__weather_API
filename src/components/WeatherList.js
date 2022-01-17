import React from "react";
import Day from "./Day";

const WeatherList = ({days}) => {
    
    const dayNodes = days.map(day => {
        return (
            <Day 
                date={day.date} 
                tempMax={day.tempMax} 
                tempMin={day.tempMin}
                precip={day.precip}
                sunrise={day.sunrise}
                sunset={day.sunset}
                windspeed={day.windspeed} 
                key={day.id}
            />
        )
        
    })

    return(
        <div>
            {dayNodes}
        </div>
    )
}

export default WeatherList;