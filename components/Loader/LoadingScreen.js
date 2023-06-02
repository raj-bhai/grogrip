import React, { useState, useEffect, useRef } from 'react'
import VaraText from '../Home/micro/VaraText'

const LoadingScreen = () => {
    const [domLoad, setDomLoad] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        setDomLoad(true)
        audioRef.current.play();
    }, [])
    return (
        // bg-gradient-to-r from-[#0B5345] to-[#1B4F72] border-[0px] 

        <div className=" w-[100%] h-screen bg-[#FF0000] relative  fixed overflow-y-auto flex items-center justify-center" >
            <audio ref={audioRef} src="https://res.cloudinary.com/drgvislmm/video/upload/v1683328395/WebsiteImages/final_animation_kwxwiu.mp3" />
            <img
            alt='loading'
                className=' drop-shadow-lg lg:h-screen lg:w-full resize-none lg:opacity-[1] opacity-[0.9] lg:mb-0 mb-[10%] '
                src={'https://res.cloudinary.com/drgvislmm/image/upload/v1683328919/WebsiteImages/ggL_qizfy6.gif'} style={{}}></img>
            {/* <div className=' absolute ' >
                <div className='relative' >
                    <div className='absolute z-[10] left-[40px] top-[30px]  -rotate-[32deg] h-[30px]  ' >
                        <VaraText text='Grogrip' domLoad={domLoad} />
                    </div>
                    <img
                        className='rounded-[30px] drop-shadow-lg'
                        src={'https://res.cloudinary.com/drgvislmm/image/upload/v1683327434/WebsiteImages/final_animation_vo7quy.gif'} style={{ width: 200, opacity: 1 }}></img>
                </div>
            </div> */}
            {/* <div className='relative' >
                <div className='absolute z-[10] left-[40px] top-[30px]  -rotate-[32deg] h-[30px]  ' >
                    <VaraText text='Grogrip' domLoad={domLoad} />
                </div>
                <img
                    className='rounded-[30px] drop-shadow-lg'
                    src={'https://res.cloudinary.com/drgvislmm/image/upload/v1683320215/WebsiteImages/tttt_qgayyr.gif'} style={{ width: 200 }}></img>
            </div> */}
        </div>
    )
}

export default LoadingScreen