import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { validator } from "../../../../../utils/validator";
import TextField from "../../../../textField";

const Delivery = ({ data, onChange, errors, setErrors }) => {
    const validatorConfig = {
        street: {
            isRequired: {
                message: "На какую улицу доставить?"
            }
        },
        house: {
            isRequired: {
                message: "Укажите дом"
            },
            isContainDigit: {
                message: "Номер дома должен содержать цифру"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        return setErrors(errors);
    };

    return (
        <div className="delivery-type__type delivery-type__type_delivery">
            <TextField
                label="Улица"
                name="street"
                value={data.street}
                onChange={onChange}
                error={errors.street}
            />
            <TextField
                label="Дом"
                name="house"
                value={data.house}
                onChange={onChange}
                error={errors.house}
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
    data: PropTypes.object,
    setErrors: PropTypes.func,
    errors: PropTypes.object
};

export default Delivery;
