import shopTypes from './shop.type'

export const shopAction = (collectionMap) => ({
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})