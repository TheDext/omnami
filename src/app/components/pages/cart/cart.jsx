// import React from "react";
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
import CategoriesList from "../../cetegoriesList/categoriesList";
import Header from "../../header/header";
import CartItem from "./cartItem/cartItem";
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProductsCart());

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
                {products && (
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
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
