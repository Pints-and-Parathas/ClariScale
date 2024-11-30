import React, { useState, useEffect, useRef } from "react";
import {
  PanelContainer,
  PanelContent,
  CloseButton,
} from "./SlidingPanel.styled";
import { SettingsIcon } from "../colorSettings/ColorSettings.styled";
import { FiSettings } from "react-icons/fi";
import ColorSettings from "../colorSettings/ColorSettings.component";

const SlidingPanel = ({
  articleData,
  isOpen,
  children,
  theme,
  toggleTheme,
  onClose,
  onGradientSelect,
  selectedGradient,
}) => {
  const [arrowState, setArrowState] = useState(isOpen); 
  const [showSettings, setShowSettings] = useState(false); 
  const settingsRef = useRef(null); 

  useEffect(() => {
    setArrowState(isOpen);
  }, [isOpen]);

  const togglePanel = () => {
    setArrowState(!arrowState); 
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings); 
  };

  const handleClickOutside = (event) => {
    if (
      settingsRef.current &&
      !settingsRef.current.contains(event.target) &&
      !event.target.closest(`.${SettingsIcon.styledComponentId}`)
    ) {
      setShowSettings(false);
    }
  };

  
  useEffect(() => {
    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, [showSettings]);

  return (
    <>
      <PanelContainer isOpen={arrowState}>
        <PanelContent>
          <h2 style={{ marginBottom: "40px" }}>Details</h2>
          {children}
          <p style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '20px' }}>Article Details:</p>
          {articleData?.themes?.map((theme, index) => (
            <React.Fragment key={index}>
              <p style={{ marginBottom: "10px", fontWeight: 'bold' }}>{theme.theme}</p>
              <p style={{ marginBottom: "10px", fontStyle: 'italic' }}>Political Weighting: {theme.politicalAlignment}</p>
              <p style={{ marginBottom: "40px" }}>{theme.reasoning}</p>
            </React.Fragment>
          )) || 'Article Data not found.'}

        </PanelContent>
        <SettingsIcon onClick={toggleSettings}>
          <FiSettings />
        </SettingsIcon>
        {showSettings && (
          <div ref={settingsRef}>
            <ColorSettings
              toggleTheme={toggleTheme}
              theme={theme}
              onGradientSelect={onGradientSelect}
              isVisible={showSettings}
            />
          </div>
        )}
      </PanelContainer>
      <CloseButton isOpen={arrowState} onClick={togglePanel}>
        <span className="arrow">➔</span>
      </CloseButton>
    </>
  );
};

export default SlidingPanel;
