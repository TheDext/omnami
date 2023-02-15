import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectField from "../../../../selectField";
import { validator } from "../../../../../utils/validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PickUp = ({ data, onChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [errors, setErrors] = useState({});
    useEffect(() => {
        onChange({ name: "date", value: Date.parse(startDate).toString() });
    }, [startDate]);
    const pickupAddress = [
        { value: 1, label: "ул. Донская, д. 8 стр. 1" },
        { value: 2, label: "Проспект Вернадского, 43" },
        { value: 3, label: "ул. Тверская, д. 11" }
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
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // const isValid = Object.keys(errors).length === 0;

    return (
        <div className="delivery-type__type delivery-type__type_pickup">
            <SelectField
                label="Откуда заберете"
                value={data.institutionAddress}
                onChange={onChange}
                defaultOption="Укажите адрес"
                options={pickupAddress}
                error={errors.institutionAddress}
                name="institutionAddress"
            />

            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                showDisabledMonthNavigation
                dateFormat="dd.MM.yyyy"
            />
            <SelectField
                label="Время"
                value={data.time}
                options={pickupTime}
                onChange={onChange}
                defaultOption="Время"
                error={errors.time}
                name="time"
            />
        </div>
    );
};
PickUp.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func
};
export default PickUp;
