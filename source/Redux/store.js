import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./root-reducer";

const middleWares = [logger];

export const stores = createStore(rootReducer,applyMiddleware(...middleWares));
export const persistor = persistStore(stores)

export default {stores,persistor}