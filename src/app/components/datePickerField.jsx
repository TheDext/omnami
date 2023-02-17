import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

const DataPickerField = ({ onChange, label }) => {
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        onChange({ name: "date", value: Date.parse(startDate).toString() });
    }, [startDate]);

    return (
        <div className="pickup-data-picker">
            <div className="pickup-data-picker__label">{label}</div>
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                showDisabledMonthNavigation
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
};

DataPickerField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string
};
export default DataPickerField;
