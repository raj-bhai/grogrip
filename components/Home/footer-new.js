import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const containerText =  'sm:w-[300px] w-full flex flex-col items-center sm:items-start sm:px-8'
    const headingText = 'text-yellow-200 my-font-bold text-[25px] leading-loose '
    const nornalText = ' text white my-font text-[18px] text-white '
    return (
        <div className="w-full flex justify-evenly flex-wrap py-16 " >
            <div className={containerText} >
                <h1 className={headingText} >COMPANY</h1>
                <p className={nornalText} >About Us</p>
                <p className={nornalText} >Contact Us</p>
                <p className={nornalText} >Book a Call</p>
                <p className={nornalText} >Login</p>
            </div>
            <div className={containerText} >
                <h1 className={headingText} >FEATURES</h1>
                <p className={nornalText} >Weekly Package</p>
                <p className={nornalText} >Month Package</p>
                <p className={nornalText} >Single Packages</p>
                <p className={nornalText} >Clients Testimonial</p>
            </div>
            <div className={containerText} >
                <h1 className={headingText} >GET STARTED</h1>
                <p className={nornalText} >Terms and Conditions</p>
                <p className={nornalText} >Privacy Ploicy</p>
                <p className={nornalText} >My Account</p>
            </div>
            <div className={containerText} >
                <h1 className={headingText} >FOLLOW US ON</h1>
                <div className="w-full h-[70px] flex items-center justify-center sm:justify-start text-white text-[40px] gap-4 " >
                <FaFacebookSquare
                                color='white'
                                // className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.facebook.com/profile.php?id=100087879190153")
                                }}
                            />
                            <FaInstagram
                                color='white'
                                // className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.instagram.com/grogrip_media/")
                                }}
                            />
                            <FaWhatsapp
                                color='white'
                                // className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://wa.me/918076455801")
                                }}
                            />
                </div>
            </div>
        </div>
    )
}

export default Footer