import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/4.3 crown.svg'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIconShop from '../../components/cart/cart.component';

const Header = ({currentUser}) => {
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
                {currentUser?
                <div className ="nav-item" onClick = {() => {auth.signOut()}} style = {{cursor :`pointer`}}> Sign-out</div>    
                :
                <Link className ="nav-item" to ='/signin'>
                    Sign-in
                </Link>
            }
            <CartIconShop />
            </div>
        </header>
    )
}

    const mapStatesToProps = (state) => ({
        currentUser:state.user.currentUser
    })

export default connect(mapStatesToProps)(Header)