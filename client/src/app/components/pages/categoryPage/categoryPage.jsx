import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MainLayout from "../../../layouts/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, loadProductList } from "../../../store/products";
import ProductCard from "../../productCard/productCard";
import Skeleton from "../../skeleton";
import "./categoryPage.scss";

const CategoryPage = ({ currentCategory }) => {
    const { path: categoryName, elem: categoryNormalName } = currentCategory;
    const dispatch = useDispatch();
    const products = useSelector(getProducts(categoryName));
    useEffect(() => {
        if (!products) {
            dispatch(loadProductList(categoryName));
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [categoryName]);

    return (
        <MainLayout>
            <div className="category-page _container">
                <h1 className="_title">{categoryNormalName}</h1>
                <nav className="bread-crumbs">
                    <NavLink to="/" className="bread-crumbs__link">
                        Главная
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="bread-crumbs__link bread-crumbs__link_current"
                    >
                        {categoryNormalName}
                    </NavLink>
                </nav>
                <div className="category-page__row">
                    {products
                        ? products.map((p) => (
                              <div
                                  key={p._id}
                                  className="category-page__column"
                              >
                                  <ProductCard
                                      composition={p.composition}
                                      id={p._id}
                                      name={p.name}
                                      price={p.price}
                                      weight={p.weight}
                                      img={p.img}
                                  />
                              </div>
                          ))
                        : [...new Array(10)].map((_, i) => (
                              <div
                                  key={i}
                                  className="category-page__column _loading"
                              >
                                  <Skeleton />
                              </div>
                          ))}
                </div>
            </div>
        </MainLayout>
    );
    // return ;
};
CategoryPage.propTypes = {
    currentCategory: PropTypes.object
};
export default CategoryPage;
