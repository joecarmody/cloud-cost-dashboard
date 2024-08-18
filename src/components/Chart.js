// src/components/Chart.js
import React from 'react';
import chartImage from '../assets/image.png';  // Place the image in the src/assets folder
import './Chart.css';

const Chart = () => {
    return (
        <div className="chart-container">
            <h2>Cloud Cost Forecast</h2>
            <img src={chartImage} alt="Cloud Cost Charts" />
        </div>
    );
};

export default Chart;
