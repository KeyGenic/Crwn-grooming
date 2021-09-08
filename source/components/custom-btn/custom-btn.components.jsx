import React from 'react';
import './custom-btn-styles.scss'

const CustomBtn = ({child,isGoogleIn,...other}) => {
    return(
        <button className ={`${isGoogleIn? "google-sign-in" : ""} custom-btn`} {...other}>
            {child}
        </button>
    )
}

export default CustomBtn