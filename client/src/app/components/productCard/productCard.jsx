import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import img from "../../images/sliders/combo/01.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductsCart } from "../../store/cart";
import localStorageService from "../../services/localStorage.service";
import "./productCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, weight, composition, price, img }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(getProductsCart());
    useEffect(() => {
        localStorageService.setCart(products);
    }, [products]);

    const handleCardClick = (e) => {
        navigate(`/product/${id}`);
        e.stopPropagation();
    };

    const handleAddToCartClick = (e) => {
        const successText = "Добавлено";
        const defaultText = "В корзину";

        e.stopPropagation();
        dispatch(addToCart({ id, name, composition, price, img }));

        e.target.setAttribute("disabled", true);
        e.target.textContent = successText;
        setTimeout(() => {
            e.target.removeAttribute("disabled");
            e.target.textContent = defaultText;
        }, 800);
    };

    return (
        <div onClick={handleCardClick} className="product">
            <div className="product__item">
                <div className="product__img">
                    <img src={img} alt="" />
                </div>
                <div className="product__body">
                    <div className="product__title">{name}</div>
                    <div className="product__info">{weight}</div>
                    <div className="product__composition">{composition}</div>
                    <div className="product__bottom bottom-product">
                        <div className="bottom-product__price">{price} ₽</div>
                        <button
                            onClick={(e) => handleAddToCartClick(e)}
                            className="bottom-product__add"
                        >
                            В корзину
                        </button>
                    </div>
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
    price: PropTypes.number,
    img: PropTypes.string
};
export default ProductCard;
