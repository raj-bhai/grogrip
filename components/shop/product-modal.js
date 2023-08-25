import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDot } from 'react-icons/bs'
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { GoPlusCircle } from 'react-icons/go'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import Rating from '@mui/material/Rating';
import TopicDetail from "./topic-detail";
import { ToastContainer, toast } from 'react-toastify';
import { ToogleModal } from "../../redux/action/product";
import ProductButton from "../common/button";
import Options from "./options";

import { AddToCart } from "../../redux/action/cart";

const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const initialCustomCount = 10

const VoiceDropdown = ({ setVoice }) => {
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
        setVoice(voice)
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


const Counter = ({ updateCount }) => {

    const [count, setCount] = useState(1)

    const IncrementHandle = () => {
        updateCount(count + 1)
        setCount(count + 1)
    }

    const DecrementHandle = () => {
        if (count > 1) {
            updateCount(count - 1)
            setCount(count - 1)
        }
    }

    return (
        <div className=" w-[450px] my-font h-[60px] mt-4 text-[20px] text-white bg-green-500 rounded-lg  flex items-center justify-between px-4 " >
            <p>QUANTITY</p>
            <div className=" my-font w-[200px] h-[100%]  flex justify-between items-center text-[30px]  " >
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

const Duration = ({ updateCount }) => {

    const [count, setCount] = useState(initialCustomCount)

    const IncrementHandle = () => {
        updateCount(count + 1)
        setCount(count + 1)
    }

    const DecrementHandle = () => {
        if (count > 1) {
            updateCount(count - 1)
            setCount(count - 1)
        }
    }

    return (
        <div className=" w-[450px] h-[60px] my-font mt-4 text-[21px] text-white bg-green-500 rounded-lg  flex items-center justify-between px-4 " >
            <p>Duration (in min)</p>
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


const Item = ({ item, onClick, price, quantity }) => {
    // const dispatch = useDispatch()
    return (
        <div className=" w-[300px] relative  h-[450px] hover:border-yellow-200 border-white border border-[2px] bg-[rgba(149,165,166,0.1)] rounded-lg flex flex-col items-center px-8 py-8 text-white my-font-bold text-[20px] leading-[38px]  " >
            {
                item.ratings &&
                <div className=' my-font absolute z-[1000] left-4 top-0 ' >
                    <Rating name="read-only" value={item.ratings} precision={0.5} readOnly />
                    <p className='text-white leading-tight -mt-2 ' > {item.duration} </p>
                </div>
            }
            <div className=" w-[100%] border-[0px] rounded-lg border-[#ABB2B9] h-[200px] relative flex items-center justify-center " >
                <img
                    src={item.image}
                    className=" absolute h-[100%] "
                >
                </img>
            </div>
            <h1 className=' my-font scale-[1.05] ' >{item.type}</h1>
            <h1 className=' my-font text-[15px] leading-tight border-white ' >{item.detail}</h1>
            <h1 className=' my-font mt-2 ' >{item.id == 23 ? 'Book With' : ''} {price * quantity}$</h1>
            {/* <img
                className=" w-[200%] absolute bottom-[-20px] cursor-pointer "
                src='/images/buttons/shopnow.png'
                onClick={() => {
                    onClick()
                    // dispatch(ToogleModal(true));
                    // dispatch(SetSelectedProduct(item))
                }}
            >
            </img> */}
            <ProductButton
                title={"Add to Cart"}
                onClick={() => {
                    onClick()
                }}
            />
        </div>
    )
}


const ProductModal = ({ isUpdate }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        p: 4,
        overflowY: 'auto',       // Added this line
        maxHeight: '800px'      // Added this line as an example (adjust as needed)
    };

    const { SelectedProduct, SelectedProductCart } = useSelector(state => state.product);
    const [payload, setPayload] = useState({});
    const dispatch = useDispatch();
    const [submitted, setSubmitted] = useState(false);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [customOpen, setCustomOpen] = useState(false);
    const [pricePerMin, setPricePerMin] = useState(0);
    const [thumbnailChecked, setThumbnailChecked] = useState(true);




    useEffect(() => {
        if (SelectedProduct) {
            if (isUpdate) {
                setPayload(SelectedProductCart)
            } else {
                setPayload(prevPayload => ({
                    ...prevPayload,
                    Product: SelectedProduct,
                    quantity: 1,
                    id: SelectedProduct?.id,
                    // price: SelectedProduct?.realPrice
                }));
            }
            const customOption = SelectedProduct?.options?.find(option => option.pricePerMin !== undefined);
            if (customOption) {
                setPricePerMin(customOption.pricePerMin)
            } else {
                console.log('No option with a price per minute was found.');
            }

            if (SelectedProduct.realPrice && !SelectedProduct?.options?.length) {
                setPrice(SelectedProduct.realPrice)
            }
            if (SelectedProduct.priceWithThumbnail) {
                setPrice(SelectedProduct.priceWithThumbnail)
            }
        }
    }, [SelectedProduct])

    useEffect(() => {
        if (SelectedProduct) {
            setPayload(prevPayload => ({
                ...prevPayload,
                price: price
            }));
        }
    }, [SelectedProduct, price])


    const handleAddToCart = async () => {
        // if (!payload?.topic?.length || !payload?.Contact?.length) {
        //     toast.error("Please fill all required fields!!", {
        //         position: "top-center",
        //         autoClose: 1000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: false,
        //         theme: "colored",
        //     })
        //     setSubmitted(true)
        //     return
        // }
        // if (payload?.Contact?.length < 10) {
        //     toast.error("Invalid Contact Detail", {
        //         position: "top-center",
        //         autoClose: 1000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: false,
        //         theme: "colored",
        //     })
        //     setSubmitted(true)
        //     return
        // }
        setSubmitted(false)
        dispatch(AddToCart(payload))
        dispatch(ToogleModal(false))
        toast.success("Added to Cart !!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "colored",
        })
    }

    return (
        <div style={style} className={` w-[90%] p-4 h-[700px] ${backgroundGradient}`} >
            <ToastContainer />
            <div className=" w-[100%] flex flex-wrap px-8 py-8 justify-between " >
                <div className=" w-[690px] h-[100%] relative " >
                    {
                        SelectedProduct?.priceWithThumbnail &&
                        <div className=" flex px-2 text-[20px] gap-2 items-center text-white h-[40px] absolute right-0 " >
                            <input
                                className=" w-[20px] h-[20px] "
                                type="checkbox"
                                value={thumbnailChecked}
                                onChange={(e) => {
                                    setThumbnailChecked(e.target.checked)
                                    if (e.target.checked) {
                                        setPrice(SelectedProduct?.priceWithThumbnail)
                                    } else {
                                        setPrice(SelectedProduct?.priceWithThumbnail - SelectedProduct?.thumbnailPrice)
                                    }
                                }}
                            />
                            <p>Thumbnail</p>
                        </div>
                    }
                    <h1 className=" my-font-bold text-yellow-200 text-[25px] leading-loose my-font " >{SelectedProduct?.type}</h1>
                    <h2 className=" my-font-bold text-white text-[25px] leading-loose my-font " >{SelectedProduct?.heading}</h2>

                    {
                        SelectedProduct?.id == 23 &&   //custom-package
                        <>
                            <div className=" w-[600px] text-white my-font " >
                                <p>Your Contact Details *</p>
                                <input className=" w-[100%] h-[45px] border text-[#000] px-2 rounded-lg " placeholder="whatsapp/email"  >
                                </input>
                            </div>
                            <div className=" w-[600px] text-white my-font mt-4 " >
                                <p>Let us know your custom package Details here & We will come up with a direct url with a payment *</p>
                                <input className=" w-[100%] h-[45px] border text-[#000] px-2 rounded-lg " placeholder="enter drive link"  >
                                </input>
                            </div>
                        </>
                    }
                    {
                        SelectedProduct?.desc?.map((product, index) => {
                            return (
                                <p className=" my-font text-white flex items-center text-[20px] " > <BsDot /> {product.value}</p>
                            )
                        })
                    }
                    <div>
                        {
                            SelectedProduct?.options &&
                            <Options
                                data={SelectedProduct.options}
                                onChange={(num) => setPrice(num)}
                                customOpen={(boolean) => {
                                    setCustomOpen(boolean)
                                    if (boolean) {
                                        setPrice(pricePerMin * initialCustomCount)
                                    }
                                }}
                            />
                        }
                        {
                            SelectedProduct?.showVoiceArtist &&
                            <VoiceDropdown
                                setVoice={(voice) => {
                                    setPayload(prevPayload => ({
                                        ...prevPayload,
                                        voice: voice
                                    }));
                                }}
                            />
                        }
                        {
                            customOpen &&
                            <Duration
                                updateCount={(count) => {
                                    setPrice(pricePerMin * count)
                                }}
                            />
                        }
                        <Counter
                            updateCount={(count) => {
                                setPayload(prevPayload => ({
                                    ...prevPayload,
                                    quantity: count
                                }));
                                setQuantity(count)
                            }}
                        />
                    </div>
                </div>
                <div className=" w-[500px] h-[100%] flex justify-center " >
                    <Item
                        item={SelectedProduct}
                        onClick={() => {
                            handleAddToCart()
                        }}
                        price={price}
                        quantity={quantity}
                    />
                </div>
            </div>
            {/* <TopicDetail
                updateTopic={(text) => {
                    setPayload(prevPayload => ({
                        ...prevPayload,
                        topic: text
                    }));
                }}
                updateReferral={(text) => {
                    setPayload(prevPayload => ({
                        ...prevPayload,
                        referral: text
                    }));
                }}
                updateContact={(text) => {
                    setPayload(prevPayload => ({
                        ...prevPayload,
                        Contact: text
                    }));
                }}
                updateDoc={(text) => {
                    setPayload(prevPayload => ({
                        ...prevPayload,
                        doc: text
                    }));
                }}
            /> */}
        </div>
    )
}

export default ProductModal