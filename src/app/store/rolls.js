import { createSlice } from "@reduxjs/toolkit";
import productService, {
    setProductEndpoint
} from "../services/product.service";

const rollsSlice = createSlice({
    name: "rolls",
    initialState: {
        productEndpoint: "rolls/",
        isLoading: false,
        error: null,
        entities: [],
        lastFetch: null
    },
    reducers: {
        rollsRequest: (state) => {
            state.isLoading = true;
        },
        rollsReceive: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        rollsRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: rollsReducer, actions } = rollsSlice;
const { rollsRequest, rollsReceive, rollsRequestFaied } = actions;

const isExpired = (lastFetch) => {
    if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
    return false;
};

export const loadRollsList = () => async (dispatch, getState) => {
    if (isExpired(getState().rolls.lastFetch)) {
        dispatch(rollsRequest());
        try {
            setProductEndpoint(getState().rolls.productEndpoint);
            const { content } = await productService.fetchAll();
            dispatch(rollsReceive(content));
        } catch (error) {
            dispatch(rollsRequestFaied(error.message));
        }
    }
};

export const getRollsLoadStatus = () => (state) => state.rolls.isLoading;
export const getRolls = () => (state) => state.rolls.entities;

export default rollsReducer;
