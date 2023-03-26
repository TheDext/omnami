import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/mainLayout";
import { getProductsCart } from "../../../store/cart";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";
import sumСalculation from "../../../utils/sumCalculation";
import DeliveryType from "./deliveryType/deliveryType";
import localStorageService from "../../../services/localStorage.service";
import "./ordering.scss";
import { submitOrder } from "../../../store/orders";
import { useScrollbar } from "../../../hooks/useScrollbar";
import ThanksModal from "./thanksModal";
import TextAreaField from "../../form/textAreaField";

const Ordering = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUserData = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const productOrderingBody = useRef(null);
    const initialState = {
        street: currentUserData?.street || "",
        house: currentUserData?.house || "",
        entrance: currentUserData?.entrance || "",
        apartment: currentUserData?.apartment || "",
        floor: "",
        institutionAddress: "",
        date: "",
        time: "",
        comment: ""
    };
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(initialState);
    const cart = useSelector(getProductsCart());
    useScrollbar(productOrderingBody);
    useEffect(() => {
        if (!cart.length) {
            navigate("/");
        }
    }, []);

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.classList.add("_sending");
        const newData = {};

        for (const value in data) {
            if (data[value] !== "") {
                newData[value] = data[value];
            }
        }
        if (isLoggedIn) {
            newData.userId = localStorageService.getUserId();
        }
        const isSubmited = await dispatch(
            submitOrder({
                ...newData,
                cart
            })
        );

        if (isSubmited) {
            setTimeout(() => {
                setShowModal(true);
                e.target.classList.remove("_sending");
                setData(initialState);
                localStorageService.resetCart();
            }, 1000);
        }
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
                            <div
                                ref={productOrderingBody}
                                className="products-ordering__body"
                            >
                                {cart.map(({ id, count, name, price, img }) => (
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
            {showModal && <ThanksModal onChange={setShowModal} />}
        </MainLayout>
    );
};

export default Ordering;
