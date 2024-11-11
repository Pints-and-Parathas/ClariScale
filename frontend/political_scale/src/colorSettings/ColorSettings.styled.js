import styled from "styled-components";

// Styled components defined inline
export const SettingsWindow = styled.div`
  position: absolute;
  left:-45%; /* Adjust position to the left of the settings icon */
  top: 93%;
  transform: translateY(-50%); /* Center the window vertically */
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1007;
  width: 180px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const OptionButton = styled.button`
  margin-bottom: 10px; /* Space between buttons */
  padding: 8px;
  font-size: 14px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #e1e1e1;
  }
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

export const ThemeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1008;
  width: 300px;
  border-radius: 8px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const ThemeModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1007;
`;
