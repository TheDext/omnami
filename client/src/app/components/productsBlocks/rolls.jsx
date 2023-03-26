import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts, loadProductList } from "../../store/products";
import ProductSlider from "../productSlider/productSlider";
const Rolls = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const category = "rolls";
    const rolls = useSelector(getProducts(category));
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView && !rolls) {
            dispatch(loadProductList(category));
        }
    }, [inView]);

    return (
        <div ref={ref} className="_container _product-block product-block">
            <div className="product-block__top">
                <div className="product-block__title _title">Роллы</div>
                <div
                    // onClick={() => handleClick()}
                    className="product-block__watch-all"
                >
                    <NavLink to={category}>Посмотреть еще</NavLink>
                </div>
            </div>
            <ProductSlider products={rolls} />
        </div>
    );
};

export default Rolls;
