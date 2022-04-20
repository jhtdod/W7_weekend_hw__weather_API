import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const BarChart = ({ day }) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ChartDataLabels
    );

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    stepSize: 2,
                    min: 16,
                    max: 100,
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
                beginAtZero: true
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: false,
            Animation: false,
            hover: false,
            datalabels: {
                display:true,
                color: 'rgb(0, 0, 0)',
                anchor: 'end',
                align: 'start'
            }
        },
    }

    const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
        "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]


    const data = {
        labels,
        datasets: [{
            backgroundColor: 'rgb(162, 162, 192)',
            maintainAspectRatio: false,
            data: day.hourlyTemp
        }]
    }

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart;