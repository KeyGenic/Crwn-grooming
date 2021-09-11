import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleWares = [logger];

const stores = createStore(rootReducer,applyMiddleware(...middleWares));

export default stores