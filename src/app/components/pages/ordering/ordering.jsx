import React, { useState } from "react";
import Header from "../../header/header";
import CategoriesList from "../../cetegoriesList/categoriesList";
import { NavLink } from "react-router-dom";
import DeliveryType from "./deliveryType/deliveryType";
import { useSelector } from "react-redux";
import { getProductsCart } from "../../../store/cart";
import img from "../../../images/ordering.jpg";
import "./ordering.scss";
import sumСalculation from "../../../utils/sumCalculation";
import PaymentType from "./paymentType/paymentType";

const Ordering = () => {
    const initialState = {
        street: "",
        house: "",
        entrance: "",
        floor: "",
        apartment: "",
        institutionAddress: "",
        date: "",
        time: "",
        paymentType: "cash",
        change: "",
        comment: ""
        // paymentType: "cardUponReceipt",
        // paymentType: "cardOnSite",
    };
    const [data, setData] = useState(initialState);
    const cart = useSelector(getProductsCart());
    console.log("cart", cart);
    // console.log("data", data);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(updateUser(data));
    // };
    const handleChange = (target) => {
        console.log("target", target);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const resetData = () => setData(initialState);
    return (
        <>
            <Header />
            <CategoriesList />
            <div className="_container">
                <nav className="bread-crumbs">
                    <NavLink to="/" className="bread-crumbs__link">
                        Главная
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="bread-crumbs__link bread-crumbs__link_current"
                    >
                        Оформление заказа
                    </NavLink>
                </nav>
                <div className="ordering">
                    <div className="ordering__title _title">
                        Оформление заказа
                    </div>
                    <div className="ordering__body">
                        <form className="ordering__form form-ordering">
                            <DeliveryType
                                data={data}
                                onChange={handleChange}
                                resetData={resetData}
                            />
                            <PaymentType
                                data={data}
                                onChange={handleChange}
                                resetData={resetData}
                            />
                        </form>
                        <div className="ordering__products products-ordering _box">
                            <div className="products-ordering__title _small-title">
                                Ваш заказ
                            </div>
                            <div className="products-ordering__body">
                                {cart.map(({ id, count, name, price }) => (
                                    <div
                                        key={id}
                                        className="products-ordering__product product-ordering"
                                    >
                                        <div className="product-ordering__img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="product-ordering__info">
                                            <div className="product-ordering__title">
                                                {name}
                                            </div>
                                            <div className="product-ordering__counter">
                                                {count} шт
                                            </div>
                                        </div>
                                        <div className="product-ordering__price">
                                            {price} ₽
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="products-ordering__bottom">
                                <span className="products-ordering__final">
                                    Итого к оплате
                                </span>
                                <span className="products-ordering__sum">
                                    {sumСalculation(cart)} ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ordering;
