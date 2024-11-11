import React, {useState, useEffect, useRef} from "react";
import { SettingsWindow, OptionButton, ThemeModal, ThemeModalOverlay } from "./ColorSettings.styled";
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from "../themeToggle/ThemeToggle.styled";

const ColorSettings = ({theme, toggleTheme}) => {
  const [isThemeModalVisible, setIsThemeModalVisible] = useState(false); // Control Theme modal visibility

  // Toggle the visibility of the theme modal
  const toggleThemeModal = () => {
    setIsThemeModalVisible(!isThemeModalVisible);
  };

  return (
    <>
      <SettingsWindow >
        <OptionButton onClick={toggleThemeModal}>Change Appearance</OptionButton>
        <OptionButton>Change Gradient</OptionButton>
      </SettingsWindow>

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
    </>
  );
};

export default ColorSettings;