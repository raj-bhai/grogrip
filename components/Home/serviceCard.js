import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ToogleModal, SetSelectedProduct } from "../../redux/action/product";

const ServiceCard = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className=" w-[280px] relative h-[400px] hover:border-yellow-200 border-white border border-[2px] bg-[rgba(149,165,166,0.1)] rounded-lg flex flex-col items-center px-8 py-8 text-white my-font-bold text-[20px] leading-[38px]  " >
            <div className=" w-[100%] border-[0px] rounded-lg border-[#ABB2B9] h-[200px] relative flex items-center justify-center " >
                <img
                    src={item.image}
                    className=" absolute h-[100%] "

                // width={500}
                // height={'100%'}
                >
                </img>
            </div>
            <h1>{item.type}</h1>
            <h1>{item.price}</h1>
            <img
                className=" w-[200%] absolute bottom-[-20px] cursor-pointer "
                src='/images/buttons/shopnow.png'
                onClick={() => {
                    dispatch(ToogleModal(true));
                    dispatch(SetSelectedProduct(item))
                }}
            >
            </img>
        </div>
    )
}

export default ServiceCard