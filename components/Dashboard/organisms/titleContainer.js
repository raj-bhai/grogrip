import React, { useState } from "react";

import { FaRegComment, FaAngleRight, FaAngleDown, FaExpand } from 'react-icons/fa';
import Drawer_ from "./drawer";

const TitleContainer = (props) => {

    const [focused, setFocused] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const bg = " bg-[#1C2833] "
    const focusedBg = " bg-[#145A32] "


    return (
        <div
            className={`${props.containerClass} ${(props.index1 == 0) ? ' pr-[35px]' : ''}  ${focused ? focusedBg : bg} relative `}
            onMouseEnter={() => {
                setFocused(true)
            }}
            onMouseOut={() => {
                setFocused(false)
            }}
        >
            {
                props.index1 === 0 &&
                <div className={`  w-[40px] h-[40px] items-center justify-center flex hover:bg-gray-600 `}
                >
                    {
                        !props.showDetail ?
                            <FaAngleRight
                                className=" text-[20px]  "
                                onClick={() => {
                                    props.onClickIcon()
                                }}
                            /> :
                            <FaAngleDown
                                className=" text-[20px]  "
                                onClick={() => {
                                    props.onClickIcon()
                                }}
                            />
                    }
                </div>
            }
            {
                (focused && props.index1 === 0) &&
                <FaExpand
                    size={25}
                    className={`absolute right-[5px]`}
                    // onMouseEnter={() => {
                    //     setFocused(true);
                    // }}
                    // onClick={() => {
                    //     setIsOpen(true);
                    // }}
                />
            }
            <input type={'text'}
                className={`${props.inputContainerClass}`}
                defaultValue={props.value}
                // onFocus={() => {
                //     setFocused(true)
                // }}
            >
            </input>
            <Drawer_ isOpen={isOpen} setIsOpen={setIsOpen}
                data={props}
            />
        </div>
    )
}

export default TitleContainer