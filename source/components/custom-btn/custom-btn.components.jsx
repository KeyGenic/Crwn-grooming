import React from 'react';
import './custom-btn-styles.scss'

const CustomBtn = ({child,isGoogleIn,Isinverted,...other}) => {
    return(
        <button className ={`${Isinverted? "inverted" : ""} ${isGoogleIn? "google-sign-in" : ""} custom-btn`} {...other}>
            {child}
        </button>
    )
}

export default CustomBtn