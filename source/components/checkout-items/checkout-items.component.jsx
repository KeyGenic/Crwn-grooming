import React from 'react';
import './checkout-items.styles.scss';
import { removeItems } from '../../Redux/cart-reducer/cart.actions';
import { connect } from 'react-redux';
import { decreaseItems } from '../../Redux/cart-reducer/cart.actions';
import { addItems } from '../../Redux/cart-reducer/cart.actions';

const CheckoutItems = ({cartItems,removeItems,decreaseItems,addItems}) => {
    const {img,name,quantity,price} = cartItems
    return (
        <div className = 'check-out-items'>
            <div className = "image-container">
                <img src={img} alt="items" />
            </div>
            <span className = "name">{name}</span>
            <span className = "quantity">
                <div className = "arrow" onClick = {() => decreaseItems(cartItems)}>&#10094;</div>
                <span className = "value"> {quantity}</span>
                <div className = "arrow" onClick = {() => addItems(cartItems)}>&#10095;</div>
            </span>
            <span className = "price">{price}</span>
            <div className = "remove-btn" onClick = {() => removeItems(cartItems)}>
            &#10005;
            </div>
        </div>
    )
}

const mapDispatchItems = dispatch => ({
    removeItems : items => dispatch(removeItems(items)),
    decreaseItems : items => dispatch(decreaseItems(items)),
    addItems : items => dispatch(addItems(items))
})

export default connect(null,mapDispatchItems)(CheckoutItems)