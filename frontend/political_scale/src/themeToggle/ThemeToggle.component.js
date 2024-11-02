import React from 'react';
import { ToggleSwitch } from './ThemeToggle.styled';

const ThemeToggle =({toggleTheme}) => {
    return (
        <ToggleSwitch>
            <input type="checkbox" onChange={toggleTheme} />
            <span></span>
        </ToggleSwitch>
    );
};

export default ThemeToggle;
