import React from 'react';
import { ToggleSwitch } from './ThemeToggle.styled';

const ThemeToggle =({toggleTheme, theme}) => {
    return (
        <ToggleSwitch>
        <input 
            type="checkbox"   
            onChange={toggleTheme}      // Trigger the toggleTheme function when the checkbox is clicked
        />
        <span></span>
        </ToggleSwitch>
    );
};

export default ThemeToggle;
