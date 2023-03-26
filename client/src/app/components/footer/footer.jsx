import React, { useState } from "react";
import "./footer.scss";
import FooterLogo from "../../icons/logoFooter.png";
import { ReactComponent as SubmitButton } from "../../icons/submit.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Vk } from "../../icons/vk.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Youtube } from "../../icons/youtube.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import Spoller from "../spoller";
import PropTypes from "prop-types";
import TextField from "../form/textField";

const Footer = ({ isMobile }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const footerNavigate = [
        {
            title: {
                id: "client",
                label: "Клиентам"
            },
            list: [
                {
                    to: "contacts",
                    label: "Контакты"
                },
                {
                    to: "reviews",
                    label: "Отзывы"
                },
                {
                    to: "news",
                    label: "Новости"
                },
                {
                    to: "articles",
                    label: "Статьи"
                }
            ]
        },
        {
            title: {
                id: "info",
                label: "Информация"
            },
            list: [
                {
                    to: "contacts",
                    label: "Оформление заказа"
                },
                {
                    to: "promotions",
                    label: "Оплата и доставка"
                },
                {
                    to: "reviews",
                    label: "О компании"
                },
                {
                    to: "news",
                    label: "Связаться с руководством"
                }
            ]
        },
        {
            title: {
                id: "legal",
                label: "Правовая информация"
            },
            list: [
                {
                    to: "contacts",
                    label: "Публичная оферта"
                },
                {
                    to: "promotions",
                    label: "Пользовательское соглашение"
                },
                {
                    to: "reviews",
                    label: "Условия обработки персональных данных"
                },
                {
                    to: "news",
                    label: "Бонусная программа"
                }
            ]
        }
    ];

    const handleClick = (id) => {
        if (id === selectedItemId) {
            return setSelectedItemId(null);
        }
        setSelectedItemId(id);
    };
    return (
        <div className="footer">
            <div className="footer__container _container">
                <div className="footer__body">
                    <div className="footer__logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className="footer__row">
                        <div className="footer__column form-footer">
                            <div className="form-footer__title">
                                Будь всегда в курсе!
                            </div>
                            <div className="form-footer__text">
                                Подпишитесь на рассылку и будьте всегда в курсе
                                новинок, акций и новостей!
                            </div>
                            <form className="form-footer__form">
                                <TextField placeholder="Email" />
                                <button className="form-footer__submit">
                                    <SubmitButton />
                                </button>
                            </form>
                        </div>
                        <div
                            className={`footer__column navigate-footer${
                                isMobile ? " _isMobile" : ""
                            }`}
                        >
                            {footerNavigate.map(({ title, list }) => (
                                <Spoller
                                    isMobile={isMobile}
                                    key={title.id}
                                    title={title}
                                    list={list}
                                    onClick={handleClick}
                                    selectedItemId={
                                        selectedItemId === title.id
                                            ? !!selectedItemId
                                            : null
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom bottom-footer">
                    <div className="bottom-footer__label">
                        Omnami © 2023 Все права защищены
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

Footer.propTypes = {
    isMobile: PropTypes.bool
};
export default Footer;
