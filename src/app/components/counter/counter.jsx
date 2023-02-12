import React from "react";
import PropTypes from "prop-types";
import "./counter.scss";

const Counter = ({ num }) => {
    const handleIncrement = (num) => (num = num + 1);
    const handleDecrement = (num) => (num = num - 1);

    return (
        <div className="counter">
            <div
                onClick={handleDecrement}
                className="counter__btn counter__btn_decrement"
            >
                -
            </div>
            <div className="counter__count">{num}</div>
            <div
                onClick={handleIncrement}
                className="counter__btn counter__btn_increment"
            >
                +
            </div>
        </div>
    );
};
Counter.propTypes = {
    num: PropTypes.number
};

export default Counter;
