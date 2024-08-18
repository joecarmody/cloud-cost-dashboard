// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Cloud Cost Dashboard</h1>
            <div className="user-profile">
                <span>Welcome, John Data</span>
            </div>
        </div>
    );
};

export default Header;
