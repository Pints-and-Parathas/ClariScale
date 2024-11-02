import styled from 'styled-components';

// Styled component for the popup container
export const PopupContainer = styled.div`
  position: fixed;
  top: 0px; 
  right: 0px;
  width: 250px;
  padding: 20px;
  background-color: var(--background); /* Use CSS variable for background */
  color: var(--color); /* Use CSS variable for text color */
  box-shadow: var(--shadow); /* Use CSS variable for shadow */
  border-radius: 10px;
  z-index: 1000;
`;
