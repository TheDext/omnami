import React from "react";
import Header from "../../header/header";
import CategoriesList from "../../cetegoriesList/categoriesList";
import { NavLink } from "react-router-dom";
import CartItem from "./cartItem/cartItem";

const Cart = () => {
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
                        <div className="_small-title">Товаров в корзине ()</div>
                        <div className="cart__products products-cart">
                            <CartItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
