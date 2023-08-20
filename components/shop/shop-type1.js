import React from 'react'
import Services from '../../data/shop1.json'



const Item = ({ item }) => {
    return (
        <div className=" w-[280px] relative h-[400px] hover:border-yellow-200 border-white border border-[2px] bg-[rgba(149,165,166,0.1)] rounded-lg flex flex-col items-center px-8 py-8 text-white my-font-bold text-[20px] leading-[38px]  " >
            <div className=" w-[100%] border-[0px] rounded-lg border-[#ABB2B9] h-[200px] relative flex items-center justify-center " >
                <img
                    src={item.image}
                    className=" absolute h-[100%] "
                >
                </img>
            </div>
            <h1>{item.type}</h1>
            <h1>{item.price}</h1>
            <img
                className=" w-[200%] absolute bottom-[-20px] cursor-pointer "
                src='/images/buttons/shopnow.png'
            >
            </img>
        </div>
    )
}

const Type1 = () => {
    return (
        <div className=' w-full py-8 mt-[100px] flex flex-col items-center ' >
            <btn className='text-yellow-200 gap-2 text-[50px] w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg ml-8 my-font-bold'>
                <p>SHOP</p>
            </btn>
            <div className=' w-full flex flex-wrap gap-2 justify-evenly mt-16  ' >
                {
                    Services.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Type1

