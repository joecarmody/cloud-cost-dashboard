// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
