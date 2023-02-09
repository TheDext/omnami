import React from "react";
import Header from "../components/header/header";
import Combo from "../components/products/combo";
import useMockData from "../utils/mockData";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Combo />
            <button onClick={() => useMockData()}></button>
        </>
    );
};

export default MainLayout;
