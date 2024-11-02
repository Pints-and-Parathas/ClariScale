import React from 'react'
import { PopupContainer } from './PopUp.styled';
import SlidingScale from '../slidingScale/SlidingScale.component';
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from '../themeToggle/ThemeToggle.styled';

const PopUp = ({isArticle, category, value, theme, toggleTheme}) => {
    //If user not on article then no pop up
    if(!isArticle) return null;

    return(
        <PopupContainer>
            <ToggleContainer>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </ToggleContainer>
            <SlidingScale category={category} value={value} />
        </PopupContainer>
    );
};

export default PopUp;