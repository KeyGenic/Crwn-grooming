import { createSelector } from "reselect";

const getCart = (state) => state.cart;

export const getCartItems = createSelector(
    [getCart],
    (cart) => cart.cartItems
)

export const cartItemsCount = createSelector(
    [getCartItems],
    (cartItems) => cartItems.reduce((accQuantity,cartItem) => accQuantity + cartItem.quantity, 0)
)

export const getCartHidden = createSelector(
    getCart,
    (cart) => cart.hidden
)

export const getCartItemsTotal = createSelector(
    getCartItems,
    (cartItems) => cartItems.reduce((accQuantity,cartItem) => accQuantity + cartItem.quantity * cartItem.price, 0)
)