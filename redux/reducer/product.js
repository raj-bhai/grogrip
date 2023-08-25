import {
    OPENMODAL,
    SELECTED_PRODUCT,
    SELECTED_PRODUCT_CART
} from '../action/product';


const initialState = {
    openModal : false,
    SelectedProduct : null,
    SelectedProductCart : null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPENMODAL : {
            return {
                ...state,
                openModal: action.data,
            }
        }
        case SELECTED_PRODUCT : {
            return {
                ...state,
                SelectedProduct: action.data,
            }
        }
        case SELECTED_PRODUCT_CART : {
            return {
                ...state,
                SelectedProductCart: action.data,
            }
        }
    }
    return state;
}