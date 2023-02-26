import React from "react";
import "./footer.scss";
import TextField from "../../textField";
import { NavLink } from "react-router-dom";
import FooterLogo from "../../../images/icons/logoFooter.png";
import { ReactComponent as SubmitButton } from "../../../images/icons/submit.svg";
import { ReactComponent as Instagram } from "../../../images/icons/socials/instagram.svg";
import { ReactComponent as Vk } from "../../../images/icons/socials/vk.svg";
import { ReactComponent as Facebook } from "../../../images/icons/socials/facebook.svg";
import { ReactComponent as Youtube } from "../../../images/icons/socials/youtube.svg";
import { ReactComponent as Twitter } from "../../../images/icons/socials/twitter.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container _container">
                <div className="footer__logo">
                    <img src={FooterLogo} alt="" />
                </div>
                <div className="footer__row">
                    <div className="footer__column footer__column_main">
                        <div className="footer__item main-item-footer">
                            <div className="footer__title">
                                Будь всегда в курсе!
                            </div>
                            <div className="main-item-footer__text">
                                Подпишитесь на рассылку и будьте всегда в курсе
                                новинок, акций и новостей!
                            </div>
                            <form className="main-item-footer__email">
                                <TextField />
                                <button className="main-item-footer__submit">
                                    <SubmitButton />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__item">
                            <div className="footer__title">Клиентам</div>
                            <nav>
                                <ul className="footer__list">
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Контакты
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Акции
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Отзывы
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Новости
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Статьи
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__item">
                            <div className="footer__title">Информация</div>
                            <nav>
                                <ul className="footer__list">
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Оформление заказа
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Оплата и доставка
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            О компании
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Связаться с руководством
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__item">
                            <div className="footer__title">
                                Правовая информация
                            </div>
                            <nav>
                                <ul className="footer__list">
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Публичная оферта
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Пользовательское соглашение
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Условия обработки персональных
                                            данных
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Бонусная программа
                                        </NavLink>
                                    </li>
                                    <li className="footer__paragraph">
                                        <NavLink className="footer__link">
                                            Условия акций
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom bottom-footer">
                    <div className="bottom-footer__label">
                        Omnami © 2021 Все права защищены
                    </div>
                    <div className="bottom-footer__socials socials-footer">
                        <div className="socials-footer__item">
                            <Instagram />
                        </div>
                        <div className="socials-footer__item">
                            <Vk />
                        </div>
                        <div className="socials-footer__item">
                            <Facebook />
                        </div>
                        <div className="socials-footer__item">
                            <Youtube />
                        </div>
                        <div className="socials-footer__item">
                            <Twitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
