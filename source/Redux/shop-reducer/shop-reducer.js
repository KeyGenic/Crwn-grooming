import shopData from "./shopData";
import shopTypes from "./shop.type";

const INITIAL_STATE = {
    collections : shopData
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