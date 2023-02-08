import React from "react";
import Header from "../components/header/header";
import Combo from "../components/products/combo";
// import ProductSlider from "../components/productSlider/producSlider";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Combo />
            {/* <ProductSlider /> */}
        </>
    );
};

export default MainLayout;
