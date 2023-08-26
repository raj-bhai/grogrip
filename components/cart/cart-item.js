import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiTwotoneEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { RemoveFromCart } from '../../redux/action/cart';
import { ToogleModal, SetSelectedProduct, SetSelectedProductFromCart } from '../../redux/action/product';



const Box = ({ children }) => {
    return (
        <div className=' h-[100%]  w-[20%] min-w-[200px] flex items-center justify-center ' >
            {children}
        </div>
    )
}

const textContainer = ' text-[#000] my-font text-[22px] bg-white px-4 py-2 rounded-[40px] '

const CartItem = ({ data }) => {

    const dispatch = useDispatch()
    const [focused, setFocused] = useState(false)


    return (
        <div className=' w-full relative h-[220px] flex bg-green-600 rounded-[40px] mt-8 justify-between '
            onMouseEnter={() => {
                setFocused(true)
            }}
            onMouseLeave={() => {
                setFocused(false)
            }}
        >
            {
                focused &&
                <div className=' w-[40px] h-[40px] border border-white absolute left-[50px] top-[10px] flex text-white items-center justify-center text-[30px] rounded-md hover:border-yellow-200 hover:text-yellow-200 hover:scale-[1.1] cursor-pointer  ' >
                    <AiOutlineClose
                        onClick={() => {
                            dispatch(RemoveFromCart(data?.id))
                        }}
                    />
                </div>
            }

            {
                focused &&
                <div className=' w-[40px] h-[40px] border border-white absolute right-[50px] flex bottom-[10px] text-white items-center justify-center text-[30px] rounded-md hover:border-yellow-200 hover:text-yellow-200 hover:scale-[1.1] cursor-pointer ' >
                    <AiTwotoneEdit
                        onClick={() => {
                            dispatch(ToogleModal(true))
                            dispatch(SetSelectedProduct(data?.Product))
                            dispatch(SetSelectedProductFromCart(data))
                        }}
                    />
                </div>
            }
            <Box>
                <img src={data?.Product?.image} className=' h-[80%] ' >
                </img>
            </Box>
            <Box>
                <div className={`${textContainer}`} >
                    <h1>{data?.Product.type}</h1>
                </div>
            </Box>
            <Box>
                <div className={`${textContainer}`} >
                    <h1>{data?.price}$</h1>
                </div>
            </Box>
            <Box>
                <div className={`${textContainer}`} >
                    <h1>{data?.quantity}</h1>
                </div>
            </Box>
            <Box>
                <div className={`${textContainer}`} >
                    <h1>{data?.price * data?.quantity}$</h1>
                </div>
            </Box>

        </div>
    )
}

export default CartItem