export const ADDTOCART = "ADDTOCART"


export const GetCart = () => {
    return dispatch => {

    }
}


export const UpdateCart = () => {
    return dispatch => {

    }
}

export const RemoveFromCart = () => {
    return dispatch => {

    }
}

export const AddToCart = (obj) => {
    return dispatch => {
        dispatch({ type: ADDTOCART, data: obj })
    }
}