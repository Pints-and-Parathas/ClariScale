import React, {useState} from "react";
import { PanelContainer,PanelContent, CloseButton } from "./SlidingPanel.styled";
import { SettingsIcon } from "../colorSettings/ColorSettings.styled";
import { FiSettings } from 'react-icons/fi';
import ColorSettings from "../colorSettings/ColorSettings.component";


const SlidingPanel = ({isOpen, children, theme, toggleTheme, onClose}) => {
    const [arrowState, setArrowState] = useState(isOpen); // Manage state locally
    const [showSettings, setShowSettings] = useState(false); // Track settings visibility

    const togglePanel = () => {
      setArrowState(!arrowState); // Toggle the state on button click
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings); // Toggle the settings popup
    };

    return(
        <>
            <PanelContainer isOpen={arrowState}>
                <PanelContent>
                    <h2 style={{ marginBottom: '40px' }}>Details</h2>
                    {children}
                    <p>Insert Details here fr fr.</p>
                </PanelContent>
                <SettingsIcon onClick={toggleSettings}>
                    <FiSettings />
                </SettingsIcon>
                {showSettings && <ColorSettings toggleTheme={toggleTheme} theme={theme}/>}
            </PanelContainer>  
            <CloseButton isOpen={arrowState} onClick={togglePanel}>
                <span className="arrow">➔</span> 
            </CloseButton>
        </>
    );
};

export default SlidingPanel;