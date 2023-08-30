import axios from 'axios'
import url from '../../constants/url'

export const GETCART = "GETCART"
export const ADDTOCART = "ADDTOCART"
export const REMOVEFROMCART = "REMOVEFROMCART"


export const GetCart = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            axios({
                method: 'get',
                url: `${url.apiRoot}/grogrip/getCart`,
                headers: {
                    'Authorization': `Bearer ${token}`, // or 'Basic ' + encodedCredentials for Basic Auth
                }
            })
                .then((response) => {
                    if (response.data.data) {
                        dispatch({ type: GETCART, data: response.data.data })
                    }
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    }
}


export const RemoveFromCart = (id) => {
    return dispatch => {
        const token = localStorage.getItem('token') // usually comes from your authentication process

        axios({
            method: 'post',
            url: `${url.apiRoot}/grogrip/removeFromCart`,
            data: { id: id },
            headers: {
                'Authorization': `Bearer ${token}`, // or 'Basic ' + encodedCredentials for Basic Auth
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.data) {
                    dispatch({ type: REMOVEFROMCART, itemId: response.data.data.id })
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
}

export const AddToCart = (obj) => {
    return dispatch => {

        const token = localStorage.getItem('token') // usually comes from your authentication process

        axios({
            method: 'post',
            url: `${url.apiRoot}/grogrip/addToCart`,
            data: obj,
            headers: {
                'Authorization': `Bearer ${token}`, // or 'Basic ' + encodedCredentials for Basic Auth
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                dispatch({ type: ADDTOCART, data: response.data.data })
                // console.log(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
}

export const PlaceOrder = (obj) => {
    return dispatch => {

        const token = localStorage.getItem('token') // usually comes from your authentication process

        axios({
            method: 'post',
            url: `${url.apiRoot}/grogrip/createOrder`,
            data: obj,
            headers: {
                'Authorization': `Bearer ${token}`, // or 'Basic ' + encodedCredentials for Basic Auth
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // dispatch({ type: ADDTOCART, data: response.data.data })
                // console.log(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }
}