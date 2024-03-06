import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

ChartJS.register();

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Sotto Categorie',
        }
    },
};

function GraphicBarSub({ graphicData }) {
    return (
        <Bar data={graphicData} options={options} height="300px" />
    )
}

export default GraphicBarSub