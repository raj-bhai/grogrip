import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Checkbox from '@mui/material/Checkbox';
// import url from "../constants/url";
import url from "../../constants/url";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const circleStyle = ' border w-[26px] h-[26px] rounded-[13px] flex justify-center items-center cursor-pointer font-normal '
const thumbnailPrice = 5

const Counter = ({ quantity, onChange }) => {
    const [count, setCount] = useState(quantity)

    const Increment = () => {
        setCount(count + 1)
        onChange(count + 1)
    }
    const Decrement = () => {
        if (count > 1) {
            setCount(count - 1)
            onChange(count - 1)
        }
    }

    return (
        <div className=" w-[100px] h-[40px] border rounded-lg flex justify-between items-center px-1 " >
            <div className={`${circleStyle}`}
                onClick={Decrement}
            >
                <AiOutlineMinus />
            </div>
            <p>{count}</p>
            <div className={`${circleStyle}`}
                onClick={Increment}
            >
                <AiOutlinePlus />
            </div>
        </div>
    )
}

const CartDrawer = ({ money, onClose }) => {
    const [price, setPrice] = useState(money)
    const router = useRouter();
    const [thumbnailChecked, setThumbnailChecked] = useState(true);
    const [quantity, setQuantity] = useState(10)
    const Cart = useSelector(state => state.cart.CartData);





    const GetTotalPrice = () => {
        console.log("Length :", Cart)
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
                <p>GST : ${GetTotalPrice().gst}</p>
                <p>Amount To Pay : ${GetTotalPrice().subtotal}</p>
                {/* <div className=" flex justify-between h-[50px] font-normal " >
                    <p>Basic</p>
                    <p>$35</p>
                </div>
                <div className="h-[50px] font-normal " >
                    <p>5 min video I will best youtube cash cow video Editor</p>
                </div>
                <div className="flex justify-between items-center font-normal" >
                    <p>Gig Quantity</p>
                    <Counter
                        quantity={quantity}
                        onChange={(number) => {
                            setQuantity(number)
                        }}
                    />
                </div> */}
            </div>

            {/* <div className=" w-full border-[1px] border-[#000] rounded-[10px] mt-[50px] p-2 text-[#000] font-normal " >
                <div className="flex justify-between items-center " >
                    <p className="flex" >Thumbnail included</p>
                    <Checkbox {...label}
                        checked={thumbnailChecked}
                        onClick={() => {
                            if (thumbnailChecked) {
                                setPrice(price - thumbnailPrice)
                            } else {
                                setPrice(price + thumbnailPrice)
                            }
                            setThumbnailChecked(!thumbnailChecked)
                        }}
                    />
                </div>
                <p>The seller will provide Thumbnail for your video</p>
                <p>$5</p>
            </div> */}
            <div className=" w-[90%] h-[40px] cursor-pointer bg-[#000] border-[1px] border-[#000] rounded-[10px] mt-[50px] p-2 text-[#fff] flex items-center justify-center absolute bottom-[20px] "
                onClick={() => createOrder(GetTotalPrice().subtotal)}
            >
                <p>{`Continue($${GetTotalPrice().subtotal})`}</p>
            </div>
        </div>
    )
};

export default CartDrawer