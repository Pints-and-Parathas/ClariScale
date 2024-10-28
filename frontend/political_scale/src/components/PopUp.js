import React, {useState } from 'react'
import { PopupContainer} from './StyledComponents';
import SlidingScale from './SlidingScale';

const PopUp = ({isArticle, category, value}) => {
     //If user not on article then no pop up
    if(!isArticle) return null;

    return(
        <PopupContainer>
            <SlidingScale category={category} value = {value} />
        </PopupContainer>
    );
};

export default PopUp;