import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiTwotoneEdit } from 'react-icons/ai'



const Box = ({ children }) => {
    return (
        <div className=' h-[100%] w-[20%] min-w-[300px] flex items-center justify-center ' >
            {children}
        </div>
    )
}

const textContainer = ' text-[#000] my-font text-[25px] bg-white px-4 py-2 rounded-[40px] '

const CartItem = ({ data }) => {

    const [focused, setFocused] = useState(false)

    return (
        <div className=' w-full relative h-[300px] flex bg-green-600 rounded-[40px] mt-8 justify-between '
            onMouseEnter={() => {
                setFocused(true)
            }}
            onMouseLeave={() => {
                setFocused(false)
            }}
        >
            {
                focused &&
                <div className=' w-[50px] h-[50px] border border-white absolute left-[50px] top-[10px] flex text-white items-center justify-center text-[50px] rounded-md hover:border-yellow-200 hover:text-yellow-200 hover:scale-[1.1] cursor-pointer  ' >
                    <AiOutlineClose />
                </div>
            }

            {
                focused &&
                <div className=' w-[50px] h-[50px] border border-white absolute right-[50px] flex bottom-[10px] text-white items-center justify-center text-[30px] rounded-md hover:border-yellow-200 hover:text-yellow-200 hover:scale-[1.1] cursor-pointer ' >
                    <AiTwotoneEdit
                    />
                </div>
            }

            <Box>
                <img src={data.image} >
                </img>
            </Box>
            <Box>
                <div className={`${textContainer}`} >
                    <h1>{data.type}</h1>
                </div>
            </Box>
            <Box>
            <div className={`${textContainer}`} >
                    <h1>10</h1>
                </div>
            </Box>
            <Box>
            <div className={`${textContainer}`} >
                    <h1>$350</h1>
                </div>
            </Box>

        </div>
    )
}

export default CartItem