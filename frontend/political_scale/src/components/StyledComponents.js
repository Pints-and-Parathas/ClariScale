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

// Styled component for the slider container
export const SlidingScaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  height: 100%; /* Ensure the container takes full height */
  margin-top: -20px;
  z-index:1001;
`;

// Styled component for the slider input
export const SlidingScaleInput = styled.input.attrs({ type: 'range' })`
  width: 100%;
  -webkit-appearance: none; /* Remove default styling */
  height: 10px; /* Height of the track */
  background: transparent; /* Background set to transparent for the track */
  outline: none;

  /* Track styling for Chrome */
  &::-webkit-slider-runnable-track {
    height: 10px; /* Height of the track */
    background: linear-gradient(
      90deg,
      #ff0000 0%, 
      #ff7f00 25%, 
      #ffff00 50%, 
      #00ff00 75%, 
      #0000ff 100%
    ); /* Gradient from red to blue */
    border-radius: 0; /* No rounded corners for a rectangular track */
  }

  /* Thumb styling for Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent; /* Left side of the triangle */
    border-right: 10px solid transparent; /* Right side of the triangle */
    border-bottom: 15px solid #ffffff; /* Bottom color of the triangle (thumb) */
    cursor: pointer;
    transform: translateY(4px); /* Adjust positioning to center the triangle */
  }
`;

// Styled component for the slider label
export const SlidingScaleLabel = styled.label`
  margin: 10px 0;
  font-size: 14px;
  text-align: center; 
`;

//Styled component for the tooltip
export const Tooltip = styled.div`
  position: absolute; /* Positioning to show it on top of the slider */
  bottom: 0px; /* Position it above the slider */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for the center */
  background-color: transparent; /* Dark background for the tooltip */
  color: #fff; /* White text for contrast */

  border-radius: 5px; /* Rounded corners */
  font-size: 10px; /* Smaller font size */
  z-index: 1002; /* Ensure it's above the slider */
  white-space: nowrap; /* Prevent line breaks */

`;