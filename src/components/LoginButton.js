import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
    return (
        <Button variant="outline-warning" className="btn-login position-fixed top-0 end-0 m-4">
            Login
        </Button>
    );
}

export default LoginButton;
