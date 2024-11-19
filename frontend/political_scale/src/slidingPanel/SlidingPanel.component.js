import React, {useState, useEffect, useRef} from "react";
import { PanelContainer,PanelContent, CloseButton } from "./SlidingPanel.styled";
import { SettingsIcon } from "../colorSettings/ColorSettings.styled";
import { FiSettings } from 'react-icons/fi';
import ColorSettings from "../colorSettings/ColorSettings.component";


const SlidingPanel = ({isOpen, children, theme, toggleTheme, onClose, onGradientSelect, selectedGradient}) => {
    const [arrowState, setArrowState] = useState(isOpen); // Manage state locally
    const [showSettings, setShowSettings] = useState(false); // Track settings visibility
    const settingsRef = useRef(null); //Reference for settings window

    useEffect(() => {
        setArrowState(isOpen);
      }, [isOpen]);

    const togglePanel = () => {
      setArrowState(!arrowState); // Toggle the state on button click
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings); // Toggle the settings popup
    };

    const handleClickOutside = (event) => {
        // Close the settings if clicking outside it or toggling the settings icon
        if (
            settingsRef.current &&
            !settingsRef.current.contains(event.target) &&
            !event.target.closest(`.${SettingsIcon.styledComponentId}`)
        ) {
            setShowSettings(false);
        }
    };

    // Attach event listener to close the settings on outside click
    useEffect(() => {
        if (showSettings) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Clean up listener
        };
    }, [showSettings]);

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
                {showSettings && (
                    <div ref={settingsRef}>
                        <ColorSettings toggleTheme={toggleTheme} theme={theme} onGradientSelect={onGradientSelect}/>
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