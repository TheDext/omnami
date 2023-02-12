import React from "react";
import Counter from "../../../counter/counter";
import img from "../.././../../images/sliders/combo/01.png";
import { ReactComponent as RemoveIcon } from "../../../../images/icons/remove.svg";
import "./cartItem.scss";

const CartItem = () => {
    return (
        <div className="products-cart__item item-cart">
            <div className="item-cart__main">
                <div className="item-cart__img">
                    <img src={img} alt="" />
                </div>
                <div className="item-cart__info info-item-cart">
                    <div className="info-item-cart__name _small-title">
                        Комбо 3
                    </div>
                    <div className="info-item-cart__composition">
                        Пицца &quot;Хот-Дог&quot; 23 см, Хрумпилсы куриные,
                        Картофель по-деревенски, Кетчуп, Соус сырный
                    </div>
                </div>
            </div>
            <div className="item-cart__quantity">
                <Counter num={1} />
            </div>
            <div className="item-cart__sum">520</div>
            <RemoveIcon className="item-cart__remove" />
        </div>
    );
};

export default CartItem;
