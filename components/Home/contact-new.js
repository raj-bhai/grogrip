import React from "react";


const InputBox = ({ onChange, label, placeholder }) => {
    return (
        <>
            <p className=" text-[20px] mt-2 myfont " >{label}</p>
            <input className=" w-full h-[40px] text-[#000] text-[17px] rounded-md mt-1 pl-2 " placeholder={placeholder} >
            </input>
        </>
    )
}

const Contact = () => {
    return (
        <div 
        className={`${localStorage.getItem('token') ? 'page-content' : 'page-content--blurred'} w-full flex-wrap justify-center sm:gap-4 flex px-2 sm:px-8 sm:py-16 `}
        >
            <div className="w-[400px] invisible sm:visible sm:h-[200px] sm:h-[500px] relative flex justify-center " >
                <img
                    src="/images/Logo/logo-main2.png"
                    className=" absolute lg:top-1/4 lg:scale-[1.8] "
                    // className=' absolute rounded-lg resize-y sm:w-[30%] sm:left-[0px] left-[-50px] '
                    alt="grogrip"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%, 0 0, 0 0)' }}
                />
            </div>
            <div className=" w-[100%]  sm:w-[550px] z-[1000] bg-green-600 h-[100%] text-white text-[25px] my-font rounded-lg p-4 sm:p-8 leading-tight " >
                <h1 className=" my-font-bold text-[30px] text-yellow-200 leading-loose " >Contact Us</h1>
                <p className="sm:mb-8" >Leave a message and our team will get back to you in 12 hours</p>
                <InputBox
                    label={"Full name*"}
                    placeholder={"Type your names"}
                />
                <InputBox
                    label={"Email*"}
                    placeholder={"Type your email"}
                />
                <InputBox
                    label={"Phone along with country code"}
                    placeholder={"Type your whatsapp phone number"}
                />
                <InputBox
                    label={"Leave a comment!!"}
                    placeholder={"How may I help you"}
                />
                <div className="w-full flex  justify-center" >
                    <button className=" w-[300px] h-[45px] bg-green-500 hover:bg-green-700 hover:font-bold mt-8 text-md rounded-lg " >
                        <p>SUBMIT NOW</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;