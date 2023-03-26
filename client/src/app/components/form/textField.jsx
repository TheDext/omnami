import React from "react";
import PropTypes from "prop-types";
import "../../styles/textField.scss";

const TextField = ({
    placeholder,
    label,
    value,
    name,
    onChange,
    error,
    type,
    disabled
}) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };
    return (
        <div className="text-field">
            <label htmlFor="" className="text-field__label">
                {label}
            </label>
            <input
                className="text-field__input"
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                disabled={disabled}
                placeholder={placeholder}
            />
            {error && <div className="text-field__error">{error}</div>}
        </div>
    );
};
TextField.defaultProps = {
    disabled: false,
    type: "text"
};
TextField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};
export default TextField;
