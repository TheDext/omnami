import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MainLayout from "../../../layouts/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, loadProductList } from "../../../store/products";
import ProductCard from "../../productCard/productCard";
import "./categoryPage.scss";
const CategoryPage = ({ category }) => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts(category));
    const categories = {
        combo: "Комбо",
        pizza: "Пицца",
        rolls: "Роллы",
        sets: "Сеты",
        snacks: "Закуски"
    };
    useEffect(() => {
        dispatch(loadProductList(category));
    }, []);

    return (
        <MainLayout>
            <div className="category-page _container">
                <h1 className="_title">{categories[category]}</h1>
                <nav className="bread-crumbs">
                    <NavLink to="/" className="bread-crumbs__link">
                        Главная
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="bread-crumbs__link bread-crumbs__link_current"
                    >
                        {categories[category]}
                    </NavLink>
                </nav>
                <div className="category-page__row">
                    {products &&
                        products.map((p) => (
                            <div key={p._id} className="category-page__column">
                                <ProductCard
                                    composition={p.composition}
                                    id={p._id}
                                    name={p.name}
                                    price={p.price}
                                    weight={p.weight}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </MainLayout>
    );
    // return ;
};
CategoryPage.propTypes = {
    category: PropTypes.string
};
export default CategoryPage;
