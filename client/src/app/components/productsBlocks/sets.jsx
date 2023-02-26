import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts, loadProductList } from "../../store/products";
import ProductSlider from "../productSlider/productSlider";
import { useInView } from "react-intersection-observer";
const Sets = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const category = "sets";
    const sets = useSelector(getProducts(category));
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView) {
            console.log("+");
            dispatch(loadProductList(category));
        }
    }, [inView]);

    return (
        <>
            <div ref={ref} className="_container _product-block product-block">
                <div className="product-block__top">
                    <div className="product-block__title _title">Сеты</div>
                    <div
                        // onClick={() => handleClick()}
                        className="product-block__watch-all"
                    >
                        <NavLink to={category}>Посмотреть еще</NavLink>
                    </div>
                </div>
                <ProductSlider products={sets} />
            </div>
        </>
    );
};

export default Sets;
