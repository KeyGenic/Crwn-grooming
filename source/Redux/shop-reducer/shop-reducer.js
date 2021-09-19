import shopData from "./shopData";

const INITIAL_STATE = {
    collections : shopData
}

const shopReducer = (state = INITIAL_STATE,action) => {
    if(action.type){
        return state
    }
}

export default shopReducer