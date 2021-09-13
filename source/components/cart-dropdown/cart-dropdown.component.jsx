import React from 'react';
import './cart-dropdown.styles.scss';
import CustomBtn from '../custom-btn/custom-btn.components';
import AddCartItems from '../cart-items/cart-items.components';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => {
    return (
        <div className = "cart-dropdown">
            <div className  = "cart-items">
                {
                    cartItems.map(items => <AddCartItems key = {items.id} items = {items} />)
                }
            </div>
            <CustomBtn child = "GOT TO CHECKOUT" />
        </div>
    )
}

const mapProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapProps)(CartDropdown)