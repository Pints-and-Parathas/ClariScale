
import React, {useState} from "react";
import { PanelContainer,PanelContent, CloseButton } from "./SlidingPanel.styled";

const SlidingPanel = ({children}) => {
    const [isOpen, setIsOpen] = useState(false); // Manage state locally
  
    const togglePanel = () => {
      setIsOpen(!isOpen); // Toggle the state on button click
    };
    return(
        <>
            <PanelContainer isOpen={isOpen}>
                <PanelContent>
                    <h2 style={{ marginBottom: '40px' }}>Details</h2>
                    {children}
                    <p>Insert Details here fr fr.</p>
                </PanelContent>
            </PanelContainer>  
            <CloseButton isOpen={isOpen} onClick={togglePanel}>
                <span className="arrow">➔</span> 
            </CloseButton>
        </>
    );
};

export default SlidingPanel;