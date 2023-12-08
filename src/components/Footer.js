import React from 'react';
import '../styles/footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="fixed-bottom text-center">
            <p>&copy; {currentYear} ProgrammerQ. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
