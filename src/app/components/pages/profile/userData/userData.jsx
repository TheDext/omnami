import React from "react";
import TextField from "../../../textField";
import "./userData.scss";
import PropTypes from "prop-types";

const UserData = ({ data, onChange, onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
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
                            onChange={onChange}
                        />
                        <TextField
                            label="Ваш телефон"
                            value={data.tel}
                            name="tel"
                            onChange={onChange}
                        />
                        <TextField
                            label="Ваш email"
                            value={data.email}
                            name="email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-content-profile__title _small-title">
                        Адрес доставки
                    </div>
                    <div className="form-content-profile__inputs form-content-profile__inputs_address">
                        <TextField
                            label="Улица"
                            value={data.street}
                            name="street"
                            onChange={onChange}
                        />
                        <TextField
                            label="Дом"
                            value={data.house}
                            name="house"
                            onChange={onChange}
                        />
                        <TextField
                            label="Подъезд"
                            value={data.entrance}
                            name="entrance"
                            onChange={onChange}
                        />
                        <TextField
                            label="Квартира"
                            value={data.apartment}
                            name="apartment"
                            onChange={onChange}
                        />
                    </div>
                </>
            )}
            <button className="form-content-profile__submit">Сохранить</button>
        </form>
    );
};

UserData.propTypes = {
    data: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

export default UserData;
