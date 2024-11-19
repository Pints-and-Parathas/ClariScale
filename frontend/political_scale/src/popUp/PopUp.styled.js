import styled from 'styled-components';

// Styled component for the popup container
export const PopupContainer = styled.div`
  position: fixed;
  top: 0px; 
  right: 0px;
  width: 250px;
  height: 50px;
  padding: 20px;
  background-color: ${(props) => props.theme.background}; /* Use theme for background */
  color: ${(props) => props.theme.color}; /* Use theme for text color */
  box-shadow: ${(props) => props.theme.shadow}; 
  border-radius: 10px;
  z-index: 1000;
`;

export const DismissButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${(props) => props.theme.dismissButtonBg || '#ccc'}; /* Default background color */
  border: none;
  color: ${(props) => props.theme.dismissButtonColor || '#fff'}; /* White color for the cross */
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%; /* Circular button */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  z-index: 1011;

  &:hover {
      background-color: ${(props) => props.theme.dismissButtonHoverBg || '#999'}; /* Hover background */
  }

  &:focus {
      outline: none;
  }
`;