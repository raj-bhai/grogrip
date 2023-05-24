import Head from "next/head";
import React from "react";

const Header = (props) => {
    return (
        <div className="w-full h-[50px] bg-[#17202A] fixed flex justify-evenly items-center">
            <div className="w-[20%] items start px-5" >
                <h1 className="cursor-pointer text-[#fff] hover:text-yellow-200">B2bMedia</h1>
            </div>
            <div className="flex justify-evenly sm:w-[80%] " >
                <h1 className="cursor-pointer text-[#fff] italic hover:text-yellow-200 text-base" >Home</h1>
                <h1 className="cursor-pointer text-[#fff] italic hover:text-yellow-200 text-base" >Service</h1>
                <h1 className="cursor-pointer text-[#fff] italic hover:text-yellow-200 text-base" >Portfolio</h1>
                <h1 className="cursor-pointer text-[#fff] italic hover:text-yellow-200 text-base" >About</h1>
                <h1 className="cursor-pointer text-[#fff] italic hover:text-yellow-200 text-base" >Contact us</h1>
            </div>
        </div>
    )
}

export default Header;