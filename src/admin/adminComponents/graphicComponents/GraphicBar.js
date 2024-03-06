import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

ChartJS.register();

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Categorie',
        }
    },
};

function GraphicBar({ graphicData }) {
    return (
        <>
            <Pie data={graphicData} options={options} height="300px" />
        </>
    )
}

export default GraphicBar//<Bar data={graphicData} options={options} />