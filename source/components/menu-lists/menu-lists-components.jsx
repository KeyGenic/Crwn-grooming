import React from 'react';
import './menu-lists.styles.scss';

export const MenULists = ({title,img}) => {
    return(
        <div className ="menu-lists" >
            <div className = "bg-img" style = {{
            backgroundImage: `url(${img})`
        }}>

            </div>
        <div className = "contents">
            <h1 className ="title">{title}</h1>
            <span className ="sub">Shop Now</span>
        </div>
    </div>
    )
}