import React, { useRef } from 'react';
import {
    FaAngleRight,
    FaAngleDoubleUp
} from 'react-icons/fa';

const Inbox = (props) => {

    const mydiv = useRef(null)


    return (
        <div className="h-screen w-[100%] bg-gradient-to-r from-[#0B5345] to-[#1B4F72] flex" >
            <div className="w-[30%] h-[100%] border-[0px] " >
                <div className="w-[100%] h-[200px] border-b-[2px] flex justify-center items-end " >
                    <div className="w-[80%] h-[50px] border-[0px] mb-[5px] rounded-lg flex justify-start items-center " >
                        <h1 className='text-[20px] ml-[10px] font-semibold text-white ' >{props.type}</h1>
                    </div>
                </div>
                <div className="w-[100%] h-[150px] border-[0px] flex justify-center items-start " >
                    {/* <div className="w-[80%] h-[50px] border-[0px] mt-[5px] rounded-lg flex justify-start items-center" >
                    <h1 className='text-[20px] ml-[10px] font-semibold text-white '>Inbox</h1>
                    </div> */}
                </div>
            </div>
            <div className="w-[70%] h-[100%] border-[0px] flex items-center justify-center relative " >
                <div ref={mydiv} className='w-[80%] h-[80%] border-[0px] flex justify-center overflow-y-scroll' >
                    <div className='absolute w-[100px] h-[100px] right-[15%] bottom-[10%] flex items-center justify-center'
                    // onClick={() => {
                    //     console.log("Hello mf")
                    // }} 
                    >
                        <FaAngleDoubleUp
                            color='white'
                            size={50}
                            onClick={() => {
                                console.log("Hello mf")
                                mydiv.current.scrollTo(0, 0)
                            }}
                        ></FaAngleDoubleUp>
                    </div>
                    <div className='w-[90%] ' >
                        {[...Array(100)].map((e, i) =>
                            <div key={i} className='w-[80%] cursor-pointer hover:bg-gradient-to-l from-[#0B5345] to-[#0B5345] h-[100px] border-[1px] border-[#BDC3C7] ml-[20px] mt-[15px] rounded-lg px-[10px] py-[10px]'
                            >
                                {
                                    (props.type === "Notification") &&
                                    <div className=' w-100% h-[100%] border-[0px] flex justify-between ' >
                                        <h1 className='text-[#BDC3C7] font-bold text-[17px]' >New Task Assigned to you</h1>
                                        <div className='w-[100px] h-[100%] border-[0px] flex items-center ' >
                                            <h1 className='text-[#BDC3C7] font-semibold text-[14px]' >2 min ago</h1>
                                        </div>
                                        <div className='w-[50px] h-[100%] border-[0px] flex items-center ' >
                                            <FaAngleRight
                                                color='#BDC3C7'
                                                size={40}
                                            ></FaAngleRight>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;