import { createSlice } from "@reduxjs/toolkit";
import productService, {
    setProductEndpoint
} from "../services/product.service";

const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        productEndpoint: "pizza/",
        isLoading: false,
        error: null,
        entities: [],
        lastFetch: null
    },
    reducers: {
        pizzaRequest: (state) => {
            state.isLoading = true;
        },
        pizzaReceive: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        pizzaRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: pizzaReducer, actions } = pizzaSlice;
const { pizzaRequest, pizzaReceive, pizzaRequestFaied } = actions;

const isExpired = (lastFetch) => {
    if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
    return false;
};

export const loadPizzaList = () => async (dispatch, getState) => {
    if (isExpired(getState().pizza.lastFetch)) {
        dispatch(pizzaRequest());
        try {
            setProductEndpoint(getState().pizza.productEndpoint);
            const { content } = await productService.fetchAll();
            dispatch(pizzaReceive(content));
        } catch (error) {
            dispatch(pizzaRequestFaied(error.message));
        }
    }
};

export default pizzaReducer;
