import React from 'react';
import {
    FaPhoneAlt,
    FaPenAlt,
    FaMicrophone,
    FaBriefcase,
    FaLaptopCode
} from 'react-icons/fa';


const Arr = [
    {
        name: "Script",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558413/WebsiteImages/sc_wv0z1r.gif",
        className: " lg:left-0 left-16 lg:top-0 top-0 lg:scale-[1.5] scale-[2] ",
        textStyle: " lg:right-0 lg:bottom-0 right-0 bottom-[10px] "
    },
    {
        name: "Voiceover",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558410/WebsiteImages/vo_vvmutn.gif",
        className: " left-0 top-0 lg:scale-[1.5] scale-[2] ",
        textStyle: " lg:bottom-0 lg:right-[30px] bottom-[10px] left-0 "
    },

    {
        name: "Video",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558413/WebsiteImages/vdo_eadfcz.gif",
        className: " left-0 top-0 lg:scale-[1] scale-[1.5] ",
        textStyle: " lg:right-0 lg:bottom-0 right-0 bottom-[50px]"
    },
    {
        name: "Thumbnail",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683561980/WebsiteImages/th_x6txju.gif ",
        className: "-left-10 top-0 lg:scale-[1] scale-[1.8] ",
        textStyle: " lg:right-0 lg:bottom-0 left-0 bottom-[25px]"
    },
]


const iconColor = ' text-[#808080]'
const RoundedNumber = (props) => {
    return (
        <div c lassName=" sm:w-[40px] sm:h-[40px] rounded-[20px] ml-[10px] bg-[#fff] flex items-center justify-center " >
            <h1 className=' text-[#000] text-[16px] ' >{props.count}</h1>
        </div>
    )
}

const RoundedText = (props) => {
    const iconStyle = ' mr-[10px] ' + iconColor

    return (
        <div className=' bg-[#fff] sm:h-[30px] rounded-[10px] ml-[10px] flex items-center justify-center px-[20px] ' >
            {
                props.text == 'Contact us' &&
                <FaPhoneAlt
                    className={iconStyle}
                />
            }
            {
                props.text == 'Script Writer' &&
                <FaPenAlt
                    className={iconStyle}
                />
            }
            {
                props.text == 'Voice Over' &&
                <FaMicrophone
                    className={iconStyle}
                />
            }
            {
                props.text == 'Thumbnail Maker' &&
                <FaBriefcase
                    className={iconStyle}
                />
            }
            {
                props.text == 'Video Editing' &&
                <FaLaptopCode
                    className={iconStyle}
                />
            }
            <h1 className=' text-[#000] my-font-semibold text-[14px] ' >{props.text}</h1>
        </div>
    )
}

const VideoEdit = (props) => {
    return (
        <div className={' w-[300px] h-[200px] border-[1px] ' + props.className} >
            <img
                src="/images/user/person1.png"
                className="sm:w-[165px] sm:h-[228px] ml-[-20px] "
                alt="grogrip_star" />
        </div>
    )
}


const Services = (props) => {
    return (
        <div className=' lg:flex lg:justify-center lg:py-[50px] lg:border-[2px] lg:border-[#27AE60] lg:drop-shadow-md lg:px-[50px] rounded-[50px] lg:mt-[50px] ' >
            <div id={props.id} className='relative lg:invisible visible  lg:w-0  lg:h-0 gap-[20px] py-[50px] flex flex-wrap items-center justify-center '>
                {
                    Arr.map((x) => (
                        <div className='lg:w-[500px] md:w-[70%] sm:w-[80%] w-[90%] flex items-center justify-center h-[300px] relative' >
                            <img
                                src={x.gif}
                                className={`absolute ${x.className}`}
                                alt='grogrip'
                            />
                            <div className={`border absolute w-[130px] flex justify-center  rounded-lg  items-center h-[40px]  ${x.textStyle} `} >
                                <h1 className={`text-white my-font-semibold lg:text-[20px] `} >{x.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img
                src='https://res.cloudinary.com/drgvislmm/image/upload/v1683572993/WebsiteImages/services_cfelfd.gif'
                className=' lg:h-[550px] lg:hover:scale-[1.005] h-0 lg:rounded-lg invisible lg:visible  '
                alt='grogrip_services'
            />
        </div>

    )
}

export default Services;