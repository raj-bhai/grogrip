export const OPENMODAL = "OPENMODAL";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const CART_PAYLOAD = "CART_PAYLOAD"
export const SELECTED_PRODUCT_CART = "SELECTED_PRODUCT_CART"


export const ToogleModal = (boolean) => {
    return dispatch => {
        dispatch({ type: OPENMODAL, data: boolean })
    }
}

export const SetSelectedProduct = (obj) => {
    return dispatch => {
        dispatch({ type: SELECTED_PRODUCT, data: obj })
    }
}

export const SetSelectedProductFromCart = (obj) => {
    return dispatch => {
        dispatch({ type: SELECTED_PRODUCT_CART, data: obj })
    }
}

