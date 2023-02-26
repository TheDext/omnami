import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadOrdersByUserId, getUserOrders } from "../../../../../store/orders";
import img from "../../../../../images/sliders/combo/01.png";
import "./orders.scss";
import localStorageService from "../../../../../services/localStorage.service";
import displayDate from "../../../../../utils/displayDate";

const Orders = () => {
    const orders = useSelector(getUserOrders());
    const dispatch = useDispatch();
    const userId = localStorageService.getUserId();
    console.log("orders_component", orders);
    useEffect(() => {
        dispatch(loadOrdersByUserId(userId));
    }, []);
    return (
        <div className="orders">
            <div className="orders__body">
                <div className="orders__title _small-title">Мои заказы</div>
                {orders.map(({ createdAt, cart }) => (
                    <div key={createdAt} className="orders__order">
                        <div className="orders__date">
                            {displayDate(createdAt)}
                        </div>
                        <div className="orders__row">
                            {cart.map((item) => (
                                <div key={item.id} className="orders__column">
                                    <div className="orders__item item-orders">
                                        <div className="item-orders__img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="item-orders__body">
                                            <div className="item-orders__name _small-title">
                                                {item.name}
                                            </div>
                                            <div className="item-orders__counter">
                                                {item.count} шт
                                            </div>
                                            <div className="item-orders__price">
                                                {item.price} ₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* <div className="orders__order">
                    <div className="orders__date">20.06.2021</div>
                    <div className="orders__row">
                        <div className="orders__column">
                            <div className="orders__item item-orders">
                                <div className="item-orders__img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="item-orders__body">
                                    <div className="item-orders__name _small-title">
                                        Комбо 3
                                    </div>
                                    <div className="item-orders__counter">
                                        3 шт
                                    </div>
                                    <div className="item-orders__price">₽</div>
                                </div>
                            </div>
                        </div>
                        <div className="orders__column">
                            <div className="orders__item item-orders">
                                <div className="item-orders__img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="item-orders__body">
                                    <div className="item-orders__name _small-title">
                                        Комбо 3
                                    </div>
                                    <div className="item-orders__counter">
                                        3 шт
                                    </div>
                                    <div className="item-orders__price">₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

Orders.propTypes = {
    data: PropTypes.object
};

export default Orders;
