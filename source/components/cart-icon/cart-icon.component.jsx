import React from 'react'
import CartLogo from '../../Assets/11.2 shopping-bag.svg';
import './cart-icon.styles.scss'
import toggleCartHidden from '../../Redux/cart-reducer/cart.actions';
import { connect } from 'react-redux';

const CartIconShop = ({toggleCart,itemCount}) => {
    return(
        <div className = "shop-icon-container" onClick ={toggleCart}>
            <img src={CartLogo} alt="" className ="shop-icon" />
            <span className ="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => (
    {
        toggleCart: () => dispatch(toggleCartHidden())
    }
)

const mapProps = ({cart:{cartItems}}) => ({
    itemCount:cartItems.reduce((accQuantity,cartItem) => accQuantity + cartItem.quantity, 0)
})

export default connect(mapProps,mapDispatchToProps)(CartIconShop)