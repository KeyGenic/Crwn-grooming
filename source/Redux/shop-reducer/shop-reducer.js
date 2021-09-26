import shopTypes from "./shop.type";

const INITIAL_STATE = {
    collections : null
}

const shopReducer = (state = INITIAL_STATE,action) => {
   if(action.type === shopTypes.UPDATE_COLLECTIONS){
       return{
           ...state,
           collections:action.payload
       }
   }else{
       return state
   }
}

export default shopReducer