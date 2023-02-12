// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComboList, getComboLoadStatus, getCombo } from "../../store/combo";
import ProductSlider from "../productSlider/productSlider";
const Combo = () => {
    const isLoading = useSelector(getComboLoadStatus());
    const combo = useSelector(getCombo());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadComboList());
    }, []);

    return (
        <>
            <div className="_container productBlock">
                <div className="_title">Комбо</div>
                <ProductSlider products={combo} isLoading={isLoading} />
            </div>
        </>
    );
};

export default Combo;
