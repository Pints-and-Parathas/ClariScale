import React from 'react'
import { PopupContainer } from './PopUp.styled';
import SlidingScale from '../slidingScale/SlidingScale.component';

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