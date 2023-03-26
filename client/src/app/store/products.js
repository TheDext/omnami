import { createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productEndpoint: "products/",
        error: null,
        entities: {},
        lastFetch: null
    },
    reducers: {
        productRequest: (state) => {
            state.isLoading = true;
        },
        productReceive: (state, action) => {
            const { category, content } = action.payload;
            const entities = state.entities;

            if (entities[category]) {
                for (const category in entities) {
                    if (category === [category]) {
                        return (entities.category = {
                            ...entities.category,
                            ...content
                        });
                    }
                }
            } else {
                entities[category] = content;
            }
            state.isLoading = false;
            state.lastFetch = Date.now();
        },
        productRequestFaied: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

const { reducer: productsReducer, actions } = productSlice;
const { productRequest, productReceive, productRequestFaied } = actions;

// const isExpired = (lastFetch) => {
//     if (Date.now() - lastFetch > 1 * 60 * 1000) return true;
//     return false;
// };

export const loadProductList = (category) => async (dispatch) => {
    dispatch(productRequest());
    try {
        const { content } = await productService.fetchAll(category);
        dispatch(productReceive({ category, content }));
    } catch (error) {
        dispatch(productRequestFaied(error.message));
    }
};

export const getProducts = (category) => (state) =>
    state.products.entities[category];

export const getProductById = (productId) => (state) => {
    const products = state.products.entities;
    for (const category in products) {
        for (const product of products[category]) {
            if (product._id === productId) {
                return product;
            }
        }
    }
};

export default productsReducer;
