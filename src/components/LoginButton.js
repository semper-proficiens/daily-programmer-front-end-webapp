import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

function LoginButton() {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <Button
            as={Link}
            to="/login"
            variant={isDarkMode ? 'outline-warning' : 'outline-primary'}
            className="btn-login position-fixed top-0 end-0 m-4"
        >
            Login
        </Button>
    );
}

export default LoginButton;
