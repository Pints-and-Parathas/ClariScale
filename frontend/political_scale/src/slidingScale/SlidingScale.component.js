import React, {useState} from 'react'
import { SlidingScaleContainer, SlidingScaleInput, SlidingScaleLabel, Tooltip } from './SlidingScale.styled'; 

const SlidingScale = ({category, value, isInsidePanel, gradient}) => {
    const [isHovered, setIsHovered] = useState(false);

    const sliderWidth = 100; 
    const thumbWidth = 20;   
    const maxValue = 100;     
    
    const position = (value / maxValue) * (sliderWidth - thumbWidth) + thumbWidth / 2; 
    

    return(
        <SlidingScaleContainer
                onMouseEnter={() => !isInsidePanel && setIsHovered(true)}
                onMouseLeave={() => !isInsidePanel && setIsHovered(false)}
        >        
            {!isInsidePanel && (
                <SlidingScaleLabel>
                Political Leaning : {category} 
                </SlidingScaleLabel>
            )}
            <SlidingScaleInput
                value = {value}
                gradient={gradient}
                disabled
            />
            {!isInsidePanel && isHovered &&(
                <Tooltip visible={true} style={{ left: `${position}%` }}  >
                    {value}
                </Tooltip>
            )}

            {isInsidePanel && (
                <div>
                    <h2 style={{ marginTop: '40px' }}>Category : {category}</h2>
                    <h2>Value : {value}</h2>
                </div>
            )}
        </SlidingScaleContainer>
  );
};

export default SlidingScale;
