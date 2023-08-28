import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {

    const router = useRouter()
    const containerText = 'sm:w-[300px] w-full flex flex-col items-center sm:items-start sm:px-8'
    const headingText = 'text-yellow-200 my-font-bold text-[25px] leading-loose '
    const nornalText = ' text white my-font text-[18px] text-white cursor-pointer '
    return (
        <div className="w-full flex justify-evenly flex-wrap py-16 " >
            <div className={containerText} >
                <h1 className={headingText} >COMPANY</h1>
                <p className={nornalText}
                    onClick={() => router.push('/about')}
                >About Us</p>
                <p className={nornalText}
                    onClick={() => router.push('/contact')}
                >Contact Us</p>
                <p className={nornalText}
                    onClick={() => {
                        window.open('https://calendly.com/grogrip-media/15min')
                    }}
                >Book a Call</p>
                <p className={nornalText} >Login</p>
            </div>
            <div className={containerText} >
                <h1 className={headingText} >FEATURES</h1>
                <p className={nornalText}
                    onClick={() => router.push('/shop')}
                >Weekly Package</p>
                <p className={nornalText}
                    onClick={() => router.push('/shop')}
                >Month Package</p>
                <p className={nornalText}
                    onClick={() => router.push('/shop')}
                >Single Packages</p>
                <p className={nornalText}
                // onClick={() => router.push('/shop')}
                >Clients Testimonial</p>
            </div>
            <div className={containerText} >
                <h1 className={headingText} >GET STARTED</h1>
                <p className={nornalText}
                    onClick={() => router.push('/terms')}
                >Terms and Conditions</p>
                <p className={nornalText}
                    onClick={() => router.push('/privacy')}
                >Privacy Ploicy</p>
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