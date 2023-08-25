import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa'

const ProductButton = ({ title, onClick }) => {
    return (
        <div className=' flex items-center px-4 justify-between w-[200px] text-white h-[45px] bg-[#F5B041] rounded-[30px] absolute bottom-[20px] cursor-pointer '
        onClick={() => onClick()}
        >
            <h1>{title}</h1>
            <FaChevronCircleRight
            size={30}
                className='text-white'
            />
        </div>
    )
}

export default ProductButton