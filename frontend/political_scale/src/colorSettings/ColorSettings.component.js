import React, { useState, useEffect, useRef } from "react";
import {
  SettingsWindow,
  OptionButton,
  ThemeModal,
  ThemeModalOverlay,
} from "./ColorSettings.styled";
import ThemeToggle from "../themeToggle/ThemeToggle.component";
import { ToggleContainer } from "../themeToggle/ThemeToggle.styled";
import { gradientOptions } from "./GradientColors.styled";

const ColorSettings = ({ theme, toggleTheme, onGradientSelect, isVisible }) => {
  const [isThemeModalVisible, setIsThemeModalVisible] = useState(false); // Control Theme modal visibility
  const [isGradientModalVisible, setIsGradientModalVisible] = useState(false); // Visibility of gradient modal

  // Toggle the visibility of the theme modal
  const toggleThemeModal = () => {
    setIsThemeModalVisible(!isThemeModalVisible);
  };

  // Toggle gradient modal visibility
  const toggleGradientModal = () => {
    setIsGradientModalVisible(!isGradientModalVisible);
  };

  return (
    <>
      {isVisible && (
        <SettingsWindow>
          <OptionButton onClick={toggleThemeModal}>
            Change Appearance
          </OptionButton>
          <OptionButton onClick={toggleGradientModal}>
            Change Gradient
          </OptionButton>
        </SettingsWindow>
      )}

      {isThemeModalVisible && (
        <>
          <ThemeModalOverlay onClick={toggleThemeModal} />
          <ThemeModal isVisible={isThemeModalVisible}>
            <h3>Theme Settings</h3>
            <ToggleContainer>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </ToggleContainer>
          </ThemeModal>
        </>
      )}

      {isGradientModalVisible && (
        <>
          <ThemeModalOverlay onClick={toggleGradientModal} />
          <ThemeModal isVisible={isGradientModalVisible}>
            <h3>Select Gradient</h3>
            <div>
              {gradientOptions.map((gradient, index) => (
                <OptionButton
                  key={index}
                  onClick={() => {
                    onGradientSelect(gradient); // Set selected gradient
                    setIsGradientModalVisible(false); // Close modal
                  }}
                  style={{
                    background: gradient,
                    color: "#fff",
                    margin: "5px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Gradient {index + 1}
                </OptionButton>
              ))}
            </div>
          </ThemeModal>
        </>
      )}
    </>
  );
};

export default ColorSettings;
