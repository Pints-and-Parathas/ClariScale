import React from "react";
import { PanelContainer,PanelContent, CloseButton } from "./SlidingPanel.styled";

const SlidingPanel = ({isOpen, onClose, children}) => {
    return(
        <PanelContainer isOpen={isOpen}>
            <CloseButton onClick={onClose}></CloseButton>
            <PanelContent>
                <h2>Details</h2>
                {children}
                <p>Insert Details here fr fr.</p>
            </PanelContent>
        </PanelContainer>  
    );
};

export default SlidingPanel;