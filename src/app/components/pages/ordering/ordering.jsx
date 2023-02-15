import React, { useState } from "react";
import Header from "../../header/header";
import CategoriesList from "../../cetegoriesList/categoriesList";
import { NavLink } from "react-router-dom";
import DeliveryType from "./deliveryType/deliveryType";
import { useSelector } from "react-redux";
import { getProductsCart } from "../../../store/cart";
import "./ordering.scss";

const Ordering = () => {
    const initialState = {
        street: "",
        house: "",
        entrance: "",
        floor: "",
        apartment: "",
        institutionAddress: "",
        date: "",
        time: ""
    };
    const [data, setData] = useState(initialState);
    const cart = useSelector(getProductsCart());
    console.log("cart", cart);
    console.log("data", data);

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
                        <form className="ordering__form form-ordering _box">
                            <DeliveryType
                                data={data}
                                onChange={handleChange}
                                resetData={resetData}
                            />
                        </form>
                        <div className="ordering__products _box"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ordering;
