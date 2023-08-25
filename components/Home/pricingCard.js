import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

// import gg from '../../voices/ggVoice.mp3'

const unFocusedBG = ' bg-[#0FA152]'  //green
const focusedBG = ' bg-[#fff]'  //white

const Features = (props) => {
    return (
        <div className="sm:w-[300px] flex border-[0px] py-[5px] " >
            <div className={`${props.focused ? focusedBG : unFocusedBG} w-[20px] h-[20px] rounded-[10px] flex items-center justify-center `}
                onClick={() => {
                    props.onCheck()
                }}
            >
                {
                    props.seoChecked &&
                    <FaCheck
                        size={12}
                        color={props.focused ? '#000' : '#fff'}
                    />
                }
            </div>
            <h1 className=" text-[#fff] ml-[10px] my-font-semibold text-[13px] sm:text-[14px] leading-none " >{props.name}</h1>
        </div>
    )
}

const VoiceDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false); // New state for tracking if a voice is playing
    const [playingVoice, setPlayingVoice] = useState(null); // New state for tracking which voice is playing

    const dropdownRef = useRef();
    const audioRef = useRef(new Audio());

    const toggleVoiceSample = (voice) => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setPlayingVoice(null);
        } else {
            console.log("Playing voice:", voice.url);
            audioRef.current.src = voice.url;
            audioRef.current.play();
            setIsPlaying(true);
            setPlayingVoice(voice.name);
        }
    }
    const voices = [
        { name: "Artist 1", url: 'https://res.cloudinary.com/drgvislmm/video/upload/v1692293661/voiceOver/ggVoice_flhppl.mp3' },
        { name: "Artist 2", url: 'https://res.cloudinary.com/drgvislmm/video/upload/v1692293661/voiceOver/ggVoice_flhppl.mp3' },
        { name: "Artist 3", url: 'https://res.cloudinary.com/drgvislmm/video/upload/v1692293661/voiceOver/ggVoice_flhppl.mp3' },
    ];

    useEffect(() => {

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                // Stop playing voice when dropdown closes
                audioRef.current.pause();
                setIsPlaying(false);
                setPlayingVoice(null);
            }
        };

        audioRef.current.onended = () => {
            setIsPlaying(false);
            setPlayingVoice(null);
        }

        document.addEventListener("click", handleOutsideClick);

        return () => {
            // Cleanup event listener on component unmount
            document.removeEventListener("click", handleOutsideClick);
        };

    }, [])

    useEffect(() => {
        // Reset playing state when audio finishes
        audioRef.current.onended = () => {
            setIsPlaying(false);
            setPlayingVoice(null);
        }
    }, []);

    const handleVoiceSelect = (voice) => {
        setSelectedVoice(voice);
        setIsOpen(false);
    }

    const playVoiceSample = (voiceUrl) => {
        console.log("hello mf");
        console.log("url :", voiceUrl)
        const audio = new Audio(voiceUrl);
        audio.play();
        // Logic to play a voice sample for the selected voice
    }

    return (
        <div ref={dropdownRef} className="w-[100%] mt-2 relative  "> {/* Set parent to position: relative */}
            <h1 className="text-white my-font-bold py-1">Select Voice Artist</h1>
            <div className="w-[100%] h-[50px] border mt-2 rounded-md  bg-[#1b5a2c] text-white flex justify-between items-center px-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <AiFillPlayCircle
                    size={30}
                />
                {selectedVoice?.name || "Select a voice"}
                <MdKeyboardArrowDown size={25} />
            </div>
            {isOpen && (
                <div className="w-[100%] border rounded-md mt-2 absolute z-10 bg-[#1b5a2c] text-white"> {/* Dropdown positioned absolutely */}
                    {voices.map(voice => (
                        <div key={voice.name} className="flex justify-between items-center px-2 py-1 cursor-pointer hover:bg-[#117A65]" onClick={() => handleVoiceSelect(voice)}>
                            {isPlaying && playingVoice === voice.name ? (
                                <AiFillPauseCircle size={30} onClick={(e) => {
                                    e.stopPropagation();
                                    toggleVoiceSample(voice);
                                }} />
                            ) : (
                                <AiFillPlayCircle size={30} onClick={(e) => {
                                    e.stopPropagation();
                                    toggleVoiceSample(voice);
                                }} />
                            )}
                            {voice.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// export default VoiceDropdown;



const PricingCard = (props) => {

    const [focused, setFocused] = useState(false);
    const [domLoaded, setDomLoaded] = useState(false);
    const [seoChecked, setSeoChecked] = useState(false);
    const [price, setPrice] = useState(props.amount)



    // const green = "#0FA152";
    // const white = "#fff"

    //button
    const focusedbtnText = ' text-[#000] my-font-bold '  //black
    const unfocusedBtnText = ' text-[#fff] my-font-bold'  //white

    //boder
    const focusedBorder = ' border-[2px] '
    const unFocusedBorder = ' border-[1px] '

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    useEffect(() => {
        if (props.seletedIndex == props.index) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [props.seletedIndex])

    useEffect(() => {
        if (seoChecked) {
            setPrice(props.amount + 5)
        } else {
            setPrice(props.amount)
        }
    }, [seoChecked])



    return (
        domLoaded &&
        <div className={`sm:w-[320px] w-[250px]  rounded-[20px] sm:px-[20px] sm:pt-[20px] sm:pb-[20px] px-[15px] pt-[15px] pb-[15px] ${focused ? focusedBorder : unFocusedBorder} `}
            onFocus={() => {
                props.onFocus();
            }}
            onBlur={() => {
                setFocused(false);
                console.log("ff")
            }}
        >
            <div className="w-[100%] h-[80%]" >
                <div className="w-[100%] sm:h-[100px] h-[60px] border-b-[0px] flex " >
                    <div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] bg-[#fff] rounded-[5px]  " >
                        <img
                            src="/images/user/pricing1.png"
                            alt="grogrip_plan" />
                    </div>
                    <div className="ml-[20px] " >
                        <h1 className=" text-[#fff] sm:text-[13px] text-[14px] leading-tight my-font " >{props.for}</h1>
                        <h1 className=" text-[#fff] sm:text-[24px] text-[16px] leading-tight my-font-semibold " >{props.type}</h1>
                    </div>
                </div>
                <div>
                    <h1 className=" text-[#fff] sm:text-[17px] text-[14px] my-font sm:leading-[30px] " >{props.desc}</h1>
                </div>
                <div className="flex items-end mt-[10px] " >
                    <h1 className=" text-[#fff] sm:text-[50px] text-[16px] sm:leading-none my-font-bold " >${price}</h1>
                    <h1 className=" text-[#fff] my-font-semibold sm:text-[18px] text-[14px] "  > /video</h1>
                </div>
                {/* <div className=" w-[100%] mt-2  " >
                    <h1 className=" text-white my-font-bold py-1 " >Select Voice Artist</h1>
                    <div className=" w-[100%] h-[50px] rounded-md border text-white flex justify-between items-center px-2  " >
                        <AiFillPlayCircle
                            size={30}
                            className=" cursor-pointer "
                        />
                        <MdKeyboardArrowDown
                            size={25}
                            className=" cursor-pointer "
                        />
                    </div>
                </div> */}
                <VoiceDropdown />
                <div className=" sm:mt-[15px] mt-[5px] " >
                    <h1 className=" text-[#fff] sm:text-[15px] text-[13px] my-font-semibold " >What&apos;s included</h1>
                </div>
                <div className=" mt-[5px] " >
                    <Features
                        name="Script"
                        focused={focused}
                        seoChecked={true}
                        onCheck={() => {
                            null
                        }}
                    />
                    <Features
                        name="Voice over"
                        focused={focused}
                        seoChecked={true}
                        onCheck={() => {
                            null
                        }}
                    />
                    <Features
                        name="Video Editing"
                        focused={focused}
                        seoChecked={true}
                        onCheck={() => {
                            null
                        }}
                    />
                    <Features
                        name="Thumbnail"
                        focused={focused}
                        seoChecked={true}
                        onCheck={() => {
                            null
                        }}
                    />
                    <Features
                        name="SEO"
                        focused={focused}
                        seoChecked={seoChecked}
                        onCheck={() => {
                            setSeoChecked(!seoChecked)
                        }}
                    />
                </div>
            </div>
            <div className=" w-[100%] border-t-[0px] flex justify-center " >
                <div className={`sm:w-[250px] w-[200px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center ${focused ? focusedBG : unFocusedBG}`}
                    onClick={() => {
                        props.onClick()
                    }}
                >
                    <h1 className={`text-[20px] leading-none ${focused ? focusedbtnText : unfocusedBtnText} `} >Get Started</h1>
                </div>

            </div>
        </div>
    )
}

export default PricingCard;