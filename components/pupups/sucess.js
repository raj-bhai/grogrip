import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Success = (props) => {
    return (
        <div className=' w-full h-full bg-white/[.06] fixed z-[500] top-[0px]  flex items-center justify-center ' >
            <div className=' sm:w-[50%] w-[80%] sm:h-[500px] bg-white opacity-100 rounded-lg ' >
                <div className=' w-[100%] h-[50%] bg-[#138D75] sm:py-[0px] py-[20px]  flex items-center justify-center rounded-tl-lg rounded-tr-lg' >
                    <FaCheckCircle
                        color='white'
                        size={100}
                    />
                </div>
                <div className=' w-[100%] h-[50%] sm:pl-[0px] pl-[10px] sm:pb-[0px] pb-[20px] ' >
                    <div className='w-[100%] mt-[20px]  flex sm:justify-center justify-start ' >
                        <h1 className=' sm:text-[30px] text-[20px] text-[#000] font-semibold leading-none ' >{props.text1}</h1>
                    </div>
                    <div className='w-[100%] flex mt-[10px] justify-center' >
                        <h1 className=' sm:text-[18px] text-[14px] text-[#000] font-medium leading-none ' >{props.text2}</h1>
                    </div>
                    <div className='w-[100%] sm:mt-[50px] mt-[20px] flex justify-center' >
                        <input  
                        type={"button"}
                        value={"Close"}
                        className=" sm:w-[200px] w-[120px] sm:h-[50px] h-[35px] text-white bg-red-500 rounded-lg "
                        onClick={() => {
                            props.onClose()
                        }}
                        >
                        </input>
                    </div>
                    <div className='w-[100%] flex justify-center' ></div>
                </div>
            </div>
        </div>
    )
}

export default Success;