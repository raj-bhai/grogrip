import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import {
    FaWhatsapp,
    FaInstagram,
    FaInstagramSquare
} from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn, textVariant, textVariant2 } from "../../utils/motion";
import LoginButton from "./login";
import { useSelector } from "react-redux";


const Header = (props) => {
    const router = useRouter();
    const Cart = useSelector(state => state.cart.CartData)
    const token = localStorage.getItem("token")
    const textHover = ' hover:text-yellow-200 hover:border-b-[2px] hover:border-b-yellow-200 '
    const selected = ' text-yellow-200 border-b-[2px] border-b-yellow-200 '
    const hoverBtn = ' hover:bg-white hover:border-[0px] hover:text-[#000] hover:font-semi bold'

    const textStyle = ` text-[#fff] sm:visible invisible  my-font-bold text-[18px] leading-[30px] cursor-pointer  ${textHover}`
    const textSelectedStyle = ' text-yellow-200 border-b-[2px] my-font-bold  border-b-yellow-200 sm:visible invisible  text-[18px] leading-[30px] cursor-pointer '
    const [logoColor, setLogoColor] = useState(0);
    const [selectedHeader, setSelectedHeader] = useState(props.selectedHeader)
    const [showIcons, setShowIcons] = useState(false);

    const Gradiants = [
        ' bg-gradient-to-r from-[#F7F9F9] via-[#F7F9F9] to-[#F7F9F9] ',
        ' bg-gradient-to-r from-[#F7F9F9] via-[#138D75] to-[#F7F9F9] ',
    ]


    useEffect(() => {
        const timer = setTimeout(() => {
            if (logoColor < Gradiants.length - 1) {
                setLogoColor(logoColor + 1)
            } else {
                setLogoColor(0)
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [logoColor])

    useEffect(() => {
        // console.log("Selected Header :", props.selectedHeader);
        setSelectedHeader(props.selectedHeader)
    }, [props.selectedHeader])

    //SuccessToast
    const successLogin = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "colored",
        }

        )
    }


    return (
        // sm:h-[80px] h-[50px]
        // <motion.div
        //     initial={{ x: -2000, y: 0 }}
        //     animate={{ x: 0, y: 0 }}
        //     transition={{ duration: 2 }}
        // >
        <div className={`w-[100%] border-[0px] sm:h-[150px] md:h-[80px] h-[60px] justify-between flex flex-wrap  fixed z-[2000] top-0` + props.className} >
            {
                localStorage.getItem('token') ?
                    null : <LoginButton />
            }
            <div className="sm:w-[350px] w-[100%] sm:h-[70px] h-[50px] border-[0px] flex items-center justify-center sm:ml-[0px] ml-[0px] sm:mt-[8px] mt-[5px] " >
                <img
                    src="/images/Logo/logo-main2.png"
                    className=' absolute rounded-lg resize-y sm:w-[30%] sm:left-[0px] left-[-50px] '
                    alt="grogrip"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%, 0 0, 0 0)' }}
                />
            </div>
            <div className="flex mt-[19.5px] mr-[220px]  sm:visible invisible border-[0px] pr-[10px] justify-evenly gap-[50px] " >
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        router.push('/home')
                    }}
                >
                    <h1 className={selectedHeader == 1 ? textSelectedStyle : textStyle} >Home</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        if (token?.length){
                            router.push('/shop')
                        }
                    }}
                >
                    <h1 className={selectedHeader == 2 ? textSelectedStyle : textStyle} >Shop</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        router.push('/portfolio')
                        // props.onClickPricing()
                    }}
                >
                    <h1 className={selectedHeader == 3 ? textSelectedStyle : textStyle} >Portfolio</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        router.push('/contact')
                        // props.onClickContact()
                    }}
                >
                    <h1 className={selectedHeader == 4 ? textSelectedStyle : textStyle} >Contact</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        // props.onClickAbout()
                    }}
                >
                    <h1 className={selectedHeader == 5 ? textSelectedStyle : textStyle} >About</h1>
                </div>
                <input type="button"
                    onClick={() => {
                        if (token?.length) {
                            localStorage.removeItem("token")
                            successLogin("you are logged out !")
                        } else {
                            // localStorage.setItem("token", "ggg");
                            router.push('/login')
                        }
                    }}
                    value={token?.length ? "Logout" : "Login"}
                    className={" text-[#fff] sm:visible invisible my-font  w-[80px] sm:h-[35px] border-[2px] border-[#83D0BE] flex mt-[10px] items-center justify-center rounded-lg cursor-pointer " + hoverBtn} >
                </input>
            </div>
            <div className=" sm:w-[200px] sm:h-[60px] border-[0px] absolute sm:right-[20px] right-[10px] sm:top-[15px] top-[15px] flex items-center justify-end gap-[10px] " >
                <div className="relative" >
                    <AiOutlineShoppingCart
                        color= {(props.selectedHeader == 7)? '#EED777' : "#fff"} 
                        // size={50}
                        className=" cursor-pointer w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] "
                        onClick={() => {
                            router.push('/cart')
                        }}
                    />
                    {
                        Cart?.length ?
                            <div className=" flex items-center justify-center rounded-md font-bold text-[#000] w-[20px] absolute -top-[10px] -right-[5px] h-[20px] bg-white " >
                                <h1>{Cart.length}</h1>
                            </div> :
                            null
                    }
                </div>
            </div>
            <ToastContainer
            />
        </div>
        // </motion.div>

    );
};

export default Header;