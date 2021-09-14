import React from 'react'
import CartLogo from '../../Assets/11.2 shopping-bag.svg';
import './cart-icon.styles.scss'
import toggleCartHidden from '../../Redux/cart-reducer/cart.actions';
import { connect } from 'react-redux';
import { cartItemsCount } from '../../Redux/cart-reducer/cart.selector';

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

const mapProps = (state) => ({
    itemCount:cartItemsCount(state)
})

export default connect(mapProps,mapDispatchToProps)(CartIconShop)