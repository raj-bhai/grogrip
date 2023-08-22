import {
ADDTOCART
} from '../action/cart';


const initialState = {
    CartData : []
}


export default (state = initialState, action) => {
    switch(action.type) {
        case ADDTOCART : {
            return {
                ...state,
                CartData : [...state.CartData, action.data]
            }
        }
    }
    return state;
}