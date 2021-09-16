import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsCount, getCartItemsTotal } from '../../Redux/cart-reducer/cart.selector';
import { getCartItems } from '../../Redux/cart-reducer/cart.selector';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';

const checkoutPage = ({cartItems,total}) => {
    return (
        <div className ="checkout-page">
           <div className ="header-checkout">
               <div className ="header-block">
                   <span>Product</span>
               </div>
               <div className ="header-block">
                   <span>Description</span>
               </div>
               <div className ="header-block">
                   <span>Quantity</span>
               </div>
               <div className ="header-block">
                   <span>Price</span>
               </div>
               <div className ="header-block">
                   <span>Remove</span>
               </div>
           </div>
           {cartItems.map(item => {
               return (
                   <CheckoutItems key = {item.id} cartItems = {item} />
               )
           })}
           <div className = "total-items">
               <span> Total:${total}</span>
           </div>

        </div>
    )
}

const mapStateProps = createStructuredSelector({
    cartItems: getCartItems,
    total : getCartItemsTotal
})

export default connect(mapStateProps)(checkoutPage)