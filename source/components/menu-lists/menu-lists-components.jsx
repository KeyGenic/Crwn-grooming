import React from 'react';
import './menu-lists.styles.scss';
import { withRouter } from 'react-router-dom';

const MenULists = ({title,img,history,url,match}) => {
    return(
        <div className ="menu-lists" onClick = {() => {
            history.push(`${match.url}${url}`)
            console.log(1)
        }}>
            <div className = "bg-img" style = {{
            backgroundImage: `url(${img})`
        }}>

            </div>
        <div className = "contents">
            <h1 className ="title">{title.toUpperCase()}</h1>
            <span className ="sub">Shop Now</span>
        </div>
    </div>
    )
}

export default withRouter(MenULists)