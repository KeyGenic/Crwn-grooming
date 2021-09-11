import React from 'react'
import CartLogo from '../../Assets/11.2 shopping-bag.svg';
import './cart.styles.scss'


const CartIconShop = () => {
    return(
        <div className = "shop-icon-container">
            <img src={CartLogo} alt="" className ="shop-icon" />
            <span className ="item-count">0</span>
        </div>
    )
}

export default CartIconShop