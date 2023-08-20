import {
    OPENMODAL,
    SELECTED_PRODUCT
} from '../action/product';


const initialState = {
    openModal : false,
    SelectedProduct : null
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
    }
    return state;
}