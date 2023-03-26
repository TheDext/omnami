import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import commentsReducer from "./comments";
import orderReducer from "./orders";
import productsReducer from "./products";
import usersReducer from "./users";

const rootReducer = combineReducers({
    users: usersReducer,
    cart: cartReducer,
    orders: orderReducer,
    products: productsReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
