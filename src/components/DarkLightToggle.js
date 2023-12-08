import React, { useEffect, useContext } from 'react';
import { Toggle } from 'react-toggle-component';
import { StyleSheetManager } from 'styled-components';
import '../styles/toggle.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

function DarkLightToggle() {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isDarkMode) {
            body.classList.add('bg-dark');
        } else {
            body.classList.remove('bg-dark');
        }
    }, [isDarkMode]);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'leftKnobColor' && prop !== 'leftBackgroundColor' && prop !== 'rightKnobColor' && prop !== 'rightBackgroundColor' && prop !== 'leftBorderColor' && prop !== 'rightBorderColor'}>
            <div className='toggle-container'>
                <Toggle
                    leftKnobColor="#f8f9fa"
                    leftBackgroundColor="#343a40"
                    rightKnobColor="#3b3b3b"
                    rightBackgroundColor="#fafafa"
                    leftBorderColor="#3B71CA"
                    rightBorderColor="#E4A11B"
                    name="dark-mode-toggle"
                    checked={isDarkMode}
                    onToggle={() => setIsDarkMode(!isDarkMode)}
                />
                <span className={isDarkMode ? "toggle-message-dark" : "toggle-message-light"}>
                    {isDarkMode ? 'Try Light Mode!' : 'Try Dark Mode!'}
                </span>
            </div>
        </StyleSheetManager>
    );
}

export default DarkLightToggle;
