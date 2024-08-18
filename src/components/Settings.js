// src/components/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
    const [tolerance, setTolerance] = useState(5); // Default value is 5%

    const handleToleranceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setTolerance(value);
        }
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings-option">
                <label>Dark Mode</label>
                <input type="checkbox" checked disabled />
            </div>
            <div className="settings-option">
                <label>Notifications</label>
                <input type="checkbox" />
            </div>
            <div className="settings-option">
                <label>Auto-Refresh</label>
                <input type="checkbox" />
            </div>
            <div className="settings-option">
                <label>Anomaly Tolerance (%)</label>
                <input
                    type="number"
                    value={tolerance}
                    onChange={handleToleranceChange}
                    min="0"
                    max="100"
                    step="1"
                />
            </div>
        </div>
    );
};

export default Settings;
