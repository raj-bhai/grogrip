import React, { useState, useEffect } from "react";
const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';
import Header from "../components/Home/header";
import Footer from "../components/Home/footer-new";
import Type1 from "../components/shop/shop-type1";
import Type2 from "../components/shop/shop-type2";
import Type3 from "../components/shop/shop-type3";

const Shop = () => {
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [selectedHeader, setSelectedHeader] = useState(2);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    return (
        domLoaded &&
        <div className={'w-full fade-in px-[0px] py-[0px] relative overflow-y-hidden overflow-x-hidden' + backgroundGradient} >
            <Header
                className={headerStyle}
                selectedHeader={selectedHeader}
            />
            <Type1 />
            <Type2 />
            <Type3 />
            <Footer />
        </div>
    )
}

export default Shop