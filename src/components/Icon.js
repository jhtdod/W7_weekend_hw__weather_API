import React from "react";
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun } from "react-feather";

const Icon = ({ weatherCode, keyInput }) => {

    const WMO = {
        0: {
            icon: <Sun />,
            description: "Clear Sky"
        },
        1: {
            icon: <Sun />,
            description: "Mainly Clear"
        },
        2: {
            icon: <Cloud />,
            description: "Partly Cloudy"
        },
        3: {
            icon: <Cloud />,
            description: "Overcast"
        },
        45: {
            icon: <Cloud />,
            description: "Fog"
        },
        48: {
            icon: <Cloud />,
            description: "Depositing rime fog"
        },
        51: {
            icon: <CloudDrizzle />,
            description: "Light Drizzle"
        },
        53: {
            icon: <CloudDrizzle />,
            description: "Dense Drizzle"
        },
        55: {
            icon: <CloudDrizzle />,
            description: "Light Freezing Drizzle"
        },
        56: {
            icon: <CloudDrizzle />,
            description: "Moderate Freezing Drizzle"
        },
        57: {
            icon: <CloudDrizzle />,
            description: "Dense Freezing Drizzle"
        },
        61: {
            icon: <CloudRain />,
            description: "Slight Rain"
        },
        63: {
            icon: <CloudRain />,
            description: "Moderate Rain"
        },
        65: {
            icon: <CloudRain />,
            description: "Heavy Rain"
        },
        66: {
            icon: <CloudRain />,
            description: "Light Freezing Rain"
        },
        67: {
            icon: <CloudRain />,
            description: "Heavy Freezing Rain"
        },
        71: {
            icon: <CloudSnow />,
            description: "Slight Snow Fall"
        },
        73: {
            icon: <CloudSnow />,
            description: "Moderate Snow Fall"
        },
        75: {
            icon: <CloudSnow />,
            description: "Heavy Snow Fall"
        },
        77: {
            icon: <CloudSnow />,
            description: "Snow Grains"
        },
        80: {
            icon: <CloudRain />,
            description: "Slight Rain Showers"
        },
        81: {
            icon: <CloudRain />,
            description: "Moderate Rain Showers"
        },
        82: {
            icon: <CloudRain />,
            description: "Violent Rain Showers"
        },
        85: {
            icon: <CloudSnow />,
            description: "Slight Snow Showers"
        },
        86: {
            icon: <CloudSnow />,
            description: "Heavy Snow Showers"
        },
        95: {
            icon: <CloudLightning />,
            description: "Thunderstorm"
        },
        96: {
            icon: <CloudLightning />,
            description: "Thunderstorm with Slight Hail"
        },
        99: {
            icon: <CloudLightning />,
            description: "Thunderstorm with Heavy Hail"
        }
    }

    const WMOReturnValue = WMO[weatherCode][keyInput]

    return (
        <>
            {WMOReturnValue}
        </>
    )
}

export default Icon;