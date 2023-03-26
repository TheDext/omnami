import React from "react";
import Counter from "../../../counter/counter";
import { ReactComponent as RemoveIcon } from "../../../../icons/remove.svg";
import "./cartItem.scss";
import PropTypes from "prop-types";

const CartItem = ({
    id,
    name,
    composition,
    price,
    count,
    onDelete,
    onIncrement,
    onDecrement,
    img
}) => {
    return (
        <div className="products-cart__item item-cart">
            <div className="item-cart__main">
                <div className="item-cart__img">
                    <img src={img} alt="" />
                </div>
                <div className="item-cart__info info-item-cart">
                    <div className="info-item-cart__name _small-title">
                        {name}
                    </div>
                    {composition && (
                        <div className="info-item-cart__composition">
                            {composition}
                        </div>
                    )}
                </div>
            </div>
            <div className="item-cart__actions">
                <div className="item-cart__quantity">
                    <Counter
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        num={count}
                        id={id}
                    />
                </div>
                <div className="item-cart__sum">{price} ₽</div>
                <RemoveIcon
                    onClick={() => onDelete(id)}
                    className="item-cart__remove"
                />
            </div>
        </div>
    );
};
CartItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    composition: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    onDelete: PropTypes.func,
    img: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
};
export default CartItem;
