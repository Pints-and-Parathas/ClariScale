import React, { useState, useEffect } from 'react'
import { PopupContainer } from './PopUp.styled';
import SlidingScale from '../slidingScale/SlidingScale.component';
import { LearnMoreLink } from '../moreDetailsLink/MoreDetailsLink.styled';
import SlidingPanel from '../slidingPanel/SlidingPanel.component';

const PopUp = ({isArticle, category, value,theme,toggleTheme}) => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(true);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    

    //If user not on article then no pop up
    if(!isArticle) return null;

    const handleLearnMoreClick = () => {
        setIsPopUpVisible(false); // Hide the pop-up*/
        setIsPanelOpen(true); // Open the panel
      };


    const handleClosePanel = () => {
        setIsPanelOpen(false); // Close the panel when the close button is clicked
    };

    return(
        <>
            {isPopUpVisible && (
                <PopupContainer>
                    <SlidingScale category={category} value={value} isInsidePanel={false} />
                    <LearnMoreLink onClick={handleLearnMoreClick}>
                        Learn More
                    </LearnMoreLink>
                </PopupContainer>
            )}
            {isPanelOpen && (
                <SlidingPanel
                    isOpen={isPanelOpen} // Pass isPanelOpen to control visibility
                    onClose={handleClosePanel} // Close panel when clicked
                    theme={theme}
                    toggleTheme={toggleTheme}
                >
                    <SlidingScale category={category} value={value} isInsidePanel={true} />
                </SlidingPanel>
            )}
        </> 
    );
};

export default PopUp;