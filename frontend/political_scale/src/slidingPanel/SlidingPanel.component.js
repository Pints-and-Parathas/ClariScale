import React, { useState, useEffect, useRef } from "react";
import {
  PanelContainer,
  PanelContent,
  CloseButton,
} from "./SlidingPanel.styled";
import { SettingsIcon } from "../colorSettings/ColorSettings.styled";
import { FiSettings } from "react-icons/fi";
import ColorSettings from "../colorSettings/ColorSettings.component";

const outletQuestions = [
  "Question 1: What is the historical political leaning of this outlet?",
  "Question 2: Who owns the outlet and what are their political leanings?",
  "Question 3: What historical political affiliations has the outlet held?",
  "Question 4: Is the organization owned by a parent company, and if so, how do they typically lean politically?",
  "Question 5: Who did this organization support, if anyone, in the previous election cycle, and what political leaning do they represent?",
];

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
          <p
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Article Details: {articleData?.articleAlignment}
          </p>

          {articleData?.themes?.map((theme, index) => (
            <React.Fragment key={index}>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                {theme.theme}
              </p>
              <p style={{ marginBottom: "10px", fontStyle: "italic" }}>
                Political Weighting: {theme.politicalAlignment}
              </p>
              <p style={{ marginBottom: "40px" }}>{theme.reasoning}</p>
            </React.Fragment>
          )) || "Article Data not found."}

          <p
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Outlet Details {articleData?.outletAlignment}:
          </p>

          {articleData?.outletQuestions?.map((question, index) => (
            <React.Fragment key={index}>
              <p style={{ marginBottom: "10px", fontStyle: "italic" }}>
                {outletQuestions[index]}
              </p>
              <p style={{ marginBottom: "10px", fontStyle: "italic" }}>
                Political Weighting: {question.score}
              </p>
              <p style={{ marginBottom: "40px" }}>{question.summary}</p>
            </React.Fragment>
          )) || "Outlet Data not found."}
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
