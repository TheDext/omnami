import React from "react";
import MainLayout from "../../layouts/mainLayout";
import MainSlider from "../mainSlider/mainSlider";
import Combo from "../productsBlocks/combo";
import Pizza from "../productsBlocks/pizza";
import Rolls from "../productsBlocks/rolls";
import Sets from "../productsBlocks/sets";
import Snacks from "../productsBlocks/snacks";

const MainPage = () => (
    <MainLayout>
        <MainSlider />
        <Combo />
        <Rolls />
        <Sets />
        <Pizza />
        <Snacks />
    </MainLayout>
);

export default MainPage;
