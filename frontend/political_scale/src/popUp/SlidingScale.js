import React, {useState} from 'react'
import { SlidingScaleContainer, SlidingScaleLabel, SlidingScaleInput, Tooltip } from './StyledComponents'

const SlidingScale = ({category, value}) => {
    const [isHovered, setIsHovered] = useState(true);

    const sliderWidth = 100; // Assuming the width of the slider in percentage (for example)
    const thumbWidth = 0; // Width of the thumb (you can adjust this if your thumb width is different)
    const position = ((value) / 87) * (sliderWidth - thumbWidth); // Calculate position based on value

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