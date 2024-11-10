// Switch.styled.js
import styled from 'styled-components';

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px; /* Width of the toggle */
  height: 24px; /* Height of the toggle */

  input {
    opacity: 0; /* Hide the checkbox */
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer; /* Make it clickable */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc; /* Background color for the switch */
    border-radius: 34px; /* Rounded corners */
    transition: background-color 0.4s; /* Smooth transition */

    &:before {
      position: absolute;
      content: "";
      height: 20px; /* Height of the slider */
      width: 20px; /* Width of the slider */
      left: 2px; /* Position of the slider */
      bottom: 2px; /* Position of the slider */
      background-color: white; /* Color of the slider */
      border-radius: 50%; /* Make it circular */
      transition: transform 0.4s; /* Smooth transition for the slider */
    }
  }

  /* Styles when the toggle is checked */
  input:checked + span {
    background-color: #66bb6a; /* Color when toggle is on */
  }

  input:checked + span:before {
    transform: translateX(26px); /* Move the slider */
  }
`;

export const ToggleContainer = styled.div`
  position: relative; /* Use relative positioning to control placement below the text */
  margin-top: -42px;   /* Add some margin to space it out below the theme settings */
  left: 102%;          /* Center the container horizontally */
  transform: translateX(-50%);  /* Offset the container by 50% of its width to center it */
  z-index: 1002;      /* Ensure it's above other elements */
`;


