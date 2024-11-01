import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 300px;
  padding: 20px;
  background-color: var(--background); /* Use CSS variable for background */
  color: var(--color); /* Use CSS variable for text color */
  box-shadow: var(--shadow); /* Use CSS variable for shadow */
  border-radius: 8px;
  z-index: 1000;
`;

// Styled component for the text in the popup
export const PopupText = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;