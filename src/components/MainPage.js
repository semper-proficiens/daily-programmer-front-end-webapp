import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DarkLightToggle from './DarkLightToggle';
import DailyProgrammerPage from './DailyProgrammerPage';
import Footer from './Footer';

function MainPage() {
    return (
        <>
            <DarkLightToggle />
            <DailyProgrammerPage />
            <Container>
                {/* Your content goes here */}
            </Container>
            <Button variant="outline-warning" className="btn-login position-fixed top-0 end-0 m-4">
                Login
            </Button>
            <Footer />
        </>
    );
}

export default MainPage;
