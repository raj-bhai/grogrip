export const ADDTOCART = "ADDTOCART"
export const REMOVEFROMCART = "REMOVEFROMCART"


export const GetCart = () => {
    return dispatch => {

    }
}


export const UpdateCart = () => {
    return dispatch => {

    }
}

export const RemoveFromCart = (id) => {
    return dispatch => {
        dispatch({ type: REMOVEFROMCART, itemId: id })
    }
}

export const AddToCart = (obj) => {
    return dispatch => {
        dispatch({ type: ADDTOCART, data: obj })
    }
}