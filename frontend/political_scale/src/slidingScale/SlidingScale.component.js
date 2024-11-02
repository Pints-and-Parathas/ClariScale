import React, {useState} from 'react'
import { SlidingScaleContainer, SlidingScaleInput, SlidingScaleLabel, Tooltip } from './SlidingScale.styled'; 

const SlidingScale = ({category, value}) => {
    const [isHovered, setIsHovered] = useState(true);

    const sliderWidth = 100; // Width of the slider in percentage or pixels (adjust as needed)
    const thumbWidth = 20;   // Width of the thumb (adjust based on your actual thumb size)
    const maxValue = 100;     // The maximum value of the slider
    
    const position = (value / maxValue) * (sliderWidth - thumbWidth) + thumbWidth / 2; // Adjust position to center the label
    

    return(
        <SlidingScaleContainer
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
        >        
            <SlidingScaleLabel>{category}</SlidingScaleLabel>
            <SlidingScaleInput
                value = {value}

                disabled
            />
            <Tooltip 
                visible={isHovered}
                style={{ left: `${position}%` }}
            >
                {value}
            </Tooltip>
        </SlidingScaleContainer>
  );
};

export default SlidingScale;
