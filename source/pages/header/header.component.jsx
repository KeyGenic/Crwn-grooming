import React from 'react';
import './header.style.scss';
import Logo from '../../Assets/4.3 crown.svg'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIconShop from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { getCurrentUser } from '../../Redux/user-reducer/users.selectors';
import { getCartHidden } from '../../Redux/cart-reducer/cart.selector';
import { HeaderContainer,LogoContainer,NavContainer,NavItems } from './header.styles';

const Header = ({currentUser,hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to ="/">
                <img src={Logo} alt="" />
            </LogoContainer>

            <NavContainer >
                <NavItems to ='/shop'>
                    Shop
                </NavItems>
                <NavItems to ='/contact'>
                    Contact
                </NavItems>
                {currentUser?
                <NavItems as = 'div' onClick = {() => {auth.signOut()}}> Sign-out</NavItems>    
                :
                <NavItems to ='/signin'>
                    Sign-in
                </NavItems>
            }
            <CartIconShop />
            </NavContainer>
            {
                hidden? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

    const mapStatesToProps = createStructuredSelector({
        currentUser: getCurrentUser,
        hidden: getCartHidden
    })

export default connect(mapStatesToProps)(Header)