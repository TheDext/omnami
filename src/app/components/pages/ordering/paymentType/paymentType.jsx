import React from "react";
import RadioField from "../../../radioField";
import PropTypes from "prop-types";
import CardOnSite from "./cardOnSite";
import TextField from "../../../textField";

const PaymentType = ({ data, onChange }) => {
    const options = [
        { value: "cash", name: "Наличными" },
        { value: "cardUponReceipt", name: "Картой при получении" },
        { value: "cardOnSite", name: "Картой на сайте" }
    ];
    return (
        <div className="payment-type _box">
            <div className="payment-type__title _small-title">
                Способ оплаты
            </div>
            <div className="payment-type__types">
                <RadioField
                    options={options}
                    name="paymentType"
                    onChange={onChange}
                    value={data.paymentType}
                />
            </div>
            <div className="payment-type__body">
                {data.paymentType === "cash" ? (
                    <TextField />
                ) : data.paymentType === "cardOnSite" ? (
                    <CardOnSite />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
PaymentType.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func
};

export default PaymentType;
