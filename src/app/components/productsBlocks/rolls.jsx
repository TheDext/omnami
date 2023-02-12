// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRolls, getRollsLoadStatus, loadRollsList } from "../../store/rolls";
import ProductSlider from "../productSlider/productSlider";
const Rolls = () => {
    const isLoading = useSelector(getRollsLoadStatus());
    const rolls = useSelector(getRolls());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRollsList());
    }, []);

    return (
        <>
            <div className="_container productBlock">
                <div className="_title">Роллы</div>
                <ProductSlider products={rolls} isLoading={isLoading} />
            </div>
        </>
    );
};

export default Rolls;
