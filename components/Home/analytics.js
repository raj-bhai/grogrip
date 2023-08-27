import React from "react";
import { MdOpenInNew } from 'react-icons/md';

const Analytics = () => {
    return (
        <div
            className={` ${localStorage.getItem('token') ? 'page-content' : 'page-content--blurred'} w-full sm:pt-16 flex flex-col items-center px-4 pb-8 `}
        >
            <btn className='text-yellow-200 text-[25px] sm:text-[50px] w-[95%] sm:w-[700px] hover:border-yellow-200 hover:text-white cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold '>
                <p>Analytics/Proofs</p>
                {/* <MdOpenInNew /> */}
            </btn>
            <div className='w-[100%] gap-4 flex mt-8 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/analytics1.png'
                        className='rounded-lg'
                    >

                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/analytics1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
            <div className='w-[100%]  gap-4 mt-8 flex mt-4 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/analytics1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/analytics1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
            <div className='w-[100%] gap-4 mt-8 flex mt-4 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/review1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/review2.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
            {/* <div className='w-[100%] border  gap-4 mt-8 flex mt-4 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/review3.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/analytics1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div> */}
        </div>
    )
}

export default Analytics