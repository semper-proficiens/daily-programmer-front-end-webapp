import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
    return (
        <DarkModeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </DarkModeProvider>
    );
}

export default App;
