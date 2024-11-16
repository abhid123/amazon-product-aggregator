import React from 'react';
import 'antd/dist/reset.css';
import './App.css'; 
import SearchPage from './pages/SearchPage';

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Amazon Product Search Aggregator</h1>
            </header>
            <SearchPage />
        </div>
    );
};

export default App;