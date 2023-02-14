// import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getgetSetsLoadStatus, getSets, loadSetsList } from "../../store/sets";
import ProductSlider from "../productSlider/productSlider";
const Sets = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const isLoading = useSelector(getgetSetsLoadStatus());
    const rolls = useSelector(getSets());
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView) {
            dispatch(loadSetsList());
        }
    }, [inView]);

    return (
        <>
            <div className="_container productBlock" ref={ref}>
                <div className="_title">Сеты</div>
                {inView && (
                    <ProductSlider products={rolls} isLoading={isLoading} />
                )}
            </div>
        </>
    );
};

export default Sets;
