import React from "react";
import TextField from "../../../../textField";
import PropTypes from "prop-types";
const Delivery = ({ data, onChange }) => {
    return (
        <div className="delivery-type__type delivery-type__type_delivery">
            <TextField
                label="Улица"
                name="street"
                value={data.street}
                onChange={onChange}
            />
            <TextField
                label="Дом"
                name="house"
                value={data.house}
                onChange={onChange}
            />
            <TextField
                label="Подъезд"
                name="entrance"
                value={data.entrance}
                onChange={onChange}
            />
            <TextField
                label="Этаж"
                name="floor"
                value={data.floor}
                onChange={onChange}
            />
            <TextField
                label="Квартира"
                name="apartment"
                value={data.apartment}
                onChange={onChange}
            />
        </div>
    );
};

Delivery.propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.object
};

export default Delivery;
