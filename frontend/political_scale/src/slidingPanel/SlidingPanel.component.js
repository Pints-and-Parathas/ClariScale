
import React, {useState} from "react";
import { PanelContainer,PanelContent, CloseButton } from "./SlidingPanel.styled";

const SlidingPanel = ({children}) => {
    const [arrowState, setArrowState] = useState(true); // Manage state locally
  
    const togglePanel = () => {
      setArrowState(!arrowState); // Toggle the state on button click
    };
    return(
        <>
            <PanelContainer isOpen={arrowState}>
                <PanelContent>
                    <h2 style={{ marginBottom: '40px' }}>Details</h2>
                    {children}
                    <p>Insert Details here fr fr.</p>
                </PanelContent>
            </PanelContainer>  
            <CloseButton isOpen={arrowState} onClick={togglePanel}>
                <span className="arrow">➔</span> 
            </CloseButton>
        </>
    );
};

export default SlidingPanel;