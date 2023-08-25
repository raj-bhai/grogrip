
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../redux/action/cart";

export function FetchData() {

    const dispatch = useDispatch()
    const Cart = useSelector(state => state.cart.CartData);

    if (!Cart?.length) {
        dispatch(GetCart())
    }

}
