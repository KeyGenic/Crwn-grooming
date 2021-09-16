import { combineReducers } from "redux";
import userReducer from "./user-reducer/user-reducer";
import cartReducer from "./cart-reducer/cart-reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whiteLists : ['cart']
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer
})

export default persistReducer(persistConfig,rootReducer)