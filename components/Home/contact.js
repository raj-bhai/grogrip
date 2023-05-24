import React, { useState, useEffect } from "react";

import Success from "../pupups/sucess";

const Contact = (props) => {

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [desc, setDesc] = useState('');
    const [cusror, setCursor] = useState(" cursor-not-allowed");
    const text1 = " text-[#fff] md:text-[25px] sm:text-[20px] text-[16px] my-font-semibold "
    const text2 = " text-[#fff] md:text-[22px] sm:text-[18px] text-[14px] my-font "
    const inputStyle = " mt-[5px] bg-transparent border border-gray-300 h-[50px] text-[#fff] text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "

    useEffect(() => {
        if (btnDisabled) {
            setCursor(" cursor-not-allowed bg-gray-500 ")
        } else {
            setCursor(" cursor-pointer bg-[#0FA152] ")
        }
    }, [btnDisabled])

    useEffect(() => {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (firstName.length > 3 && lastName.length > 3 && email.length > 3 && contact.length > 9 && desc.length > 3 && email.match(validRegex)) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [firstName, lastName, email, contact, desc])

    return (
        <div className=" sm:w-[70%] w-[100%] border-[0.5px] rounded-[20px] sm:mt-[100px] mt-[50px] relative md:p-[50px] sm:p-[30px] p-[20px] " >
            <img
                src={`/images/user/circle10.png`}
                className=' absolute right-[0px] md:visible invisible bottom-[0px] md:w-[300px] sm:w-[200px] sm:h-[150px] w-[0px] h-[0px] md:h-[230px] rounded-br-[20px] z-[0] '
                alt="project1" />
            <div className=" w-[100%] " >
                <h1 className={text1} >GET IN TOUCH</h1>
                <h1 className={text2} >24/7 We will answer of your question and problems</h1>
                <div className=" w-[100%] h-[400px] border-[0px] mt-[20px] flex sm:justify-between justify-nenter " >
                    <div className="w-[100%] h-[100%] border-[0px] p-[10px] " >
                        <div className=" w-[100%] flex flex-wrap gap-[20px] mt-[10px] justify-between " >
                            <input type={'text'}
                                placeholder="first name"
                                value={firstName}
                                className=" sm:w-[45%] w-[100%] my-font text-[#fff] md:h-[40px] sm:h-[30px] focus:border-sky-500 h-[30px] min-w-[200px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] p-2.5 placeholder-gray-400 "
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                            >
                            </input>
                            <input type={'text'}
                                placeholder="last name"
                                value={lastName}
                                className=" sm:w-[45%] my-font w-[100%] text-[#fff] v md:h-[40px] sm:h-[30px] h-[30px] min-w-[200px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] p-2.5 placeholder-gray-400"
                                onChange={(e) => {
                                    setLastname(e.target.value)
                                }}
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <input type={'text'}
                                placeholder="Email"
                                value={email}
                                className=" w-[100%] text-[#fff] my-font md:h-[40px] sm:h-[30px] h-[30px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] p-2.5  placeholder-gray-400"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <input type={'text'}
                                placeholder="enter contact number"
                                value={contact}
                                className=" w-[100%] text-[#fff] my-font md:h-[40px] sm:h-[30px] h-[30px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] p-2.5  placeholder-gray-400"
                                onChange={(e) => {
                                    setContact(e.target.value)
                                }}
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <textarea name="description" placeholder="describe your requirement"
                                value={desc}
                                className=" w-[100%] text-[#fff] my-font flex md:h-[200px] sm:h-[170px] h-[150px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] p-2.5  placeholder-gray-400"
                                onChange={(e) => {
                                    setDesc(e.target.value)
                                }}
                            >

                            </textarea>
                        </div>
                    </div>
                    <div className=" md:w-[280px] w-[0px] h-[100%] border-[0px] relative flex sm:items-end items-center justify-center  p-2.5  placeholder-gray-400" >
                        <img
                            src={`/images/user/person10.png`}
                            className=' w-[415px] h-[300px] z-[200] absolute top-[0px] md:visible invisible sm:invisible '
                            alt="project1" />
                        {/* <div className=" w-[200px] h-[50px] rounded-[30px] bg-[#0FA152] flex items-center justify-center cursor-pointer "
                            onClick={() => {
                                props.onClick()
                            }}
                        >
                            <h1 className=" text-[#fff] text-[20px] font-semibold " >Submit</h1>
                        </div> */}
                        <input type={'button'}
                            value={'Submit'}
                            disabled={btnDisabled}
                            className={" sm:w-[200px] sm:h-[50px] my-font-bold w-[100px] h-[35px] sm:relative absolute sm:top-[0px] top-[360px] sm:right-[0px] right-[0px] rounded-[30px] flex items-center justify-center text-[#fff] sm:text-[20px] text-[13px] font-semibold " + cusror}
                            onClick={() => {
                                props.onClick();
                                setFirstName('');
                                setLastname('');
                                setEmail('');
                                setContact('');
                                setDesc();
                            }}
                        >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact