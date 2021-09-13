import React from 'react';
import './cart-item.styles.scss'

const AddCartItems = ({items:{img,price,name,quantity}}) => {
    return (
        <div className = "cart-item">
            <img src={img} alt="item" />
            <div className = "items-info">
                <span className ="name">{name}</span>
                <span className ="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default AddCartItems