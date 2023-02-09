import React, { useEffect, useState } from "react";
import TextField from "../textField";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(login({ payload: data }));
        console.log("Submit_Data", data);
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-modal__form">
            <TextField
                label="Введите ваш Email"
                name="email"
                value={data.email}
                error={errors.email}
                onChange={handleChange}
            />
            <TextField
                label="Введите ваш пароль"
                name="password"
                value={data.password}
                error={errors.password}
                onChange={handleChange}
            />
            <button
                className="auth-modal__submit"
                type="submit"
                disabled={!isValid}
            >
                Авторизоваться
            </button>
        </form>
    );
};

export default LoginForm;
