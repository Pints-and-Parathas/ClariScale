import React, {useState} from "react";
import { SettingsContainer, SettingsIcon } from "./ColorSettings.styled";
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from '../themeToggle/ThemeToggle.styled';
import { FiSettings } from "react-icons/fi";

const ColorSettings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  return (
    <SettingsContainer>
      <h3>Settings</h3>
      <p>Option 1: Change Appearance</p>
      <p>Option 2: Change Gradient</p>
    </SettingsContainer>
  );
};

export default ColorSettings;