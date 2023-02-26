import React from "react";
import PropTypes from "prop-types";
import "./counter.scss";
import { getProductById } from "../../store/cart";
import { useSelector } from "react-redux";

const Counter = ({ id, num, onIncrement, onDecrement }) => {
    const product = useSelector(getProductById(id));
    return (
        <div className="counter">
            <div
                 onClick={() => onDecrement(product)}
                className="counter__btn counter__btn_decrement"
            >
                -
            </div>
            <div className="counter__count">{num}</div>
            <div
                onClick={() => onIncrement(product)}
                className="counter__btn counter__btn_increment"
            >
                +
            </div>
        </div>
    );
};
Counter.propTypes = {
    id: PropTypes.string,
    num: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
};

export default Counter;
