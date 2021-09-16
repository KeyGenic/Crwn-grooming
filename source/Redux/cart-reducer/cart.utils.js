export const addItemsQuantity = (cartItems,cartItemToAdd) => {
    const existingItem = cartItems.find(items => items.id === cartItemToAdd.id)

    if(existingItem){
    return cartItems.map(cartItems => cartItems.id === cartItemToAdd.id ? {...cartItems,quantity: cartItems.quantity + 1} : cartItems)
    }

    return [...cartItems,{...cartItemToAdd,quantity: 1}]
}

export const decreaseItemRemove = (cartItems,cartItemToRemove) => {
    const existingItem = cartItems.find(items => items.id === cartItemToRemove.id)

    if(existingItem.quantity  === 1){
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity - 1}
        :
        cartItem
    )
}
