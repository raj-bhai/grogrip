import React, { useState, useEffect } from "react";
import SlideButton from '../react-slide-button';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Footer = (props) => {

    const [reset, setReset] = useState(0);
    const [domLoaded, setDomLoaded] = useState(false);

    const inputStyle = " bg-transparent h-[100%] text-[#fff] text-sm rounded-lg my-font  block w-[100%] p-2.5 pl-[100px]  placeholder-gray-400 "

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const SubmitHandler = () => {
        toast.success("Submitted Successfully !!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "colored",
        })
    }


    return (
        domLoaded &&
        <div className=" sm:w-[90%] w-[100%] sm:h-[300px] border-[0px] sm:p-[50px] relative " >
            <ToastContainer
            />
            <img
                src={`/images/user/footer1.png`}
                className=' absolute left-[0px] top-[0px] '
                alt="project1" />
            <img
                src={`/images/user/footer2.png`}
                className=' absolute left-[30px] top-[0px] '
                alt="project1" />
            <div className=" w-[100%] sm:h-[250px] h-[200px] border-[0px] flex " >
                <div className="w-[50%] h-[100%] border-r-[0px] flex items-start justify-between sm:visible invisible " >
                    <div className=" w-[80%] h-[80%] bg-[#fff] rounded-[30px] flex items-center justify-start px-[50px] " >
                        <div>
                            <h1 className="text-[#000] text-[18px] my-font-semibold " >Signup to receive product updates and more</h1>
                            {
                                typeof (window) !== 'undefined' &&
                                <div className=" mt-[10px] relative " >
                                    <SlideButton
                                        overlayText="D O N E"
                                        onSlideDone={() => {
                                            setTimeout(() => {
                                                setReset(reset + 1)
                                            }, 3000);
                                            SubmitHandler()
                                            // return () => clearTimeout(timer);
                                        }}
                                        reset={reset}
                                        caretClassList="my-caret-class"
                                        classList="my-class"
                                        overlayClassList="my-overlay-class"
                                        caret={
                                            <div className="bg-[#fff] cursor-pointer rounded-[5px] ml-[-5px] w-[100%] h-[100%] flex items-center justify-center " >
                                                <h1 className=" text-[#000] my-font-semibold " >Submit</h1>
                                            </div>
                                        }
                                        customCaretWidth={100}
                                        mainText={
                                            // <span>Sw<b style={{ color: 'red', fontSize: '19px' }}>ipe</b> me</span>
                                            <input
                                                type={'text'}
                                                className={inputStyle}
                                                placeholder=""
                                            >
                                            </input>
                                        }
                                    />
                                    <input
                                        type={'text'}
                                        className=" border-[0px] my-font absolute focus:outline-none text-white top-[0px] right-[0px] w-[60%] h-[100%] bg-transparent "
                                        placeholder="Enter email id"
                                    >
                                    </input>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%] w-[100%] h-[100%] sm:relative absolute border-[0px] px-[20px] py-[20px] flex  justify-end " >
                    <div className=" w-[50%] h-[100%] border-r-[0px] flex items-start justify-end " >
                        <div className=" mt-[20px] invisible " >
                            <h1 className=" text-[#fff] sm:text-[18px] text-[14px] font-medium  " >Office</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal mt-[10px] leading-tight  " >Plot number 470</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal leading-tight " >Udyog Vihar, phase-5</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal leading-tight " >Gurugram, Haryana</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal leading-tight " >India    </h1>
                        </div>
                    </div>
                    <div className=" w-[50%] h-[100%] border-[0px] sm:pl-[0px] pl-[10px] flex items-start sm:justify-end " >
                        <div className=" mt-[20px] " >
                            <h1 className=" text-[#fff] sm:text-[18px] text-[14px] my-font-semibold  " >Contact</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal mt-[10px] my-font leading-tight  " >+91 8076455801</h1>
                            <h1 className=" text-[#fff] sm:text-[16px] text-[12px] font-normal my-font leading-tight  " >support@grogrip.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;