import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/mainLayout";
import { logOut } from "../../../store/users";
import Bonuses from "./bonuses";
import "./profile.scss";
import Orders from "./userData/orders/orders";
import UserData from "./userData/userData";
import { ReactComponent as Logout } from "../../../icons/logout.svg";
import { resetOrdersList } from "../../../store/orders";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [switchActive, setSwitchActive] = useState("profile");
    const handleLogout = () => {
        dispatch(logOut());
        dispatch(resetOrdersList());
        navigate("/");
    };
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
                        Личный кабинет
                    </NavLink>
                </nav>
                <div className="profile">
                    <h1 className="profile__title">
                        <span className="_title">Личный кабинет</span>
                        <Logout
                            onClick={handleLogout}
                            className="profile__logout"
                        />
                    </h1>
                    <div className="profile__body">
                        <div className="profile__body-item profile__switch switch-profile _box">
                            <div
                                className={`switch-profile__title switch-profile__title_profile ${
                                    switchActive === "profile" ? "_active" : ""
                                } `}
                                onClick={() => setSwitchActive("profile")}
                            >
                                Мой профиль
                            </div>
                            <div
                                className={`switch-profile__title switch-profile__title_orders ${
                                    switchActive === "orders" ? "_active" : ""
                                } `}
                                onClick={() => setSwitchActive("orders")}
                            >
                                Мои заказы
                            </div>
                            <div
                                className={`switch-profile__title switch-profile__title__bonuses ${
                                    switchActive === "bonuses" ? "_active" : ""
                                } `}
                                onClick={() => setSwitchActive("bonuses")}
                            >
                                Бонусы
                            </div>
                        </div>
                        <div className="profile__body-item profile__content content-profile _box">
                            {switchActive === "profile" ? (
                                <UserData />
                            ) : switchActive === "orders" ? (
                                <Orders />
                            ) : (
                                <Bonuses />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Profile;
