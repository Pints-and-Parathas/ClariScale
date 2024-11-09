import React from 'react'
import { PopupContainer } from './PopUp.styled';
import SlidingScale from '../slidingScale/SlidingScale.component';
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from '../themeToggle/ThemeToggle.styled';
import { LearnMoreLink } from '../moreDetailsLink/MoreDetailsLink.styled'; 

const PopUp = ({isArticle, category, value, theme, toggleTheme}) => {
    //If user not on article then no pop up
    if(!isArticle) return null;

    return(
        <PopupContainer>
            <ToggleContainer>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </ToggleContainer>
            <SlidingScale category={category} value={value} />
            <LearnMoreLink href="https://www.gov.uk/apply-to-come-to-the-uk" target="_blank">
                Learn More
            </LearnMoreLink>
        </PopupContainer>
    );
};

export default PopUp;