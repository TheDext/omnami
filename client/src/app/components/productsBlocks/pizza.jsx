import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts, loadProductList } from "../../store/products";
import ProductSlider from "../productSlider/productSlider";
const Pizza = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const category = "pizza";
    const pizza = useSelector(getProducts(category));
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView && !pizza) {
            dispatch(loadProductList(category));
        }
    }, [inView]);

    return (
        <div ref={ref} className="_container _product-block product-block">
            <div className="product-block__top">
                <div className="product-block__title _title">Пицца</div>
                <div
                    // onClick={() => handleClick()}
                    className="product-block__watch-all"
                >
                    <NavLink to={category}>Посмотреть еще</NavLink>
                </div>
            </div>
            <ProductSlider products={pizza} />
        </div>
    );
};

export default Pizza;
