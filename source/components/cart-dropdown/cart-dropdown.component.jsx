import React from 'react';
import './cart-dropdown.styles.scss';
import CustomBtn from '../custom-btn/custom-btn.components';

const CartDropdown = () => {
    return (
        <div className = "cart-dropdown">
            <div className  = "cart-items">
                <CustomBtn child = "GOT TO CHECKOUT" />
            </div>
        </div>
    )
}

export default CartDropdown