import {
    ADDTOCART,
    REMOVEFROMCART,
    GETCART
} from '../action/cart';


const initialState = {
    CartData: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GETCART : {
            return {
                ...state,
                CartData: action.data
            }
        }
        case ADDTOCART: {
            const itemIndex = state.CartData.findIndex(item => item.id === action.data.id);
            if (itemIndex >= 0) {
                // If item exists, update it
                return {
                    ...state,
                    CartData: state.CartData.map((item, index) =>
                        index === itemIndex ? action.data : item
                    )
                }
            } else {
                // If item doesn't exist, add it
                return {
                    ...state,
                    CartData: [...state.CartData, action.data]
                }
            }
        }
        case REMOVEFROMCART: {
            return {
                ...state,
                CartData: state.CartData.filter(item => item.id !== action.itemId)
            }
        }
        default:
            return state;
    }
}