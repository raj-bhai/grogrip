import React, { useState, useEffect } from "react";
import Header from "../components/Home/header";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/cart-item";
import Products from '../data/shop1.json';
import Footer from "../components/Home/footer-new";



const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const Cart = () => {

    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(7);
    const [domLoaded, setDomLoaded] = useState(false);
    const Cart = useSelector(state => state.cart.CartData)

    console.log("Cart :", Cart)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    return (
        domLoaded &&
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <div className=" w-full py-8 mt-[100px] flex flex-col items-center gap-8 ">
                <btn className=' text-yellow-200 gap-2 text-[50px] w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg ml-8 my-font-bold'>
                    <p>CART</p>
                </btn>
                <div className=" w-full px-16 flex flex-col items-center" >
                <div className=" w-full flex text-white my font px-4 text-[30px] justify-between " >
                        <h1>Package Name</h1>
                        <h1>Product Name</h1>
                        <h1>Price</h1>
                        <h1>Quantity</h1>
                        <h1>Subtotal</h1>
                    </div>
                    {
                        Products?.map((item, index) => {
                            return (
                                <CartItem
                                    data={item}
                                    key={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart