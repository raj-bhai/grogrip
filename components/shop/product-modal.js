import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { BsDot } from 'react-icons/bs'
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { GoPlusCircle } from 'react-icons/go'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'

const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

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


const Counter = () => {

    const [count, setCount] = useState(1)

    const IncrementHandle = () => {
        setCount(count + 1)
    }

    const DecrementHandle = () => {
        if (count > 1) {
            setCount(count - 1)
        }

    }

    return (
        <div className=" w-full h-[60px] mt-4 text-[28px] text-white bg-green-500 rounded-lg  flex items-center justify-between px-4 " >
            <p>QUANTITY</p>
            <div className=" w-[200px] h-[100%]  flex justify-between items-center text-[30px]  " >
                <HiOutlineMinusCircle
                    size={40}
                    onClick={DecrementHandle}
                />
                <p >{count}</p>
                <HiOutlinePlusCircle
                    size={40}
                    onClick={IncrementHandle}
                />
            </div>
        </div>
    )
}



const ProductModal = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        p: 4,
    };

    const { openModal, SelectedProduct } = useSelector(state => state.product)

    return (
        <div style={style} className={`w-[90%] p-4 h-[500px] ${backgroundGradient}`} >
            <div className=" w-[100%] h-[100%]  flex flex-wrap justify-between " >
                <div className=" w-[500px] h-[100%] " >
                    <h1 className=" my-font-bold text-yellow-200 text-[25px] leading-loose " >{SelectedProduct?.type}</h1>
                    {
                        SelectedProduct?.desc?.map((product, index) => {
                            return (
                                <p className=" my-font text-white flex items-center text-[20px] " > <BsDot /> {product.value}</p>
                            )
                        })
                    }
                    <div>
                        <VoiceDropdown />
                        <Counter />
                    </div>
                </div>
                <div className=" w-[500px] h-[100%] border " >

                </div>
            </div>
        </div>
    )
}

export default ProductModal