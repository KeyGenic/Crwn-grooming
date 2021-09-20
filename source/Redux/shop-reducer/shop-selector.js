import { createSelector } from "reselect";
import { memoize } from "lodash";

const getShopState = (state) => state.shop;

export const getShopData = createSelector(
    getShopState,
    (items) => items.collections
)

export const getCollectionsId = memoize((UrlParam) => createSelector(
    getShopData,
    collections => collections[UrlParam]
)
)