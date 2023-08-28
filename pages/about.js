import React, { useState, useEffect } from "react";
import Header from "../components/Home/header";
import Footer from "../components/Home/footer-new";


const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const About = () => {

    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(5);

    return (
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <div className=" w-full flex flex-col items-center mt-[150px] sm:mt-[100px] " >
                <btn className='text-yellow-200 gap-2 text-[30px] sm:text-[50px] w-[95%] sm:w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold'>
                    <p>ABOUT US</p>
                </btn>
                <div className="w-full text-white text-[20px] my-font flex flex-col gap-4 mt-8 sm:mt-8 px-8 sm:px-16 " >
                    <p>Grogrip Media is a group of young YouTube experts who want to help creators build successful careers on youtube. At Grogrip Media, our goal is to guide and support creators on their path to YouTube success. We have over 4 years of experience in the YouTube industry and have worked with over 500 channels, helping them to grow their audiences and increase their income. </p>
                    <p>Our mission is to make YouTube an earning platform for everyone, regardless of their experience or budget. We offer a variety of services to help creators improve their content, grow their channels, and monetize their videos. </p>
                    <p>We believe that everyone has the potential to be a successful YouTuber. </p>
                    <p>With our help, you can take your YouTube career to the next level. Contact us today to learn more about how we can help you achieve your YouTube goals.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About