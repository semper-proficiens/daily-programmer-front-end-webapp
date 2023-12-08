import React from 'react';
import { Container } from 'react-bootstrap';
import DarkLightToggle from './DarkLightToggle';
import DailyProgrammerPage from './DailyProgrammerPage';
import Footer from './Footer';
import LoginButton from './LoginButton'; // Import the LoginButton component

function MainPage() {
    return (
        <>
            <DarkLightToggle />
            <DailyProgrammerPage />
            <LoginButton />
            <Footer />
        </>
    );
}

export default MainPage;
