import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Home/header';
import MovingText from 'react-moving-text';
import ParticleEffectButton from 'react-particle-effect-button'
import PricingCard from '../components/Home/pricingCard';
import CustomPlan from '../components/Home/customPlan';
import Success from '../components/pupups/sucess';
import url from '../constants/url';
import {
    FaFacebookSquare,
    FaInstagram,
    FaAngleDoubleUp,
    FaWhatsapp,
} from 'react-icons/fa';
import Video from '../components/Home/video';
import Globe from '../components/Home/globe';
import Services from '../components/Home/services';
import Footer from '../components/Home/footer';
import Videos from '../constants/portfolio';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../components/Home/micro/imageCarousel';
import axios from 'axios';
import { useRouter } from 'next/router';
import Drawer from '@mui/material/Drawer';
import DrawerItem from '../components/drawerItem';



const ProjectTypes = [
    "ALL",
    "TECH",
    "WHITEBOARD",
    "CELEB",
    "SPORTS",
    "MIX VIDEOS"
]


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

const Home = () => {

    const router = useRouter()
    const [domLoaded, setDomLoaded] = useState(false);

    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [btn1Animate, setBtn1Animate] = useState(false);
    const [btn2Animate, setBtn2Animate] = useState(false);
    const [showArrowUp, setShowArrowUp] = useState(false);
    const HomeRef = useRef(null);
    const AboutRef = useRef(null);
    const ServicesRef = useRef(null);
    const PortfolioRef = useRef(null)
    const PricingRef = useRef(null);
    const ExtraRef = useRef(null);
    const ExtraRef1 = useRef(null);
    const CustomPlanRef = useRef(null)
    const FooterRef = useRef(null);
    const BottomRef = useRef(null);
    const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

    const [showPopup, setShowPopup] = useState(false);

    const gradiantText1 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#B2BABB] to-[#F0F3F4]';
    const gradiantText2 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#5D9B81] via-[#93D900] to-[#93D900]';

    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    //selected header index
    const [selectedHeader, setSelectedHeader] = useState(1)

    //selected pricing
    const [pricingIndex, setPricingIndex] = useState(1);

    //selected project types (ex: All, Tech, Crypto)
    const [projectIndex, setprojectIndex] = useState(0);

    const [selectedPortfolio, setSelectedPortfolio] = useState([]);   //video urls


    const [countingStart, setCountingStart] = useState(false);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(100);
    const [count3, setCount3] = useState(220000);

    const [drawerOpen, setDrawerpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(0);

    const [SSopen, setSSOpen] = useState(false);
    const handleOpen = () => setSSOpen(true);
    const handleClose = () => setSSOpen(false);


    useEffect(() => {
        if (btn1Animate) {
            setTimeout(() => {
                setBtn1Animate(false)
            }, 2500);
        }
    }, [btn1Animate])

    useEffect(() => {
        if (btn2Animate) {
            setTimeout(() => {
                setBtn2Animate(false)
            }, 2500);
        }
    }, [btn2Animate])



    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count) < 50) {
                const intervalId = setInterval(() =>
                    setCount(count + 0.5),
                    0.01 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count, countingStart])

    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count1) < 150) {
                const intervalId = setInterval(() =>
                    setCount1(count1 + 1),
                    0.0001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count1, countingStart])


    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count2) < 500) {
                const intervalId = setInterval(() =>
                    setCount2(count2 + 4),
                    0.00000001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count2, countingStart])

    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count3) < 267841) {
                const intervalId = setInterval(() =>
                    setCount3(count3 + 1),
                    0.001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            } else {
                setCount3(215794)
            }
        }
    }, [count3, countingStart])

    useEffect(() => {
        if (ProjectTypes[projectIndex] == "ALL") {
            setSelectedPortfolio([...Videos.Videos.Tech, ...Videos.Videos.Whiteboard, ...Videos.Videos.Celeb, ...Videos.Videos.Sports, ...Videos.Videos.Mix])
        }
        if (ProjectTypes[projectIndex] == "TECH") {
            setSelectedPortfolio(Videos.Videos.Tech)
        }
        if (ProjectTypes[projectIndex] == "WHITEBOARD") {
            setSelectedPortfolio(Videos.Videos.Whiteboard)
        }
        if (ProjectTypes[projectIndex] == "CELEB") {
            setSelectedPortfolio(Videos.Videos.Celeb)
        }
        if (ProjectTypes[projectIndex] == "SPORTS") {
            setSelectedPortfolio(Videos.Videos.Sports)
        }
        if (ProjectTypes[projectIndex] == "MIX VIDEOS") {
            setSelectedPortfolio(Videos.Videos.Mix)
        }
    }, [projectIndex])


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    setTimeout(() => {
        setShowText2(true)
    }, 1000);

    setTimeout(() => {
        setShowText3(true)
    }, 1500);

    setTimeout(() => {
        setShowText4(true)
    }, 1000);

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const toggleDrawer = (open) => {
        // setDrawerpen(open)
    };


    const onScroll = () => {
        if (window.pageYOffset > 50) {
            setHeaderStyle(' bg-gradient-to-r from-[#063f09] via-[#107840] via-[#1F5025] via -[#28602E] to-[#146a24]');
            setShowArrowUp(true)

            //number countdown star
            if (window.pageYOffset > 300) {
                if (!countingStart) {
                    setCountingStart(true)
                }
            }

            if (window.pageYOffset > HomeRef.current?.clientHeight + 100) {
                // if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight - 100) {
                //     if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight + PortfolioRef.current?.clientHeight + PricingRef.current?.clientHeight + ExtraRef.current?.clientHeight + CustomPlanRef.current.clientHeight + ExtraRef1.current?.clientHeight + ExtraRef2.current?.clientHeight) {
                //         if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight + PortfolioRef.current?.clientHeight + PricingRef.current?.clientHeight + ExtraRef.current?.clientHeight + CustomPlanRef.current.clientHeight + ExtraRef1.current?.clientHeight + ExtraRef2.current?.clientHeight + ContactRef.current?.clientHeight - 200) {
                //             setSelectedHeader(5)
                //         } else {
                //             setSelectedHeader(4)
                //         }
                //     } else {
                //         setSelectedHeader(3)
                //     }
                // } else {
                //     setSelectedHeader(2)
                // }
            } else {
                setSelectedHeader(1)
            }

        } else {
            setShowArrowUp(false);
            setHeaderStyle(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
        }
    };




    return (
        domLoaded &&
            typeof window !== 'undefined' ?
            <div id="home" className={'w-full fade-in px-[0px] py-[0px] overflow-y-hidden overflow-x-hidden' + backgroundGradient}
            >
                {
                    showPopup &&
                    <Success
                        text1="Great!"
                        text2="Your response submitted successfully, our team will contact you soon."
                        onClose={() => {
                            setShowPopup(false)
                        }}
                    />
                }
                <div ref={HomeRef} className={'w-[100%] sm:min-h-[650px] border-[0px]'}>
                    <Header
                        className={headerStyle}
                        selectedHeader={selectedHeader}
                        onClickHome={() => {
                            document.getElementById('home')?.scrollIntoView();
                            setSelectedHeader(1)
                        }}
                        onClickService={() => {
                            document.getElementById('getStarted')?.scrollIntoView();
                            setSelectedHeader(2)
                        }}
                        onClickPricing={() => {
                            document.getElementById('pricing')?.scrollIntoView();
                            setSelectedHeader(3)
                        }}
                        onClickContact={() => {
                            document.getElementById('contact')?.scrollIntoView();
                            setSelectedHeader(4)
                        }}
                        onClickAbout={() => {
                            document.getElementById('footer')?.scrollIntoView();
                            setSelectedHeader(5)
                        }}
                    />
                    {/* AroowUpIcon */}
                    {
                        showArrowUp &&
                        <div id="goToTop" className='fixed border-[0px] z-[1000] w-[80px] bottom-[30px] right-[30px] h-[80px] flex items-center justify-center '
                        >
                            <FaAngleDoubleUp
                                onClick={() => {
                                    //  console.log("ok mf")
                                    document.getElementById('home').scrollIntoView()
                                }}
                                className='text-white sm:text-[40px] text-[25px] hover:text-[#F0F3F4] cursor-pointer hover:animate-bounce'
                            />
                        </div>
                    }
                    <img
                        src="/images/user/circle0.png"
                        className=' absolute right-[0px] bottom-[-100px] sm:visible invisible '
                        alt="star" />
                    {
                        <div className='border-[0px] flex flex-wrap items-center w-[100%] justify-center sm:mt-[100px] z-[100] ' >

                            <div className={` sm:w-[50%] w-[100%] sm:mr-[0px] mr-[10px] flex items-center justify-center sm:pl-[20px] sm:pt-[0px] pt-[30px] sm:pb-[0px] pb-[50px] pl-[0px] sm:min-w-[550px] `}
                            >
                                <div className='sm:w-[600px]  w-[100%] h-[80%] border-[0px] sm:ml-[0px] ml-[10px] sm:mt-[80px] mt-[60px] flex relative ' >
                                    <img
                                        src="/images/user/star.png"
                                        className='sm:w-[40px] h-[20px] sm:h-[40px] h-[20px] absolute sm:top-[50px] sm:top-[-5px] top-[-10px] sm:left-[-50px] left-[200px] '
                                        alt="star" />
                                    <div>
                                        <div className=' lg:py-0 py-[20px] pb-[40px] flex flex-col lg:gap-0 gap-[20px] lg:p-0 pr-[20px] pl-[20px] ' >
                                            <MovingText
                                                type="flipFromLeftToCenter"
                                                duration="1000ms"
                                                delay="100ms"
                                                direction="normal"
                                                timing="ease"
                                                iteration={1}
                                                fillMode="none"
                                                className='  text-shadow my-font-bold  drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-left font-semibold  '
                                            >
                                                {`Expert YouTube Service  and Support`}
                                            </MovingText>
                                            <div className='lg:mt-[28px] flex mt-[0px] border-[0px] lg:mt-0 mt-[50px] lg:h-[100px]' >
                                                {
                                                    showText2 &&
                                                    <MovingText
                                                        type="fadeIn"
                                                        duration="1s"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration={1}
                                                        fillMode="forwards"
                                                        presences="letters"
                                                        className='text-white lg:text-[40px] my-font text-[22px] lg:leading-[45px] text-left font-normal '
                                                    >
                                                        {'Proven Track record of Success'}
                                                    </MovingText>
                                                }
                                                <Modal
                                                    open={SSopen}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box
                                                        sx={style}
                                                        className='rounded-lg'
                                                    >
                                                        <Carousel />
                                                    </Box>
                                                </Modal>
                                            </div>
                                            <div className='  w-[100%] sm:h-[50px] h-[30px] border-[0px] sm:mt-[10px] mt-[0px] flex items-center ' >
                                                <img
                                                    src="/images/user/path.png"
                                                    className=' ml-[10px] sm:mt-[-30px] mt-[10px] '
                                                    alt="star" />
                                            </div>
                                            <div className='  w-[100%] h-[50px] border-[0px] sm:mt-[-10px] mt-[10px]  ' >
                                                {
                                                    showText3 &&
                                                    <MovingText
                                                        type="fadeIn"
                                                        duration="1s"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration={1}
                                                        fillMode="forwards"
                                                        presences="letters"
                                                        className='text-white sm:text-[18px] my-font text-[16px] sm:leading-[25px] '
                                                    >
                                                        {"Unlock your channel's potential with our professional video production and optimization"}
                                                    </MovingText>
                                                }
                                            </div>
                                            <div className=' w-[100%] lg:mt-[30px] mt-[50px] lg:mb-0 mb-[50px]' >
                                                {
                                                    showText4 &&
                                                    <MovingText
                                                        type="flipFromLeftToCenter"
                                                        duration="1s"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration={1}
                                                        fillMode="forwards"
                                                        presences="letters"
                                                    >
                                                        <div className='w-[100%] flex flex-col lg:h-[100px] lg:flex lg:flex-row items-center lg:items-center lg:justify-start gap-4 lg:gap-16 sm:pr-[0px] lg:pr-[20px] ' >
                                                            <ParticleEffectButton
                                                                color='#fff'
                                                                hidden={btn1Animate}
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="sm:w-[150px] w-[200px] text-[#000] my-font-bold-noshadow sm:text-[16px] text-[12px] sm:h-[50px] h-[40px] bg-white rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:border-gray-400  hover:border-2 hover:border-opacity-50 hover:scale-105 transition duration-300"
                                                                    onClick={() => {
                                                                        setBtn1Animate(true)
                                                                        setTimeout(() => {
                                                                            document.getElementById('getStarted').scrollIntoView()
                                                                        }, 1500);
                                                                    }}
                                                                >
                                                                    GET STARTED
                                                                </button>

                                                            </ParticleEffectButton>
                                                            <ParticleEffectButton
                                                                color='#fff'
                                                                hidden={btn2Animate}
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="sm:w-[150px] w-[200px] text-[#000] my-font-bold-noshadow sm:text-[16px] text-[12px] sm:h-[50px] h-[40px] bg-white rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:border-gray-400  hover:border-2 hover:border-opacity-50 hover:scale-105 transition duration-300"
                                                                    onClick={() => {
                                                                        setBtn2Animate(true)
                                                                        setprojectIndex(0)
                                                                        setTimeout(() => {
                                                                            document.getElementById('demos').scrollIntoView()
                                                                        }, 1500);
                                                                    }}
                                                                >
                                                                    PORTFOLIO
                                                                </button>
                                                            </ParticleEffectButton>
                                                        </div>
                                                    </MovingText>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[50%] lg:min-w-[550px] w-0 h-0 lg:h-[500px] border-[0px] flex lg:justify-end justify-center lg:pr-[50px] lg:visible invisible  ' >
                                <Globe />
                            </div>
                        </div>
                    }
                </div>
                <div ref={AboutRef}
                    className='w-[100%] flex items-center jistify-center sm:h-[150px] sm:pt-[0px] sm:pb-[0px] sm:pt-[80px] sm:pb-[30px] relative' id='about'
                >
                    <div className='w-[100%] border-[0px] sm:py-[0px] gap-[50px] sm:flex-wrap sm:flex-row flex-col flex items-center justify-between sm:px-[20px] px-[10px] ' >
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] lg:text-[50px] text-[30px] my-font leading-tight  ' >{Math.round(count)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] lg:text-[18px] text-[25px] leading-tight my-font-bold sm:ml-[-20px]  ' >Clients</h1>
                            </div>
                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff]  sm:text-[50px] text-[30px] leading-tight my-font  ' >{Math.round(count1)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[25px] leading-tight my-font-bold  ' >Positive Feedback</h1>
                            </div>

                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] sm:text-[50px] text-[30px] leading-tight my-font  ' >{Math.round(count2)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[25px] leading-tight my-font-bold sm:ml-[-10px]  ' >Channels</h1>
                            </div>
                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] sm:text-[50px] text-[30px] leading-tight my-font  ' >{Math.round(count3)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[25px] leading-tight my-font-bold  ' >Views Daily</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div ref={ServicesRef} id='getStarted' className='   w-[100%] flex items-center justify-center'>
                        <div className='w-[100%] lg:flex lg:flex-col lg:items-center ' >
                            <Services
                                id=''
                            />
                        </div>
                    </div> */}
                <div ref={PortfolioRef}
                    id="portfolio" className='w-[100%] relative sm:mt-[0px] mt-[-100px] border-[0px] flex items-center justify-center '>
                    <img
                        src="/images/user/circle4.png"
                        className=' absolute left-[0px] top-[-50px] sm:visible invisible '
                        alt="person7" />
                    <img
                        src="/images/user/circle5.png"
                        className=' absolute right-[0px] bottom-[0px] sm:visible invisible  '
                        alt="person7" />
                    <div className=' lg:h-[400px] lg:mt-[0px] mt-[20px] w-[80%] border-[0px] lg:flex lg:flex-row flex flex-col items-center lg:justify-center  lg:pl-[0px] pl-10px ' >
                        <div className=' w-[40%] lg:h-[400px] h-[200px] flex items-center justify-center ' >
                            <img
                                src="https://res.cloudinary.com/drgvislmm/image/upload/v1683385350/WebsiteImages/ggmoney_axjqvu.gif"
                                className='absolute lg:w-[600px] lg:h-[400px] lg:top-0  top-1 '
                                alt="person7" />
                        </div>
                        <div className='w-full flex flex-col lg:items-start lg:text-start items-center text-center lg:pb-[120px] sm:px-[40px] pr-[0] sm:mt-[0px] mt-[50px]  ' >
                            <div className='sm:w-full sm:h-[120px] sm:mt-[80px] border-[0px] font-semibold flex items-center '  >
                                <h1 className=' text-yellow-200 sm:text-[30px] my-font-bold text-[17px] leading-sm ' >AFFORDABLE PRICING, EXCEPTIONAL RESULTS</h1>
                            </div>
                            <div>
                                <h1 className=' text-[#fff]  sm:text-[18px] my-font-semibold text-[13px] sm:-mt-[20px] mt-[10px]  leading-tight ' >
                                    <p>"Choose from our flexible pricing plans to suit</p>
                                    <p>your budget and goals."</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pricing" ref={PricingRef} className='w-[100%] pt-[50px] flex item-center justify-center' >
                    <div className=' w-[90%] border-[0px] sm:mt-[50px] mt-[20px] flex sm:gap-[80px] gap-[20px] flex-wrap items-center justify-center ' >
                        <PricingCard
                            for="Short Videos (4-5 mins)"
                            type="Basic"
                            index={0}
                            amount={35}
                            seletedIndex={pricingIndex}
                            desc="700-800 words"
                            onFocus={() => {
                                // console.log('gg')
                            }}
                            onClick={() => {
                                setSelectedPrice(35)
                                setDrawerpen(true)
                                toggleDrawer(true)
                                // setPricingIndex(0)
                                // createOrder(100)
                            }}
                        />
                        <PricingCard
                            for="Long Videos (8-10 mins)"
                            type="Pro"
                            index={1}
                            amount={55}
                            seletedIndex={pricingIndex}
                            desc="1400-1500 words"
                            onFocus={() => {
                                // console.log('gg')
                            }}
                            onClick={() => {
                                setSelectedPrice(55)
                                setDrawerpen(true)
                                toggleDrawer(true)
                                // setPricingIndex(1)
                                // createOrder(100)
                            }}
                        />
                        <PricingCard
                            for="extra-long videos (18-20 mins)"
                            type="Premium"
                            index={2}
                            amount={85}
                            seletedIndex={pricingIndex}
                            desc="2800-3000 word"
                            onFocus={() => {
                                //  console.log('gg')
                            }}
                            onClick={() => {
                                setSelectedPrice(85)
                                setDrawerpen(true)
                                toggleDrawer(true)
                                // setPricingIndex(2)
                                // createOrder(100)
                            }}
                        />
                    </div>
                </div>
                <div ref={ExtraRef} className='w-[100%] flex justify-center border-[0px] sm:pt-[50px] sm:pl-[50px] sm:pr-[150px] pl-[10px] pr-[10px] ' >
                    <img
                        src="/images/user/circle6.png"
                        className=' absolute right-[0px] sm:visible invisible '
                        alt="person7" />
                    <div className='sm:h-[250px] h-[150px] w-[100%]  border-[0px] flex justify-between ' >
                        <div className='sm:w-[600px] h-[100%] flex items-center ' >
                            <div>
                                <h1 className={`text-[#fff] sm:text-[40px] my-font-semibold ${gradiantText1}`} >Confused about the plans</h1>
                                <h1 className={`text-[#fff] sm:text-[60px] my-font-bold ${gradiantText2}`} >Dont worry</h1>
                            </div>
                        </div>
                        <div className='h-[100%] border-l-[0px] flex items-center justify-center ' >
                            <img
                                src="/images/user/girl1.png"
                                className=' sm:w-[250px] w-[100px] h-[100px] sm:h-[250px] '
                                alt="person7" />
                        </div>
                    </div>
                </div>
                <div ref={CustomPlanRef} className='w-[100%]  flex justify-center border-[0px] ' >
                    <CustomPlan
                        onSubmit={() => {
                            setShowPopup(true);
                        }}
                    />
                </div>
                <div ref={ExtraRef1} id='demos' className='w-[100%] border-[0px] flex items-center justify-center '>
                    <div className=' sm:w-[80%] w-[100%] border-[0px] mt-[100px] flex flex-col items-center sm:px-[0px] px-[10px]  ' >
                        <div className=' flex items-center justify-center py-[5px] rounded ' >
                            <h1 className=' text-[#fff] bg-gradient-to-r from-white via-yellow-100 to-green-100 text-transparent bg-clip-text text-center lg:text-[45px] text-[18px] font-bold ' >OUR LATEST PROJECTS</h1>
                        </div>
                        <div className=' w-[100%] flex flex-wrap mt-[50px] pb-[50px] border-[0px]' >
                            <div className='w-[100%] flex flex-wrap justify-center lg:gap-x-[50px] gap-x-[10px] sm:pb-[50px] ' >
                                {
                                    ProjectTypes.map((item, index) => {
                                        return (
                                            <button type="button"
                                                key={index}
                                                className={` ${(index == 2) ? 'lg:w-[130px] w-[100px]' : 'lg:w-[120px] w-[80px]'} h-[35px] hover:bg-[#F2F4F4]  focus:text-[#fff] ny-font-bold focus:bg-green-600   drop-shadow-lg lg:text-[16px] lg:font-bold sm:text-[#000]  lg:border-[0px] rounded  lg:h-[40px] sm:mb-[0px] mb-[20px] cursor-pointer text-[13px] cursor-pointer ${(projectIndex == index) ? ' text-[#31FF52] bg-green-600' : ' text-[#fff] sm:bg-[#E5E7E9] '} `}
                                                onClick={() => {
                                                    setprojectIndex(index)
                                                }}
                                            >
                                                {item}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-[100%] flex flex-wrap border-[0px] gap-[20px] justify-center ' >
                                {
                                    selectedPortfolio.map((item, index) => {
                                        return (
                                            <Video
                                                key={index}
                                                thumbnail={item.thumbnail}
                                                src={item.url}
                                                projectIndex={projectIndex}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div >
                <div ref={FooterRef} className='w-[100%] border-[0px] sm:px-[0px] px-[20px] flex items-center justify-center' id="footer" >
                    {
                        typeof window !== 'undefined' &&
                        <Footer />
                    }
                </div>
                <div ref={BottomRef} className='w-[100%] border-[0px] h-[100px] flex items-center justify-center' >
                    <div className='sm:flex sm:w-[90%] h-[80%] border-[0px] items-center justify-between' >
                        <div className=' w-[100%] sm:w-[400px] h-[50%] sm:mt-[0px] mt-[10px] border-[0px] flex items-center justify-center sm:justify-start sm:gap-[10px] gap-[5px]' >
                            <h1 className='text-white text-[15px] sm-text-[18px] my-font ' >{`2022 ${`©`} All Rights Reserved`}</h1>
                        </div>
                        <div className='flex border-[0px] w-[400px] sm:w-[250px] h-[40px] items-center justify-center sm:gap-[10px] gap-[20px]' >
                            <FaFacebookSquare
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.facebook.com/profile.php?id=100087879190153")
                                }}
                            />
                            <FaInstagram
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.instagram.com/grogrip_media/")
                                }}
                            />
                            <FaWhatsapp
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://wa.me/918076455801")
                                }}
                            />
                            <h1 className='text-white text-[15px] sm-text-[18px] my-font cursor-pointer'
                                onClick={() => {
                                    window?.open("https://wa.me/918076455801")
                                }}
                            >+91 8076455801</h1>
                        </div>
                    </div>
                </div>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerpen(false)}
                >
                    <DrawerItem
                    money={selectedPrice}
                    onClose={() => setDrawerpen(false)}
                    />
                </Drawer>
            </div >
            : null
    )
}

export default Home