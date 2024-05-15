import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import 'react-toastify/dist/ReactToastify.css';
import LoginButton from "./login";
import { useSelector } from "react-redux";


const Header = (props) => {
    const router = useRouter();
    const Cart = useSelector(state => state.cart.CartData)
    const token = localStorage.getItem("token")
    const textHover = ' hover:text-yellow-200 hover:border-b-[2px] hover:border-b-yellow-200 '
    const hoverBtn = ' hover:bg-white hover:border-[0px] hover:text-[#000] hover:font-semi bold'

    const textStyle = ` text-[#fff] my-font-bold text-[18px] leading-[30px] cursor-pointer  ${textHover}`
    const textSelectedStyle = ' text-yellow-200 border-b-[2px] my-font-bold  border-b-yellow-200  text-[18px] leading-[30px] cursor-pointer '
    const [logoColor, setLogoColor] = useState(0);
    const [selectedHeader, setSelectedHeader] = useState(props.selectedHeader)

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
        setSelectedHeader(props.selectedHeader)
    }, [props.selectedHeader])

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
        <>
            <div className={`w-full sm:h-[150px] md:h-[80px] h-[120px] sm:justify-between  flex flex-wrap  fixed z-[20000] top-0` + props.className} >
                {
                    localStorage.getItem('token') ?
                        null : <LoginButton />
                }
                <div className="sm:w-[350px] w-[100%] relative sm:h-[70px] h-[50px] flex items-center justify-center sm:mt-[8px] mt-[5px] " >
                    {/* <img
                        src="/images/Logo/logo-main2.png"
                        className=' absolute z-[100]   rounded-lg resize-y sm:w-[100%] sm:left-[0px] sm:top-[-80px] top-[-100px] sm:left-[-50px] left-[-80px] '
                        alt="grogrip"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%, 0 0, 0 0)' }}
                    /> */}
                    <h1 className=" text-white font-[18px] font-bold " >YT AUTOMATION</h1>
                </div>
                <div className="flex sm:mt-[19.5px] z-[1000] sm:w-[750px] w-full  sm:mr-[220px] pr-[10px] justify-evenly sm:gap-[50px]  " >
                    <div className=" w-[80px] sm:h-[60px]  flex items-center justify-center "
                        onClick={() => {
                            router.push('/home')
                        }}
                    >
                        <h1 className={selectedHeader == 1 ? textSelectedStyle : textStyle} >Home</h1>
                    </div>
                    <div className=" w-[60px] sm:w-[80px] sm:h-[60px] flex items-center justify-center "
                        onClick={() => {
                            if (token?.length) {
                                router.push('/shop')
                            }
                        }}
                    >
                        <h1 className={selectedHeader == 2 ? textSelectedStyle : textStyle} >Shop</h1>
                    </div>
                    {/* <div className=" w-[90px] sm:w-[80px] sm:h-[60px]  flex items-center justify-center "
                        onClick={() => {
                            router.push('/portfolio')
                        }}
                    >
                        <h1 className={selectedHeader == 3 ? textSelectedStyle : textStyle} >Portfolio</h1>
                    </div> */}
                    <div className=" w-[80px] sm:h-[60px] border-[0px] flex items-center justify-center "
                        onClick={() => {
                            router.push('/contact')
                        }}
                    >
                        <h1 className={selectedHeader == 4 ? textSelectedStyle : textStyle} >Contact</h1>
                    </div>
                    <div className=" w-[80px] sm:h-[60px] border-[0px] flex items-center justify-center "
                        onClick={() => {
                            router.push('/about')
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
                        className={" text-[#fff] my-font hidden sm:block  w-[80px] sm:h-[35px] border-[2px] border-[#83D0BE] flex mt-[10px] items-center justify-center rounded-lg cursor-pointer " + hoverBtn} >
                    </input>
                </div>
                {
                    token?.length &&
                    <div className=" sm:w-[200px] sm:h-[60px] border-[0px] absolute sm:right-[20px] right-[15px] sm:top-[15px] top-[15px] flex items-center justify-end gap-[10px] " >
                        <div className="relative" >
                            <AiOutlineShoppingCart
                                color={(props.selectedHeader == 7) ? '#EED777' : "#fff"}
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
                }
                <ToastContainer
                />
                {
                   !token?.length && 
                   <div className=" w-[100px] block sm:hidden items-center justify-center flex h-[50px] absolute right-[10px] top-[15px] " >
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
                       className={" text-[#fff] my-font   w-[80px] sm:h-[35px] border-[2px] border-[#83D0BE] flex items-center justify-center rounded-lg cursor-pointer " + hoverBtn} >
                   </input>
               </div>
                }
            </div>
        </>

    );
};

export default Header;