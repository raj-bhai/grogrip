import React from "react";

const Globe = (props) => {
    return (
        <div className=" sm:w-[500px] sm:h-[500px] border-[0px] sm:mt-[50px] flex items-center justify-center relative " >
            <img
                src="/images/user/globe.png"
                className=" spin-animate-slow"
                alt="star" />
            <img
                src="/images/user/microphone.png"
                className="absolute bounce-slow sm:left-[110px] left-[80px] sm:w-[70px] w-[30px] sm:h-[120px] h-[50px] sm:top-[10px] top-[10px] "
                alt="star" />
            <img
                src="/images/user/dotCircle.png"
                className="absolute spin-animate-slow invisible "
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute bounce-slow sm:right-[20px] right-[50px] sm:top-[-20px] top-[10px] sm:w-[150px] w-[50px] sm:h-[135px] h-[50px] "
                alt="star" />
            <img
                src="/images/user/aeroplane.png"
                className="absolute sm:w-[200px] aeroplane-animate w-[120px] sm:h-[200px] h-[120px] sm:left-[100px] left-[150px] sm:top-[100px] top-[200px] "
                alt="star" />
            <div className="sm:w-[120px] w-[40px] h-[70px] sm:h-[120px] border-[0px] absolute sm:right-[40px] right-[60px] sm:bottom-[65px] bottom-[20px]  " >
                <img
                    src="/images/user/person5.png"
                    className="sm:h-[100%]"
                    alt="star" />
                <div className=' relative border-[0px] sm:mt-[-10px] sm:ml-[-5px] ' >
                    <img
                        src="/images/user/screen1.png"
                        className="sm:w-[83px] sm:h-[61px] sm:ml-[10px] "
                        alt="star" />
                    <img
                        src="/images/user/youtube1.png"
                        className=" sm:w-[15px] sm:h-[20px] absolute sm:top-[20px] top-[5px] sm:left-[45px] left-[12px] "
                        alt="star" />
                </div>
            </div>
        </div>

    )
}

export default Globe;