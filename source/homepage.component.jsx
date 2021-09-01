import React from 'react'
import './homepage.styles.scss'


const HomePage = () => {
    return(
        <div className ="homepage">
            <div className ="menu">

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Shampoos</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Shower Gels</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Deaodorants</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Body Powders</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Face Scrubs</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>

                <div className ="menu-lists">
                    <div className = "contents">
                        <h1 className ="title">Bar Soaps</h1>
                        <span className ="sub">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage