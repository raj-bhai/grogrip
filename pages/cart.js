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
import { FetchData } from "../lib/utils";
import Drawer from '@mui/material/Drawer';
import DrawerItem from "../components/drawerItem";
import CartDrawer from "../components/cart/drawer";


const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const Cart = () => {
    const dispatch = useDispatch()
    const fetchData = FetchData()
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(7);
    const Cart = useSelector(state => state.cart.CartData);
    const { openModal, SelectedProduct } = useSelector(state => state.product);
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleClose = () => {
        dispatch(ToogleModal(false))
    }


    return (
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <div className=" w-full py-8 mt-[100px] flex flex-col items-center gap-8 ">
                <btn className=' text-yellow-200 gap-2 text-[30px] sm:text-[50px] w-[95%] sm:w-[700px] cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold'>
                    <p>CART</p>
                </btn>
                <div className=" w-full px-1 sm:px-16 flex flex-col items-center" >
                    {
                        !Cart?.length ?
                            <EmptyCart />
                            :
                            <div className=" w-full flex text-white my font sm:px-4 text-[15px] sm:text-[30px] justify-between " >
                                <h1 className=" w-[20%] sm:min-w-[200px] text-center "  >Package Name</h1>
                                <h1 className=" w-[20%] sm:min-w-[200px] text-center " >Product Name</h1>
                                <h1 className=" w-[20%] sm:min-w-[200px] text-center " >Price</h1>
                                <h1 className=" w-[20%] sm:min-w-[200px] text-center " >Quantity</h1>
                                <h1 className=" w-[20%] sm:min-w-[200px] text-center " >Subtotal</h1>
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
                {
                    Cart?.length ?
                        <div className=" w-full flex flex-col items-center sm:items-start sm:px-[100px] " >
                            <button className=" bg-white w-[350px] h-[50px] my-font cursor-pointer text-[#000] text-[20px] rounded-lg "
                                onClick={() => setDrawerOpen(true)}
                            >
                                Proceed To Buy
                            </button>
                        </div> : null
                }
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
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <CartDrawer
                    money={100}
                    onClose={() => setDrawerOpen(false)}
                />
            </Drawer>
        </div>
    )
}

export default Cart