import { createSlice } from "@reduxjs/toolkit";
import productService, {
    setProductEndpoint
} from "../services/product.service";

const comboSlice = createSlice({
    name: "combo",
    initialState: {
        productEndpoint: "combo/",
        isLoading: false,
        error: null,
        entities: [],
        lastFetch: null
    },
    reducers: {
        comboRequest: (state) => {
            state.isLoading = true;
        },
        comboReceive: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        comboRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: comboReducer, actions } = comboSlice;
const { comboRequest, comboReceive, comboRequestFaied } = actions;

const isExpired = (lastFetch) => {
    if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
    return false;
};

export const loadComboList = () => async (dispatch, getState) => {
    if (isExpired(getState().combo.lastFetch)) {
        dispatch(comboRequest());
        try {
            setProductEndpoint(getState().combo.productEndpoint);
            const { content } = await productService.fetchAll();
            dispatch(comboReceive(content));
        } catch (error) {
            dispatch(comboRequestFaied(error.message));
        }
    }
};

export const getComboLoadStatus = () => (state) => state.combo.isLoading;
export const getCombo = () => (state) => state.combo.entities;

export default comboReducer;
