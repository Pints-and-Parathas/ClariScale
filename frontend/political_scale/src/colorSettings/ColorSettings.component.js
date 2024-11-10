import React, {useState} from "react";
import { SettingsWindow, OptionButton } from "./ColorSettings.styled";
import ThemeToggle from '../themeToggle/ThemeToggle.component';
import { ToggleContainer } from '../themeToggle/ThemeToggle.styled';
import { FiSettings } from "react-icons/fi";

const ColorSettings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  return (
    <SettingsWindow>
      <OptionButton>Change Appearance</OptionButton>
      <OptionButton>Change Gradient</OptionButton>
    </SettingsWindow>
  );
};

export default ColorSettings;