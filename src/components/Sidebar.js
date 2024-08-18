// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li>Overview</li>
                <li>Cloud Costs</li>
                <li>Usage Statistics</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
