import { createSlice } from "@reduxjs/toolkit";
import productService, {
    setProductEndpoint
} from "../services/product.service";

const setsSlice = createSlice({
    name: "sets",
    initialState: {
        productEndpoint: "sets/",
        isLoading: false,
        error: null,
        entities: [],
        lastFetch: null
    },
    reducers: {
        setsRequest: (state) => {
            state.isLoading = true;
        },
        setsReceive: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        setsRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: setsReducer, actions } = setsSlice;
const { setsRequest, setsReceive, setsRequestFaied } = actions;

const isExpired = (lastFetch) => {
    if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
    return false;
};

export const loadSetsList = () => async (dispatch, getState) => {
    if (isExpired(getState().sets.lastFetch)) {
        dispatch(setsRequest());
        try {
            setProductEndpoint(getState().sets.productEndpoint);
            const { content } = await productService.fetchAll();
            dispatch(setsReceive(content));
        } catch (error) {
            dispatch(setsRequestFaied(error.message));
        }
    }
};

export const getgetSetsLoadStatus = () => (state) => state.sets.isLoading;
export const getSets = () => (state) => state.sets.entities;

export default setsReducer;
