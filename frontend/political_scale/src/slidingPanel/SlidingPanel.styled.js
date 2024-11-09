import styled from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px; /* Width of the panel */
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
  position: fixed;  /* Position fixed to keep it outside the panel */
  top: 20px;       /* Adjust the top position as needed */
  right: ${(props) => (props.isOpen ? '300px' : '0px')}; /* Outside when closed, inside when open */
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
  z-index: 1007;

  /* Rotate arrow based on open state */
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out, right 0.3s ease-in-out;

  &:before {
    content: '➔';
    font-size: 18px;
  }
`;