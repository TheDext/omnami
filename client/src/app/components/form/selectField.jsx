import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "../../styles/selectField.scss";
const SelectField = ({
    label,
    onChange,
    options,
    error,
    name,
    placeholder
}) => {
    const handleChange = (target) => {
        onChange({ name, value: target.value });
    };

    return (
        <>
            <div className="select-field">
                <label htmlFor={name} className="select-field__label">
                    {label}
                </label>
                <Select
                    placeholder={placeholder}
                    // className={getInputClasses()}
                    id={name}
                    name={name}
                    onChange={handleChange}
                    options={options}
                />
                {error && <div className="select-field__error">{error}</div>}
            </div>
        </>
    );
};

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    placeholder: PropTypes.string
};

export default SelectField;
