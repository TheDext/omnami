import React, { useEffect } from "react";
import "./thanksModal.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ThanksModal = ({ onChange }) => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        onChange(false);
        navigate("/");
    };
    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.add("_locked");
        return () => {
            body.classList.remove("_locked");
        };
    }, []);
    return (
        <div className="thanks-modal" onClick={handleChange}>
            <div className="thanks-modal__content  _box">
                <div className="thanks-modal__body">
                    Благодарим Вас за заказ! <br />В ближайшее время мы с Вами
                    свяжемся.
                </div>
            </div>
        </div>
    );
};

ThanksModal.propTypes = {
    onChange: PropTypes.func
};
export default ThanksModal;
