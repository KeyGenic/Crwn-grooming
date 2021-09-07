import React from 'react';
import './custom-btn-styles.scss'

export const CustomBtn = ({child,isGoogleIn,...other}) => {
    return(
        <button className ={`${isGoogleIn? "google-sign-in" : ""} custom-btn`} {...other}>
            {child}
        </button>
    )
}