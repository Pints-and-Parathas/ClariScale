import styled from "styled-components";

// Styled components defined inline
export const SettingsContainer = styled.div`
  position: absolute;
  left: 60px; /* To make sure it's inside the panel */
  top: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1007;
  width: 200px;
`;

export const SettingsIcon = styled.div`
  position: absolute;
  left: 10px; /* Position it on the left side of the panel */
  top: 95%; /* Vertically center it */
  transform: translateY(-50%); /* Ensure it's centered vertically */
  cursor: pointer;
  font-size: 24px;
  background-color: #ddd;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1006;
`;
