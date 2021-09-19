import { createSelector } from "reselect";

const getShopState = (state) => state.shop;

export const getShopData = createSelector(
    getShopState,
    (items) => items.collections
)