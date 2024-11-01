import React from 'react'
import { PopupContainer,PopupText } from './PopUp.styled';

const PopUp = ({isArticle}) => {
    //If user not on article then no pop up
    if(!isArticle) return null;

    return(
        <PopupContainer>
            <PopupText>This is an article.fr.</PopupText>
        </PopupContainer>
    );
};

export default PopUp;