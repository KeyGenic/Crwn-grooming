import hiddenCartType from "./cart-types";
import { addItemsQuantity, decreaseItemRemove } from "./cart.utils";

const INT_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INT_STATE,action) => {
    if(action.type === hiddenCartType.HIDDEN_CART_TOGGLE){
        return {
            ...state,
            hidden:!state.hidden
        }
    } else if(action.type === hiddenCartType.ADD_CART){
        return{
            ...state,
            cartItems:addItemsQuantity(state.cartItems,action.payload)
        }
    } else if(action.type === hiddenCartType.REMOVE_CART){
        return{
            ...state,
            cartItems:state.cartItems.filter((items) => items.id !== action.payload.id)
        }
    }else if( action.type === hiddenCartType.DECREASE_ITEM){
        return{
            ...state,
            cartItems:decreaseItemRemove(state.cartItems,action.payload)
        }
    }
    
    else{
        return state
    }
}
export default cartReducer