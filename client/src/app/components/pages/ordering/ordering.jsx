import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "../../../images/ordering.jpg";
import MainLayout from "../../../layouts/mainLayout";
// import orderService from "../../../services/order.service";
import { getProductsCart } from "../../../store/cart";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import sumСalculation from "../../../utils/sumCalculation";
import TextAreaField from "../../textAreaField";
import DeliveryType from "./deliveryType/deliveryType";
import localStorageService from "../../../services/localStorage.service";
import "./ordering.scss";
import { submitOrder } from "../../../store/orders";

const Ordering = () => {
    const dispatch = useDispatch();
    const currentUserData = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const [data, setData] = useState({
        street: currentUserData?.street || "",
        house: currentUserData?.house || "",
        entrance: currentUserData?.entrance || "",
        apartment: currentUserData?.apartment || "",
        floor: "",
        institutionAddress: "",
        date: "",
        time: "",
        comment: ""
    });

    const [errors, setErrors] = useState({});
    const cart = useSelector(getProductsCart());

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {};

        for (const value in data) {
            if (data[value] !== "") {
                newData[value] = data[value];
            }
        }
        if (isLoggedIn) {
            newData.userId = localStorageService.getUserId();
        }
        dispatch(
            submitOrder({
                ...newData,
                cart
            })
        );

        // await orderService.create({
        //     ...newData,
        //     cart
        // });
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const resetData = (resetState) =>
        setData((prevState) => ({
            ...prevState,
            ...resetState
        }));

    const isValid = Object.keys(errors).length === 0;

    return (
        <MainLayout>
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
                        <form
                            onSubmit={handleSubmit}
                            className="ordering__form form-ordering _box"
                        >
                            <DeliveryType
                                data={data}
                                onChange={handleChange}
                                resetData={resetData}
                                setErrors={setErrors}
                                errors={errors}
                            />
                            <TextAreaField
                                label="Комментарий к заказу"
                                name="comment"
                                onChange={handleChange}
                                value={data.comment}
                            />
                            <button
                                disabled={!isValid}
                                className="ordering__submit"
                            >
                                Оформить заказ
                            </button>
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
        </MainLayout>
    );
};

export default Ordering;
