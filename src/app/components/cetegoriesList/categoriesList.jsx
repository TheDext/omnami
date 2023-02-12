import React from "react";
import { NavLink } from "react-router-dom";
import "./categoriesList.scss";

const CategoriesList = () => (
    <ul className="categories-list _container">
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Пицца</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Роллы</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Сеты</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Комбо</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Закуски</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Wok-лапша</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link">Напитки</NavLink>
        </li>
        <li className="categories-list__item">
            <NavLink className="categories-list__link categories-list__link_promotion">Акции</NavLink>
        </li>
    </ul>
);

export default CategoriesList;
