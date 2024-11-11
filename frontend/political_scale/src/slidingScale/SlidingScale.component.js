import React, {useState} from 'react'
import { SlidingScaleContainer, SlidingScaleInput, SlidingScaleLabel, Tooltip } from './SlidingScale.styled'; 

const SlidingScale = ({category, value, isInsidePanel, gradient}) => {
    const [isHovered, setIsHovered] = useState(false);

    const sliderWidth = 100; // Width of the slider in percentage or pixels (adjust as needed)
    const thumbWidth = 20;   // Width of the thumb (adjust based on your actual thumb size)
    const maxValue = 100;     // The maximum value of the slider
    
    const position = (value / maxValue) * (sliderWidth - thumbWidth) + thumbWidth / 2; // Adjust position to center the label
    
    const tooltipPosition = isInsidePanel ? { top: '25px', left: `${position}%` } : { top: '-25px', left: `${position}%` };

    return(
        <SlidingScaleContainer
                onMouseEnter={() => !isInsidePanel && setIsHovered(true)}
                onMouseLeave={() => !isInsidePanel && setIsHovered(false)}
        >        
            {!isInsidePanel && <SlidingScaleLabel>{category}</SlidingScaleLabel>}
            <SlidingScaleInput
                value = {value}
                disabled
                style={{ background: gradient }}
            />
            {!isInsidePanel && isHovered &&(
                <Tooltip visible={true} style={{ left: `${position}%` }}>
                    {value}
                </Tooltip>
            )}

            {/* Category and Value display inside the panel (no hover) */}
            {isInsidePanel && (
                <div>
                    <p style={{ marginTop: '40px' }}>Category: {category}</p>
                    <p>Value: {value}</p>
                </div>
            )}
        </SlidingScaleContainer>
  );
};

export default SlidingScale;
