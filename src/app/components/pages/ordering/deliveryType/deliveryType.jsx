import React, { useState } from "react";
import PropTypes from "prop-types";
import Delivery from "./delivery/delivery";
import PickUp from "./pickup/pickup";
import "./deliveryType.scss";

const DeliveryType = ({ data, onChange, resetData }) => {
    const [type, setType] = useState("delivery");

    const handleClick = (type) => {
        resetData();
        setType(type);
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
                <Delivery data={data} onChange={onChange} />
            ) : (
                <PickUp data={data} onChange={onChange} />
            )}
        </div>
    );
};
DeliveryType.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
    resetData: PropTypes.func
};
export default DeliveryType;
