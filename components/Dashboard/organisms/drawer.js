import React, { useState } from "react";

const textColor = " text-[#D4E6F1] "
const selectedTextColor = ' text-[#fff] '
const borderColor = ' border-[#D4E6F1] border-[1px] '


const HeaderBtn = (props) => {
    return (
        <input type={"button"}
            value={props.title}
            className={`min-w-[50px] h-[20px] border-r-[1px] flex items-end px-2 pb-0 leading-0 cursor-pointer ${props.selected ? 'font-bold' : 'font-semibold'}  text-[16px] ${props.selected ? selectedTextColor : textColor} hover:text-[#fff]`}
            onClick={() => props.onClick()}
        >
            {/* <h1 className={` text-[16px] ${textColor} hover:text-[#fff] `} >{props.title}</h1> */}
        </input>
    )
}

const Post = () => {
    return (
        <div className={` relative w-[100%] h-[500px] rounded-lg ${borderColor}`} >
            {/* body */}
            <div className={`w-[50px] h-[30px] absolute right-0 bottom-0 border-[1px]`} >

            </div>
        </div>
    )
}

const SearchBar_ = () => {
    return (
        <div className="w-[100%] h-[80px]  rounded-lg flex items-center justify-center " >
            <input value="Write an update..."
                className={`${textColor}  w-[100%] h-[50px] rounded-md px-2 bg-transparent border-[1px] `} >
            </input>

        </div>
    )
}

export default function Drawer_({ isOpen, setIsOpen, data }) {

    const [selectedBtn, setSelectedBtn] = useState(0)

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="relative w-[100%] bg-[#1C2833] pt-8   pb-10 flex flex-col space-y-2 overflow-y-scroll  h-full">
                    <div className={` fixed w-[100%] bg-[#1C2833] px-4 z-10 top-0 pt-[30px]`} >
                        <div className=" min-h-[60px] " >
                            <p className={`text-[25px] ${textColor} truncate leading-8`} >{data.value}</p>
                            {/* header */}
                        </div>
                        <div className=" w-[100%] border-[0px] flex " >
                            {/* headerBtn */}
                            <HeaderBtn
                                title="Update"
                                onClick={() => {
                                    setSelectedBtn(0)
                                }}
                                selected={(selectedBtn == 0) ? true : false}
                            />
                            <HeaderBtn
                                title="Files"
                                onClick={() => {
                                    setSelectedBtn(1)
                                }}
                                selected={(selectedBtn == 1) ? true : false}
                            />
                            <HeaderBtn
                                title="Activity Log"
                                onClick={() => {
                                    setSelectedBtn(2)
                                }}
                                selected={(selectedBtn == 2) ? true : false}
                            />
                        </div>
                    </div>
                    <div className={`absolute w-[100%] px-4 mr-8 top-[150px] z-0 `} >
                        <div className="" >
                            <SearchBar_ />
                        </div>
                        {
                            (selectedBtn == 0) &&
                            <div className=" gap-4 mt-4 mb-4 flex-wrap flex justify-center " >
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        }
                    </div>
                </div>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
