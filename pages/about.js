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
            <div className=" w-full h-screen flex flex-col items-center " >
            <btn className='text-yellow-200 gap-2 text-[30px] sm:text-[50px] w-[95%] sm:w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold'>
                <p>ABOUT US</p>
            </btn>
            </div>
            <Footer />
        </div>
    )
}

export default About