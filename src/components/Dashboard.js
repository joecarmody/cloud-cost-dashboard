// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import './Dashboard.css';

const Dashboard = () => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    // Fetch and parse the first CSV file
    useEffect(() => {
        fetch('/forecast.csv')
            .then(response => response.text())
            .then(text => {
                Papa.parse(text, {
                    header: true,
                    complete: (result) => {
                        setData1(result.data);
                    },
                });
            });
    }, []);

    // Fetch and parse the second CSV file
    useEffect(() => {
        fetch('/difference.csv')
            .then(response => response.text())
            .then(text => {
                Papa.parse(text, {
                    header: true,
                    complete: (result) => {
                        setData2(result.data);
                    },
                });
            });
    }, []);

    const processData = (data) => {
        if (!data) return { x: [], y: [], rnn: [] };

        const x = data.map(row => row['x'] || row['X'] || row['Time'] || row[Object.keys(row)[0]]);
        const y = data.map(row => row['y'] || row['Y'] || row['Value'] || row[Object.keys(row)[1]]);
        const rnn = data.map(row => row['RNN']);

        return { x, y, rnn };
    };

    const processData2 = (data) => {
        if (!data) return { x: [], y: [] };

        const x = data.map(row => row['x'] || row['X'] || row['Time'] || row[Object.keys(row)[0]]);
        const y = data.map(row => row['y'] || row['Y'] || row['Value'] || row[Object.keys(row)[1]]);

        return { x, y };
    };

    const plotData1 = processData(data1);
    const plotData2 = processData2(data2);

    const annotation = {
        x: plotData2.x[10], // X-coordinate of the point you want to annotate
        y: plotData2.y[10], // Y-coordinate of the point you want to annotate
        xref: 'x',
        yref: 'y',
        text: 'Anomaly Detected!',
        showarrow: true,
        arrowhead: 7,
        // ax: 0,
        // ay: -40
    };

    return (
        <div className="dashboard-container">
            <div className="plot-container">
                <Plot
                    data={[
                        {
                            x: plotData1.x,
                            y: plotData1.y,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'blue' },
                            name: 'Original',
                        },
                        {
                            x: plotData1.x,
                            y: plotData1.rnn,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'green' },
                            name: 'RNN',
                        },
                    ]}
                    layout={{
                        title: 'Cost Forecast',
                        xaxis: { title: 'X Axis' },
                        yaxis: { title: 'Y Axis' },
                        paper_bgcolor: '#1F1F1F',
                        plot_bgcolor: '#1F1F1F',
                        font: {
                            color: '#FFFFFF',
                        },
                        legend: {
                            x: 1,
                            y: 1,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#FFFFFF'
                            },
                            bgcolor: '#1F1F1F',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
                        },
                    }}
                    style={{ width: '100%', height: '400px' }}
                />
            </div>

            <div className="plot-container">
                <Plot
                    data={[
                        {
                            x: plotData2.x,
                            y: plotData2.y,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                    ]}
                    layout={{
                        title: 'Percentage Difference (%)',
                        xaxis: { title: 'X Axis' },
                        yaxis: { title: 'Y Axis' },
                        paper_bgcolor: '#1F1F1F',
                        plot_bgcolor: '#1F1F1F',
                        font: {
                            color: '#FFFFFF',
                        },
                        annotations: [annotation],
                    }}
                    style={{ width: '100%', height: '400px' }}
                />
            </div>
        </div>
    );
};

export default Dashboard;
