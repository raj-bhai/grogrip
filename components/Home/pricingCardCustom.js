import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const unFocusedBG = ' bg-[#0FA152]'  //green
const focusedBG = ' bg-[#fff]'  //white

const String = {
    script: "Script",
    voice: "Voice over",
    video: "Video Editing",
    thumb: "Thumbnail",
    seo: "SEO"
}

const Features = (props) => {

    const [count, setCount] = useState(props.count)
    const [endText, setEndText] = useState("")


    useEffect(() => {
        setCount(props.count)
    }, [props.count])

    useEffect(() => {
        if (props.name === String.script) {
            setEndText("words")
            return
        }
        if (props.name === String.video) {
            setEndText("minute")
            return
        }
        if (props.name === String.voice) {
            setEndText("minute")
            return
        }
        if (props.name === String.thumb) {
            setEndText("")
            return
        }
        if (props.name === String.seo) {
            setEndText("")
            return
        }
    }, [props.name])

    const increment = (type) => {
        if (count !== 15 && count !== 3000) {
            if (type === String.script) {
                props.onChangeCount(Number(count) + 100)
                setCount(Number(count) + 100)
                return
            }
            setCount(Number(count) + 1)
            props.onChangeCount(Number(count) + 1)
        }
    }

    const decrement = (type) => {
        if (count !== 5 && count !== 700) {
            if (type === String.script) {
                props.onChangeCount(Number(count) - 100)
                setCount(Number(count) - 100)
                return
            }
            setCount(Number(count) - 1)
            props.onChangeCount(Number(count) - 1)
        }
    }

    return (
        <div className="sm:w-[300px] flex border-[0px] items-center relative py-[5px] " >
            <div className={`${props.focused ? focusedBG : unFocusedBG} lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] rounded-[8px] lg:rounded-[10px] flex items-center justify-center `}
                onClick={() => {
                    props.onCheck()
                }}
            >
                {/* {
                    props.seoChecked &&
                    <FaCheck
                        className="lg:text-[12px] text-[10px]"
                        color={props.focused ? '#000' : '#fff'}
                    />
                } */}
            </div>
            <h1 className=" text-[#fff] ml-[10px] my-font-semibold text-[11px] sm:text-[14px] leading-none " >{props.name}</h1>
            {
                (props.seoChecked && props.name !== String.thumb && props.name !== String.seo) &&
                <div className="flex  " >
                    <div className="flex items-center ml-2 h-[20px] lg:relative absolute top-0 right-0 ">
                        <button className="px-3 h-[20px] border text-sm font-semibold text-gray-700 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-l-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => decrement(props.name)}
                        >-</button>
                        <input className="w-[40px] h-[20px] py-1 text-sm font-semibold text-center text-gray-700 bg-gray-200 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onChange={(e) => setCount(Number(e.target.value))}
                            value={count}
                            onBlur={() => {
                                props.onChangeCount(Number(count))
                            }}
                        >
                        </input>
                        <button className="px-3 h-[20px] flex items-center justofy-center  text-sm font-semibold text-gray-700 bg-gray-200 border border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => {
                                increment(props.name)
                            }}

                        >+</button>
                    </div>
                    <p className=" ml-[5px] invisible lg:visible text-white my-font text-[12px] " >{endText}</p>
                </div>
            }

        </div>
    )
}

const PricingCard = (props) => {

    const [focused, setFocused] = useState(false);
    const [domLoaded, setDomLoaded] = useState(false);
    const [scriptChecked, setScriptChecked] = useState(true);
    const [voiceOverChecked, setVoiceOverChecked] = useState(true);
    const [videoChecked, setVideoChecked] = useState(true);
    const [thumbnailChecked, setThumbnailChecked] = useState(true);
    const [seoChecked, setSeoChecked] = useState(false);
    const [price, setPrice] = useState(35);

    const [scriptCount, setScripeCount] = useState(800);
    const [voiceCount, setVoiceCount] = useState(5);
    const [thumbnailCount, setThumbnailCount] = useState(5);
    const [videoCount, setVideoCount] = useState(5);
    const [seoCount, setSeoCount] = useState(5)



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
        CalculatePrice()
    }, [scriptChecked, voiceOverChecked, videoChecked])


    const ScriptPricing = (count) => {

        const words = Number(count)
        // const pricePerword = 12 / 2200
        const wordsPerminute = 170
        // const resultPrice = pricePerword * words

        const duration = Math.round(words / wordsPerminute)

        const pricePerMinute = 7

        // console.log("DUration :", duration)

        // 5 min , 8 min, 12 min
        //700-800, 1200-1300 , 2300-2400

        if (words < 700 && words <= 800) {
            setVoiceCount(5)
            setVideoCount(5)
            setPrice(35)
            return
        }
        if (words > 800 && words < 1200) {
            setVoiceCount(9);
            setVideoCount(9);
            setPrice(55);
            return
        }
        if (words >= 1200 && words < 1400) {
            setVoiceCount(8);
            setVideoCount(8)
            setPrice(55)
            return
        }
        if (words >= 1400 && words < 2300) {
            setVoiceCount(10);
            setVideoCount(10)
            setPrice(65)
            return
        }
        if (words >= 2300 && words < 2500) {
            setVoiceCount(12);
            setVideoCount(12)
            setPrice(65)
            return
        }
        if (words > 2500) {
            setVoiceCount(15);
            setVideoCount(15)
            setPrice(70)
            return
        }
    }

    const PricingAsPerDuration = (count) => {

        const duration = Number(count)
        const pricePerMinute = 7
        const wordsPerminute = 170

        const totalWords = Math.round((wordsPerminute * duration) / 100) * 100
        setScripeCount(totalWords)
        setVoiceCount(duration)
        setVideoCount(duration)

        if (duration < 8) {
            setPrice(pricePerMinute * duration)
        }
        if (duration >= 8 && duration <= 10) {
            setPrice(55)
        }
        if (duration > 10 && duration <= 12) {
            setPrice(65)
        }
        if (duration > 12) {
            setPrice(6 * duration)
        }
    }


    const CalculatePrice = () => {
        if (scriptChecked) {
            ScriptPricing(scriptCount)
            // console.log("SSSSSSSS")
        }
        if (voiceOverChecked) {
            console.log("VVVVVVVVV")
        }
        if (videoChecked) {
            console.log("viiiiiiiiiiiiiii")
        }
        if (thumbnailChecked) {
            console.log("ttttttttttttt")
        }
        if (seoChecked) {
            console.log("seeeeeeeeeeee")
        }

    }


    useEffect(() => {
        if (props.seletedIndex == props.index) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [props.seletedIndex])




    return (
        domLoaded &&
        <div className={`sm:w-[350px] w-[250px] sm:h-[500px] rounded-[20px] sm:px-[20px] sm:pt-[20px] sm:pb-[20px] px-[15px] pt-[15px] pb-[15px] ${focused ? focusedBorder : unFocusedBorder} `}
            onFocus={() => {
                props.onFocus();
            }}
            onBlur={() => {
                setFocused(false);
                console.log("ff")
            }}
            onClick={() => {
                props.onClick()
            }}
        >
            <div className="w-[100%] h-[80%]" >
                <div className="w-[100%] sm:h-[100px] h-[60px] border-b-[0px] flex " >
                    <div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] bg-[#fff] rounded-[5px]  " >
                        <img
                            src="/images/user/pricing1.png"
                            alt="grogrip_pricing" />
                    </div>
                    <div className="ml-[20px] " >
                        <h1 className=" text-[#fff] sm:text-[13px] text-[14px] leading-tight my-font " >{props.for}</h1>
                        <h1 className=" text-[#fff] sm:text-[24px] text-[16px] leading-tight my-font-semibold " >{props.type}</h1>
                    </div>
                </div>
                <div>
                    <h1 className=" text-[#fff] sm:text-[17px] text-[14px] my-font sm:leading-[30px] " >{`${scriptCount} words`}</h1>
                </div>
                <div className={`flex items-end mt-[10px] ${price ? 'visible' : 'invisible'}`} >
                    <h1 className=" text-[#fff] sm:text-[50px] text-[16px] sm:leading-none my-font-bold " >${price?.toFixed(2)}</h1>
                    <h1 className=" text-[#fff] my-font-semibold sm:text-[18px] text-[14px] "  > /video</h1>
                </div>
                <div className=" sm:mt-[15px] mt-[5px] " >
                    <h1 className=" text-[#fff] sm:text-[15px] text-[13px] my-font-semibold " >What&apos;s included</h1>
                </div>
                <div className=" mt-[5px] " >
                    <Features
                        count={scriptCount}
                        name={String.script}
                        seoChecked={scriptChecked}
                        onCheck={() => {
                            // setScriptChecked(!scriptChecked)
                        }}
                        onChangeCount={(count) => {
                            // setScripeCount(count)
                            ScriptPricing(count);
                        }}
                    />
                    <Features
                        count={voiceCount}
                        name={String.voice}
                        seoChecked={voiceOverChecked}
                        onCheck={() => {
                            // setVoiceOverChecked(!voiceOverChecked)
                        }}
                        onChangeCount={(count) => {
                            PricingAsPerDuration(count)
                        }}
                    />
                    <Features
                        count={videoCount}
                        name={String.video}
                        seoChecked={videoChecked}
                        onCheck={() => {
                            // setVideoChecked(!videoChecked)
                        }}
                        onChangeCount={(count) => {
                            PricingAsPerDuration(count)
                        }}
                    />
                    <Features
                        count={thumbnailCount}
                        name={String.thumb}
                        seoChecked={thumbnailChecked}
                        onCheck={() => {
                            if (thumbnailChecked) {
                                setPrice(price - 5)
                                setThumbnailChecked(!thumbnailChecked)
                            } else {
                                setPrice(price + 5)
                                setThumbnailChecked(!thumbnailChecked)
                            }
                        }}
                        onChangeCount={(count) => {
                            // setThumbnailCount(count)
                        }}
                    />
                    <Features
                        count={thumbnailCount}
                        name={String.seo}
                        seoChecked={seoChecked}
                        onCheck={() => {
                            if (seoChecked) {
                                setPrice(price - 5)
                                setSeoChecked(!seoChecked)
                            } else {
                                setPrice(price + 5)
                                setSeoChecked(!seoChecked)
                            }
                        }}
                        onChangeCount={(count) => {
                            // setSeoCount(count)
                        }}
                    />
                </div>
            </div>
            <div className=" w-[100%] border-t-[0px] mt-[10px] flex justify-center " >
                <div className={`sm:w-[250px] w-[200px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center ${focused ? focusedBG : unFocusedBG}`} >
                    <h1 className={`text-[20px] leading-none ${focused ? focusedbtnText : unfocusedBtnText} `} >Get Started</h1>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;