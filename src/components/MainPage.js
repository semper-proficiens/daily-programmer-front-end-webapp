import React from 'react';
import DarkLightToggle from './DarkLightToggle';
import DailyProgrammerPage from './DailyProgrammerPage';
import Footer from './Footer';

function MainPage() {

    return (
        <div className="text-center">
            <DarkLightToggle />
            <DailyProgrammerPage />
            <Footer />
        </div>
    );
}

export default MainPage;