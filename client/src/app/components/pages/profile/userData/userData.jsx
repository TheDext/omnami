import React, { useEffect, useState } from "react";
import "./userData.scss";
import PropTypes from "prop-types";
import { validator } from "../../../../utils/validator";
import {
    getCurrentUserData,
    getUsersLoadingStatus,
    updateUser
} from "../../../../store/users";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../../form/textField";
const UserData = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getUsersLoadingStatus());
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        tel: "",
        email: "",
        street: "",
        house: "",
        entrance: "",
        apartment: ""
    });
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
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        dispatch(updateUser(data));
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    function isChanged() {
        if (!isLoading) {
            const keys = Object.keys(data);
            let isChanged = false;

            for (const k of keys) {
                if (data[k].trim() !== userData[k].trim()) {
                    isChanged = true;
                    break;
                }
            }
            return isChanged;
        }
    }
    const userData = useSelector(getCurrentUserData());
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    useEffect(() => {
        if (!isLoading) {
            const newData = {};

            for (const k of Object.keys(data)) {
                newData[k] = userData[k];
            }
            setData(newData);
        }
    }, [isLoading]);
    return (
        <form
            onSubmit={handleSubmit}
            className="content-profile__form form-content-profile"
        >
            <div className="form-content-profile__title _small-title">
                Личные данные
            </div>
            {data && (
                <>
                    <div className="form-content-profile__inputs form-content-profile__inputs_personal-data">
                        <TextField
                            label="Ваше имя"
                            value={data.name}
                            name="name"
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Ваш телефон"
                            value={data.tel}
                            name="tel"
                            onChange={handleChange}
                        />
                        <TextField
                            label="Ваш email"
                            value={data.email}
                            name="email"
                            onChange={handleChange}
                            error={errors.email}
                        />
                    </div>
                    <div className="form-content-profile__title _small-title">
                        Адрес доставки
                    </div>
                    <div className="form-content-profile__inputs form-content-profile__inputs_address">
                        <div className="input-wrapper">
                            <TextField
                                label="Улица"
                                value={data.street}
                                name="street"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <TextField
                                label="Дом"
                                value={data.house}
                                name="house"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <TextField
                                label="Подъезд"
                                value={data.entrance}
                                name="entrance"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <TextField
                                label="Квартира"
                                value={data.apartment}
                                name="apartment"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </>
            )}
            <button
                disabled={!isValid || !isChanged()}
                className="form-content-profile__submit"
            >
                Сохранить
            </button>
        </form>
    );
};

UserData.propTypes = {
    data: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    isChanged: PropTypes.func,
    isValid: PropTypes.bool
};

export default UserData;
