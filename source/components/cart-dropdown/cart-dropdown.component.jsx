import React from 'react';
import './cart-dropdown.styles.scss';
import CustomBtn from '../custom-btn/custom-btn.components';
import AddCartItems from '../cart-items/cart-items.components';
import { connect } from 'react-redux';
import { getCartItems } from '../../Redux/cart-reducer/cart.selector';
import { withRouter } from 'react-router';
import toggleCartHidden from '../../Redux/cart-reducer/cart.actions';

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className = "cart-dropdown">
            <div className  = "cart-items">
                {
                    cartItems.length?
                    cartItems.map(items => <AddCartItems key = {items.id} items = {items} />)
                    :
                    <span className = "no-items-message">Your Cart is Empty</span>
                }
            </div>
            <CustomBtn onClick = {() =>{
                history.push("/checkout");
                dispatch(toggleCartHidden())
        } }   child = "GOT TO CHECKOUT" />
        </div>
    )
}

const mapProps = (state) => ({
    cartItems : getCartItems(state)
})

export default withRouter(connect(mapProps)(CartDropdown))