import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, weight, composition, price }) => {
    return (
        <div className="product-slider__item">
            <div className="product-slider__img">
                <img src="" alt="" />
            </div>
            <div className="product-slider__body">
                <div className="product-slider__title">{name}</div>
                <div className="product-slider__info">{weight}</div>
                <div className="product-slider__composition">{composition}</div>
                <div className="product-slider__bottom bottom-product-slider">
                    <div className="bottom-product-slider__price">{price}</div>
                    <button className="bottom-product-slider__add">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    name: PropTypes.string,
    weight: PropTypes.string,
    composition: PropTypes.string,
    price: PropTypes.number
};
export default ProductCard;
