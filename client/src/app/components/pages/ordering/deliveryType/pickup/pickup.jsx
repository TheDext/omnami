import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { validator } from "../../../../../utils/validator";
import DataPickerField from "../../../../datePickerField";
import SelectField from "../../../../selectField";
import "../deliveryType.scss";

const PickUp = ({ data, onChange, errors, setErrors }) => {
    const pickupAddress = [
        { value: "1", label: "ул. Донская, д. 8 стр. 1" },
        { value: "2", label: "Проспект Вернадского, 43" },
        { value: "3", label: "ул. Тверская, д. 11" }
    ];

    const pickupTime = [
        { value: "10.00-11.00", label: "10.00 - 11.00" },
        { value: "11.00-12.00", label: "11.00 - 12.00" },
        { value: "12.00-13.00", label: "12.00 - 13.00" },
        { value: "13.00-14.00", label: "13.00 - 14.00" },
        { value: "14.00-15.00", label: "14.00 - 15.00" },
        { value: "16.00-16.00", label: "16.00 - 16.00" },
        { value: "17.00-17.00", label: "17.00 - 17.00" },
        { value: "18.00-18.00", label: "18.00 - 18.00" },
        { value: "19.00-19.00", label: "19.00 - 19.00" },
        { value: "20.00-20.00", label: "20.00 - 20.00" },
        { value: "21.00-22.00", label: "21.00 - 22.00" }
    ];

    const validatorConfig = {
        institutionAddress: {
            isRequired: {
                message: "Укажите адрес заведения, откуда будете забирать заказ"
            }
        },
        date: {
            isRequired: {
                message: "Укажите дату самовывоза"
            }
        },
        time: {
            isRequired: {
                message: "Укажите время самовывоза"
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
        <div className="delivery-type__type delivery-type__type_pickup pickup">
            <div className="pickup__item">
                <SelectField
                    label="Откуда заберете"
                    value={data.institutionAddress}
                    onChange={onChange}
                    defaultOption="Укажите адрес"
                    options={pickupAddress}
                    error={errors.institutionAddress}
                    name="institutionAddress"
                    placeholder=""
                />
            </div>
            <div className="pickup__item">
                <DataPickerField label="Когда заберете" onChange={onChange} />
            </div>
            <div className="pickup__item">
                <SelectField
                    label="Время"
                    value={data.time}
                    options={pickupTime}
                    onChange={onChange}
                    defaultOption="Время"
                    error={errors.time}
                    name="time"
                    placeholder=""
                />
            </div>
        </div>
    );
};
PickUp.propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.object,
    setErrors: PropTypes.func,
    errors: PropTypes.object
};
export default PickUp;
