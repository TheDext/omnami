import React from "react";
import { NavLink } from "react-router-dom";
import "./categoriesList.scss";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import getCategories from "../../utils/getCategories";

const CategoriesList = ({ isHide }) => {
    const categories = getCategories();
    return (
        <div
            className={`categories-list _container ${isHide ? "_isHide" : ""}`}
        >
            <Swiper spaceBetween={30} slidesPerView="auto">
                {categories.map(({ path, elem }, index) => (
                    <SwiperSlide
                        className="categories-list__item"
                        key={`key_${index}`}
                    >
                        <NavLink
                            className="categories-list__link"
                            to={`/${path}`}
                        >
                            {elem}
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

CategoriesList.propTypes = {
    isHide: PropTypes.bool
};

export default CategoriesList;
