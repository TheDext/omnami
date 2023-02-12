import { createSlice } from "@reduxjs/toolkit";
import productService, {
    setProductEndpoint
} from "../services/product.service";

const snacksSlice = createSlice({
    name: "snacks",
    initialState: {
        productEndpoint: "snacks/",
        isLoading: false,
        error: null,
        entities: [],
        lastFetch: null
    },
    reducers: {
        snacksRequest: (state) => {
            state.isLoading = true;
        },
        snacksReceive: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        snacksRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: snacksReducer, actions } = snacksSlice;
const { snacksRequest, snacksReceive, snacksRequestFaied } = actions;

const isExpired = (lastFetch) => {
    if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
    return false;
};

export const loadSnacksList = () => async (dispatch, getState) => {
    if (isExpired(getState().snacks.lastFetch)) {
        dispatch(snacksRequest());
        try {
            setProductEndpoint(getState().snacks.productEndpoint);
            const { content } = await productService.fetchAll();
            dispatch(snacksReceive(content));
        } catch (error) {
            dispatch(snacksRequestFaied(error.message));
        }
    }
};

export default snacksReducer;
