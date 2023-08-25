import React, { useState, useEffect } from 'react';
import Header from '../components/Home/header';
import { FetchData } from '../lib/utils';
import Footer from '../components/Home/footer-new';
import Videos from '../constants/portfolio';
import Video from '../components/Home/video';


const ProjectTypes = [
    "ALL",
    "TECH",
    "WHITEBOARD",
    "CELEB",
    "SPORTS",
    "MIX VIDEOS"
]


const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const Portfolio = () => {

    const fetchData = FetchData()
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(3);
    const [projectIndex, setProjectIndex] = useState(0);
    const [selectedPortfolio, setSelectedPortfolio] = useState([]);


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

    return (
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <div>
                <div className={` ${localStorage.getItem('token') ? 'page-content' : 'page-content--blurred'}  w-[100%] border-[0px] flex items-center justify-center`}>
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
                                                    setProjectIndex(index)
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
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio