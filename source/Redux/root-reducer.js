import { combineReducers } from "redux";
import userReducer from "./user-reducer/user-reducer";
import cartReducer from "./cart-reducer/cart-reducer";
import mainReducer from "./main-reducer/main-reducer";
import shopReducer from "./shop-reducer/shop-reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whiteLists : ['cart']
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    main : mainReducer,
    shop : shopReducer
})

export default persistReducer(persistConfig,rootReducer)