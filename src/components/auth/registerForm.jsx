import React, { useEffect, useState } from "react";
import TextField from "../textField";
import { validator } from "../../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: ""
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
        console.log("Submit_Data", data);
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-modal__form">
            <TextField
                label="Как вас зовут?"
                name="name"
                value={data.name}
                error={errors.name}
                onChange={handleChange}
            />
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
            <button className="auth-modal__submit" type="submit" disabled={!isValid}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default LoginForm;
