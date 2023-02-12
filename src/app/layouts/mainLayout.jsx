import React from "react";
import CategoriesList from "../components/cetegoriesList/categoriesList";
import Header from "../components/header/header";
import MainSlider from "../components/mainSlider/mainSlider";
import Combo from "../components/productsBlocks/combo";
import Rolls from "../components/productsBlocks/rolls";
import Sets from "../components/productsBlocks/sets";

const MainLayout = () => {
    return (
        <>
            <Header />
            <CategoriesList />
            <MainSlider />
            <Combo />
            <Rolls />
            <Sets />
        </>
    );
};

export default MainLayout;
