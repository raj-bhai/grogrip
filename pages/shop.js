import React, { useState, useEffect } from "react";
import Header from "../components/Home/header";
import Footer from "../components/Home/footer-new";
import Type1 from "../components/shop/shop-type1";
import Type2 from "../components/shop/shop-type2";
import Type3 from "../components/shop/shop-type3";
import { useSelector, useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import ProductModal from "../components/shop/product-modal";
import { ToogleModal, SetSelectedProduct } from '../redux/action/product'
import { FetchData } from "../lib/utils";



const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

const Shop = () => {
    const dispatch = useDispatch()
    const fetchData = FetchData()
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(2);
    const { openModal, SelectedProduct } = useSelector(state => state.product);


    const handleClose = () => {
        dispatch(ToogleModal(false))
    }


    return (
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            {
                openModal &&
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ProductModal />
                </Modal>

            }
            <Type1 />
            <Type2 />
            <Type3 />
            <Footer />
        </div>
    )
}

export default Shop