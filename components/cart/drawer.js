import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Checkbox from '@mui/material/Checkbox';
// import url from "../constants/url";
import url from "../../constants/url";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { PlaceOrder } from "../../redux/action/cart";


const CartDrawer = ({ money, onClose }) => {
    const dispatch = useDispatch()
    const [price, setPrice] = useState(money)
    const router = useRouter();
    const [thumbnailChecked, setThumbnailChecked] = useState(true);
    const [quantity, setQuantity] = useState(10)
    const Cart = useSelector(state => state.cart.CartData);


    const GetTotalPrice = () => {
        let total = 0
        for (let i = 0; i < Cart.length; i++) {
            total = total + ( Number(Cart[i].price) * Number(Cart[i].quantity))
        }

        const gst = total * 18/100
        const subtotal = total + gst

        return {
            total: total,
            gst: gst,
            subtotal: subtotal
        }
    }

    const createOrder = async (amount) => {
        // const payload = {
        //     cart: Cart,
        //     orderValue : GetTotalPrice().total
        // }
        // dispatch(PlaceOrder(payload))
        const result = await axios.post(`${url.apiRoot}/payment/createOrder`, {
            amount: amount * 100,
        });
        if (!result) {
            return;
        }
        router.push(`/payment?data=${result.data.clientSecret}`)
    }
    return (
        <div className=" w-[420px] h-screen bg-white px-[20px] flex flex-col items-center " >
            <div className=" w-full h-[40px] flex justify-between items-center mb-[20px] font-normal " >
                <p>Checkout</p>
                <AiOutlineClose
                    onClick={() => onClose()}
                />
            </div>
            <div className=" absolute w-full h-0 border left-0 " >

            </div>
            <div className="w-full border-[1px] border-[#000] text-gray text-lg rounded-[10px] mt-[50px] p-2 text-[#000] " >
                <p>Total Amount : ${GetTotalPrice().total}</p>
            </div>
            <div className=" w-[90%] h-[40px] cursor-pointer bg-[#000] border-[1px] border-[#000] rounded-[10px] mt-[50px] p-2 text-[#fff] flex items-center justify-center absolute bottom-[20px] "
                onClick={() => createOrder(GetTotalPrice().total)}
            >
                <p>{`Pay Now ($${GetTotalPrice().total})`}</p>
            </div>
        </div>
    )
};

export default CartDrawer