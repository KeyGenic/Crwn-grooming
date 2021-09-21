import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = ({price}) => {
    const priceStripe = price * 100;
    const publishKey = `pk_test_51Jc0CqBCel5D8ubHIp9trfndBFUSwobU0xDnvOVGCyBwlCAdUrn04wA8lb7r7OiG7FgEVFnQZiwX8PK9fZAGrzsV00zUEsAkUE`;

    const Token = (token) => {
        alert(`payment successful`)
    }

    return (
        <StripeCheckout 
        label = 'pay now'
        name = 'CRWN Grooming LTD.'
        billingAddress
        shippingAddress
        image = 'https://i.pinimg.com/originals/0d/10/02/0d1002b06bf2b1d92b98464df5128e9e.png'
        description = {`your total is $ ${price}`}
        amount = {priceStripe}
        panelLabel = 'Pay Now'
        token = {Token}
        stripeKey = {publishKey}
        />
    )
}

export default StripeBtn;