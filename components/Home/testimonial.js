import React from "react";
import { MdOpenInNew } from 'react-icons/md';

const Testimonial = () => {
    return (
        <div
            className={` w-full pt-16 flex flex-col items-center px-4 pb-8 `}
        >
            <btn className='text-yellow-200 gap-2 text-[50px] w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg ml-8 my-font-bold'>
                <p>Clients Testimonial</p>
            </btn>
            <div className='w-[100%] gap-4 flex mt-8 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/testimonialLG.png'
                        className='rounded-lg'
                    >

                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/testimonialSM.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
            <div className='w-[100%]  gap-4 mt-8 flex mt-4 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='/images/testimonialLG1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='/images/testimonialSM1.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Testimonial