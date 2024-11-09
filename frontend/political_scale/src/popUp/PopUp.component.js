import React, { useState } from 'react'
import { PopupContainer } from './PopUp.styled';
import SlidingScale from '../slidingScale/SlidingScale.component';
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from '../themeToggle/ThemeToggle.styled';
import { LearnMoreLink } from '../moreDetailsLink/MoreDetailsLink.styled';
import SlidingPanel from '../slidingPanel/SlidingPanel.component';

const PopUp = ({isArticle, category, value, theme, toggleTheme}) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    //If user not on article then no pop up
    if(!isArticle) return null;

    return(
        <PopupContainer>
            <ToggleContainer>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </ToggleContainer>
            <SlidingScale category={category} value={value} isInsidePanel={false}/>
            <LearnMoreLink onClick={() => setIsPanelOpen(true)}>
                Learn More
            </LearnMoreLink>
            <SlidingPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
                <SlidingScale category={category} value={value} isInsidePanel={true} />
            </SlidingPanel>
        </PopupContainer>
    );
};

export default PopUp;