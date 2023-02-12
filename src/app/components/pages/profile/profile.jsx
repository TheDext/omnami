import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoriesList from "../../cetegoriesList/categoriesList";
import Header from "../../header/header";
import Orders from "./orders";
import UserData from "./userData/userData";
import Bonuses from "./bonuses";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentUserData,
    getUsersLoadingStatus,
    loadUserData,
    updateUser
} from "../../../store/users";

const Profile = () => {
    const [switchActive, setSwitchActive] = useState("profile");
    const dispatch = useDispatch();
    const isLoading = useSelector(getUsersLoadingStatus());
    const [data, setData] = useState({
        name: "",
        tel: "",
        email: "",
        street: "",
        house: "",
        entrance: "",
        apartment: ""
    });

    const userData = useSelector(getCurrentUserData());

    useEffect(() => {
        dispatch(loadUserData());
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setData((prevState) => ({ ...prevState, ...userData }));
        }
    }, [isLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(data));
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
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
                        Личный кабинет
                    </NavLink>
                </nav>
                <div className="profile">
                    <h1 className="profile__title _title">Личный кабинет</h1>
                    <div className="profile__body">
                        <div className="profile__switch switch-profile _box">
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
                        <div className="profile__content content-profile _box">
                            {switchActive === "profile" ? (
                                <UserData
                                    onSubmit={handleSubmit}
                                    onChange={handleChange}
                                    data={data}
                                />
                            ) : switchActive === "orders" ? (
                                <Orders data={data} />
                            ) : (
                                <Bonuses />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
