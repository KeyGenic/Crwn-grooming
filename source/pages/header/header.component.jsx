import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/4.3 crown.svg'

const Header = () => {
    return (
        <header>
            <Link to ="/" className= "logo-container">
                <img src={Logo} alt="" />
            </Link>

            <div className ="nav">
                <Link className ="nav-item" to ='/shop'>
                    Shop
                </Link>
                <Link className ="nav-item" to ='/contact'>
                    Contact
                </Link>
                <Link className ="nav-item" to ='/signin'>
                    Sign-in
                </Link>
            </div>
        </header>
    )
}

export default Header