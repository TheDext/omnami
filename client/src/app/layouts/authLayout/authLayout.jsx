import React, { useState } from "react";
import { ReactComponent as CloseButton } from "../../icons/closeButton.svg";
import PropTypes from "prop-types";
import "./authLayout.scss";
import LoginForm from "../../components/auth/loginForm";
import RegisterForm from "../../components/auth/registerForm";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const AuthLayout = ({ isActive, setActive }) => {
    const isLogged = useSelector(getIsLoggedIn());
    const type = "login";
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    const setClassName =
        isActive && !isLogged ? `auth-modal _active` : "auth-modal";

    return (
        <div
            className={setClassName}
            onClick={() => setActive((prevState) => !prevState)}
        >
            <div
                className="auth-modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="auth-modal__close">
                    <CloseButton
                        onClick={() => setActive((prevState) => !prevState)}
                    />
                </div>
                <div className="auth-modal__body">
                    {formType === "login" ? (
                        <>
                            {" "}
                            <div className="auth-modal__title">
                                Вход на сайт
                            </div>
                            <LoginForm />
                        </>
                    ) : (
                        <>
                            <div className="auth-modal__title">Регистрация</div>
                            <RegisterForm />
                        </>
                    )}
                </div>
                <button
                    className="auth-modal__change-form"
                    type="button"
                    onClick={toggleFormType}
                >
                    {formType === "login"
                        ? "У меня нет учетной записи"
                        : "У меня уже есть учетная запись"}
                </button>
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    isActive: PropTypes.bool,
    setActive: PropTypes.func
};

export default AuthLayout;
