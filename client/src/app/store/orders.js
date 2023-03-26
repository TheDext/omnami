import { createSlice } from "@reduxjs/toolkit";
import orderService from "../services/order.service";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        entities: JSON.parse(localStorage.getItem("orders")) || [],
        errors: null,
        isLoading: false
    },
    reducers: {
        orderLoad: (state) => {
            state.isLoading = true;
        },
        orderLoaded: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        orderLoadFailed: (state, action) => {
            state.errors = action.payload;
        },
        orderCreate: (state) => {
            state.isLoading = true;
        },
        orderCreateSuccess: (state, action) => {
            const orders = state.entities;
            orders.push(action.payload);
            state.entities = orders;
            state.isLoading = false;
        },
        orderCreateFailed: (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        },
        ordersListReset: (state) => {
            state.entities = [];
        }
    }
});

const { reducer: orderReducer, actions } = orderSlice;
const {
    orderLoad,
    orderLoaded,
    orderLoadFailed,
    orderCreate,
    orderCreateSuccess,
    orderCreateFailed,
    ordersListReset
} = actions;

export const submitOrder = (payload) => async (dispatch, getState) => {
    dispatch(orderCreate());
    try {
        const { content } = await orderService.create(payload);
        if (getState().users.isLoggedIn) {
            dispatch(orderCreateSuccess(content));
            localStorage.setItem(
                "orders",
                JSON.stringify(getState().orders.entities)
            );
        }
        return content;
    } catch (error) {
        dispatch(orderCreateFailed(error.message));
    }
};

export const loadOrdersByUserId = (userId) => async (dispatch, getState) => {
    orderLoad();
    try {
        if (
            !localStorage.getItem("orders") ||
            JSON.parse(localStorage.getItem("orders")).length !==
                getState().orders.entities.length
        ) {
            const { content } = await orderService.get(userId);
            dispatch(orderLoaded(content));
            if (Object.keys(content).length) {
                localStorage.setItem("orders", JSON.stringify(content));
            }
        }
    } catch (error) {
        dispatch(orderLoadFailed(error.message));
    }
};
export const resetOrdersList = () => (dispatch) => {
    dispatch(ordersListReset());
    localStorage.removeItem("orders");
};
export const getUserOrders = () => (state) => state.orders.entities;

export default orderReducer;
