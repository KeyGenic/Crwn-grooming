export const addItemsQuantity = (cartItems,cartItemToAdd) => {
    const existingItem = cartItems.find(items => items.id === cartItemToAdd.id)

    if(existingItem){
    return cartItems.map(cartItems => cartItems.id === cartItemToAdd.id ? {...cartItems,quantity: cartItems.quantity + 1} : cartItems)
    }

    return [...cartItems,{...cartItemToAdd,quantity: 1}]
}