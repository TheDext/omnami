import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthErrors, login } from "../../store/users";
import { validator } from "../../utils/validator";
import TextField from "../form/textField";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const authErrors = useSelector(getAuthErrors());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const redirect = () => {
        const path = "/profile";
        navigate(path);
    };

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

        dispatch(login({ payload: data, redirect }));
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
        <>
            {authErrors && <p className="auth-modal__error">Ошибка: {authErrors}</p>}
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
                    type="password"
                />
                <button
                    className="auth-modal__submit"
                    type="submit"
                    disabled={!isValid}
                >
                    Авторизоваться
                </button>
            </form>
        </>
    );
};

export default LoginForm;
