import React, { useState } from "react";
import "./header.scss";
import logoMob from "../../images/icons/logoDesktop.png";
import { NavLink, useLocation } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout/authLayout";

const Header = () => {
    const [authModalActive, setAuthModalActive] = useState(false);
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div className="header">
                <div className="header__container _container">
                    <div className="header__row">
                        <div className="header__column header__column_logo">
                            <NavLink to="/" disabled={true}>
                                <div className="header__logo header__logo_desktop">
                                    <img src={logoMob} alt="" />
                                </div>
                            </NavLink>
                            <div className="header__logo header__logo_mobile"></div>
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
                            <button
                                onClick={() =>
                                    setAuthModalActive(
                                        (prevState) => !prevState
                                    )
                                }
                                className="header-action header-action_login"
                            ></button>
                            <NavLink to="/test">
                                <button className="header-action header-action_cart">
                                    Корзина
                                </button>
                            </NavLink>
                        </div>
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

export default Header;