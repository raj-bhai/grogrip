import { string } from "prop-types";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from 'react-icons/fa';
import PricingCard from "./pricingCardCustom";

const CustomPlan = (props) => {

    // const labelStyle = " text-[#fff] sm:text-[17px] text-[15px] my-font "
    // const inputStyle = " mt-[5px] bg-transparent border border-gray-300 h-[50px] text-[#fff] my-font text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    // const String = {
    //     price: "price",
    //     words: "words",
    //     email: "Email",
    //     whatsapp: "Enter whatsapp number",
    // }

    // const Input = (data, value) => {
    //     return (
    //         <div className="sm:mt-[20px] mt-[10px] " >
    //             <h1 className={labelStyle} >{data.text}</h1>
    //             <input
    //                 className={inputStyle}
    //                 value={data.value}
    //                 maxLength={data.maxLength}
    //                 placeholder={data.placeholder}
    //                 inputMode={"numeric"}
    //                 onChange={(e) => {
    //                     if (data.text == String.price) {
    //                         if (e.target.value.length == 1 && !e.target.value.includes("$")) {
    //                             setPrice("$ " + e.target.value);
    //                         } else {
    //                             setPrice(e.target.value);
    //                         }
    //                         return;
    //                     }
    //                     if (data.text == String.words) {
    //                         setWords(e.target.value)
    //                     }
    //                     if (data.text == String.email) {
    //                         setEmail(e.target.value)
    //                     }
    //                     if (data.text == String.whatsapp) {
    //                         setContact(e.target.value)
    //                     }
    //                 }}
    //             >
    //             </input>
    //         </div>
    //     )
    // }
    return (
        <div className=" sm:w-[80%] w-[100%] sm:px-[0px] px-[10px] border-[0px] " >
            <div className=" flex items-center " >
                <h1 className=" text-[#fff] sm:text-[28px] text-[18px] my-font-semibold leading-none " >Create Custom plan</h1>
                <FaCaretDown
                    color="#fff"
                    size={30}
                    className=" ml-[20px] mt-[2px] sm:visible invisible "
                />
            </div>
            <div className=" sm:w-[100%] relative sm:h-[500px] relative sm:mt-[50px] mt-[15px] rounded-[20px] flex flex-col lg:items-start items-center lg:gap-8 lg:flex lg:flex-wrap justify-center lg:justify-start " >
                <div className="w-[100%] lg:-ml-[250px]  h-[100%] relative  flex items-center justify-center text-white " >
                    <img
                        src="https://res.cloudinary.com/drgvislmm/image/upload/v1683466408/enggggg_j1ypzs.gif"
                        className="  "
                        alt="grogrip_plan"
                    />
                </div>
                <div className="lg:absolute lg:right-[150px]" >
                    <PricingCard
                        for="Short Videos (4-5 mins)"
                        type="Basic"
                        index={0}
                        amount={35}
                        seletedIndex={0}
                        desc="700-800 words"
                        onFocus={() => {
                            // console.log('gg')
                        }}
                        onClick={() => {
                            // setPricingIndex(0)
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

export default CustomPlan