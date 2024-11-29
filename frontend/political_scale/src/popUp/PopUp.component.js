import React, { useState } from "react";
import { PopupContainer, DismissButton } from "./PopUp.styled";
import SlidingScale from "../slidingScale/SlidingScale.component";
import { LearnMoreLink } from "../moreDetailsLink/MoreDetailsLink.styled";
import SlidingPanel from "../slidingPanel/SlidingPanel.component";
import ColorSettings from "../colorSettings/ColorSettings.component";

const PopUp = ({
  isArticle,
  category,
  value,
  theme,
  toggleTheme,
  articleData,
}) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(
    "linear-gradient(45deg, #FFC312, #EE5A24)"
  );

  //If user not on article then no pop up
  if (!isArticle) return null;

  const handleLearnMoreClick = () => {
    setIsPopUpVisible(false); // Hide the pop-up*/
    setIsPanelOpen(true); // Open the panel
  };

  const handleDismissClick = () => {
    setIsPopUpVisible(false); // Hide the pop-up*/
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false); // Close the panel when the close button is clicked
  };

  const handleGradientSelect = (newGradient) => {
    setSelectedGradient(newGradient); // Update gradient
  };

  return (
    <>
      {isPopUpVisible && (
        <PopupContainer>
          <DismissButton onClick={handleDismissClick}>x</DismissButton>
          <SlidingScale
            category={category}
            value={value}
            isInsidePanel={false}
            gradient={selectedGradient}
          />
          <LearnMoreLink href="#" onClick={handleLearnMoreClick}>
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
          selectedGradient={selectedGradient}
          onGradientSelect={setSelectedGradient}
        >
          <SlidingScale
            category={category}
            value={value}
            isInsidePanel={true}
            gradient={selectedGradient}
          />
          <ColorSettings
            theme={theme}
            toggleTheme={toggleTheme}
            onGradientSelect={handleGradientSelect}
          />
        </SlidingPanel>
      )}
    </>
  );
};

export default PopUp;
