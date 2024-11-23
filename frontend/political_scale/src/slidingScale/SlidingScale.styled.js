import styled from 'styled-components';

// Styled component for the slider container
export const SlidingScaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  height: 100%; /* Ensure the container takes full height */
  margin-top: -10px;
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
    background: ${(props) => props.gradient || 'transparent'};
    border-radius: 0; /* No rounded corners for a rectangular track */
  }

  /* Thumb styling for Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent; /* Left side of the triangle */
    border-right: 10px solid transparent; /* Right side of the triangle */
    border-bottom: 15px solid ${(props) => props.theme.thumbColor}; /* Bottom color of the triangle (thumb) */

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
  bottom: 8px; /* Position it above the slider */
  left: -60%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for the center */
  background-color: transparent; /* Dark background for the tooltip */
  color:  ${(props) => props.theme.thumbColor}; /* Bottom color of the triangle (thumb) */; /* White text for contrast */

  border-radius: 5px; /* Rounded corners */
  font-size: 10px; /* Smaller font size */
  z-index: 1005; /* Ensure it's above the slider */
  white-space: nowrap; /* Prevent line breaks */
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;