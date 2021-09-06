import React from 'react';
import './custom-btn-styles.scss'

export const CustomBtn = ({child,...other}) => {
    return(
        <button className ="custom-btn" {...other}>
            {child}
        </button>
    )
}