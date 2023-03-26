import React, { useState } from "react";
import "./header.scss";
import logoDesktop from "../../icons/logoDesktop.png";
import logoMob from "../../icons/logoMobile.png";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout/authLayout";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../../store/users";
import { ReactComponent as UserLogo } from "../../icons/user.svg";
import MobileMenu from "./mobileMenu/mobileMenu";
import PropTypes from "prop-types";
import { getProductsCart } from "../../store/cart";

const Header = () => {
    const isLogged = useSelector(getIsLoggedIn());
    const userName = useSelector(getUserName());
    const [authModalActive, setAuthModalActive] = useState(false);
    const productQuantity = useSelector(getProductsCart());
    return (
        <>
            <div className="header">
                <div className="header__container _container">
                    <div className="header__row">
                        <div className="header__column header__column_logo">
                            <NavLink to="/">
                                <div className="header__logo header__logo_desktop">
                                    <img src={logoDesktop} alt="" />
                                </div>
                                <div className="header__logo header__logo_mobile">
                                    <img src={logoMob} alt="" />
                                </div>
                            </NavLink>
                        </div>
                        <div className="header__column header__column_info">
                            <div className="header-info">
                                <a
                                    href="tel:880030200"
                                    className="header-info__title"
                                >
                                    8 800 302 00 60
                                </a>
                                <div className="header-info__sub">
                                    Звонок бесплатный
                                </div>
                            </div>
                            <div className="header-info">
                                <div className="header-info__title">
                                    Работаем для вас
                                </div>
                                <div className="header-info__sub">
                                    с 10:00 до 23:00
                                </div>
                            </div>
                        </div>
                        <div className="header__column header__column_actions">
                            {isLogged ? (
                                <NavLink
                                    className="header-action header-action_login _isLoggedIn"
                                    to="/profile"
                                >
                                    <UserLogo className="user-logo" />
                                    <span className="user-name">
                                        {userName}
                                    </span>
                                </NavLink>
                            ) : (
                                <button
                                    className="header-action header-action_login"
                                    onClick={() => {
                                        setAuthModalActive(
                                            (prevState) => !prevState
                                        );
                                    }}
                                >
                                    <UserLogo />
                                </button>
                            )}
                            <NavLink
                                to="/cart"
                                className="header-action header-action_cart"
                            >
                                <span className="product-quantity">
                                    {productQuantity
                                        ? productQuantity.length
                                        : 0}
                                </span>
                                Корзина
                            </NavLink>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </div>
            <AuthLayout
                isActive={authModalActive}
                setActive={setAuthModalActive}
            />
        </>
    );
};

Header.propTypes = {
    isMobile: PropTypes.bool
};

export default Header;
