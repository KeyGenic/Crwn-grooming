import React from 'react';
import { ButtonContainer } from './custom-btn.styles';

const CustomBtn = ({child,...props}) => {
    return(
        <ButtonContainer {...props} >{child}</ButtonContainer>
    )
}

export default CustomBtn