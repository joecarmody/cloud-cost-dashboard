// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/">Cloud Costs</Link></li>
                <li><Link to="/">Usage Statistics</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
