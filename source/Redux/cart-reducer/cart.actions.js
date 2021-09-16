import hiddenCartType from "./cart-types";

const toggleCartHidden = () => ({
    type : hiddenCartType.HIDDEN_CART_TOGGLE
})

export const addItems = (items) => ({
    type : hiddenCartType.ADD_CART,
    payload: items
})

export const decreaseItems = (items) => ({
    type: hiddenCartType.DECREASE_ITEM,
    payload : items
})

export const removeItems = (items) => ({
    type : hiddenCartType.REMOVE_CART,
    payload: items
})

export default toggleCartHidden