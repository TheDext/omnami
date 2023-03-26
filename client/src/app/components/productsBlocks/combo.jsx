import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts, loadProductList } from "../../store/products";
import ProductSlider from "../productSlider/productSlider";
import "./productBlock.scss";
const Combo = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const dispatch = useDispatch();
    const category = "combo";
    const combo = useSelector(getProducts(category));

    useEffect(() => {
        if (inView && !combo) {
            dispatch(loadProductList(category));
        }
    }, [inView]);

    return (
        <div ref={ref} className="_container _product-block product-block">
            <div className="product-block__top">
                <div className="product-block__title _title">Комбо</div>
                <div className="product-block__watch-all">
                    <NavLink to={category}>Посмотреть еще</NavLink>
                </div>
            </div>
            <ProductSlider products={combo} />
        </div>
    );
};

export default Combo;
