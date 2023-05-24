import React from "react";

const Label = (props) => {
    return (
        <div className={"bg-[#fff] rounded-[10px] sm:px-[10px] px-[5px] py-[3px] " + props.className} >
            <h1 className=" text-[#000] sm:text-[15px] text-[10px] leading-none font-medium " >{props.text}</h1>
        </div>
    )
};

export default Label;