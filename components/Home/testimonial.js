import React from "react";
import { MdOpenInNew } from 'react-icons/md';

const Testimonial = ({setVideoVisible, setVideoId}) => {
    return (
        <div
            className={` ${localStorage.getItem('token') ? 'page-content' : 'page-content--blurred'} w-full sm:pt-16 flex flex-col items-center px-4 pb-8 `}
        >
            <btn className='text-yellow-200 text-[25px] sm:text-[50px] w-[95%] sm:w-[700px] hover:border-yellow-200 hover:text-white cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold '>
                <p>Clients Testimonial</p>
            </btn>
            <div className='w-[100%] gap-2 sm:gap-4 flex mt-8 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='https://res.cloudinary.com/drgvislmm/image/upload/v1692970148/WebsiteImages/testimonial/testimonialLg_qi120e.png'
                        className='rounded-lg'
                        onClick={() => {
                            setVideoVisible(true);
                            setVideoId('bSIj6ZGz6dI')
                        }}
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='https://res.cloudinary.com/drgvislmm/image/upload/v1692970151/WebsiteImages/testimonial/testimonialSM_uvx15j.png'
                        className='rounded-lg'
                        onClick={() => {
                            setVideoVisible(true);
                            setVideoId('SXKzt0ucuL0')
                        }}
                    >
                    </img>
                </div>
            </div>
            <div className='w-[100%] gap-2 sm:gap-4 mt-8 flex mt-2 sm:mt-4 items-center justify-center ' >
                <div className=' h-[100%] ' >
                    <img src='https://res.cloudinary.com/drgvislmm/image/upload/v1692970148/WebsiteImages/testimonial/testimonialSM1_qnnqv2.png'
                        className='rounded-lg'
                        onClick={() => {
                            setVideoVisible(true);
                            setVideoId('j9iQ392SgxA')
                        }}
                    >
                    </img>
                </div>
                <div className=' h-[100%] ' >
                    <img src='https://res.cloudinary.com/drgvislmm/image/upload/v1692970146/WebsiteImages/testimonial/testimonialLg1_vhhsvq.png'
                        className='rounded-lg'
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Testimonial