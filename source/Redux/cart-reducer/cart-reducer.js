import hiddenCartType from "./cart-types"

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
            cartItems:[state.cartItems,action.payload]
        }
    }
    
    else{
        return state
    }
}
export default cartReducer