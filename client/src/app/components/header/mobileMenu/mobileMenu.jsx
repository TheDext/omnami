import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const body = document.querySelector("body");
    isActive ? body.classList.add("_locked") : body.classList.remove("_locked");

    const navElements = [
        {
            path: "/profile",
            elem: "Профиль"
        },
        {
            path: "/contacts",
            elem: "Контакты"
        },
        {
            path: "/about",
            elem: "О нас"
        }
    ];

    const handleClick = () => {
        setIsActive((prevState) => !prevState);
    };
    return (
        <div className={`mobile-menu ${isActive ? "_active" : ""}`}>
            <div onClick={handleClick} className="mobile-menu__burger">
                <span></span>
            </div>
            <div
                onClick={() => setIsActive(false)}
                className="mobile-menu__content"
            >
                <nav
                    onClick={(e) => e.stopPropagation()}
                    className="mobile-menu__body"
                >
                    <ul>
                        {navElements.map(({ path, elem }, index) => (
                            <li key={`key_${index}`}>
                                <NavLink to={path}>{elem}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-menu__info info-mobile-menu">
                        <div className="info-mobile-menu__item">
                            <div className="info-mobile-menu__title">
                                Телефон
                            </div>
                            <a
                                href="tel: 88003020060"
                                className="info-mobile-menu__text"
                            >
                                8 800 302-00-60
                            </a>
                            <a
                                href="tel: 88003020066"
                                className="info-mobile-menu__text"
                            >
                                8 800 302-00-66
                            </a>
                        </div>
                        <div className="info-mobile-menu__item">
                            <div className="info-mobile-menu__title">
                                Доставка
                            </div>
                            <a
                                href="tel: 88003020060"
                                className="info-mobile-menu__text"
                            >
                                с 10:00 до 23:00
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
