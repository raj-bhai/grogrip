import React from 'react'

const Mypage = () => {
  return (
    <>
      <div className='w-full h-screen bg-blue-500 flex flex-col justify-between items-center gap-4'>
        <div className='w-full h-[120px] justify-around bg-yellow-500'>
          <h1>Main Hun Yahaan</h1>
        </div>
        <div className='flex flex-wrap ' >
          <div className="h-32 w-32 border-2 content-start"></div>
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
        </div>
        <div className='w-full h-[120px] justify-between bg-yellow-500'>
          <h1>Main Check Yahaan</h1>
        </div>
      </div>
    </>
  )
}

export default Mypage