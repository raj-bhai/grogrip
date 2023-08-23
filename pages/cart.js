import React, { useState, useEffect } from "react";
import Header from "../components/Home/header";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/cart/cart-item";
import Products from '../data/shop1.json';
import Footer from "../components/Home/footer-new";
import EmptyCart from "../components/cart/empty-cart";
import Modal from '@mui/material/Modal';
import ProductModal from "../components/shop/product-modal";
import { ToogleModal, SetSelectedProduct } from "../redux/action/product";


const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const Cart = () => {
    const dispatch = useDispatch()
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(7);
    const [domLoaded, setDomLoaded] = useState(false);
    const Cart = useSelector(state => state.cart.CartData);
    const { openModal, SelectedProduct } = useSelector(state => state.product);

    // console.log("Cart :", Cart)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    const handleClose = () => {
        dispatch(ToogleModal(false))
    }

    return (
        domLoaded &&
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <div className=" w-full py-8 mt-[100px] flex flex-col items-center gap-8 ">
                <btn className=' text-yellow-200 gap-2 text-[50px] w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg ml-8 my-font-bold'>
                    <p>CART</p>
                </btn>
                <div className=" w-full px-16 flex flex-col items-center" >
                    {
                        !Cart?.length ?
                            <EmptyCart />
                            :
                            <div className=" w-full flex text-white my font px-4 text-[30px] justify-between " >
                                <h1>Package Name</h1>
                                <h1>Product Name</h1>
                                <h1>Price</h1>
                                <h1>Quantity</h1>
                                <h1>Subtotal</h1>
                            </div>
                    }
                    {
                        Cart?.map((item, index) => {
                            return (
                                <CartItem
                                    data={item}
                                    key={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
            {
                openModal &&
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ProductModal 
                    isUpdate={true}
                    />
                </Modal>

            }
        </div>
    )
}

export default Cart