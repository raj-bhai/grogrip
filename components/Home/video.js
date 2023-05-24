import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlayCircle } from 'react-icons/fa'

const Video = (props) => {

    const [videoOpacity, setVideoOpacity] = useState(' opacity-0  z-[100]')
    const [imageOpacity, setImageOpacity] = useState(' opacity-1 z-[200]')
    const [showVideo, setShowVideo] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [videoLoad, setVideoLoad] = useState(false);

    useEffect(() => {
        setVideoOpacity(' opacity-0  z-[100]');
        setImageOpacity(' opacity-1 z-[200]')
        setShowVideo(false)
        console.log("Project Index :", props.projectIndex)
    }, [props.projectIndex])


    const videoRef = useRef(null);

    return (
        <>
            <div key={props.key} className=" flex items-center justify-center sm:w-[500px] sm:h-[300px] w-[300px] h-[160px] border-[1px] rounded-lg relative "

            >{
                    showVideo &&
                    <iframe
                        ref={videoRef}
                        width={"100%"}
                        height={"100%"}
                        className={'rounded-lg ' + videoOpacity}
                        onLoad={() => {
                            setImageOpacity(' opacity-0  z-[100] ')
                            setVideoOpacity(' opacity-1 z-[200] ')
                            setVideoLoad(true)
                        }}
                        onPause={() => {
                            setShowVideo(false)
                            setImageOpacity(' opacity-1  z-[200] ')
                            setVideoOpacity(' opacity-0 z-[100] ')
                        }}
                        allow="autoplay"
                        src={props.src}
                    ></iframe>
                }
                {!showVideo &&
                    <img
                        src={props.thumbnail}
                        alt="new"
                        className={`absolute top-[0px] w-[100%] h-[100%] rounded-lg ${imageLoaded ? ' visible' : ' invisible'}` + imageOpacity}
                        onLoad={() => {
                            //console.log("true")
                            setImageLoaded(true)
                        }}
                    />
                }
                {!showVideo &&
                    <FaPlayCircle
                        color='#107840'
                        className={`text-[20px] sm:text-[100px] text-[50px] cursor-pointer absolute ${imageLoaded ? ' visible' : ' invisible'} ` + imageOpacity}
                        onClick={() => {
                            setShowVideo(true)
                        }}
                    />
                }
                {/* {
                    (!videoLoad || !imageLoaded) && */}
                <img src={'https://www.abhaf.org/assets/images/dark-loader.gif'} style={{ position: 'absolute', width: 50, height: 50, }}></img>
                {/* } */}
            </div>
        </>
    )
}

export default Video;