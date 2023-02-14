import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: JSON.parse(localStorage.getItem("cart"))
    },
    reducers: {
        cartProductAdded: (state, { payload: product }) => {
            state.entities = product;
        },
        cartProductIncremented: (state, { payload: index }) => {
            const product = state.entities[index];
            product.count = product.count + 1;
        },
        cartProductDecremented: (state, { payload: index }) => {
            const product = state.entities[index];
            product.count = product.count - 1;
        },
        cartProductRemoved: (state, { payload: id }) => {
            state.entities = state.entities.filter(
                (product) => product.id !== id
            );
        }
    }
});

const { reducer: cartReducer, actions } = cartSlice;
const {
    cartProductAdded,
    cartProductIncremented,
    cartProductDecremented,
    cartProductRemoved
} = actions;

export const addToCart = (product) => (dispatch, getState) => {
    const cart = getState().cart.entities;

    if (!cart) {
        return dispatch(cartProductAdded([{ ...product, count: 1 }]));
    }

    for (const item of cart) {
        if (item.id === product.id) {
            return dispatch(cartProductIncremented(cart.indexOf(item)));
        }
    }

    dispatch(cartProductAdded([...cart, { ...product, count: 1 }]));
};
export const removeFromCart = (id) => (dispatch) => {
    return dispatch(cartProductRemoved(id));
};
export const decrementProductCounter =
    ({ id, count }) =>
    (dispatch, getState) => {
        const cart = getState().cart.entities;
        if (count > 1) {
            for (const item of cart) {
                if (item.id === id) {
                    return dispatch(cartProductDecremented(cart.indexOf(item)));
                }
            }
        }
        return dispatch(cartProductRemoved(id));
    };

export const getProductsCart = () => (state) => state.cart.entities;
export const getProductById = (id) => (state) => {
    const cart = state.cart.entities;
    return cart.find((product) => product.id === id);
};

export default cartReducer;
