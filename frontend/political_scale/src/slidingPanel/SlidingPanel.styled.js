import styled from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 450px; /* Width of the panel */
  background-color: ${(props) => props.theme.background}; /* Background color of the panel */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1005;   
`;

export const PanelContent = styled.div`
  padding: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.color};
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  
  /* Ensure the button stays visible even when the panel is closed */
  right: ${(props) => (props.isOpen ? '460px' : '10px')}; /* Button positioning */
  
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1010;
  font-size: 18px;
  
  /* Adjust the rotation of the arrow */
  .arrow {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  }
`;