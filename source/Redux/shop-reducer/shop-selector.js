import { createSelector } from "reselect";


const getShopState = (state) => state.shop;

export const getShopData = createSelector(
    getShopState,
    (items) => items.collections
)

export const getCollectionOverview = createSelector(
    getShopData,
    collections => collections?Object.keys(collections).map(key => collections[key]):[]
)

export const getCollectionsId = urlParam => createSelector(
    getShopData,
    collections => collections[urlParam]
)
