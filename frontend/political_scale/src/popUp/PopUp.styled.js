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
