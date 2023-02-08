import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, value, name, onChange, error }) => {
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
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                autoComplete="off"
            />
            {error && <div className="text-field__error">{error}</div>}
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};
export default TextField;

// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const TextField = ({ label, type, name, value, onChange, error }) => {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleChange = ({ target }) => {
//         onChange({ name: target.name, value: target.value });
//     };
//     const getInputClasses = () => {
//         return "form-control" + (error ? " is-invalid" : "");
//     };
//     const toggleShowPassword = () => {
//         setShowPassword((prevState) => !prevState);
//     };
//     return (
//         <div>
//             <label htmlFor={name}>{label}</label>
//             <div>
//                 <input
//                     type={showPassword ? "text" : type}
//                     id={name}
//                     name={name}
//                     value={value}
//                     onChange={handleChange}
//                     className={getInputClasses()}
//                 />
//                 {type === "password" && (
//                     <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={toggleShowPassword}
//                     >
//                         <i
//                             className={
//                                 "bi bi-eye" + (showPassword ? "-slash" : "")
//                             }
//                         ></i>
//                     </button>
//                 )}
//                 {error && <div className="invalid-feedback">{error}</div>}
//             </div>
//         </div>
//     );
// };
// TextField.defaultProps = {
//     type: "text"
// };
// TextField.propTypes = {
//     label: PropTypes.string,
//     type: PropTypes.string,
//     name: PropTypes.string,
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//     error: PropTypes.string
// };

// export default TextField;
