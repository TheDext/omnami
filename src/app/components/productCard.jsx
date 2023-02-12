import React from "react";
import PropTypes from "prop-types";
import img from "../images/sliders/combo/01.png";
import { addToCart } from "../services/localStorage.service";

const ProductCard = ({ id, name, weight, composition, price }) => {
    const handleClick = () => addToCart(id);
    return (
        <div className="product-slider__item">
            <div className="product-slider__img">
                <img src={img} alt="" />
            </div>
            <div className="product-slider__body">
                <div className="product-slider__title">{name}</div>
                <div className="product-slider__info">{weight}</div>
                <div className="product-slider__composition">{composition}</div>
                <div className="product-slider__bottom bottom-product-slider">
                    <div className="bottom-product-slider__price">{price}</div>
                    <button
                        onClick={handleClick}
                        className="bottom-product-slider__add"
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    weight: PropTypes.string,
    composition: PropTypes.string,
    price: PropTypes.number
};
export default ProductCard;
