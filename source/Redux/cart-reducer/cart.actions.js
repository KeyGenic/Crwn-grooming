import hiddenCartType from "./cart-types";

const toggleCartHidden = () => ({
    type : hiddenCartType.HIDDEN_CART_TOGGLE
})

export const addItems = (items) => ({
    type : hiddenCartType.ADD_CART,
    payload: items
})

export default toggleCartHidden