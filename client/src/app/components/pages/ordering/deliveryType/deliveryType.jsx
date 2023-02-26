import PropTypes from "prop-types";
import React, { useState } from "react";
import Delivery from "./delivery/delivery";
import "./deliveryType.scss";
import PickUp from "./pickup/pickup";

const DeliveryType = ({ data, onChange, resetData, errors, setErrors }) => {
    const [type, setType] = useState("delivery");

    const resetDeliveryData = {
        street: "",
        house: "",
        entrance: "",
        floor: "",
        apartment: ""
    };
    const resetPickUpData = {
        institutionAddress: "",
        date: "",
        time: ""
    };

    const handleClick = (deliveryType) => {
        setType(deliveryType);
        resetData(
            deliveryType === "pickup" ? resetDeliveryData : resetPickUpData
        );
    };

    return (
        <div className="delivery-type">
            <div className="delivery-type__titles">
                <div
                    onClick={() => handleClick("delivery")}
                    className={`delivery-type__title ${
                        type === "delivery" ? "_active" : ""
                    } `}
                >
                    Доставка
                </div>
                <div
                    onClick={() => handleClick("pickup")}
                    className={`delivery-type__title ${
                        type === "pickup" ? "_active" : ""
                    } `}
                >
                    Самовывоз
                </div>
            </div>
            {type === "delivery" ? (
                <Delivery
                    data={data}
                    onChange={onChange}
                    setErrors={setErrors}
                    errors={errors}
                />
            ) : (
                <PickUp
                    data={data}
                    onChange={onChange}
                    setErrors={setErrors}
                    errors={errors}
                />
            )}
        </div>
    );
};
DeliveryType.propTypes = {
    data: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    setErrors: PropTypes.func,
    resetData: PropTypes.func
};
export default DeliveryType;
