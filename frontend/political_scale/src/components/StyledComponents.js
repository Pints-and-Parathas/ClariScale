import styled from 'styled-components';

// Styled component for the popup container
export const PopupContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 300px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
`;

// Styled component for the text in the popup
export const PopupText = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;