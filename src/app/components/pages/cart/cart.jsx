import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import localStorageService from "../../../services/localStorage.service";
import {
    addToCart,
    decrementProductCounter,
    getProductsCart,
    removeFromCart
} from "../../../store/cart";
import AdditionalProcuctsSlider from "../../additionalProductsSlider/additionalProductsSlider";
import CategoriesList from "../../cetegoriesList/categoriesList";
import Header from "../../header/header";
import "./cart.scss";
import CartItem from "./cartItem/cartItem";
import sumСalculation from "../../../utils/sumCalculation";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProductsCart());
    const isEmpty = products.length === 0;
    useEffect(() => {
        localStorageService.setCart(products);
    }, [products]);

    const handleDelete = (id) => dispatch(removeFromCart(id));
    const handeIncrement = (product) => dispatch(addToCart(product));
    const handleDecrement = (product) =>
        dispatch(decrementProductCounter(product));

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
                        Корзина
                    </NavLink>
                </nav>
                <div className="cart">
                    <div className="cart__title _title">Корзина</div>
                    <div className="cart__body _box">
                        <div className="_small-title">
                            Товаров в корзине ({products.length})
                        </div>
                        <div className="cart__products products-cart">
                            {products.map((product) => (
                                <CartItem
                                    key={product.id}
                                    onDelete={handleDelete}
                                    onIncrement={handeIncrement}
                                    onDecrement={handleDecrement}
                                    {...product}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="additional">
                        <div className="additional__title">
                            Добавить к заказу
                        </div>
                        <AdditionalProcuctsSlider />
                    </div>
                    <div className="order-price">
                        Сумма заказа:{" "}
                        <span className="order-price__num">
                            {sumСalculation(products)} ₽
                        </span>
                    </div>
                    <div className="cart-buttons">
                        <button className="cart-buttons__btn cart-buttons__btn_back">
                            Вернуться в меню
                        </button>
                        <NavLink
                            to="/ordering"
                            disabled={isEmpty}
                            className="cart-buttons__btn cart-buttons__btn_order"
                        >
                            Оформить заказ
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;