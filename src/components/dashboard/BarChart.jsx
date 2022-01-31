import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

export default function BarChart({ title, labels, data, labeltext }) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const _data = {
        labels,
        datasets: [
            {
                label: labeltext,
                data: data,
                backgroundColor: 'blue'//rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return <Bar options={options} data={_data} />;
}
